// SVG bodygraf. Pojednostavljen, ali verni raspored centara i kanala.
import { CHANNELS, GATE_CENTER } from './hd-logic.js';

const W = 400;
const H = 640;

// Oblici centara (poligoni).
const SHAPES = {
  head: [[200, 15], [245, 85], [155, 85]],
  ajna: [[155, 110], [245, 110], [200, 180]],
  throat: [[170, 205], [230, 205], [230, 265], [170, 265]],
  g: [[200, 285], [245, 330], [200, 375], [155, 330]],
  heart: [[255, 382], [300, 355], [305, 405]],
  spleen: [[40, 400], [125, 455], [40, 510]],
  solar: [[360, 400], [360, 510], [275, 455]],
  sacral: [[165, 430], [235, 430], [235, 500], [165, 500]],
  root: [[165, 545], [235, 545], [235, 615], [165, 615]],
};

// Tačke kapija na ivicama centara.
const GATE_POS = {
  64: [170, 85], 61: [200, 85], 63: [230, 85],
  47: [170, 110], 24: [200, 110], 4: [230, 110],
  17: [182, 152], 43: [200, 178], 11: [218, 152],
  62: [182, 205], 23: [200, 205], 56: [218, 205],
  16: [170, 218], 20: [170, 248], 35: [230, 218], 12: [230, 234], 45: [230, 252],
  31: [185, 265], 8: [200, 265], 33: [215, 265],
  7: [186, 299], 1: [200, 287], 13: [214, 299], 10: [157, 330], 25: [243, 330],
  15: [186, 361], 2: [200, 373], 46: [214, 361],
  21: [282, 368], 51: [260, 379], 26: [272, 396], 40: [300, 392],
  48: [55, 409], 57: [76, 424], 44: [97, 437], 50: [115, 449],
  32: [106, 467], 28: [82, 482], 18: [57, 499],
  36: [345, 409], 22: [324, 424], 37: [304, 437], 6: [285, 449],
  49: [294, 467], 55: [318, 482], 30: [343, 499],
  5: [182, 430], 14: [200, 430], 29: [218, 430],
  34: [165, 448], 27: [165, 478], 59: [235, 462],
  42: [182, 500], 3: [200, 500], 9: [218, 500],
  53: [182, 545], 60: [200, 545], 52: [218, 545],
  54: [165, 562], 38: [165, 582], 58: [165, 602],
  19: [235, 562], 39: [235, 582], 41: [235, 602],
};

const COL = {
  p: '#2b2b2b',
  d: '#c0392b',
  off: '#e6e1da',
  centerOn: '#d8a24a',
  centerOff: '#ffffff',
  stroke: '#8a7f73',
};

function seg(x1, y1, x2, y2, color, dash, width = 6) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"${dash ? ' stroke-dasharray="4 4"' : ''}/>`;
}

function half(from, to, gate, pSet, dSet) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const p = pSet.has(gate);
  const d = dSet.has(gate);
  if (p && d) return seg(x1, y1, x2, y2, COL.d) + seg(x1, y1, x2, y2, COL.p, true);
  if (p) return seg(x1, y1, x2, y2, COL.p);
  if (d) return seg(x1, y1, x2, y2, COL.d);
  return seg(x1, y1, x2, y2, COL.off, false, 3);
}

/** @param {{defined:string[],pGates:number[],dGates:number[]}} a */
export function renderBodygraph(a) {
  const pSet = new Set(a.pGates);
  const dSet = new Set(a.dGates);
  const defined = new Set(a.defined);
  let out = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Human Design bodygraf">`;

  const isOn = (g) => pSet.has(g) || dSet.has(g);
  const ordered = [...CHANNELS].sort((x, y) => (isOn(x[0]) + isOn(x[1])) - (isOn(y[0]) + isOn(y[1])));
  for (const [ga, gb] of ordered) {
    const A = GATE_POS[ga];
    const B = GATE_POS[gb];
    const M = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
    out += half(A, M, ga, pSet, dSet);
    out += half(M, B, gb, pSet, dSet);
  }

  for (const [c, pts] of Object.entries(SHAPES)) {
    const fill = defined.has(c) ? COL.centerOn : COL.centerOff;
    out += `<polygon points="${pts.map((p) => p.join(',')).join(' ')}" fill="${fill}" stroke="${COL.stroke}" stroke-width="1.5" stroke-linejoin="round"/>`;
  }

  for (const [g, [x, y]] of Object.entries(GATE_POS)) {
    const gate = Number(g);
    const on = pSet.has(gate) || dSet.has(gate);
    const c = GATE_CENTER[gate];
    // pomeri broj ka unutrašnjosti centra
    const pts = SHAPES[c];
    const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length;
    const cy = pts.reduce((s, p) => s + p[1], 0) / pts.length;
    const k = 9 / Math.max(1, Math.hypot(cx - x, cy - y));
    const tx = x + (cx - x) * k;
    const ty = y + (cy - y) * k + 3;
    out += `<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" font-size="8" text-anchor="middle" font-family="sans-serif" fill="${on ? '#000' : '#9a9087'}" font-weight="${on ? '700' : '400'}">${gate}</text>`;
  }

  out += '</svg>';
  return out;
}
