# SEO podaci za stranicu amonra.in.rs/human-design/

Tekst stranice: `human-design.html` (~3.000 reči, zajedno sa tabelama i rečnikom)

## Osnovno
- **URL (slug):** `/human-design/`
- **Title tag (55 zn.):** Human Design (human dizajn): kompletan vodič na srpskom
- **Meta opis / excerpt (152 zn.):** Šta je Human Design i kako da pročitaš svoju kartu? Tipovi, strategija, autoritet, centri i profili objašnjeni jednostavno, na srpskom. Izračunaj kartu.
- **H1:** Human Design: vodič kroz tvoju kartu (human dizajn na srpskom)

## Ključne reči
- **Primarna:** human design
- **Sekundarne / long-tail:**
  1. human dizajn (+ ljudski dizajn)
  2. šta je human design
  3. human design karta / izračunaj human design kartu
  4. human design tipovi (generator, projektor, manifestator, reflektor)
  5. human design autoritet i profil

## Slike (naziv fajla → ALT)
| Fajl | ALT |
|---|---|
| `human-design-karta-bodygraf-primer.webp` | Primer Human Design karte (bodygraf) sa 9 centara, kanalima i kapijama |
| `human-design-i-astrologija-razlike.webp` | Poređenje Human Design karte i astrološke natalne karte |
| `human-design-5-tipova-infografika.webp` | Infografika 5 tipova u Human Designu: generator, manifestatorski generator, projektor, manifestator i reflektor |
| `human-design-autoritet-donosenje-odluka.webp` | Prikaz sedam unutrašnjih autoriteta u Human Designu za donošenje odluka |
| `human-design-9-centara-definisani-otvoreni.webp` | Devet centara u Human Design karti, definisani obojeni i otvoreni beli |
| `human-design-profili-12-kombinacija.webp` | Tabela 12 profila u Human Designu, od 1/3 do 6/3 |
| `ramona-gabor-human-design-astrologija.webp` | Ramona Gabor, astrološkinja i Human Design savetnica |

WebP, širina 1200 px (fotografija autorke 400 px). Prva slika se učitava odmah, a ostale imaju `loading="lazy"`.

## Tagovi
Human Design · human dizajn · samospoznaja · energetski tipovi · Human Design karta · lični razvoj · astrologija · donošenje odluka

## Pre objave: zameni oznake {{...}}
- Kalkulator: na mestu oznake `OVDE UBACI BLOK` dodaj blok „Human Design kalkulator“ (plugin `hd-kalkulator/wp-plugin/amonra-hd-kalkulator.zip`)
- `{{URL}}`: putanja do slika u Media Library
- `{{URL_SAKRALNI_CENTAR}}`, `{{URL_EMOCIONALNI_CENTAR}}`: postojeći blog tekstovi
- `{{URL_TVOJE_PITANJE}}`, `{{URL_SEDAM_NEDELJA}}`, `{{URL_BESPLATAN_RAZGOVOR}}`: stranice usluga
- `{{LINK: … – detaljno}}`: buduće stranice o tipovima. Dok ne postoje, obriši te redove
- `{{DOPUNA}}` u bloku o autorki: lično iskustvo, sertifikat, godina početka (E-E-A-T)

## Za proveru
- **Rod čitaoca:** tekst se obraća ženskom rodu („sama“, „sigurna“), kao da su čitateljke većina. Ako želiš neutralno ili muško obraćanje, javi.
- **Prvo lice** („Ja ga koristim…“, „pisala sam“) piše se kao Ramona. Proveri da li ti ton odgovara.
- **Spoljni linkovi** u „Izvorima“ imaju `rel="nofollow noopener noreferrer" target="_blank"`.

## Schema (JSON-LD), u `<head>` ili preko SEO plugina
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Human Design: vodič kroz tvoju kartu (human dizajn na srpskom)",
      "description": "Šta je Human Design i kako da pročitaš svoju kartu? Tipovi, strategija, autoritet, centri i profili objašnjeni jednostavno, na srpskom.",
      "inLanguage": "sr-Latn-RS",
      "mainEntityOfPage": "https://amonra.in.rs/human-design/",
      "author": {"@type": "Person", "name": "Ramona Gabor", "url": "https://amonra.in.rs/"},
      "publisher": {"@type": "Organization", "name": "Amonra", "url": "https://amonra.in.rs/"},
      "datePublished": "{{DATUM}}",
      "dateModified": "{{DATUM}}",
      "image": "https://amonra.in.rs/{{URL}}/human-design-karta-bodygraf-primer.webp"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Početna", "item": "https://amonra.in.rs/"},
        {"@type": "ListItem", "position": 2, "name": "Human Design", "item": "https://amonra.in.rs/human-design/"}
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Šta je Human Design ukratko?",
         "acceptedAnswer": {"@type": "Answer", "text": "Human Design je sistem samospoznaje koji iz datuma, vremena i mesta rođenja pravi kartu tvoje energije. Iz nje se čitaju tip, strategija, autoritet, centri i profil. Najčešće se koristi kao pomoć pri donošenju odluka i u razumevanju sebe i odnosa."}},
        {"@type": "Question", "name": "Kako da saznam svoj Human Design tip?",
         "acceptedAnswer": {"@type": "Answer", "text": "Unesi datum, tačno vreme i mesto rođenja u kalkulator. Tip je obično napisan odmah pored karte. Tačno vreme je važno, jer ponekad i mala razlika menja tip ili autoritet."}},
        {"@type": "Question", "name": "Šta ako ne znam tačno vreme rođenja?",
         "acceptedAnswer": {"@type": "Answer", "text": "Izračunaj nekoliko karti za različite delove dana i uporedi tip, autoritet i profil. Ako su isti, možeš ih istraživati bez brige. Ako se razlikuju, posmatraj sebe nekoliko nedelja ili razmisli o rektifikaciji vremena rođenja."}},
        {"@type": "Question", "name": "Koja je razlika između Human Designa i astrologije?",
         "acceptedAnswer": {"@type": "Answer", "text": "Oba sistema polaze od trenutka rođenja, ali Human Design koristi i trenutak oko 88 dana pre rođenja, a umesto znakova i kuća čita centre, kanale i kapije. Astrologija se više bavi temama i tajmingom, a Human Design time kako trošiš energiju i donosiš odluke."}},
        {"@type": "Question", "name": "Da li je Human Design naučno dokazan?",
         "acceptedAnswer": {"@type": "Answer", "text": "Nije. Ne postoje naučna istraživanja koja ga potvrđuju. Najkorisnije ga je posmatrati kao alat za samorefleksiju i lični eksperiment, a ne kao dijagnozu ili zamenu za stručnu pomoć."}}
      ]
    }
  ]
}
</script>
```
