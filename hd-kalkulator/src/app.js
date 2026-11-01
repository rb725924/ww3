// Kalkulator: forma, pretraga mesta, prikaz rezultata.
import { calculateChart } from 'hd-chart-engine';
import { analyze, PLANET_ORDER } from './hd-logic.js';
import { renderBodygraph } from './bodygraph.js';
import {
  TYPES, AUTHORITIES, DEFINITIONS, ANGLES, PROFILE_LINES, CENTER_NAMES,
  PLANET_NAMES, PLANET_SYMBOLS, CITIES,
} from './texts.js';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[c]));

const norm = (s) => s.toLowerCase()
  .normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/đ/g, 'dj');

const FORM = `
<form class="hdk-form" novalidate>
  <div class="hdk-row">
    <label>Ime (nije obavezno)
      <input type="text" name="name" autocomplete="given-name" maxlength="60">
    </label>
  </div>
  <div class="hdk-row hdk-2">
    <label>Datum rođenja
      <input type="date" name="date" required min="1800-01-01" max="2200-12-31">
    </label>
    <label>Vreme rođenja
      <input type="time" name="time" required step="60">
    </label>
  </div>
  <div class="hdk-row hdk-place">
    <label>Mesto rođenja
      <input type="text" name="place" required autocomplete="off" placeholder="npr. Beograd" aria-autocomplete="list">
    </label>
    <ul class="hdk-suggest" role="listbox" hidden></ul>
  </div>
  <p class="hdk-hint">Vreme prepiši iz izvoda iz matične knjige rođenih ako možeš. Desetak minuta razlike ume da promeni deo karte.</p>
  <button type="submit" class="hdk-btn">Izračunaj kartu</button>
  <p class="hdk-error" role="alert" hidden></p>
  <p class="hdk-privacy">Karta se računa u tvom pregledaču. Datum i vreme rođenja ne šalju se nikome.</p>
</form>
<div class="hdk-result" aria-live="polite"></div>`;

export function mount(root) {
  const cfg = {
    base: root.dataset.typesBase || '/human-design/',
    ctaUrl: root.dataset.ctaUrl || '',
    ctaText: root.dataset.ctaText || 'Želiš da zajedno pročitamo tvoju kartu?',
    ctaButton: root.dataset.ctaButton || 'Zakaži razgovor',
    geocode: root.dataset.geocode !== 'off',
  };
  root.innerHTML = FORM;
  const form = root.querySelector('form');
  const placeInput = form.elements.place;
  const list = root.querySelector('.hdk-suggest');
  const err = root.querySelector('.hdk-error');
  const result = root.querySelector('.hdk-result');
  let chosen = null;
  let timer = null;
  let seq = 0;

  const showSuggestions = (items) => {
    if (!items.length) { list.hidden = true; list.innerHTML = ''; return; }
    list.innerHTML = items.map((it, i) => `<li role="option" data-i="${i}" tabindex="-1">${esc(it.label)}</li>`).join('');
    list.hidden = false;
    list.querySelectorAll('li').forEach((li) => {
      li.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const it = items[Number(li.dataset.i)];
        chosen = it;
        placeInput.value = it.label;
        list.hidden = true;
      });
    });
  };

  const localMatches = (q) => {
    const nq = norm(q);
    return CITIES.filter(([n]) => norm(n).startsWith(nq))
      .slice(0, 6)
      .map(([n, lat, lon, tz]) => ({ label: n, lat, lon, tz }));
  };

  const remoteMatches = async (q) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=6&language=sr&format=json`;
    const r = await fetch(url);
    if (!r.ok) return [];
    const j = await r.json();
    return (j.results || []).filter((x) => x.timezone).map((x) => ({
      label: [x.name, x.admin1, x.country].filter(Boolean).join(', '),
      lat: x.latitude, lon: x.longitude, tz: x.timezone,
    }));
  };

  placeInput.addEventListener('input', () => {
    chosen = null;
    const q = placeInput.value.trim();
    clearTimeout(timer);
    if (q.length < 2) { showSuggestions([]); return; }
    const local = localMatches(q);
    showSuggestions(local);
    if (!cfg.geocode || q.length < 3) return;
    const my = ++seq;
    timer = setTimeout(async () => {
      try {
        const remote = await remoteMatches(q);
        if (my !== seq) return;
        const seen = new Set(local.map((x) => norm(x.label)));
        showSuggestions([...local, ...remote.filter((x) => !seen.has(norm(x.label.split(',')[0])))].slice(0, 8));
      } catch { /* bez mreže: ostaju lokalni predlozi */ }
    }, 300);
  });
  placeInput.addEventListener('blur', () => setTimeout(() => { list.hidden = true; }, 150));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    err.hidden = true;
    const date = form.elements.date.value;
    const time = form.elements.time.value.slice(0, 5);
    const name = form.elements.name.value.trim();
    if (!chosen) {
      const exact = CITIES.find(([n]) => norm(n) === norm(placeInput.value.trim()));
      if (exact) chosen = { label: exact[0], lat: exact[1], lon: exact[2], tz: exact[3] };
    }
    if (!date || !time) return fail('Unesi datum i vreme rođenja.');
    if (!chosen) return fail('Izaberi mesto rođenja sa liste predloga.');
    let chart;
    try {
      chart = calculateChart({ date, time, lat: chosen.lat, lon: chosen.lon, tz: chosen.tz });
    } catch (ex) {
      return fail('Kartu nije moguće izračunati za ove podatke. Proveri datum (podržane su godine 1800–2200) i vreme.');
    }
    const a = analyze(chart.planets);
    result.innerHTML = renderResult({ name, date, time, place: chosen.label, chart, a, cfg });
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    root.dispatchEvent(new CustomEvent('hdk:result', {
      bubbles: true,
      detail: { type: a.type, authority: a.authority, profile: a.profile },
    }));
  });

  function fail(msg) {
    err.textContent = msg;
    err.hidden = false;
  }
}

function renderResult({ name, date, time, place, chart, a, cfg }) {
  const t = TYPES[a.type];
  const au = AUTHORITIES[a.authority];
  const [l1, l2] = a.profile.split('/');
  const [dY, dM, dD] = date.split('-');
  const typeUrl = `${cfg.base.replace(/\/?$/, '/')}${t.slug}/`;
  const planetsRows = PLANET_ORDER.map((k) => {
    const p = chart.planets[k].p;
    const d = chart.planets[k].d;
    return `<tr><td class="hdk-d">${d.g}.${d.l}</td><td class="hdk-pl"><span aria-hidden="true">${PLANET_SYMBOLS[k]}</span> ${PLANET_NAMES[k]}</td><td class="hdk-p">${p.g}.${p.l}</td></tr>`;
  }).join('');
  const definedList = a.defined.length
    ? a.defined.map((c) => CENTER_NAMES[c]).join(', ')
    : 'nijedan';
  const warn = chart.warnings.length
    ? '<p class="hdk-warn">Pažnja: uneto vreme pada u period promene letnjeg/zimskog računanja vremena, pa jedan sat može da bude sporan. Proveri vreme rođenja.</p>'
    : '';

  return `
