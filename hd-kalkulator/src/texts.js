// Tekstovi na srpskom za rezultate kalkulatora.

export const TYPES = {
  generator: {
    name: 'Generator',
    slug: 'generator',
    strategy: 'Čekaj da odgovoriš',
    signature: 'Zadovoljstvo',
    notSelf: 'Frustracija',
    short: 'Imaš definisan sakralni centar, stalan izvor životne i radne energije. Najbolje ti ide kad odgovaraš na ono što ti život donese, umesto da sve pokrećeš iz glave.',
  },
  manifesting_generator: {
    name: 'Manifestujući generator',
    slug: 'manifestujuci-generator',
    strategy: 'Čekaj da odgovoriš, pa obavesti',
    signature: 'Zadovoljstvo i mir',
    notSelf: 'Frustracija i ljutnja',
    short: 'Imaš energiju generatora i brzinu manifestora. Prirodno ti je da radiš više stvari odjednom i da preskačeš korake. Pre nego što kreneš, obavesti ljude kojih se to tiče.',
  },
  projector: {
    name: 'Projektor',
    slug: 'projektor',
    strategy: 'Čekaj poziv i prepoznavanje',
    signature: 'Uspeh',
    notSelf: 'Gorčina',
    short: 'Tvoj dar je da duboko vidiš ljude i sisteme. Za velike odluke (posao, ljubav, selidba) najbolje ti je da sačekaš da te neko prepozna i pozove.',
  },
  manifestor: {
    name: 'Manifestor',
    slug: 'manifestor',
    strategy: 'Obavesti pre nego što kreneš',
    signature: 'Mir',
    notSelf: 'Ljutnja',
    short: 'Jedini si tip koji može da pokrene stvari bez čekanja. Kad pre toga obavestiš ljude na koje će to uticati, nailaziš na mnogo manje otpora.',
  },
  reflector: {
    name: 'Reflektor',
    slug: 'reflektor',
    strategy: 'Sačekaj lunarni ciklus (~28 dana)',
    signature: 'Iznenađenje',
    notSelf: 'Razočaranje',
    short: 'Nijedan centar ti nije definisan. Odražavaš ljude i mesto oko sebe, kao ogledalo. Za velike odluke daj sebi oko mesec dana, a okruženje biraj pažljivo.',
  },
};

export const AUTHORITIES = {
  emotional: { name: 'Emocionalni (solarni pleksus)', short: 'Nema istine u trenutku. Pusti da emocionalni talas prođe i odluči kad osetiš mirnu jasnoću.' },
  sacral: { name: 'Sakralni', short: 'Odluka je telesno „da“ ili „ne“ u trenutku, pre nego što se um umeša.' },
  splenic: { name: 'Slezinski', short: 'Tih, brz instinkt koji se javlja samo jednom. Veruj prvom osećaju.' },
  ego_manifested: { name: 'Ego (manifestovani)', short: 'Slušaj šta govoriš kad pričaš o odluci: da li to zaista želiš i stojiš iza toga?' },
  ego_projected: { name: 'Ego (projektovani)', short: 'Odluka dolazi kroz pitanje „šta ja zaista želim“, kad razgovaraš sa nekim od poverenja.' },
  self_projected: { name: 'Samoprojektovani (G)', short: 'Jasnoća dolazi kroz sopstveni glas. Pričaj naglas sa nekim od poverenja i slušaj sebe.' },
  mental: { name: 'Mentalni / okolina', short: 'Nemaš unutrašnji autoritet u telu. Jasnoća dolazi kroz razgovor sa više ljudi i kroz pravo okruženje.' },
  lunar: { name: 'Lunarni', short: 'Jasnoća dolazi kroz vreme. Daj velikoj odluci oko 28 dana.' },
};

export const DEFINITIONS = {
  none: 'Bez definicije',
  single: 'Jednostruka',
  split: 'Podeljena',
  triple: 'Trostruka',
  quadruple: 'Četvorostruka',
};

export const ANGLES = {
  right: 'Desni ugao',
  juxtaposition: 'Jukstapozicija',
  left: 'Levi ugao',
};

export const PROFILE_LINES = {
  1: 'istraživač',
  2: 'pustinjak',
  3: 'eksperimentator',
  4: 'mrežar',
  5: 'rešavač',
  6: 'uzor',
};

export const CENTER_NAMES = {
  head: 'Glava',
  ajna: 'Ajna',
  throat: 'Grlo',
  g: 'G centar',
  heart: 'Srce (ego)',
  spleen: 'Slezina',
  solar: 'Solarni pleksus',
  sacral: 'Sakralni',
  root: 'Koren',
};

