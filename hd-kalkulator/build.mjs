import { build } from 'esbuild';
import { copyFileSync } from 'node:fs';

const out = 'wp-plugin/amonra-hd-kalkulator/assets';
await build({
  entryPoints: ['src/app.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2019'],
  outfile: `${out}/hd-kalkulator.js`,
  legalComments: 'eof',
});
copyFileSync('src/hd-kalkulator.css', `${out}/hd-kalkulator.css`);
console.log('ok');
