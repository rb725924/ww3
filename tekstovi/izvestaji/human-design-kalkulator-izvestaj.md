# Izveštaj: Human Design kalkulator (amonra.in.rs/human-design-kalkulator/)

- **Run:** 20261103-073650-human-design-kalkulator-tekst-za-stranic
- **Datum:** 2026-11-03
- **Fajl za objavu:** /home/user/ww3/tekstovi/human-design-kalkulator.md
- **Status:** ODOBRENO (8,5/10, ocena A-), publication_status CLEAR (fix ledger: 0 otvorenih, 0 vraćenih)

---

## A. Ocena kvaliteta (Phase 7)

| Dimenzija | Težina | Ocena | Minimum | Status |
|-----------|--------|-------|---------|--------|
| Kvalitet sadržaja | 30% | 8,2 | 6,0 | OK |
| Integritet citata | 25% | 8,0 | 7,0 | OK |
| Usklađenost sa brendom | 20% | 9,4 | 7,0 | OK |
| SEO | 15% | 8,4 | 6,0 | OK |
| Čitljivost | 10% | 8,6 | 6,0 | OK |
| **Ukupno** | | **8,5** (8,46) | 7,0 | **ODOBRENO**, A- |

- Kritični prekršaji: 0 halucinacija, 0 zabranjenih tvrdnji, 0 nedostajućih napomena, 0 mrtvih linkova.
- Provera linkova (Phase 7, curl, browser UA): 8/8 internih i 6/6 eksternih HTTP 200.
- Stalna pravila: Ukratko 5 stavki, FAQ 4, Izvori postoje, 12/12 eksternih linkova sa `rel="nofollow noopener noreferrer" target="_blank"`, 0 garancija, obraćanje „ti“ rodno neutralno.
- Integritet citata je zadržan na 8,0: Gate 1 je bio uslovni prolaz na zahtev korisnika (vidi C), nekoliko ključnih tvrdnji počiva na jednom primarnom izvoru, a 2 od 6 izvora su istog izdavača (Jovian Archive).
- Advisory (AI-detektabilnost): tier 1 LOW, tier 2 NOTE (entity_development).

**Opcione preporuke recenzenta (nisu primenjene u tekstu):**
1. U koraku 4 dodati jednu rečenicu da mesta širom sveta dolaze sa liste predloga (Open-Meteo) i da se letnje vreme računa za to mesto.
2. Peto FAQ pitanje: „Mogu li da izračunam kartu za partnera ili dete?“ (da, isti unos, ništa se ne čuva). Ako se doda, mora da se doda i u FAQPage JSON-LD.
3. Tema za kasnije: vodič za suženje nepoznatog vremena rođenja.

## B. SEO scorecard (Phase 6; ekvivalent Dodatka A)

**Ukupno: 90/100**

| Komponenta | Ocena |
|-----------|-------|
| Ključne reči i raspored | 18/20 |
| On-page (naslovi, struktura) | 18/20 |
| Meta tagovi | 15/15 |
| Interno linkovanje | 13/15 |
| GEO | 16/20 |
| Šema | 10/10 |

| Element | Vrednost |
|---------|----------|
| Glavna ključna reč | human design kalkulator: 8 tačnih pojavljivanja (0,58%, savetodavno; padeži na srpskom), u H1, prvih 100 reči, 2 H2 + 1 u padežu, zaključku |
| Meta title | Human Design kalkulator: besplatna karta \| Ramona Gabor (55 znakova) |
| Meta description | 153 znaka (cilj 140–160) |
| H1 | Human Design kalkulator: izračunaj svoju kartu besplatno, na srpskom (68 znakova) |
| Sekundarne | human design karta, izračunaj human design kartu, koji sam tip human design, human dizajn kalkulator, human design besplatno; pomoćni pojam bodygraf |
| Šema | WebPage + WebApplication + BreadcrumbList + Person (preporučeno), FAQPage (opciono; Google od avgusta 2023. ne prikazuje FAQ rich results za ovaj tip sajta) |
| GEO | 8/10; 4 citabilna momenta, 6 strukturisanih elemenata, 5 vremenskih oznaka |

## C. Detalji produkcije

| Faza | Trajanje | Petlje |
|------|----------|--------|
| 0.5 Izbor naslova | N/A | 0 |
| 1 Istraživanje | 40 min | 0 |
| 2 Provera činjenica | 6 min | 0 |
| 3 Nacrt | 3 min | 0 |
| 3.5 Vizuali | 2 min | 0 |
| 4 Validacija | 3 min | 0 |
| 5 Struktura i lektura | 3 min | 0 |
| 6 SEO/GEO | 4 min | 0 |
| 6.5 Humanizacija | 2 min | 0 |
| 7 Recenzija | 2 min | 0 |
| 8 Izlaz (Markdown) | ~5 min | 0 |
| **Ukupno** | **~70 min** (07:36–08:5x UTC) | **0** |

