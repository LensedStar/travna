// Slovenian UI dictionary — same key set as ./en.ts, enforced by the UIDict type below, so a
// missing or renamed key is a build error. Translated from translations/en.json (see translations/sl.json).
//
// Do NOT hardcode visible strings in components — always read them through the helpers in './index.ts'.
// Section comments mirror en.ts line for line so the two dictionaries diff cleanly.

import type { UIDict } from './types';

export const sl: UIDict = {
  // --- Global / brand ---
  'site.name': 'Planinski dom na Travni gori', // brand — not localized
  'site.tagline': 'Slogan prijetne planinske hiše',

  // --- Accessibility / chrome ---
  'a11y.skipToContent': 'Preskoči na vsebino',
  'a11y.openMenu': 'Odpri meni',
  'a11y.closeMenu': 'Zapri meni',
  'a11y.mapTitle': 'Zemljevid do doma: Planinski dom na Travni gori',
  'a11y.primaryNav': 'Glavna navigacija',
  'a11y.footerNav': 'Navigacija v nogi strani',

  // --- Header / navigation ---
  'nav.home': 'Domov',
  'nav.accommodation': 'Apartmaji',
  'nav.activities': 'Aktivnosti',
  'nav.menu': 'Jedilnik',
  'nav.contact': 'Kontakt',
  'nav.book': 'Rezerviraj',

  // --- Language switcher (live: EN + SL + RU) ---
  'lang.en': 'EN',
  'lang.label': 'Izberite jezik',
  'lang.sl': 'SI',
  'lang.ru': 'RU',

  // --- Generic buttons / CTAs ---
  'cta.checkAvailability': 'Preverite razpoložljivost',
  'cta.exploreArea': 'Raziščite okolico',
  'cta.bookNow': 'Rezervirajte zdaj',
  'cta.viewAccommodation': 'Oglejte si apartmaje',
  'cta.viewActivities': 'Odkrijte aktivnosti',
  'cta.viewMenu': 'Oglejte si jedilnik',
  'cta.contactUs': 'Kontaktirajte nas',

  // --- Home: hero ---
  'home.hero.title': 'Planinski dom na Travni gori',
  'home.hero.subtitle': 'Kjer čas teče počasneje',
  // TODO: replace with client-approved copy — atmospheric draft, makes no factual claims.
  'home.hero.intro': 'Topel les, tiha jutra in gozdni zrak — planinska hiša, ustvarjena za počasne dni, dolge večere ob ognju in skoraj prazen urnik.',
  'home.hero.ratingsLabel': 'Ocene gostov',
  'home.hero.bookingLabel': 'Booking.com',
  'home.hero.bookingScale': 'od 10',
  'home.hero.airbnbLabel': 'Airbnb',
  'home.hero.airbnbScale': 'od 5',

  // --- Home: value props section ---
  'home.valueProps.title': 'Zakaj k nam',

  // --- Home: accommodation preview ---
  'home.accommodation.title': 'Vaše prijetno planinsko zatočišče',
  'home.accommodation.text': 'En kratek odstavek, ki napove nastanitev.',

  // --- Home: activities preview ---
  'home.activities.title': 'Raziščite okolico',
  'home.activities.text': 'Kratek uvod v aktivnosti v bližini.',

  // --- Home: welcome / the house (first section after the hero) ---
  'home.welcome.title': 'Prijetni apartmaji v osrčju gozda',
  'home.welcome.lead':
    'Pustite mesto za sabo in poiščite mir na Travni gori, visoki gozdnati planoti nad Ribniško dolino. Med drevesi se odpirajo travniki, gozd sega vse do vašega apartmaja, zrak pa še vedno diši po gozdu, ne po prometu. Pridite, da se upočasnite, globoko zadihate in raziščete miren kotiček Slovenije, ki ga odkrije le malo popotnikov.',
  'home.welcome.imageAlt': 'Planinski dom na Travni gori — hiša, obdana z gozdom', // MOCK — real photo alt
  'home.welcome.pill.apartments': 'Prijetni apartmaji', // MOCK
  'home.welcome.pill.kitchen': 'Domača kuhinja', // MOCK
  'home.welcome.pill.forest': 'Gozd pred vrati', // MOCK
  'home.welcome.pill.pets': 'Hišni ljubljenčki dobrodošli', // MOCK

  // --- Home: heritage timeline (one-family historic house) ---
  // TODO: replace with real dates & history copy from client
  'home.heritage.eyebrow': 'Naša zgodba', // MOCK
  'home.heritage.title': 'Ena hiša, mnogo generacij', // MOCK
  'home.heritage.intro':
    'Preživite dopust v hiši, ki že skoraj 100 let sprejema popotnike in raziskovalce — seveda s sodobnim udobjem v sobah.',
  'home.heritage.m1.era': '1927',
  'home.heritage.m1.title': 'Koča na gori', // TODO: confirm the opening year with the client (a local source dates the dom to 1958)
  'home.heritage.m1.body':
    'Leta 1927 je hiša odprla vrata kot planinski dom — kraj, kjer so se pohodniki in popotniki ustavili, da so se odpočili, najedli in ogreli po dnevu na poteh.',
  'home.heritage.m1.alt': 'Arhivska fotografija hiše v prvih letih, s konjem in vozom pred vhodom',
  'home.heritage.m2.era': '19—', // TODO: confirm real year
  'home.heritage.m2.title': 'Dolge mize, polna hiša', // MOCK
  'home.heritage.m2.body':
    'Lorem ipsum dolor sit amet — zbirališče, kjer so se sosedje in popotniki ustavljali za dolgimi mizami na prostem.', // MOCK
  'home.heritage.m2.alt': 'Arhivska fotografija množice, zbrane za mizami na prostem pred hišo',
  'home.heritage.m3.era': '1969',
  'home.heritage.m3.title': 'Smučarska leta',
  'home.heritage.m3.body':
    'Do konca šestdesetih let so pobočja pod hišo postala majhno smučišče z vlečnico in lesenimi bungalovi — pozimi so na goro za ves dan prihajale cele družine.',
  'home.heritage.m3.alt': 'Stara razglednica Travne gore: smučarji na pobočju pod hišo in lesen bungalov',
  'home.heritage.m4.era': '2026',
  'home.heritage.m4.title': 'Hiša danes',
  'home.heritage.m4.body':
    'Skoraj stoletje pozneje ista hiša še vedno stoji — skrbno obnovljena, s sodobnim udobjem in pripravljena, da vas sprejme na bivanje, ki ga ne boste pozabili.',
  'home.heritage.m4.alt': 'Sodobna barvna fotografija hiše, kakršna je danes',

  // --- Home: apartments showcase (icon-tabbed photo slider) ---
  // TODO: replace with real apartment copy, bullets & photos from client
  'home.apartments.eyebrow': 'Apartmaji', // MOCK
  'home.apartments.title': 'Prijetni prostori za počasne dni', // MOCK
  'home.apartments.intro':
    'Tople sobe z značajem globoko na slovenskem podeželju — naokrog gozd, na mizi pa domača hrana.', // MOCK
  'home.apartments.hint': 'Izberite ikono in raziščite posamezno', // MOCK — shown as an on-image hint, not in the subheader
  'home.apartments.rooms.title': 'Sobe za vsako bivanje',
  'home.apartments.rooms.text':
    'Sveže, prijetne sobe za skupine vseh velikosti — topla dobrodošlica čaka velike družine, pare in tiste, ki potujejo sami.',
  'home.apartments.rooms.tab': 'Sobe', // MOCK — short label for the icon tab
  'home.apartments.rooms.b1':
    'Rezervirajte celo hišo samo zase — zaseben vhod, lastna kuhinja, za 1–6 oseb.',
  'home.apartments.rooms.b2': 'Ali samo sobo — prijetne možnosti za 1–4 goste.',
  'home.apartments.rooms.b3': 'Sprostite se v savni na drva — zasebno z družino in prijatelji ali skupaj z drugimi gosti.',
  'home.apartments.rooms.alt': 'Toplo osvetljena notranjost apartmaja z lesenim pohištvom', // MOCK — replace with real photo
  'home.apartments.slovenia.title': 'Srce Slovenije',
  'home.apartments.slovenia.text':
    'Odlična lega blizu nekaterih najbolj znanih znamenitosti Slovenije — med njimi sta Ljubljana in kraške jame, jezera, gozdovi in gradovi pa so oddaljeni približno uro vožnje.',
  'home.apartments.slovenia.tab': 'Slovenija', // MOCK — short label for the icon tab
  'home.apartments.slovenia.b1': 'Približno ura vožnje do večine glavnih znamenitosti',
  'home.apartments.slovenia.b2': 'Blizu Ljubljane in slovitih kraških jam — Postojnske in Križne jame',
  // TODO(Webline): confirm before launch — the nearby Krokar & Rajhenavski Rog beech primeval
  // forests are UNESCO-listed; naming them explicitly is an option once the client approves.
  'home.apartments.slovenia.b3': 'Na robu nekaterih najstarejših in najbolje ohranjenih gozdov v Evropi',
  'home.apartments.slovenia.alt': 'Maketa: pogled na hišo od zunaj, obdano s slovenskim podeželjem', // MOCK — replace with real photo
  'home.apartments.nature.title': 'Za ljubitelje narave',
  'home.apartments.nature.text':
    'Zbudite se ob enem najlepših gozdov v Evropi, zaspite ob ptičjem petju, in če boste imeli srečo, vas bodo prišle pozdravit srne.',
  'home.apartments.nature.tab': 'Narava', // MOCK — short label for the icon tab
  'home.apartments.nature.b1': 'Dihajte čist zrak in se končno odklopite od vsakdanje rutine',
  'home.apartments.nature.b2': 'Odkrijte, zakaj Slovenijo imenujejo zeleni dragulj Evrope',
  'home.apartments.nature.b3': 'Na vodenem ogledu opazujte divje medvede v njihovem naravnem okolju',
  'home.apartments.nature.alt': 'Gozd in travnik okoli planinske hiše', // MOCK — replace with real photo
  'home.apartments.food.title': 'Domača kuhinja',
  'home.apartments.food.text':
    'Uživajte v klasičnih domačih jedeh, pripravljenih na tradicionalni slovenski način — izdatnih, okusnih jedeh, skuhanih z ljubeznijo.',
  'home.apartments.food.tab': 'Hrana', // MOCK — short label for the icon tab
  'home.apartments.food.b1': 'Tradicionalni recepti, skuhani z ljubeznijo',
  'home.apartments.food.b2': 'Izdatne jedi iz lokalnih, sezonskih sestavin',
  'home.apartments.food.b3': 'Zajtrk na željo',
  'home.apartments.food.alt': 'Rustikalna miza z domačo hrano', // MOCK — replace with real photo

  // --- Home: editorial gallery block ---
  'home.gallery.eyebrow': 'Od blizu', // MOCK
  'home.gallery.title': 'Vzdušje hiše, znotraj in zunaj', // MOCK
  'home.gallery.intro':
    'Majhna galerija tihih podrobnosti: topli kotički, večerna svetloba, gozdni robovi in počasni zajtrki na prostem.', // MOCK
  'home.gallery.card.1': 'Topla dobrodošlica',
  'home.gallery.card.2': 'Mavrica nad hišo',
  'home.gallery.card.3': 'Razgled s terase',
  'home.gallery.card.4': 'Gozdna tišina',
  'home.gallery.card.5': 'Zimske gorske ceste',
  'home.gallery.card.6': 'Večeri ob ognju',
  'home.gallery.card.7': 'Svež gorski zrak', // MOCK
  'home.gallery.card.8': 'Večerja za dolgo mizo', // MOCK
  'home.gallery.open': 'Odpri sliko', // MOCK
  'home.gallery.close': 'Zapri sliko', // MOCK
  'home.gallery.outro.title': 'Rezervirajte več kot le apartma', // MOCK
  'home.gallery.outro.text': 'Pridite zaradi mirnih sob, ostanite zaradi počasnejših juter, večerij za dolgo mizo in občutka, da imate kraj, kjer lahko izdihnete.', // MOCK
  'home.gallery.outro.cta': 'Rezervirajte bivanje', // MOCK

  // --- Home: finding us (editorial map + scenic-route story) ---
  'home.findUs.eyebrow': 'Kako do nas', // MOCK
  'home.findUs.title': 'Kje smo in kako pridete do nas', // MOCK
  'home.findUs.intro':
    'Skriti smo na Travni gori na Notranjskem — dovolj blizu, da nas zlahka dosežete, in dovolj daleč, da se počutite kot v drugem svetu.', // MOCK
  'home.findUs.mapTitle': 'Zemljevid z lokacijo: Planinski dom na Travni gori', // a11y — iframe title
  // Floating map label
  'home.findUs.pin.name': 'Planinski dom na Travni gori',
  'home.findUs.pin.address': 'Travna Gora 42, 1317 Sodražica, Slovenija',
  'home.findUs.pin.link': 'Odpri v Google Zemljevidih',
  // Compact travel facts (beside the map)
  'home.findUs.fact.time': '17 min od Sodražice',
  'home.findUs.fact.road': 'Gozdna cesta',
  'home.findUs.fact.parking': 'Brezplačno parkirišče pri hiši',
  'home.findUs.fact.winter': 'Ob snegu priporočamo zimske pnevmatike',
  // Directions action
  'home.findUs.cta': 'Navodila za pot',
  // Road-tip (centered icon + title + subtitle, with the route map beneath)
  'home.findUs.tip.title': 'Lažja pot na goro', // MOCK
  'home.findUs.tip.text': 'Ne gre za prihranek minut, temveč za bolj sproščeno vožnjo. Izberite označeno pot skozi Sodražico: vse do vrha je široka in dobro vzdrževana. Cesta bolj južno je ožja in poteka ob robu strmega prepada, zato jo raje prepustite domačinom.',
  'home.findUs.tip.alt': 'Zemljevid lažje, dobro vzdrževane poti do doma: Planinski dom na Travni gori', // MOCK — replace with final route map
  'home.findUs.tip.zoom': 'Povečaj zemljevid poti',
  'home.findUs.tip.close': 'Zapri povečan zemljevid poti',

  // --- Home: book-direct value strip ---
  'home.bookDirect.title': 'Rezervirajte neposredno',
  'home.bookDirect.intro':
    'Ko rezervirate neposredno pri nas, dobite najboljšo izkušnjo po najboljši ceni — z osebno pozornostjo na vsakem koraku.', // MOCK — review claims before launch
  'home.bookDirect.benefit1Title': 'Takojšnja potrditev',
  'home.bookDirect.benefit1Desc': 'Vaše bivanje je potrjeno takoj — hitro in brez zapletov.',
  'home.bookDirect.benefit2Title': 'Najboljša cena',
  'home.bookDirect.benefit2Desc': 'Ob neposredni rezervaciji pri nas vam zagotavljamo najboljšo ceno.', // MOCK — best-price claim, confirm with client
  'home.bookDirect.benefit3Title': 'Neposredna komunikacija',
  'home.bookDirect.benefit3Desc': 'Pogovarjajte se s pravimi ljudmi, ki jim je mar in so tu, da vam pomagajo.',

  // --- Accommodation page ---
  'accommodation.title': 'Apartmaji',
  'accommodation.description': 'Topel, atmosferičen opis hiše.',
  'accommodation.amenities.title': 'Kaj vas čaka',
  'accommodation.amenities.wifi': 'Wi-Fi',
  'accommodation.amenities.parking': 'Parkirišče',
  'accommodation.amenities.kitchen': 'Kuhinja',
  'accommodation.amenities.fireplace': 'Kamin',
  'accommodation.amenities.heating': 'Ogrevanje',
  'accommodation.amenities.terrace': 'Terasa',
  'accommodation.cta': 'Preverite razpoložljivost',
  'accommodation.slider.label': 'Fotogalerija',
  'accommodation.slider.prev': 'Prejšnja fotografija',
  'accommodation.slider.next': 'Naslednja fotografija',

  // --- Accommodation page: hero / intro ---
  'accommodation.hero.eyebrow': 'Hiša', // MOCK
  'accommodation.hero.title': 'Prijetni apartmaji s pogledom na pravo slovensko naravo', // MOCK
  'accommodation.hero.lead':
    'Visoko na planoti Travna gora stoji naša hiša tik ob robu gozda, kjer je zrak hladen, megla pa se vsako jutro počasi spušča nad drevesa. Dva prijetna apartmaja, ogreta z lesom in tišino, sta namenjena gostom, ki pridejo, da se upočasnijo.',
  'accommodation.hero.body':
    'Cesta se vije skozi gozd, nato pa se odpre na planoto, z brezplačnim parkiriščem tik pred vrati. S terase se razgled razteza čez krošnje proti dolini — pravi kraj za kavo ob zori ali kozarec vina, ko se priplazi megla.',
  'accommodation.hero.imageAlt': 'Planinska hiša na Travni gori, obdana z gozdom', // MOCK — replace with real photo
  'accommodation.hero.badge.title': 'Narava', // MOCK
  'accommodation.hero.badge.sub': 'vsenaokrog', // MOCK
  'accommodation.hero.fact.location': 'Travna gora, Notranjska', // MOCK
  'accommodation.hero.fact.locationLabel': 'Kje smo',
  'accommodation.hero.fact.altitude': '≈ 900 m nadmorske višine', // MOCK — confirm real altitude
  'accommodation.hero.fact.altitudeLabel': 'Nadmorska višina',
  'accommodation.hero.fact.access': 'Brezplačno parkiranje pred vrati', // MOCK
  'accommodation.hero.fact.accessLabel': 'Dostop',
  // Quick amenity pills under the intro copy.
  'accommodation.hero.pill.pets': 'Hišni ljubljenčki dobrodošli', // MOCK
  'accommodation.hero.pill.breakfast': 'Zajtrk', // MOCK
  'accommodation.hero.pill.parking': 'Brezplačno parkiranje', // MOCK
  'accommodation.hero.pill.wifi': 'Brezplačen Wi-Fi', // MOCK

  // --- Accommodation page: bonuses / why book (MOCK) ---
  'accommodation.bonuses.eyebrow': 'Dobro je vedeti', // MOCK
  'accommodation.bonuses.title': 'Malenkosti, ki naredijo bivanje', // MOCK
  'accommodation.bonuses.intro':
    'Lorem ipsum dolor sit amet — kratka vrstica o dodatkih, ki so del vsakega bivanja.', // MOCK
  'accommodation.bonuses.b1.title': 'Hišni ljubljenčki dobrodošli', // MOCK
  'accommodation.bonuses.b1.text': 'Lorem ipsum — vaši štirinožni prijatelji so tu dobrodošli.', // MOCK
  'accommodation.bonuses.b2.title': 'Brezplačno parkiranje', // MOCK
  'accommodation.bonuses.b2.text': 'Lorem ipsum — parkirajte tik pred vrati, brezplačno.', // MOCK
  'accommodation.bonuses.b3.title': 'Hiter Wi-Fi', // MOCK
  'accommodation.bonuses.b3.text': 'Lorem ipsum — ostanite povezani, kadar želite.', // MOCK
  'accommodation.bonuses.b4.title': 'Savna na drva', // MOCK
  'accommodation.bonuses.b4.text': '', // intentionally unused in the compact card layout
  'accommodation.bonuses.b5.title': 'Gozd pred vrati', // MOCK
  'accommodation.bonuses.b5.text': 'Lorem ipsum — izhodišča poti le nekaj korakov od terase.', // MOCK
  'accommodation.bonuses.b6.title': 'Domač zajtrk', // MOCK
  'accommodation.bonuses.b6.text': 'Lorem ipsum — izdaten začetek dneva, na željo.', // MOCK
  'accommodation.bonuses.score.value': '8.8',
  'accommodation.bonuses.score.scale': 'od 10',
  'accommodation.bonuses.score.label': 'Ocena na Booking.com', // MOCK — confirm live score
  'accommodation.bonuses.score.logoAlt': 'Booking.com',

  // --- Accommodation page: units — houses + rooms (MOCK) ---
  'accommodation.units.eyebrow': 'Kje boste bivali', // MOCK
  'accommodation.units.title': 'Hiše in sobe', // MOCK
  'accommodation.units.intro':
    'Lorem ipsum dolor sit amet — izberite celo hišo samo zase ali prijetno sobo v glavni stavbi.', // MOCK
  // Houses group. Names, capacities and the room list are the client's own description (2026-10-08):
  // two mobile houses — no. 1 for 6 guests (three rooms, kitchen, two WCs, shower, terrace) and
  // no. 3, "house three", for 5 guests; there is no number 2 — plus the sauna, which in summer is
  // let as a mobile house for 2. The client said nothing more about house 3, so the rest of its copy
  // describes only what the client's photos show — TODO(Webline): confirm with the client.
  // Translated from the EN wording — TODO(Webline): native read.
  'accommodation.units.houses.title': 'Mobilne hiške',
  'accommodation.units.houses.text':
    'Dve mobilni hiški, vsaka samo za vas — Mobilna hiška 1 za največ šest gostov in Mobilna hiška 3 za največ pet. Poleti oddajamo tudi savno kot mobilno hiško za dva.',
  'accommodation.units.house1.name': 'Mobilna hiška 1',
  'accommodation.units.house1.text': 'Večja od obeh: tri sobe, kuhinja, dva WC-ja, tuš in terasa — prostora je za največ šest gostov.',
  'accommodation.units.house1.capacity': 'Do 6 oseb',
  'accommodation.units.house1.size': '3 sobe · kuhinja · terasa',
  'accommodation.units.house1.tag.sleeps': 'Do 6 oseb',
  'accommodation.units.house1.tag.rooms': '3 sobe',
  'accommodation.units.house1.tag.kitchen': 'Kuhinja',
  'accommodation.units.house1.tag.bathroom': '2 WC-ja · tuš',
  'accommodation.units.house1.tag.terrace': 'Terasa',
  'accommodation.units.house1.alt1': 'Mobilna hiška 1 s travnika: obložena z lesom, na robu gozda',
  'accommodation.units.house1.alt2': 'Pokrita lesena terasa Mobilne hiške 1 z mizo in stoli ter pogledom na travnik in gozd',
  'accommodation.units.house1.alt3': 'Dnevni prostor Mobilne hiške 1 z jedilno mizo, televizorjem in steklenimi vrati na teraso',
  'accommodation.units.house1.alt4': 'Kuhinja Mobilne hiške 1 s kuhalno ploščo, pečico, mikrovalovno pečico in hladilnikom',
  'accommodation.units.house1.alt5': 'Kuhinja Mobilne hiške 1 v svetlem lesu, pogled iz dnevnega prostora',
  'accommodation.units.house3.name': 'Mobilna hiška 3',
  'accommodation.units.house3.text': 'Svetla mobilna hiška za največ pet gostov — s kuhinjo, sedežno garnituro, dvema galerijama pod streho, kopalnico s tušem in teraso.', // capacity: client; the rest: from the photos
  'accommodation.units.house3.capacity': 'Do 5 oseb',
  'accommodation.units.house3.size': 'Kuhinja · kopalnica · terasa', // from the photos
  'accommodation.units.house3.tag.sleeps': 'Do 5 oseb',
  'accommodation.units.house3.tag.kitchen': 'Kuhinja', // from the photos
  'accommodation.units.house3.tag.bathroom': 'Kopalnica s tušem', // from the photos
  'accommodation.units.house3.tag.terrace': 'Terasa', // from the photos
  'accommodation.units.house3.alt1': 'Notranjost Mobilne hiške 3: kuhinja ob steni, jedilna miza, sedežna garnitura in galerija na koncu prostora',
  'accommodation.units.house3.alt2': 'Sedežna garnitura v Mobilni hiški 3 pod galerijo, do katere vodi lesena lestev',
  'accommodation.units.house3.alt3': 'Jedilna miza, kuhinja in stopnice na drugo galerijo v Mobilni hiški 3',
  'accommodation.units.house3.alt4': 'Jedilna miza ob vratih na teraso v Mobilni hiški 3, v ospredju lestev na galerijo',
  'accommodation.units.house3.alt5': 'Kuhinja Mobilne hiške 3 s stopnicami na galerijo in vrati v kopalnico v ozadju',
  'accommodation.units.house3.alt6': 'Kopalnica Mobilne hiške 3 z umivalnikom, okroglim ogledalom in straniščem',
  'accommodation.units.house3.alt7': 'Steklena tuš kabina in umivalnik v kopalnici Mobilne hiške 3',
  'accommodation.units.house3.alt8': 'Lesena terasa Mobilne hiške 3 z mizo in stoli v gorski megli',
  'accommodation.units.house3.alt9': 'Lesena terasa Mobilne hiške 3, pogled skozi zaveso steklenih vrat',
  // Rooms group — one showcase entry per room, picked with the room selector. Room numbers and guest
  // counts are the client's list (2026-10-08): 1 (also called 101) – 2, 2 – 5, 3 – 4, 4 – 5, 5 – 3,
  // 7 – 4, 9 – 6, 10 – 6, 11 – 3; the list itself lives in AccommodationUnits.astro. The client gave
  // no description per room, so the feature pills name only what that room's photos show —
  // TODO(Webline): confirm with the client. New strings translated from EN — native read needed.
  'accommodation.units.rooms.title': 'Sobe v glavni hiši', // MOCK
  'accommodation.units.rooms.text':
    'Tople, z lesom obložene sobe pod ostrešjem glavne hiše — klasičen planinski slog, sveže in čisto, vsaka z lastno kopalnico in pogledom na gozd ali dolino.',
  'accommodation.units.rooms.choose': 'Izberite sobo', // label above the room selector
  'accommodation.units.rooms.name': 'Soba {n}', // {n} = the room number
  'accommodation.units.rooms.capacity': 'Do {n} oseb', // {n} = number of guests
  'accommodation.units.rooms.tag.bathroom': 'Lastna kopalnica', // from the photos
  'accommodation.units.rooms.tag.kitchen': 'Kuhinja', // from the photos
  'accommodation.units.rooms.tag.kitchenette': 'Čajna kuhinja', // from the photos
  'accommodation.units.rooms.tag.balcony': 'Balkon', // from the photos
  // Photo alt texts are built as "<room name> — <what the photo shows>".
  'accommodation.units.rooms.shot.room': 'pogled na sobo',
  'accommodation.units.rooms.shot.beds': 'postelje',
  'accommodation.units.rooms.shot.kitchen': 'kuhinjski kotiček',
  'accommodation.units.rooms.shot.bathroom': 'kopalnica s tušem',
  'accommodation.units.rooms.shot.balcony': 'balkon',
  'accommodation.units.rooms.shot.view': 'pogled skozi okno',
  'accommodation.units.rooms.alt': 'Z lesom obložena dvoposteljna soba pod ostrešjem s pogledom na gozd', // landing's rooms slider (older mixed set in public/images/rooms/)
  'accommodation.units.capacityLabel': 'Kapaciteta',

  // --- Accommodation page: breakfast & kitchen ---
  'accommodation.kitchen.eyebrow': 'Za mizo',
  'accommodation.kitchen.title': 'Zajtrk in domača kuhinja',
  'accommodation.kitchen.lead':
    'Nič se ne more primerjati z vonjem svežega kruha in kave, ki se zjutraj širi po hiši. Zajtrk je tu domač, nehiten in pripravljen tako kot nekoč — iz lokalnih, sezonskih sestavin, ne iz vrečke.',
  'accommodation.kitchen.body':
    'Odnesite ga na teraso, ko je gorski zrak še hladen, ali posedite za mizo, kolikor dolgo želite — jutra na Travni gori so namenjena upočasnitvi. Ko pa se vam zahoče kuhati sami, vam je na voljo naša popolnoma opremljena kuhinja za goste, založena in pripravljena, kadarkoli vas prime lakota.',
  'accommodation.kitchen.imageAlt': 'Rustikalna miza, pogrnjena z domačim zajtrkom', // MOCK — replace with real photo
  'accommodation.kitchen.point1': 'Domač zajtrk, vsako jutro sveže pripravljen',
  'accommodation.kitchen.point2': 'Lokalne, sezonske sestavine iz regije',
  'accommodation.kitchen.point4': 'Na željo z veseljem upoštevamo posebne prehranske potrebe in alergije',
  'accommodation.kitchen.cta': 'Oglejte si jedilnik',

  // --- Sauna (shared block: apartments page + activities page) ---
  // TODO(Webline): confirm copy with the client. The sauna is wood-fired and shared by all guests
  // — it is NOT private to a house. In summer it is let as a mobile house for two (client,
  // 2026-10-08) — said in accommodation.units.houses.text, not in this block.
  'sauna.title': 'Savna na drva',
  'sauna.shortTitle': 'Savna', // heading used where the block stands on its own (activities page)
  'sauna.body':
    'Po dnevu v gozdu ni nič boljšega od toplote, lesa in tišine. Savna se kuri na drva, tako kot je bilo tu od nekdaj — dajte ji čas, da se dobro segreje, nato pa stopite ven na hladen gorski zrak.',
  'sauna.point1': 'Sodobna savna z vsem, kar potrebujete',
  'sauna.point2': 'Sprostitev po dolgem dnevu',
  'sauna.point3': 'Dobro za telo in duha',
  // Alt texts of the sauna photos, one per photo — the order is set in components/sections/saunaPhotos.ts.
  'sauna.photo.room': 'Notranjost savne na drva: lesene klopi v topli svetlobi ob peči',
  'sauna.photo.benches': 'Peč v savni s košaro kamnov ob dvonivojskih lesenih klopeh',
  'sauna.photo.stove': 'Peč v savni, obložena s kamni, za leseno zaščitno ograjo',
  'sauna.photo.door': 'Z lesom obložena savna s steklenimi vrati in vedrom',
  'sauna.photo.shower': 'Prha ob savni z lesenim vedrom za polivanje',
  'sauna.photo.lounge': 'Počivalnica v hišici s savno s kavčem, okroglo mizo in stoli iz ratana',
  'sauna.photo.table': 'Okrogla miza in stoli iz ratana pred kotno sedežno garnituro v počivalnici',
  'sauna.photo.terrace': 'Pokrita lesena terasa hišice s savno z mizo, stoli in vhodnimi vrati',
  'sauna.photo.tub': 'Okrogla kad za ohladitev, vgrajena v tla terase',
  'sauna.photo.chairs': 'Dva stola iz ratana na terasi s pogledom čez travnik na gozd',
  'sauna.photo.view': 'Pogled z mize na terasi čez strehe na gozd v megli',
  'sauna.photo.exterior': 'Hišica s savno: lesena hišica s pokrito teraso na robu gozda',
  'sauna.photo.evening': 'Pokrita terasa hišice s savno zvečer, s prižganimi lučmi nad mizo in stoli',

  // --- Testimonials (real guest reviews, translated from Booking.com) ---
  'testimonials.score.value': '8.8',
  'testimonials.score.label': 'Odlično',
  'testimonials.score.meta': 'Na podlagi 400 ocen na Booking.com',
  'testimonials.eyebrow': 'Glasovi gostov', // MOCK
  'testimonials.title': 'Kaj gostje odnesejo s seboj', // MOCK
  'testimonials.intro':
    'Ne verjemite samo nam — preberite, kaj so gostje povedali po bivanju na Travni gori.',
  'testimonials.t1.quote':
    'Kljub zelo poznemu prihodu so me sprejeli in prijavili — čudovit kraj. Posebna zahvala za okusen zajtrk! Čudoviti razgledi.',
  'testimonials.t1.author': 'Ayura7',
  'testimonials.t1.meta': 'Samostojno potovanje, bivanje junija',
  'testimonials.t2.quote':
    'Čudovit svež zrak in popoln kraj za sprostitev — bivali smo v novi sobi in vse je bilo odlično. Ne zamudite varenikov in gobove juhe!',
  'testimonials.t2.author': 'Yevheniia',
  'testimonials.t2.meta': 'Družinsko bivanje, avgusta',
  'testimonials.t3.quote':
    'Vse nam je bilo všeč, pa to ni bilo naše prvo bivanje tukaj. Najlepša hvala gostiteljem za prijazen sprejem in toplo gostoljubje.',
  'testimonials.t3.author': 'Oleksii',
  'testimonials.t3.meta': 'Družina, ki se vrača, bivanje januarja',
  'testimonials.t4.quote':
    'Čudovito bogat, miren kraj, daleč stran od civilizacije.',
  'testimonials.t4.author': 'Ievgen',
  'testimonials.t4.meta': 'Družinsko bivanje, septembra',
  'testimonials.t5.quote':
    'Čudovit kraj za oddih na tihem, mirnem koncu. Lep gozd, udobni pogoji v hiški in zelo gostoljubni gostitelji. Hrana je bila okusna — še posebej vareniki, peljmeni, gobova juha in palačinke. Navdušeni smo bili tako mi kot otroci.',
  'testimonials.t5.author': 'Igor',
  'testimonials.t5.meta': 'Družinsko bivanje, septembra',
  'testimonials.t6.quote':
    'Čudovit kraj v gozdu — škoda, da smo rezervirali le za eno noč.',
  'testimonials.t6.author': 'Olga',
  'testimonials.t6.meta': 'Družinsko bivanje, julija',
  'testimonials.ratingLabel': 'Ocena 5 od 5', // a11y label for the star row
  'testimonials.slider.label': 'Mnenja gostov',
  'testimonials.slider.prev': 'Prejšnje mnenje',
  'testimonials.slider.next': 'Naslednje mnenje',

  // --- Activities page — "Discover Slovenia from Travna Gora" ---
  // Real orientational content (nearby sights + approximate drive times supplied by the client).
  // Drive times are approximate — confirm before launch.
  'activities.eyebrow': 'Okrog Travne gore',
  'activities.title': 'Odkrijte Slovenijo s Travne gore',
  'activities.intro':
    'Travna gora je miren kraj, kjer se lahko upočasnite — a iz tega gozdnatega kotička Slovenije so številne najbolj priljubljene znamenitosti države le enodnevni izlet stran. Zbudite se ob ptičjem petju in gozdnem zraku, nato pa se odpravite do jam, gradov, jezer in prestolnice — večina je oddaljena približno uro vožnje.',
  'activities.hero.imageAlt': 'Gozdnata pokrajina okoli Travne gore', // MOCK photo — TODO(Webline): swap alt with real photo
  // Badge figure restates the approximate drive time already in the intro copy — confirm before launch.
  'activities.hero.badge.title': '≈ 1 ura',
  'activities.hero.badge.sub': 'do večine znamenitosti',
  // Highlight pills — the sight types named in the intro copy.
  'activities.hero.pill.caves': 'Kraške jame',
  'activities.hero.pill.castles': 'Gradovi',
  'activities.hero.pill.lakes': 'Jezera in gozdovi',
  'activities.hero.pill.capital': 'Ljubljana',

  // Doorstep activities — image cards rendered from the `activities` content collection.
  'activities.doorstep.eyebrow': 'Tik pred vrati',
  'activities.doorstep.title': 'Kar od vrat naprej',
  'activities.doorstep.intro':
    'Ni vam treba daleč. Poti, gozdne ceste in razgledišča se začnejo kar na Travni gori in okoli bližnje Koče na Kamnem Griču.',

  // Day-trip destinations — cards rendered from the `destinations` content collection.
  'activities.trips.eyebrow': 'Preprosti enodnevni izleti',
  'activities.trips.title': 'Slovenija v uri vožnje',
  'activities.trips.intro':
    'Travna gora leži med Ljubljano in slovitimi slovenskimi kraškimi jamami, zato je idealno izhodišče za raziskovanje — do večine teh znamenitosti je precej manj kot ura vožnje.',
  'activities.trips.driveLabel': 'Približna vožnja', // label prefix on each distance badge
  'activities.trips.directions': 'Navodila za pot', // link out to Google Maps, opens in a new tab

  // Day-trip sub-section headings (grouping the `destinations` collection by `section`).
  'activities.trips.section.forests': 'Gozdni sprehodi',
  'activities.trips.section.caves': 'Jame',
  'activities.trips.section.wildlife': 'Divje živali',
  'activities.trips.section.history': 'Zgodovina in gradovi',

  // Why guests love it — benefits list (icon + text).
  'activities.why.eyebrow': 'Zakaj ga imajo gostje radi',
  'activities.why.title': 'Miren kotiček, blizu vsega',
  'activities.why.b1': 'Popoln mir, brez mestnega hrupa',
  'activities.why.b2': 'Na robu nekaterih največjih gozdov v Evropi',
  'activities.why.b3': 'Priložnost, da vidite rjave medvede v divjini',
  'activities.why.b4': 'Med Ljubljano in pokrajino kraških jam',

  // --- Menu page ---
  'menu.title': 'Jedilnik',
  'menu.intro': 'Domače jedi iz lokalnih sestavin, postrežene v hišni jedilnici.', // MOCK
  'menu.hero.eyebrow': 'Iz naše kuhinje', // MOCK
  'menu.hero.lead':
    'Vse tukaj je skuhano v hiši, tako kot od nekdaj — družinski recepti, lokalne in sezonske sestavine in nič iz vrečke. Jutro se začne z domačim zajtrkom, pozneje se kuhinja posveti grejočim juham in izdatnim planinskim glavnim jedem, za konec pa je tu še nekaj sladkega.', // TODO(Webline): confirm meal times & dish claims with the client
  'menu.hero.imageAlt': 'Hišna jedilnica, pogrnjena za obrok', // MOCK — real photo, alt TODO(Webline)
  'menu.hero.badge.title': 'Domače', // MOCK
  'menu.hero.badge.sub': 'družinski recepti', // MOCK
  'menu.hero.pill.breakfast': 'Zajtrk',
  'menu.hero.pill.mains': 'Izdatne glavne jedi',
  'menu.hero.pill.soups': 'Juhe in solate',
  'menu.hero.pill.desserts': 'Domače sladice',
  'menu.pdf.title': 'Celoten jedilnik (PDF)',
  'menu.pdf.download': 'Prenesi jedilnik (PDF)',
  'menu.pdf.fallback': 'Odpri jedilnik v novem zavihku',
  'menu.price': 'Cena',
  'menu.legend.title': 'Alergeni',
  'menu.legend.note': 'Prosimo, obvestite natakarja o morebitnih alergijah ali prehranskih omejitvah.',

  // --- Contact page + form ---
  'contact.title': 'Kontakt',
  'contact.intro': 'Stopite v stik z nami.',
  'contact.details.title': 'Kontaktni podatki',
  'contact.form.name': 'Ime',
  'contact.form.email': 'E-pošta',
  'contact.form.phone': 'Telefon',
  'contact.form.checkin': 'Prihod',
  'contact.form.checkout': 'Odhod',
  'contact.form.message': 'Sporočilo',
  'contact.form.consent': 'Strinjam se s politiko zasebnosti.',
  'contact.form.submit': 'Pošlji sporočilo',
  'contact.form.required': 'To polje je obvezno.',
  'contact.form.invalidEmail': 'Vnesite veljaven e-poštni naslov.',
  'contact.form.consentRequired': 'Prosimo, sprejmite politiko zasebnosti.',
  'contact.form.honeypot': 'Tega polja ne izpolnjujte, če ste človek', // honeypot label (CSS-hidden anti-spam)

  // --- Thank-you page ---
  'thankYou.title': 'Hvala',
  'thankYou.text': 'Prejeli smo vaše sporočilo in vam bomo kmalu odgovorili.',
  'thankYou.backHome': 'Nazaj na domačo stran',

  // --- Booking page (Bentral) ---
  'booking.title': 'Rezervirajte bivanje',
  'booking.intro': 'Kratek uvod nad rezervacijskim pripomočkom.',
  'booking.widgetTitle': 'Rezervacijski sistem', // iframe title — a11y
  'booking.placeholder': 'Tu se bo prikazal rezervacijski pripomoček.', // shown until Bentral embed is pasted

  // --- Hidden advertising landing (/social) ---
  // The page social profiles and ads link to: hero → the place → rooms → atmosphere → sauna →
  // activities → restaurant → reviews → reservation widget. It is built from the blocks of the other
  // pages but carries its own copy: every text worded for the landing lives here, so rewriting it
  // never changes another page. Only short labels that read the same everywhere are still shared
  // (home.welcome.pill.apartments / .kitchen, accommodation.units.eyebrow, accommodation.hero.pill.*,
  // sauna.title, menu.hero.pill.breakfast / .soups, cta.viewActivities, testimonials.score.* and the
  // reviews themselves, home.bookDirect.benefit*Title).
  // TODO(Webline): the Slovenian landing still carries the wording of the pages the blocks come
  // from, plus the earlier drafts — replace with the final SL landing copy before running campaigns
  // (the Russian one is final, see ru.ts).
  'lp.meta.description':
    'Planinski dom sredi gozda, približno uro vožnje iz Ljubljane: prijetni apartmaji, savna na drva in domača kuhinja. Preverite razpoložljivost in rezervirajte neposredno.', // also the link-preview text when the page is shared
  'lp.cta': 'Preverite termine', // every booking CTA on the landing — kept short so it fits a phone button on one line
  'lp.hero.title': 'Gozdni oddih na Travni gori',
  'lp.hero.subtitle': 'Kjer čas teče počasneje', // same wording as home.hero.subtitle
  'lp.hero.intro':
    'Prijetni apartmaji, savna na drva in domača kuhinja — na gozdnati planoti, približno uro vožnje iz Ljubljane.',
  // The place — the home welcome block under the landing's own copy.
  'lp.place.title': 'Prijetni apartmaji v osrčju gozda', // same wording as home.welcome.title
  'lp.place.text':
    'Pustite mesto za sabo in poiščite mir na Travni gori, visoki gozdnati planoti nad Ribniško dolino. Med drevesi se odpirajo travniki, gozd sega vse do vašega apartmaja, zrak pa še vedno diši po gozdu, ne po prometu. Pridite, da se upočasnite, globoko zadihate in raziščete miren kotiček Slovenije, ki ga odkrije le malo popotnikov.', // same wording as home.welcome.lead
  'lp.place.pill.nature': 'Gozd pred vrati', // same wording as home.welcome.pill.forest
  // Rooms row.
  'lp.stay.title': 'Sobe za vsako bivanje', // same wording as home.apartments.rooms.title
  'lp.stay.text':
    'Sveže, prijetne sobe za skupine vseh velikosti — topla dobrodošlica čaka velike družine, pare in tiste, ki potujejo sami.', // same wording as home.apartments.rooms.text
  'lp.stay.point1': 'Rezervirajte celo hišo samo zase — zaseben vhod, lastna kuhinja, za 1–6 oseb.', // same wording as home.apartments.rooms.b1
  'lp.stay.point2': 'Ali samo sobo — prijetne možnosti za 1–4 goste.', // same wording as home.apartments.rooms.b2
  'lp.stay.alt.balcony': 'Lesen balkon glavne hiše s pogledom na gozd',
  'lp.stay.alt.attic': 'Mansardna soba z zakonsko posteljo in strešnim oknom',
  'lp.stay.alt.bathroom': 'Lastna kopalnica s prho',
  'lp.atmosphere.title': 'Prijateljsko vzdušje',
  'lp.atmosphere.text':
    'Gostje nam pogosto pišejo isto: tukaj se hitro nehaš počutiti kot obiskovalec. Gostitelji so vedno blizu, za mizo se najde prostor za vsakogar, večeri pa se zavlečejo ob hrani in pogovoru.', // MOCK
  'lp.atmosphere.alt.1': 'Mavrica nad hišo in travnikom pred njo', // MOCK — stand-in photo
  'lp.atmosphere.alt.2': 'Mize in stoli na terasi s pogledom na travnik in gozd', // MOCK — stand-in photo
  'lp.atmosphere.alt.3': 'Ljudje na s soncem obsijanem travniku pod hišami', // MOCK — stand-in photo
  'lp.atmosphere.alt.4': 'Piknik miza na travniku, pod gozdom leži megla', // MOCK — stand-in photo
  'lp.atmosphere.alt.5': 'Veliko senčno drevo, piknik mize in lesena tabla z dobrodošlico na travniku ob hiši', // MOCK — stand-in photo
  'lp.atmosphere.alt.6': 'Ogenj v kamnitem kaminu hiše', // MOCK — stand-in photo
  // Sauna row. A blank line in the text starts a new paragraph.
  'lp.sauna.text':
    'Po dnevu v gozdu ni nič boljšega od toplote, lesa in tišine. Savna se kuri na drva, tako kot je bilo tu od nekdaj — dajte ji čas, da se dobro segreje, nato pa stopite ven na hladen gorski zrak.', // same wording as sauna.body
  'lp.sauna.point1': 'Sodobna savna z vsem, kar potrebujete', // same wording as sauna.point1
  'lp.sauna.point2': 'Sprostitev po dolgem dnevu', // same wording as sauna.point2
  'lp.sauna.point3': 'Dobro za telo in duha', // same wording as sauna.point3
  // Activities teaser (LandingActivities.astro): heading, a short intro and four tiles — a name and
  // one line each. The photos come from the activities / destinations collections.
  'lp.activities.eyebrow': 'Okrog Travne gore', // same wording as activities.eyebrow
  'lp.activities.title': 'Raziščite okolico', // same wording as home.activities.title
  'lp.activities.intro':
    'Narava se začne tako rekoč na pragu. Od tu se lahko odpravite na sprehod po gozdu, s kolesom po okolici ali na izlet do naravnih znamenitosti regije.', // translated from the Russian landing copy — TODO(Webline): review
  'lp.activities.hiking.title': 'Pohodništvo in razgledi',
  'lp.activities.hiking.text': 'Pohodniške poti in gozdne steze se začnejo tik ob hiši.', // translated from the Russian landing copy — TODO(Webline): review
  'lp.activities.cycling.title': 'Kolesarjenje po gozdnih poteh',
  'lp.activities.cycling.text': 'Mirne gozdne ceste so kot nalašč za kolesarjenje, daleč od prometa.', // translated from the Russian landing copy — TODO(Webline): review
  'lp.activities.bears.title': 'Opazovanje rjavih medvedov (Kočevsko)',
  'lp.activities.bears.text': 'Približno 20–30 minut vožnje z avtomobilom.', // translated from the Russian landing copy — TODO(Webline): review
  'lp.activities.cave.title': 'Križna jama',
  'lp.activities.cave.text': 'Ena izmed znanih slovenskih kraških jam — približno 40 minut vožnje.', // translated from the Russian landing copy — TODO(Webline): review
  // Restaurant row.
  'lp.restaurant.eyebrow': 'Iz naše kuhinje', // same wording as menu.hero.eyebrow
  'lp.restaurant.title': 'Restavracija z domačo kuhinjo',
  'lp.restaurant.text':
    'Vse tukaj je skuhano v hiši, tako kot od nekdaj — družinski recepti, lokalne in sezonske sestavine in nič iz vrečke. Jutro se začne z domačim zajtrkom, pozneje se kuhinja posveti grejočim juham in izdatnim planinskim glavnim jedem, za konec pa je tu še nekaj sladkega.', // same wording as menu.hero.lead
  'lp.restaurant.pill.mains': 'Izdatne glavne jedi', // same wording as menu.hero.pill.mains
  'lp.restaurant.favorites': 'Priljubljeno med gosti', // heads the dishes flagged `featured` in the menu collection
  'lp.restaurant.imageAlt': 'Krožnik domače hrane iz hišne kuhinje',
  // Guest reviews — the shared Testimonials block under the landing's own heading.
  'lp.reviews.title': 'Kaj gostje odnesejo s seboj', // same wording as testimonials.title
  'lp.reviews.intro': 'Ne verjemite samo nam — preberite, kaj so gostje povedali po bivanju na Travni gori.', // same wording as testimonials.intro
  // Reservation (LandingReservation.astro).
  'lp.reservation.title': 'Rezervirajte bivanje', // same wording as booking.title
  'lp.reservation.intro':
    'Izberite termin in rezervirajte neposredno pri nas — hiša, savna in topel obrok vas že čakajo.',
  'lp.reservation.help': 'Imate pred rezervacijo vprašanje? Pokličite nas ali nam pišite:',

  // --- Footer ---
  'footer.contact.title': 'Kontakt',
  'footer.contact.phone': '+386 0 000 000',
  'footer.contact.email': 'info@example.com',
  'footer.social.title': 'Sledite nam',
  'footer.social.instagram': 'Instagram', // brand name (link label / aria-label)
  'footer.social.facebook': 'Facebook', // brand name (link label / aria-label)
  // Footer navigation (mirrors the header nav; privacy policy is footer-only)
  'footer.nav.accommodation': 'Apartmaji',
  'footer.nav.activities': 'Aktivnosti',
  'footer.nav.contact': 'Kontakt in rezervacije',
  'footer.nav.book': 'Rezervirajte zdaj',
  'footer.nav.privacy': 'Politika zasebnosti',
  'footer.legal.title': 'Pravne informacije',
  'footer.legal.entity': 'Planinski dom na Travni gori d.o.o.', // MOCK — replace with real legal entity
  'footer.legal.address': 'Ulica 1, 0000 Mesto', // MOCK — replace with real address
  'footer.legal.country': 'Slovenija', // MOCK
  'footer.legal.taxId': 'ID za DDV: SI00000000', // MOCK — replace with real VAT/DDV number
  'footer.directions': 'Kratka opomba o tem, kako do nas.',
  'footer.rights': 'Vse pravice pridržane',
  'footer.credit.text': 'Oblikovanje in razvoj:',
  'footer.credit.company': 'Webline', // agency name — not localized

  // --- Cookie consent (GA4 gate) ---
  'consent.message': 'Za analitiko uporabljamo piškotke.',
  'consent.accept': 'Sprejmi',
  'consent.decline': 'Zavrni',
} as const;

export default sl;

