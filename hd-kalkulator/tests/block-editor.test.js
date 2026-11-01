import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const DIR = new URL('../wp-plugin/amonra-hd-kalkulator/block/', import.meta.url);

function loadEditor() {
  let registered = null;
  const h = (type, props, ...children) => ({ type, props: props || {}, children });
  const wp = {
    element: { createElement: h, Fragment: 'Fragment' },
    i18n: { __: (s) => s },
    blockEditor: { useBlockProps: (p) => ({ ...p, 'data-block': 'x' }), InspectorControls: 'InspectorControls' },
    components: {
      PanelBody: 'PanelBody', TextControl: 'TextControl', ToggleControl: 'ToggleControl',
      ColorPalette: 'ColorPalette', BaseControl: 'BaseControl',
    },
    blocks: { registerBlockType: (name, settings) => { registered = { name, settings }; } },
  };
  vm.runInNewContext(readFileSync(new URL('editor.js', DIR), 'utf8'), { window: { wp } });
  return registered;
}

const flat = (n, out = []) => {
  if (n && typeof n === 'object') { out.push(n); (n.children || []).forEach((c) => flat(c, out)); }
  return out;
};

test('block.json je ispravan i ime se poklapa sa editor.js', () => {
  const meta = JSON.parse(readFileSync(new URL('block.json', DIR), 'utf8'));
  const reg = loadEditor();
  assert.equal(reg.name, meta.name);
  assert.equal(meta.apiVersion, 3);
  assert.deepEqual(Object.keys(meta.attributes).sort(),
    ['accentColor', 'ctaButton', 'ctaText', 'ctaUrl', 'geocode', 'typesBase']);
  assert.equal(reg.settings.save(), null);
});

test('Edit se renderuje i kontrole menjaju atribute', () => {
  const { settings } = loadEditor();
  const changes = [];
  const attrs = { typesBase: '/human-design/', ctaUrl: '', ctaText: 'x', ctaButton: 'y', geocode: true, accentColor: '#b07a2a' };
  const tree = settings.edit({ attributes: attrs, setAttributes: (c) => changes.push(c) });
  const nodes = flat(tree);
  const controls = nodes.filter((n) => ['TextControl', 'ToggleControl', 'ColorPalette'].includes(n.type));
  assert.equal(controls.length, 6);
  controls.forEach((c) => c.props.onChange(c.type === 'ToggleControl' ? false : 'v'));
  assert.deepEqual(changes.map((c) => Object.keys(c)[0]).sort(),
    ['accentColor', 'ctaButton', 'ctaText', 'ctaUrl', 'geocode', 'typesBase']);
  const wrapper = nodes.find((n) => n.props && n.props['data-block']);
  assert.equal(wrapper.props.style['--hdk-accent'], '#b07a2a');
});
