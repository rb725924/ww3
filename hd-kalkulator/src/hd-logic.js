// Human Design izvođenje iz aktivacija: centri, kanali, tip, autoritet,
// profil, definicija i ugao inkarnacijskog krsta.
// hd-chart-engine vraća samo kapije/linije; ovo je sloj iznad njega.

export const CENTERS = [
  'head', 'ajna', 'throat', 'g', 'heart', 'spleen', 'solar', 'sacral', 'root',
];

export const MOTORS = ['heart', 'solar', 'sacral', 'root'];

export const CENTER_GATES = {
  head: [64, 61, 63],
  ajna: [47, 24, 4, 17, 43, 11],
  throat: [62, 23, 56, 35, 12, 45, 33, 8, 31, 20, 16],
  g: [1, 13, 25, 46, 2, 15, 10, 7],
  heart: [21, 40, 26, 51],
  sacral: [5, 14, 29, 59, 9, 3, 42, 27, 34],
  solar: [6, 37, 22, 36, 30, 55, 49],
  spleen: [48, 57, 44, 50, 32, 28, 18],
  root: [53, 60, 52, 19, 39, 41, 58, 38, 54],
};

// 36 kanala kao parovi kapija.
export const CHANNELS = [
  [64, 47], [61, 24], [63, 4],
  [17, 62], [43, 23], [11, 56],
  [16, 48], [20, 57], [20, 10], [20, 34],
  [31, 7], [8, 1], [33, 13],
  [45, 21], [35, 36], [12, 22],
  [10, 34], [10, 57], [25, 51],
  [15, 5], [2, 14], [46, 29],
  [26, 44], [40, 37],
  [34, 57], [27, 50], [59, 6],
  [3, 60], [42, 53], [9, 52],
  [32, 54], [28, 38], [18, 58],
  [19, 49], [39, 55], [41, 30],
];

export const GATE_CENTER = {};
for (const [c, gates] of Object.entries(CENTER_GATES)) {
  for (const g of gates) GATE_CENTER[g] = c;
}

export const PLANET_ORDER = [
  'sun', 'earth', 'north_node', 'south_node', 'moon', 'mercury', 'venus',
  'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto',
];

/**
 * @param {Record<string,{p:{g:number,l:number},d:{g:number,l:number}}>} planets
 */
export function analyze(planets) {
  const pGates = new Set();
  const dGates = new Set();
  for (const k of PLANET_ORDER) {
    pGates.add(planets[k].p.g);
    dGates.add(planets[k].d.g);
  }
  const active = new Set([...pGates, ...dGates]);

  const definedChannels = CHANNELS.filter(([a, b]) => active.has(a) && active.has(b));

  const defined = new Set();
  for (const [a, b] of definedChannels) {
    defined.add(GATE_CENTER[a]);
    defined.add(GATE_CENTER[b]);
  }

  // Povezane komponente definisanih centara.
  const adj = Object.fromEntries(CENTERS.map((c) => [c, new Set()]));
  for (const [a, b] of definedChannels) {
    const ca = GATE_CENTER[a];
    const cb = GATE_CENTER[b];
    adj[ca].add(cb);
    adj[cb].add(ca);
  }
  const compOf = {};
  let comps = 0;
  for (const c of CENTERS) {
    if (!defined.has(c) || compOf[c] !== undefined) continue;
    const stack = [c];
    compOf[c] = comps;
    while (stack.length) {
      const x = stack.pop();
      for (const y of adj[x]) {
        if (compOf[y] === undefined) {
          compOf[y] = comps;
          stack.push(y);
        }
      }
    }
    comps += 1;
  }
  const connected = (a, b) =>
    defined.has(a) && defined.has(b) && compOf[a] === compOf[b];

  const motorToThroat = MOTORS.some((m) => connected(m, 'throat'));
  const sacral = defined.has('sacral');

  let type;
  if (defined.size === 0) type = 'reflector';
  else if (sacral && motorToThroat) type = 'manifesting_generator';
  else if (sacral) type = 'generator';
  else if (motorToThroat) type = 'manifestor';
  else type = 'projector';

  let authority;
  if (type === 'reflector') authority = 'lunar';
  else if (defined.has('solar')) authority = 'emotional';
  else if (sacral) authority = 'sacral';
  else if (defined.has('spleen')) authority = 'splenic';
  else if (defined.has('heart')) {
    authority = connected('heart', 'throat') ? 'ego_manifested' : 'ego_projected';
  } else if (connected('g', 'throat')) authority = 'self_projected';
  else authority = 'mental';

  const profile = `${planets.sun.p.l}/${planets.sun.d.l}`;

  const definition = ['none', 'single', 'split', 'triple', 'quadruple'][comps] ?? 'quadruple';

  const RIGHT = ['1/3', '1/4', '2/4', '2/5', '3/5', '3/6', '4/6'];
  const crossAngle = RIGHT.includes(profile)
    ? 'right'
    : profile === '4/1'
      ? 'juxtaposition'
      : 'left';
  const crossGates = [
    planets.sun.p.g, planets.earth.p.g, planets.sun.d.g, planets.earth.d.g,
  ];

  return {
    type,
    authority,
    profile,
    definition,
    crossAngle,
    crossGates,
    defined: [...defined],
    definedChannels,
    pGates: [...pGates],
    dGates: [...dGates],
  };
}
