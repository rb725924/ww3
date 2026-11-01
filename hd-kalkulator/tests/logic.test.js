import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateChart } from 'hd-chart-engine';
import { analyze, CHANNELS, CENTER_GATES } from '../src/hd-logic.js';

test('64 kapije i 36 kanala, svaka kapija u tačno jednom centru', () => {
  const all = Object.values(CENTER_GATES).flat();
  assert.equal(all.length, 64);
  assert.equal(new Set(all).size, 64);
  assert.equal(CHANNELS.length, 36);
  for (const [a, b] of CHANNELS) assert.ok(all.includes(a) && all.includes(b));
});

test('Ra Uru Hu (9.4.1948. 00:14 Montreal): manifestor 5/1, slezinski, levi ugao 51/57|61/62', () => {
  const c = calculateChart({ date: '1948-04-09', time: '00:14', lat: 45.5017, lon: -73.5673, tz: 'America/Toronto' });
  const r = analyze(c.planets);
  assert.equal(r.type, 'manifestor');
  assert.equal(r.authority, 'splenic');
  assert.equal(r.profile, '5/1');
  assert.equal(r.crossAngle, 'left');
  assert.deepEqual(r.crossGates, [51, 57, 61, 62]);
});

// Sintetičke karte: sve planete na istim kapijama osim zadatih.
function synth(gates) {
  const keys = ['sun', 'earth', 'moon', 'north_node', 'south_node', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
  const planets = {};
  keys.forEach((k, i) => {
    const g = gates[i % gates.length];
    planets[k] = { p: { g, l: 1 }, d: { g, l: 3 } };
  });
  return planets;
}

test('reflektor: bez kanala', () => {
  const r = analyze(synth([1, 3, 5]));
  assert.equal(r.type, 'reflector');
  assert.equal(r.authority, 'lunar');
  assert.equal(r.definition, 'none');
});

test('generator: sakralni definisan, bez veze motora i grla', () => {
  const r = analyze(synth([3, 60]));
  assert.equal(r.type, 'generator');
  assert.equal(r.authority, 'sacral');
});

test('manifestujući generator: 20-34', () => {
  const r = analyze(synth([20, 34]));
  assert.equal(r.type, 'manifesting_generator');
});

test('projektor sa emocionalnim autoritetom: 19-49', () => {
  const r = analyze(synth([19, 49]));
  assert.equal(r.type, 'projector');
  assert.equal(r.authority, 'emotional');
});

test('manifestor sa ego autoritetom: 45-21', () => {
  const r = analyze(synth([45, 21]));
  assert.equal(r.type, 'manifestor');
  assert.equal(r.authority, 'ego_manifested');
});

test('projektor: samoprojektovani (8-1) i mentalni (64-47)', () => {
  assert.equal(analyze(synth([8, 1])).authority, 'self_projected');
  assert.equal(analyze(synth([64, 47])).authority, 'mental');
  assert.equal(analyze(synth([25, 51])).authority, 'ego_projected');
});

test('podeljena definicija', () => {
  const r = analyze(synth([64, 47, 3, 60]));
  assert.equal(r.definition, 'split');
});