<div class="hdk-card">
  <h3 class="hdk-title">${name ? esc(name) + ': ' : ''}${t.name}</h3>
  <p class="hdk-meta">${Number(dD)}. ${Number(dM)}. ${dY}. u ${esc(time)} · ${esc(place)}</p>
  ${warn}
  <p class="hdk-lead">${t.short}</p>
  <div class="hdk-grid">
    <div class="hdk-graph">${renderBodygraph(a)}
      <p class="hdk-legend"><span class="hdk-sw hdk-sw-p"></span> svesno (Personality) <span class="hdk-sw hdk-sw-d"></span> nesvesno (Design)</p>
    </div>
    <dl class="hdk-facts">
      <dt>Tip</dt><dd><a href="${esc(typeUrl)}">${t.name}</a></dd>
      <dt>Strategija</dt><dd>${t.strategy}</dd>
      <dt>Autoritet</dt><dd>${au.name}<small>${au.short}</small></dd>
      <dt>Profil</dt><dd>${a.profile} (${PROFILE_LINES[l1]} / ${PROFILE_LINES[l2]})</dd>
      <dt>Definicija</dt><dd>${DEFINITIONS[a.definition]}</dd>
      <dt>Potpis</dt><dd>${t.signature}</dd>
      <dt>Tema „ne-sebe“</dt><dd>${t.notSelf}</dd>
      <dt>Inkarnacijski krst</dt><dd>${ANGLES[a.crossAngle]} ${a.crossGates[0]}/${a.crossGates[1]} | ${a.crossGates[2]}/${a.crossGates[3]}</dd>
      <dt>Definisani centri</dt><dd>${definedList}</dd>
    </dl>
  </div>
  <details class="hdk-planets">
    <summary>Planete i kapije</summary>
    <table><thead><tr><th class="hdk-d">Design</th><th></th><th class="hdk-p">Personality</th></tr></thead><tbody>${planetsRows}</tbody></table>
  </details>
  <p class="hdk-next">Pročitaj više o svom tipu: <a href="${esc(typeUrl)}">${t.name} u Human Designu</a>.</p>
  ${cfg.ctaUrl ? `<div class="hdk-cta"><p>${esc(cfg.ctaText)}</p><a class="hdk-btn" href="${esc(cfg.ctaUrl)}">${esc(cfg.ctaButton)}</a></div>` : ''}
  <p class="hdk-note">Human Design je alat za samorefleksiju i nije naučno potvrđen. Rezultat je informativan i ne zamenjuje stručni savet.</p>
</div>`;
}

function boot() {
  document.querySelectorAll('.hd-kalkulator').forEach((el) => {
    if (!el.dataset.hdkMounted) {
      el.dataset.hdkMounted = '1';
      mount(el);
    }
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
