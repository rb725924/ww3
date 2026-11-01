# Human Design kalkulator za amonra.in.rs

WordPress plugin koji na bilo koju stranicu dodaje besplatan Human Design kalkulator na srpskom.

**Šta prikazuje:** bodygraf (crtež karte), tip, strategiju, autoritet, profil, definiciju, potpis i temu „ne-sebe“, inkarnacijski krst (ugao i kapije), definisane centre i tabelu planeta i kapija. Ispod rezultata je link ka stranici o tipu (npr. `/human-design/projektor/`) i dugme ka tvojoj usluzi.

## Instalacija (5 minuta)

1. Preuzmi `wp-plugin/amonra-hd-kalkulator.zip`.
2. WordPress → **Dodaci → Dodaj novi → Otpremi dodatak** → izaberi zip → **Instaliraj** → **Aktiviraj**.
3. Otvori stranicu `/human-design/` u editoru, klikni **+** (Dodaj blok), potraži **„Human Design“** i izaberi blok **Human Design kalkulator**.
4. U bočnoj traci (ikonica zupčanika, kartica „Blok“) podesi:
   - **Poziv na akciju:** link dugmeta (npr. stranica „Tvoje pitanje“), tekst i natpis na dugmetu
   - **Podešavanja:** adresa stranica o tipovima, pretraga mesta preko interneta (uklj./isklj.), boja dugmeta
   - Poravnanje (široko / puna širina) i razmaci kao i za svaki drugi blok
5. Sačuvaj i otvori stranicu. U editoru se vidi samo pregled, a pravi kalkulator radi na objavljenoj stranici.

U fajlu `human-design-stranica/human-design.html` mesto za blok je obeleženo komentarom `OVDE UBACI BLOK`.

**Blok se može ubaciti i u šablone** (Izgled → Editor → Šabloni), na primer u poseban šablon za stranicu „Human Design“.

Ako ceo tekst stranice lepiš u **Code editor** (⋮ → Code editor), blok možeš upisati direktno:
```
<!-- wp:amonra/hd-kalkulator {"ctaUrl":"https://amonra.in.rs/ADRESA-TVOJE-PITANJE/","align":"wide"} /-->
```

### Kratki kod (za klasične teme i stare stranice)
I dalje radi `[hd_kalkulator cta_url="..."]`.

### Opcije kratkog koda
| Opcija | Podrazumevano | Značenje |
|---|---|---|
| `types_base` | `/human-design/` | Gde su stranice o tipovima |
| `cta_url` | prazno | Link dugmeta ispod rezultata. Ako je prazno, dugme se ne prikazuje |
| `cta_text` | „Želiš da zajedno pročitamo tvoju kartu?“ | Tekst pored dugmeta |
| `cta_button` | „Zakaži razgovor“ | Tekst na dugmetu |
| `geocode` | `on` | `off` = bez pretrage mesta na internetu, samo lista od ~45 gradova iz regiona |

### Boje
Glavna boja se menja u CSS-u teme (Izgled → Prilagodi → Dodatni CSS):
```css
.hd-kalkulator { --hdk-accent: #b07a2a; }
```

**Zahtev:** WordPress 6.3 ili noviji.

## Privatnost (GDPR)
- Karta se računa **u pregledaču posetioca**. Datum i vreme rođenja ne šalju se na tvoj ni na bilo čiji server.
- Samo **naziv mesta** koji posetilac kuca šalje se besplatnom servisu Open-Meteo (geocoding-api.open-meteo.com) radi koordinata i vremenske zone. Ako to ne želiš, koristi `geocode="off"`. Preporučujem da ovo navedeš u politici privatnosti.
- Plugin ne čuva podatke i ne postavlja kolačiće.

## Tačnost
- Računanje: biblioteka [hd-chart-engine](https://github.com/domalhambra/hd-chart-engine) (MIT licenca), bez Swiss Ephemeris-a. Kapija i linija su pouzdane, a to je sve što kalkulator prikazuje.
- Tip, autoritet, profil i definicija se izvode iz kanala. Logika je proverena testovima, uključujući kartu Ra Uru Hua (manifestor 5/1, slezinski autoritet, levi ugao 51/57 | 61/62), što se poklapa sa zvaničnim podacima.
- **Pre objave:** uporedi 3–5 poznatih karata (svoju, klijentske) sa kartom sa jovianarchive.com ili mybodygraph.com.
- Nazivi inkarnacijskih krstova se ne prikazuju, samo ugao i četiri kapije.
- Podržane su godine rođenja 1800–2200.

## Za programere
```bash
cd hd-kalkulator
npm install
npm test        # testovi logike i bloka (11)
npm run build   # pravi assets/hd-kalkulator.js i .css
cd wp-plugin && zip -r amonra-hd-kalkulator.zip amonra-hd-kalkulator
```
Demo bez WordPressa: `demo/index.html`.

| Fajl | Uloga |
|---|---|
| `src/hd-logic.js` | centri, 36 kanala, tip, autoritet, profil, definicija, krst |
| `src/bodygraph.js` | SVG crtež karte |
| `src/texts.js` | svi tekstovi na srpskom i lista gradova |
| `src/app.js` | forma, pretraga mesta, prikaz rezultata |
| `wp-plugin/amonra-hd-kalkulator/block/` | Gutenberg blok (`block.json`, `editor.js`, `render.php`) |
| `wp-plugin/amonra-hd-kalkulator/` | WordPress plugin (blok + kratki kod `[hd_kalkulator]`) |