- **Gate 1, uslovni prolaz na zahtev korisnika (USER-OVERRIDE).** Gate 1 je brojčano pao (2 od 5 pouzdanih izvora proverenih uživo) jer je mreža sesije blokirala izvore; to je bio problem okruženja, ne sadržaja. Korisnik je izabrao da nastavi („opcija 3“) pod uslovom da svaka tvrdnja koja nije proverena uživo bude uklonjena ili preformulisana. Uslov je ispunjen: Phase 2 je uživo proverila Zakon o matičnim knjigama (čl. 45 i 81), obe stranice Jovian Archive, Vreme, IANA i Astronomy Engine; Wikipedia (proxy 403) je uklonjena iz citata, a tvrdnja o naučnom statusu je preformulisana kao stav sajta.
- Fix ledger: 1 stavka (MIN-1, korak 5 imenuje dugme „Izračunaj kartu“), primenjena i očuvana.
- Format: Markdown umesto .docx, po odluci korisnika (2026-11-03).
- Izmene u Phase 8 (samo prikaz, tekst nije menjan): uklonjena dva reda pipeline metapodataka i `---` ispod autorskog reda; autorski red je „Autorka: Ramona Gabor, Human Design i astrološka savetnica“; tri VISUAL markera su namerno pretvorena u `<!-- SLIKA: fajl — ALT: ... -->` komentare jer slike još ne postoje; `<!-- KALKULATOR -->` ostaje.
- Napomena o upotrebi AI: na kraj članka je dodata rečenica „Tekst je nastao uz pomoć veštačke inteligencije, a pre objave je pregledan i uređen.“ (podrazumevano pravilo brenda `claude-surfaces`, prevod standardne formulacije na srpski). Ako želiš drugačiju formulaciju ili ime autorke u njoj, postavi `ai_disclosure.text` / `author` u brand profilu.
- Broj reči: telo članka oko 1.200–1.280 bez Izvora (cilj 1.200); text-metrics na celom fajlu broji i SEO paket i JSON-LD.

## D. Mapa internih linkova

| # | Tip | Anchor | URL | Sekcija |
|---|-----|--------|-----|---------|
| 1 | topical | generator | https://amonra.in.rs/human-design/generator/ | Šta ti kalkulator pokazuje |
| 2 | topical | manifestatorski generator | https://amonra.in.rs/human-design/manifestatorski-generator/ | isto |
| 3 | topical | projektor | https://amonra.in.rs/human-design/projektor/ | isto |
| 4 | topical | manifestator | https://amonra.in.rs/human-design/manifestator/ | isto |
| 5 | topical | reflektor | https://amonra.in.rs/human-design/reflektor/ | isto |
| 6 | topical (pillar) | vodiču kroz Human Design | https://amonra.in.rs/human-design/ | isto |
| 7 | commercial | Tvoje pitanje | https://amonra.in.rs/tvoje-pitanje/ | zaključak |
| 8 | conversion | besplatan uvodni razgovor | https://amonra.in.rs/zakazi-razgovor/ | zaključak |

Svi linkovi su već u tekstu; 8 je gornja granica iz brand profila. Svi topical linkovi su u jednoj sekciji, gde im je prirodno mesto. Ako tema prikazuje autorski blok, neka ime „Ramona Gabor“ vodi na /o-meni/.

## E. Šta treba popraviti na sajtu (van teksta)

1. **H1.** Živa stranica nema `<h1>`. Tema treba da ispiše naslov „Human Design kalkulator: izračunaj svoju kartu besplatno, na srpskom“ kao jedini H1 (najlakše: postavi taj naslov stranice u WordPressu). U bloku kalkulatora ne dodavati drugi H1.
2. **Dugme „Zakaži razgovor“ se ne vidi.** Blok kalkulatora ima prazan `data-cta-url=""`, pa se CTA posle rezultata ne prikazuje. Upiši `https://amonra.in.rs/zakazi-razgovor/` u podešavanje bloka.
3. **Meta description ne postoji.** Unesi onu iz SEO paketa (153 znaka), i meta title (55 znakova).
4. **robots.txt i sitemap vraćaju 403** za ne-browser user agente (verovatno WAF/zaštita hostinga). Proveri u Google Search Console (Pokrivenost / Sitemaps, URL Inspection) da Googlebot nije blokiran.
5. **Slike.** Napravi 3 slike iz SEO paketa (WebP, ispod 150 KB, tačni ALT) i og:image 1200×630, pa otkomentariši og:image/twitter:image tagove.
6. **Šema.** Ukloni stari FAQPage JSON-LD (stara pitanja koja više nisu u tekstu) i postavi novi blok s kraja fajla za objavu; proveri u Rich Results Test.
7. **Open-Meteo uslovi.** Besplatni nivo Open-Meteo API-ja je namenjen nekomercijalnoj upotrebi. Sajt prodaje usluge, pa proveri uslove korišćenja i po potrebi pređi na plaćeni plan ili drugi servis za geokodiranje.
8. **Politika privatnosti.** Dopuni /politika-privatnosti/ o kalkulatoru: datum i vreme ostaju u pregledaču i ne čuvaju se; naziv mesta koji se kuca šalje se servisu Open-Meteo radi predloga mesta.