export const PLANET_NAMES = {
  sun: 'Sunce',
  earth: 'Zemlja',
  north_node: 'Severni čvor',
  south_node: 'Južni čvor',
  moon: 'Mesec',
  mercury: 'Merkur',
  venus: 'Venera',
  mars: 'Mars',
  jupiter: 'Jupiter',
  saturn: 'Saturn',
  uranus: 'Uran',
  neptune: 'Neptun',
  pluto: 'Pluton',
};

export const PLANET_SYMBOLS = {
  sun: '☉', earth: '⊕', north_node: '☊', south_node: '☋', moon: '☽',
  mercury: '☿', venus: '♀', mars: '♂', jupiter: '♃', saturn: '♄',
  uranus: '♅', neptune: '♆', pluto: '♇',
};

// Česta mesta rođenja (radi rada i bez interneta za pretragu mesta).
export const CITIES = [
  ['Beograd', 44.8125, 20.4612, 'Europe/Belgrade'],
  ['Novi Sad', 45.2671, 19.8335, 'Europe/Belgrade'],
  ['Niš', 43.3209, 21.8958, 'Europe/Belgrade'],
  ['Kragujevac', 44.0128, 20.9114, 'Europe/Belgrade'],
  ['Subotica', 46.1003, 19.6656, 'Europe/Belgrade'],
  ['Zrenjanin', 45.3816, 20.3906, 'Europe/Belgrade'],
  ['Pančevo', 44.8708, 20.6403, 'Europe/Belgrade'],
  ['Čačak', 43.8914, 20.3497, 'Europe/Belgrade'],
  ['Kraljevo', 43.7258, 20.6894, 'Europe/Belgrade'],
  ['Novi Pazar', 43.1367, 20.5122, 'Europe/Belgrade'],
  ['Smederevo', 44.6628, 20.9300, 'Europe/Belgrade'],
  ['Leskovac', 42.9981, 21.9461, 'Europe/Belgrade'],
  ['Valjevo', 44.2751, 19.8982, 'Europe/Belgrade'],
  ['Šabac', 44.7489, 19.6908, 'Europe/Belgrade'],
  ['Užice', 43.8586, 19.8488, 'Europe/Belgrade'],
  ['Vranje', 42.5514, 21.9003, 'Europe/Belgrade'],
  ['Sombor', 45.7742, 19.1122, 'Europe/Belgrade'],
  ['Kikinda', 45.8297, 20.4653, 'Europe/Belgrade'],
  ['Sremska Mitrovica', 44.9764, 19.6122, 'Europe/Belgrade'],
  ['Vršac', 45.1167, 21.3036, 'Europe/Belgrade'],
  ['Zaječar', 43.9042, 22.2847, 'Europe/Belgrade'],
  ['Pirot', 43.1531, 22.5861, 'Europe/Belgrade'],
  ['Kruševac', 43.5800, 21.3339, 'Europe/Belgrade'],
  ['Jagodina', 43.9772, 21.2612, 'Europe/Belgrade'],
  ['Senta', 45.9275, 20.0772, 'Europe/Belgrade'],
  ['Kanjiža', 46.0667, 20.0500, 'Europe/Belgrade'],
  ['Priština', 42.6629, 21.1655, 'Europe/Belgrade'],
  ['Zagreb', 45.8150, 15.9819, 'Europe/Zagreb'],
  ['Split', 43.5081, 16.4402, 'Europe/Zagreb'],
  ['Rijeka', 45.3271, 14.4422, 'Europe/Zagreb'],
  ['Osijek', 45.5550, 18.6955, 'Europe/Zagreb'],
  ['Sarajevo', 43.8563, 18.4131, 'Europe/Sarajevo'],
  ['Banja Luka', 44.7722, 17.1910, 'Europe/Sarajevo'],
  ['Tuzla', 44.5384, 18.6671, 'Europe/Sarajevo'],
  ['Mostar', 43.3438, 17.8078, 'Europe/Sarajevo'],
  ['Podgorica', 42.4304, 19.2594, 'Europe/Podgorica'],
  ['Nikšić', 42.7731, 18.9445, 'Europe/Podgorica'],
  ['Skoplje', 41.9981, 21.4254, 'Europe/Skopje'],
  ['Ljubljana', 46.0569, 14.5058, 'Europe/Ljubljana'],
  ['Budimpešta', 47.4979, 19.0402, 'Europe/Budapest'],
  ['Segedin', 46.2530, 20.1414, 'Europe/Budapest'],
  ['Temišvar', 45.7489, 21.2087, 'Europe/Bucharest'],
  ['Sofija', 42.6977, 23.3219, 'Europe/Sofia'],
  ['Beč', 48.2082, 16.3738, 'Europe/Vienna'],
];
