=== Amonra Human Design kalkulator ===
Requires at least: 6.3
Requires PHP: 7.4
Stable tag: 1.1.0
License: MIT

Besplatan Human Design kalkulator na srpskom: bodygraf, tip, strategija, autoritet, profil, definicija i inkarnacijski krst.

== Upotreba ==
Blok: u editoru klikni + i potraži „Human Design kalkulator“. Podešavanja su u bočnoj traci.

Kratki kod (klasične teme):

[hd_kalkulator]

Opcije:
[hd_kalkulator types_base="/human-design/" cta_url="https://amonra.in.rs/tvoje-pitanje/" cta_text="Želiš da zajedno pročitamo tvoju kartu?" cta_button="Zakaži razgovor" geocode="on"]

- types_base: adresa na kojoj su stranice o tipovima (/human-design/generator/ ...)
- cta_url: link dugmeta ispod rezultata (prazno = bez dugmeta)
- geocode: "off" isključuje pretragu mesta preko Open-Meteo (ostaje lista gradova iz regiona)

== Privatnost ==
Karta se računa u pregledaču posetioca. Datum i vreme rođenja ne šalju se na server.
Samo naziv mesta koji posetilac kuca šalje se servisu Open-Meteo (geocoding-api.open-meteo.com) radi pronalaženja koordinata i vremenske zone, osim ako je geocode="off".

== Licence ==
Računanje: hd-chart-engine (MIT), astronomy-engine (MIT), luxon (MIT).
Tačnost: kapija i linija su pouzdane; boja, ton i baza se ne prikazuju.

== Izmene ==
1.1.0 – Gutenberg blok „Human Design kalkulator“ sa podešavanjima u bočnoj traci (link, tekst, boja, pretraga mesta).
1.0.0 – Prva verzija (kratki kod).
