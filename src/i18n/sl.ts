// Slovenian UI dictionary — same key set as ./en.ts, enforced by the UIDict type below, so a
// missing or renamed key is a build error. Translated from translations/en.json (see translations/sl.json).
// Reworked 2026-10-21 to read as Slovenian written from scratch rather than a word-for-word
// translation: vikanje throughout, Slovenian punctuation (spaced en dash, sparingly), declined
// brand and place names in running text. The facts are unchanged — TODO(Webline): native read.
// 2026-10-22: the client's own Slovenian copy is now in the home, apartments, activities and menu
// pages (and the sl/ activities, destinations and menu entries) — keep it as the client wrote it.
//
// Do NOT hardcode visible strings in components — always read them through the helpers in './index.ts'.
// Section comments mirror en.ts line for line so the two dictionaries diff cleanly.

import type { UIDict } from './types';

export const sl: UIDict = {
  // --- Global / brand ---
  'site.name': 'Planinski dom na Travni gori', // brand — not localized
  'site.tagline': 'Slogan domačne planinske hiše',

  // --- Accessibility / chrome ---
  'a11y.skipToContent': 'Preskoči na vsebino',
  'a11y.openMenu': 'Odpri meni',
  'a11y.closeMenu': 'Zapri meni',
  'a11y.mapTitle': 'Zemljevid poti do Planinskega doma na Travni gori',
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
  'cta.checkAvailability': 'Preverite proste termine',
  'cta.exploreArea': 'Spoznajte okolico',
  'cta.bookNow': 'Rezervirajte',
  'cta.viewAccommodation': 'Oglejte si apartmaje',
  'cta.viewActivities': 'Več idej za izlete',
  'cta.viewMenu': 'Oglejte si jedilnik',
  'cta.contactUs': 'Pišite nam',

  // --- Home: hero ---
  'home.hero.title': 'Planinski dom na Travni gori',
  'home.hero.subtitle': 'Kjer čas teče počasneje',
  // Client's copy (2026-10-22).
  'home.hero.intro': 'Topel les, tiha jutra in svež gozdni zrak. Planinski dom za dneve brez hitenja, dolge večere ob ognju in trenutke, ko ni treba gledati na uro.',
  'home.hero.ratingsLabel': 'Ocene gostov',
  'home.hero.bookingLabel': 'Booking.com',
  'home.hero.bookingScale': 'od 10',
  'home.hero.airbnbLabel': 'Airbnb',
  'home.hero.airbnbScale': 'od 5',

  // --- Home: value props section ---
  'home.valueProps.title': 'Zakaj k nam',

  // --- Home: accommodation preview ---
  'home.accommodation.title': 'Vaš kotiček v planinah',
  'home.accommodation.text': 'Kratek odstavek, ki napove nastanitev.',

  // --- Home: activities preview ---
  'home.activities.title': 'Kaj početi v okolici',
  'home.activities.text': 'Kratek uvod v aktivnosti v bližini.',

  // --- Home: welcome / the house (first section after the hero) ---
  'home.welcome.title': 'Domačni apartmaji sredi gozda',
  'home.welcome.lead':
    'Pustite mestni vrvež za seboj in poiščite svoj mir na Travni gori, gozdnati planoti nad Ribniško dolino. Med drevesi se razprostirajo travniki, gozd sega vse do vašega apartmaja, svež zrak pa vabi, da globoko zadihate. Pridite se sprostit, uživat v naravi in odkrit miren kotiček Slovenije, ki ga pozna le malokdo.',
  'home.welcome.imageAlt': 'Planinski dom na Travni gori sredi gozda', // MOCK — real photo alt
  'home.welcome.pill.apartments': 'Domačni apartmaji', // MOCK
  'home.welcome.pill.kitchen': 'Domača kuhinja', // MOCK
  'home.welcome.pill.forest': 'Gozd pred vrati', // MOCK
  'home.welcome.pill.pets': 'Ljubljenčki so dobrodošli', // MOCK

  // --- Home: heritage timeline (one-family historic house) ---
  // TODO: replace with real dates & history copy from client
  'home.heritage.eyebrow': 'Naša zgodba', // MOCK
  'home.heritage.title': 'Ena hiša, več rodov', // MOCK
  'home.heritage.intro':
    'V hiši, ki že skoraj stoletje sprejema popotnike in planince, se danes prepletata bogata zgodovina in sodobno udobje.',
  'home.heritage.m1.era': '1927',
  'home.heritage.m1.title': 'Koča na gori', // TODO: confirm the opening year with the client (a local source dates the dom to 1958)
  'home.heritage.m1.body':
    'Leta 1927 je hiša odprla svoja vrata kot planinski dom. Pohodniki in popotniki so se tu ustavljali, da bi si po dolgi poti odpočili, se okrepčali in pogreli.',
  'home.heritage.m1.alt': 'Stara fotografija hiše iz prvih let, pred vhodom konj z vozom',
  'home.heritage.m2.era': '19—', // TODO: confirm real year
  'home.heritage.m2.title': 'Dolge mize, polna hiša', // MOCK
  'home.heritage.m2.body':
    'Lorem ipsum dolor sit amet – zbirališče, kjer so se sosedje in popotniki ustavljali za dolgimi mizami na prostem.', // MOCK
  'home.heritage.m2.alt': 'Stara fotografija ljudi, zbranih za mizami na prostem pred hišo',
  'home.heritage.m3.era': '1969',
  'home.heritage.m3.title': 'Smučarska leta',
  'home.heritage.m3.body':
    'Konec šestdesetih let je na pobočju pod hišo že obratovalo majhno smučišče z vlečnico in lesenimi bungalovi. Pozimi so sem za ves dan prihajale cele družine.',
  'home.heritage.m3.alt': 'Stara razglednica Travne gore: smučarji na pobočju pod hišo in lesen bungalov',
  'home.heritage.m4.era': '2026',
  'home.heritage.m4.title': 'Hiša danes',
  'home.heritage.m4.body':
    'Skoraj sto let pozneje hiša še vedno stoji. Skrbno obnovljena združuje bogato zgodovino s sodobnim udobjem in vas vabi, da si vzamete čas zase ter uživate v miru in naravi.',
  'home.heritage.m4.alt': 'Današnja podoba hiše na barvni fotografiji',

  // --- Home: apartments showcase (icon-tabbed photo slider) ---
  // TODO: replace with real apartment copy, bullets & photos from client
  'home.apartments.eyebrow': 'Apartmaji', // MOCK
  'home.apartments.title': 'Prostor, kjer se nikamor ne mudi', // MOCK
  'home.apartments.intro':
    'Tople sobe z dušo sredi slovenskega podeželja. Okoli hiše gozd, na mizi domača hrana.', // MOCK
  'home.apartments.hint': 'Izberite ikono za več informacij', // MOCK — shown as an on-image hint, not in the subheader
  'home.apartments.rooms.title': 'Sobe za vsakogar',
  'home.apartments.rooms.text':
    'Udobne, prijetno urejene sobe za pare, družine, prijatelje in posamezne popotnike. Pri nas boste našli prostor za sproščen oddih v dvoje ali v družbi najbližjih.',
  'home.apartments.rooms.tab': 'Sobe', // MOCK — short label for the icon tab
  'home.apartments.rooms.b1':
    'Na voljo je tudi najem celotne hiše za 1–6 oseb, z zasebnim vhodom in lastno kuhinjo.',
  'home.apartments.rooms.b2': 'Lahko pa izberete posamezno sobo za 1–4 osebe.',
  'home.apartments.rooms.b3': 'Sprostite se v savni na drva – v zasebnosti svoje družbe ali skupaj z drugimi gosti.',
  'home.apartments.rooms.alt': 'Toplo osvetljena notranjost apartmaja z lesenim pohištvom', // MOCK — replace with real photo
  'home.apartments.slovenia.title': 'V srcu Slovenije',
  'home.apartments.slovenia.text':
    'Travna gora je odlično izhodišče za raziskovanje Slovenije. V približno uri vožnje lahko obiščete Ljubljano, znamenite kraške jame in številne druge zanimivosti. Po dnevu, polnem doživetij, pa se vrnete v mir in tišino narave.',
  'home.apartments.slovenia.tab': 'Slovenija', // MOCK — short label for the icon tab
  'home.apartments.slovenia.b1': 'Odlično izhodišče za izlete po Sloveniji.',
  'home.apartments.slovenia.b2': 'Na dosegu Ljubljane, Postojnske in Križne jame.',
  // TODO(Webline): confirm before launch — the nearby Krokar & Rajhenavski Rog beech primeval
  // forests are UNESCO-listed; naming them explicitly is an option once the client approves.
  'home.apartments.slovenia.b3': 'V bližini prostranih gozdov Kočevske in Ribniške doline.',
  'home.apartments.slovenia.alt': 'Hiša od zunaj, obdana s slovenskim podeželjem', // MOCK — replace with real photo
  'home.apartments.nature.title': 'Za ljubitelje narave',
  'home.apartments.nature.text':
    'Zjutraj vas bo prebudilo ptičje petje, čez dan pa boste lahko raziskovali okoliške gozdove in travnike. Če boste imeli srečo, boste kar pred hišo zagledali tudi srno.',
  'home.apartments.nature.tab': 'Narava', // MOCK — short label for the icon tab
  'home.apartments.nature.b1': 'Čist zrak in nekaj dni brez vsakdanjega hitenja.',
  'home.apartments.nature.b2': 'Slovenija s svoje najbolj zelene strani.',
  'home.apartments.nature.b3': 'Možnost opazovanja rjavih medvedov v naravnem okolju z izkušenim vodnikom.',
  'home.apartments.nature.alt': 'Gozd in travnik okoli planinskega doma', // MOCK — replace with real photo
  'home.apartments.food.title': 'Domača kuhinja',
  'home.apartments.food.text':
    'Pri nas kuhamo po domače. Na mizo postrežemo okusne, izdatne jedi, pripravljene iz lokalnih in sezonskih sestavin.',
  'home.apartments.food.tab': 'Hrana', // MOCK — short label for the icon tab
  'home.apartments.food.b1': 'Tradicionalne slovenske jedi.',
  'home.apartments.food.b2': 'Doma pripravljeni, izdatni obroki.',
  'home.apartments.food.b3': 'Zajtrk po dogovoru.',
  'home.apartments.food.alt': 'Lesena miza, polna domače hrane', // MOCK — replace with real photo

  // --- Home: editorial gallery block ---
  'home.gallery.eyebrow': 'Pogled od blizu', // MOCK
  'home.gallery.title': 'Vzdušje v hiši in okoli nje', // MOCK
  'home.gallery.intro':
    'Nekaj drobnih trenutkov: topli kotički, večerna svetloba, rob gozda in zajtrki na prostem, ko se nikamor ne mudi.', // MOCK
  'home.gallery.card.1': 'Topla dobrodošlica',
  'home.gallery.card.2': 'Mavrica nad hišo',
  'home.gallery.card.3': 'Razgled s terase',
  'home.gallery.card.4': 'Gozdna tišina',
  'home.gallery.card.5': 'Zimska cesta na goro',
  'home.gallery.card.6': 'Večeri ob ognju',
  'home.gallery.card.7': 'Svež gorski zrak', // MOCK
  'home.gallery.card.8': 'Večerja za dolgo mizo', // MOCK
  'home.gallery.open': 'Odpri sliko', // MOCK
  'home.gallery.close': 'Zapri sliko', // MOCK
  'home.gallery.outro.title': 'Več kot le prenočišče', // MOCK
  'home.gallery.outro.text': 'Pridete zaradi mirne sobe, ostanete pa zaradi lenobnih juter, večerij za dolgo mizo in občutka, da lahko končno izdihnete.', // MOCK
  'home.gallery.outro.cta': 'Rezervirajte bivanje', // MOCK

  // --- Home: finding us (editorial map + scenic-route story) ---
  'home.findUs.eyebrow': 'Kako do nas', // MOCK
  'home.findUs.title': 'Kje nas najdete', // MOCK
  'home.findUs.intro':
    'Skriti smo na Travni gori na Notranjskem: dovolj blizu, da hitro pridete do nas, in dovolj daleč, da se počutite kot v drugem svetu.', // MOCK
  'home.findUs.mapTitle': 'Zemljevid z lokacijo Planinskega doma na Travni gori', // a11y — iframe title
  // Floating map label
  'home.findUs.pin.name': 'Planinski dom na Travni gori',
  'home.findUs.pin.address': 'Travna Gora 42, 1317 Sodražica, Slovenija',
  'home.findUs.pin.link': 'Odpri v Google Zemljevidih',
  // Compact travel facts (beside the map)
  'home.findUs.fact.time': '17 min od Sodražice',
  'home.findUs.fact.road': 'Gozdna cesta',
  'home.findUs.fact.parking': 'Brezplačno parkirišče pri hiši',
  'home.findUs.fact.winter': 'Ko zapade sneg, priporočamo zimske gume',
  // Directions action
  'home.findUs.cta': 'Navodila za pot',
  // Road-tip (centered icon + title + subtitle, with the route map beneath)
  'home.findUs.tip.title': 'Lažja pot na goro', // MOCK
  'home.findUs.tip.text': 'Tu ne gre za nekaj prihranjenih minut, ampak za mirnejšo vožnjo. Izberite označeno cesto skozi Sodražico, ki je vse do vrha široka in lepo vzdrževana. Cesta južneje je ožja in pelje ob robu strmega prepada, zato jo raje prepustite domačinom.',
  'home.findUs.tip.alt': 'Zemljevid lažje, lepo vzdrževane ceste do Planinskega doma na Travni gori', // MOCK — replace with final route map
  'home.findUs.tip.zoom': 'Povečaj zemljevid poti',
  'home.findUs.tip.close': 'Zapri povečani zemljevid',

  // --- Home: book-direct value strip ---
  'home.bookDirect.title': 'Rezervirajte neposredno pri nas',
  'home.bookDirect.intro':
    'Ob neposredni rezervaciji vam zagotovimo najboljšo ceno, za vse ostalo pa poskrbimo osebno – od prvega sporočila do vašega odhoda.', // MOCK — review claims before launch
  'home.bookDirect.benefit1Title': 'Takojšnja potrditev',
  'home.bookDirect.benefit1Desc': 'Rezervacijo potrdimo brez nepotrebnega čakanja in zapletov.',
  'home.bookDirect.benefit2Title': 'Najboljša cena',
  'home.bookDirect.benefit2Desc': 'Ob neposredni rezervaciji vam zagotovimo najugodnejšo ceno.', // MOCK — best-price claim, confirm with client
  'home.bookDirect.benefit3Title': 'Osebni stik',
  'home.bookDirect.benefit3Desc': 'Z nami ste v neposrednem stiku. Z veseljem odgovorimo na vaša vprašanja in vam pomagamo pri načrtovanju bivanja.',

  // --- Accommodation page ---
  'accommodation.title': 'Apartmaji',
  'accommodation.description': 'Topel opis hiše in njenega vzdušja.',
  'accommodation.amenities.title': 'Kaj vas čaka',
  'accommodation.amenities.wifi': 'Wi-Fi',
  'accommodation.amenities.parking': 'Parkirišče',
  'accommodation.amenities.kitchen': 'Kuhinja',
  'accommodation.amenities.fireplace': 'Kamin',
  'accommodation.amenities.heating': 'Ogrevanje',
  'accommodation.amenities.terrace': 'Terasa',
  'accommodation.cta': 'Preverite proste termine',
  'accommodation.slider.label': 'Fotogalerija',
  'accommodation.slider.prev': 'Prejšnja fotografija',
  'accommodation.slider.next': 'Naslednja fotografija',

  // --- Accommodation page: hero / intro ---
  'accommodation.hero.eyebrow': 'Naša hiša', // MOCK
  'accommodation.hero.title': 'Domačni apartmaji s pogledom na neokrnjeno naravo', // MOCK
  'accommodation.hero.lead':
    'Naša hiša stoji na Travni gori, tik ob robu gozda. Tu vas pričakajo svež zrak, jutra, ko se nad drevesi počasi dviga megla, in dva prijetna apartmaja, opremljena v toplih lesenih tonih. Kot nalašč za vse, ki si želijo nekaj dni oddiha brez naglice.',
  'accommodation.hero.body':
    'Do hiše vodi cesta skozi gozd, parkirate pa lahko brezplačno tik pred vhodom. S terase se odpira pogled na okoliške travnike in gozdove. Prijeten kotiček za jutranjo kavo ali kozarec vina ob koncu dneva.',
  'accommodation.hero.imageAlt': 'Hiša na Travni gori, obdana z gozdom', // MOCK — replace with real photo
  'accommodation.hero.badge.title': 'Narava', // MOCK
  'accommodation.hero.badge.sub': 'vsenaokrog', // MOCK
  'accommodation.hero.fact.location': 'Travna gora, Notranjska', // MOCK
  'accommodation.hero.fact.locationLabel': 'Kje smo',
  'accommodation.hero.fact.altitude': '≈ 900 m nadmorske višine', // MOCK — confirm real altitude
  'accommodation.hero.fact.altitudeLabel': 'Nadmorska višina',
  'accommodation.hero.fact.access': 'Brezplačno parkiranje pred vrati', // MOCK
  'accommodation.hero.fact.accessLabel': 'Dostop',
  // Quick amenity pills under the intro copy.
  'accommodation.hero.pill.pets': 'Ljubljenčki so dobrodošli', // MOCK
  'accommodation.hero.pill.breakfast': 'Zajtrk', // MOCK
  'accommodation.hero.pill.parking': 'Brezplačno parkiranje', // MOCK
  'accommodation.hero.pill.wifi': 'Brezplačen Wi-Fi', // MOCK

  // --- Accommodation page: bonuses / why book (MOCK) ---
  'accommodation.bonuses.eyebrow': 'Dobro je vedeti', // MOCK
  'accommodation.bonuses.title': 'Malenkosti, ki štejejo', // MOCK
  'accommodation.bonuses.intro':
    'Lorem ipsum dolor sit amet – kratka vrstica o dodatkih, ki so vključeni v vsako bivanje.', // MOCK
  'accommodation.bonuses.b1.title': 'Ljubljenčki so dobrodošli', // MOCK
  'accommodation.bonuses.b1.text': 'Lorem ipsum – tudi štirinožni prijatelji so pri nas dobrodošli.', // MOCK
  'accommodation.bonuses.b2.title': 'Brezplačno parkiranje', // MOCK
  'accommodation.bonuses.b2.text': 'Lorem ipsum – parkirate brezplačno, tik pred vrati.', // MOCK
  'accommodation.bonuses.b3.title': 'Hiter Wi-Fi', // MOCK
  'accommodation.bonuses.b3.text': 'Lorem ipsum – ko želite ostati povezani.', // MOCK
  'accommodation.bonuses.b4.title': 'Savna na drva', // MOCK
  'accommodation.bonuses.b4.text': '', // intentionally unused in the compact card layout
  'accommodation.bonuses.b5.title': 'Gozd pred vrati', // MOCK
  'accommodation.bonuses.b5.text': 'Lorem ipsum – poti se začnejo le nekaj korakov od terase.', // MOCK
  'accommodation.bonuses.b6.title': 'Domač zajtrk', // MOCK
  'accommodation.bonuses.b6.text': 'Lorem ipsum – izdaten začetek dneva, po dogovoru.', // MOCK
  'accommodation.bonuses.score.value': '8.8',
  'accommodation.bonuses.score.scale': 'od 10',
  'accommodation.bonuses.score.label': 'Ocena na Booking.com', // MOCK — confirm live score
  'accommodation.bonuses.score.logoAlt': 'Booking.com',

  // --- Accommodation page: units — houses + rooms (MOCK) ---
  'accommodation.units.eyebrow': 'Kje boste bivali', // MOCK
  'accommodation.units.title': 'Hiške in sobe', // MOCK
  'accommodation.units.intro':
    'Lorem ipsum dolor sit amet – izberite celo hiško zase ali domačno sobo v glavni hiši.', // MOCK
  // Houses group. Names, capacities and the room list are the client's own description (2026-10-08):
  // two mobile houses — no. 1 for 6 guests (three rooms, kitchen, two WCs, shower, terrace) and
  // no. 3, "house three", for 5 guests; there is no number 2 — plus the sauna, which in summer is
  // let as a mobile house for 2. The client said nothing more about house 3, so the rest of its copy
  // describes only what the client's photos show — TODO(Webline): confirm with the client.
  // Translated from the EN wording — TODO(Webline): native read.
  'accommodation.units.houses.title': 'Mobilne hiške',
  'accommodation.units.houses.text':
    'Dve mobilni hiški, ki ju najamete v celoti: Mobilna hiška 1 sprejme do šest gostov, Mobilna hiška 3 do pet. Poleti je na voljo še savna, ki jo takrat oddajamo kot mobilno hiško za dve osebi.',
  'accommodation.units.house1.name': 'Mobilna hiška 1',
  'accommodation.units.house1.text': 'Večja od obeh hišk: tri sobe, kuhinja, dve stranišči, tuš in terasa. Prostora je za največ šest gostov.',
  'accommodation.units.house1.capacity': 'Do 6 oseb',
  'accommodation.units.house1.size': '3 sobe · kuhinja · terasa',
  'accommodation.units.house1.tag.sleeps': 'Do 6 oseb',
  'accommodation.units.house1.tag.rooms': '3 sobe',
  'accommodation.units.house1.tag.kitchen': 'Kuhinja',
  'accommodation.units.house1.tag.bathroom': '2 stranišči · tuš',
  'accommodation.units.house1.tag.terrace': 'Terasa',
  'accommodation.units.house1.alt1': 'Z lesom obložena Mobilna hiška 1 na robu gozda, pogled s travnika',
  'accommodation.units.house1.alt2': 'Pokrita lesena terasa Mobilne hiške 1 z mizo in stoli ter pogledom na travnik in gozd',
  'accommodation.units.house1.alt3': 'Dnevni prostor Mobilne hiške 1 z jedilno mizo, televizorjem in steklenimi vrati na teraso',
  'accommodation.units.house1.alt4': 'Kuhinja Mobilne hiške 1 s kuhalno ploščo, pečico, mikrovalovno pečico in hladilnikom',
  'accommodation.units.house1.alt5': 'Kuhinja iz svetlega lesa v Mobilni hiški 1, pogled iz dnevnega prostora',
  'accommodation.units.house3.name': 'Mobilna hiška 3',
  'accommodation.units.house3.text': 'Svetla hiška za največ pet gostov, s kuhinjo, sedežno garnituro, dvema galerijama pod streho, kopalnico s tušem in teraso.', // capacity: client; the rest: from the photos
  'accommodation.units.house3.capacity': 'Do 5 oseb',
  'accommodation.units.house3.size': 'Kuhinja · kopalnica · terasa', // from the photos
  'accommodation.units.house3.tag.sleeps': 'Do 5 oseb',
  'accommodation.units.house3.tag.kitchen': 'Kuhinja', // from the photos
  'accommodation.units.house3.tag.bathroom': 'Kopalnica s tušem', // from the photos
  'accommodation.units.house3.tag.terrace': 'Terasa', // from the photos
  'accommodation.units.house3.alt1': 'Notranjost Mobilne hiške 3: kuhinja ob steni, jedilna miza, sedežna garnitura in galerija na koncu prostora',
  'accommodation.units.house3.alt2': 'Sedežna garnitura v Mobilni hiški 3 pod galerijo, na katero vodi lesena lestev',
  'accommodation.units.house3.alt3': 'Jedilna miza, kuhinja in stopnice na drugo galerijo v Mobilni hiški 3',
  'accommodation.units.house3.alt4': 'Jedilna miza ob vratih na teraso v Mobilni hiški 3, v ospredju lestev na galerijo',
  'accommodation.units.house3.alt5': 'Kuhinja Mobilne hiške 3, v ozadju stopnice na galerijo in vrata v kopalnico',
  'accommodation.units.house3.alt6': 'Kopalnica Mobilne hiške 3 z umivalnikom, okroglim ogledalom in straniščem',
  'accommodation.units.house3.alt7': 'Steklena tuš kabina in umivalnik v kopalnici Mobilne hiške 3',
  'accommodation.units.house3.alt8': 'Lesena terasa Mobilne hiške 3 z mizo in stoli v gorski megli',
  'accommodation.units.house3.alt9': 'Lesena terasa Mobilne hiške 3, kot se vidi izza zavese na steklenih vratih',
  // Rooms group — one showcase entry per room, picked with the room selector. Room numbers and guest
  // counts are the client's list (2026-10-08): 1 (also called 101) – 2, 2 – 5, 3 – 4, 4 – 5, 5 – 3,
  // 7 – 4, 9 – 6, 10 – 6, 11 – 3; the list itself lives in AccommodationUnits.astro. The client gave
  // no description per room, so the feature pills name only what that room's photos show —
  // TODO(Webline): confirm with the client. New strings translated from EN — native read needed.
  'accommodation.units.rooms.title': 'Sobe v glavni hiši', // MOCK
  'accommodation.units.rooms.text':
    'Prijetne sobe z lesenimi oblogami v mansardi glavne hiše. Opremljene so v tradicionalnem planinskem slogu, vsaka pa ima svojo kopalnico in pogled na gozd ali dolino.',
  'accommodation.units.rooms.choose': 'Izberite sobo', // label above the room selector
  'accommodation.units.rooms.name': 'Soba {n}', // {n} = the room number
  'accommodation.units.rooms.capacity': 'Do {n} oseb', // {n} = number of guests
  'accommodation.units.rooms.tag.bathroom': 'Lastna kopalnica', // from the photos
  'accommodation.units.rooms.tag.kitchen': 'Kuhinja', // from the photos
  'accommodation.units.rooms.tag.kitchenette': 'Čajna kuhinja', // from the photos
  'accommodation.units.rooms.tag.balcony': 'Balkon', // from the photos
  // Photo alt texts are built as "<room name> — <what the photo shows>".
  'accommodation.units.rooms.shot.room': 'notranjost',
  'accommodation.units.rooms.shot.beds': 'postelje',
  'accommodation.units.rooms.shot.kitchen': 'kuhinjski kotiček',
  'accommodation.units.rooms.shot.bathroom': 'kopalnica s tušem',
  'accommodation.units.rooms.shot.balcony': 'balkon',
  'accommodation.units.rooms.shot.view': 'razgled skozi okno',
  'accommodation.units.rooms.alt': 'Dvoposteljna mansardna soba z lesenimi oblogami in pogledom na gozd', // landing's rooms slider (older mixed set in public/images/rooms/)
  'accommodation.units.capacityLabel': 'Zmogljivost',

  // --- Accommodation page: breakfast & kitchen ---
  'accommodation.kitchen.eyebrow': 'Za mizo',
  'accommodation.kitchen.title': 'Zajtrk in domača kuhinja',
  'accommodation.kitchen.lead':
    'Ni lepšega kot zjutraj, ko po hiši zadiši po svežem kruhu in kavi. Zajtrk je pri nas domač, brez hitenja in pripravljen kot nekoč: iz lokalnih sezonskih sestavin, ne iz vrečke.',
  'accommodation.kitchen.body':
    'Privoščite si zajtrk na terasi, ko je jutranji zrak še prijetno svež, ali pa v jedilnici uživajte ob skodelici kave in domačih dobrotah. Na Travni gori se zjutraj nikamor ne mudi. Če si raje kuhate sami, vam je na voljo tudi popolnoma opremljena kuhinja.',
  'accommodation.kitchen.imageAlt': 'Lesena miza, pogrnjena za domač zajtrk', // MOCK — replace with real photo
  'accommodation.kitchen.point1': 'Vsako jutro sveže pripravljen domač zajtrk',
  'accommodation.kitchen.point2': 'Sezonske sestavine iz lokalnega okolja',
  'accommodation.kitchen.point4': 'Po predhodnem dogovoru upoštevamo tudi alergije in posebne prehranske želje',
  'accommodation.kitchen.cta': 'Oglejte si jedilnik',

  // --- Sauna (shared block: apartments page + activities page) ---
  // TODO(Webline): confirm copy with the client. The sauna is wood-fired and shared by all guests
  // — it is NOT private to a house. In summer it is let as a mobile house for two (client,
  // 2026-10-08) — said in accommodation.units.houses.text, not in this block.
  'sauna.title': 'Savna na drva',
  'sauna.shortTitle': 'Savna', // heading used where the block stands on its own (activities page)
  'sauna.body':
    'Po dnevu, preživetem v naravi, se prileže sprostitev v prijetno ogreti savni. Pri nas jo še vedno kurimo na drva, kar ji daje poseben čar. Prepustite se toplini, nato pa se osvežite na svežem gorskem zraku.',
  'sauna.point1': 'Savna s pečjo na drva',
  'sauna.point2': 'Prijetna sprostitev po aktivnem dnevu',
  'sauna.point3': 'Toplina in oddih za telo in duha',
  // Alt texts of the sauna photos, one per photo — the order is set in components/sections/saunaPhotos.ts.
  'sauna.photo.room': 'Notranjost savne na drva: lesene klopi v topli svetlobi ob peči',
  'sauna.photo.benches': 'Peč s košaro kamnov ob lesenih klopeh v dveh vrstah',
  'sauna.photo.stove': 'Peč v savni, obložena s kamni, za leseno zaščitno ograjo',
  'sauna.photo.door': 'Z lesom obložena savna s steklenimi vrati in vedrom',
  'sauna.photo.shower': 'Prha ob savni z lesenim vedrom za polivanje',
  'sauna.photo.lounge': 'Počivalnica v hišici s savno: kavč, okrogla miza in stoli iz ratana',
  'sauna.photo.table': 'Okrogla miza in stoli iz ratana pred kotno sedežno garnituro v počivalnici',
  'sauna.photo.terrace': 'Pokrita lesena terasa pred hišico s savno, z mizo, stoli in vhodnimi vrati',
  'sauna.photo.tub': 'Okrogla kad za ohladitev, vgrajena v tla terase',
  'sauna.photo.chairs': 'Dva stola iz ratana na terasi s pogledom čez travnik na gozd',
  'sauna.photo.view': 'Pogled z mize na terasi čez strehe na gozd v megli',
  'sauna.photo.exterior': 'Lesena hišica s savno in pokrito teraso na robu gozda',
  'sauna.photo.evening': 'Pokrita terasa hišice s savno zvečer, s prižganimi lučmi nad mizo in stoli',

  // --- Testimonials (real guest reviews, translated from Booking.com) ---
  'testimonials.score.value': '8.8',
  'testimonials.score.label': 'Odlično',
  'testimonials.score.meta': 'Na podlagi 400 ocen na Booking.com',
  'testimonials.eyebrow': 'Mnenja gostov', // MOCK
  'testimonials.title': 'Kaj pravijo naši gostje', // MOCK
  'testimonials.intro':
    'Ne verjemite nam na besedo. Preberite, kaj so po obisku Travne gore zapisali gostje.',
  'testimonials.t1.quote':
    'Kljub zelo poznemu prihodu so me lepo sprejeli. Čudovit kraj, posebna hvala za okusen zajtrk! Razgledi so prekrasni.',
  'testimonials.t1.author': 'Ayura7',
  'testimonials.t1.meta': 'Samostojno potovanje, junij',
  'testimonials.t2.quote':
    'Svež zrak in idealen kraj za počitek. Bivali smo v novi sobi in vse je bilo odlično. Vsekakor poskusite varenike in gobovo juho!',
  'testimonials.t2.author': 'Yevheniia',
  'testimonials.t2.meta': 'Z družino, avgust',
  'testimonials.t3.quote':
    'Vse nam je bilo všeč, in to že ne prvič. Najlepša hvala gostiteljem za prijazen sprejem in toplo gostoljubje.',
  'testimonials.t3.author': 'Oleksii',
  'testimonials.t3.meta': 'Z družino, ponovno pri nas, januar',
  'testimonials.t4.quote':
    'Prelep in miren kraj, daleč od civilizacije.',
  'testimonials.t4.author': 'Ievgen',
  'testimonials.t4.meta': 'Z družino, september',
  'testimonials.t5.quote':
    'Krasen kraj za oddih v miru in tišini. Lep gozd, udobna hiška in zelo gostoljubni gostitelji. Hrana je bila okusna, še posebej vareniki, pelmeni, gobova juha in palačinke. Navdušeni smo bili mi in otroci.',
  'testimonials.t5.author': 'Igor',
  'testimonials.t5.meta': 'Z družino, september',
  'testimonials.t6.quote':
    'Čudovit kraj sredi gozda. Škoda, da smo rezervirali samo eno noč.',
  'testimonials.t6.author': 'Olga',
  'testimonials.t6.meta': 'Z družino, julij',
  'testimonials.ratingLabel': 'Ocena 5 od 5', // a11y label for the star row
  'testimonials.slider.label': 'Mnenja gostov',
  'testimonials.slider.prev': 'Prejšnje mnenje',
  'testimonials.slider.next': 'Naslednje mnenje',

  // --- Activities page — "Discover Slovenia from Travna Gora" ---
  // Real orientational content (nearby sights + approximate drive times supplied by the client).
  // Drive times are approximate — confirm before launch.
  'activities.eyebrow': 'Okoli Travne gore',
  'activities.title': 'S Travne gore po Sloveniji',
  'activities.intro':
    'Travna gora je odlično izhodišče za raziskovanje Slovenije. Po mirnem jutru sredi narave se lahko odpravite na izlet do kraških jam, gradov, jezer ali Ljubljane. Številne priljubljene izletniške točke so oddaljene približno uro vožnje.',
  'activities.hero.imageAlt': 'Gozdnata pokrajina okoli Travne gore', // MOCK photo — TODO(Webline): swap alt with real photo
  // Badge figure restates the approximate drive time already in the intro copy — confirm before launch.
  'activities.hero.badge.title': '≈ 1 ura',
  'activities.hero.badge.sub': 'do številnih znamenitosti',
  // Highlight pills — the sight types named in the intro copy.
  'activities.hero.pill.caves': 'Kraške jame',
  'activities.hero.pill.castles': 'Gradovi',
  'activities.hero.pill.lakes': 'Jezera in gozdovi',
  'activities.hero.pill.capital': 'Ljubljana',

  // Doorstep activities — image cards rendered from the `activities` content collection.
  'activities.doorstep.eyebrow': 'Tik pred vrati',
  'activities.doorstep.title': 'Vse se začne pred hišo',
  'activities.doorstep.intro':
    'Za prijeten izlet se vam ni treba odpraviti daleč. Pohodniške poti, gozdne ceste in razgledišča vas čakajo že na Travni gori in v okolici bližnje Koče na Kamnem griču.',

  // Day-trip destinations — cards rendered from the `destinations` content collection.
  'activities.trips.eyebrow': 'Enodnevni izleti',
  'activities.trips.title': 'Slovenija na dosegu roke',
  'activities.trips.intro':
    'Travna gora je priročno izhodišče za izlete po Notranjski, Dolenjski in drugih delih Slovenije. Številne zanimivosti so oddaljene manj kot uro vožnje.',
  'activities.trips.driveLabel': 'Vožnja z avtom', // label prefix on each distance badge
  'activities.trips.directions': 'Navodila za pot', // link out to Google Maps, opens in a new tab

  // Day-trip sub-section headings (grouping the `destinations` collection by `section`).
  'activities.trips.section.forests': 'Jezera in pohodniške poti',
  'activities.trips.section.caves': 'Jame',
  'activities.trips.section.wildlife': 'Divje živali',
  'activities.trips.section.history': 'Mesta in gradovi',

  // Why guests love it — benefits list (icon + text).
  'activities.why.eyebrow': 'Zakaj je gostom všeč',
  'activities.why.title': 'Miren kotiček, pa vendar blizu vsega',
  'activities.why.b1': 'Daleč od mestnega hrupa in vsakdanjega vrveža',
  'activities.why.b2': 'Sredi prostranih gozdov Notranjske',
  'activities.why.b3': 'Možnost opazovanja rjavih medvedov z izkušenim vodnikom',
  'activities.why.b4': 'Odlično izhodišče za obisk Ljubljane in kraških jam',

  // --- Menu page ---
  'menu.title': 'Jedilnik',
  'menu.intro': 'Domače jedi iz lokalnih sestavin, ki jih postrežemo v naši jedilnici.', // MOCK
  'menu.hero.eyebrow': 'Iz naše kuhinje', // MOCK
  'menu.hero.lead':
    'Vse jedi pripravljamo sami, po preizkušenih družinskih receptih, iz lokalnih in sezonskih sestavin. Dan se začne z domačim zajtrkom, pozneje pa so na vrsti okusne juhe, izdatne glavne jedi in za konec še kaj sladkega.', // TODO(Webline): confirm meal times & dish claims with the client
  'menu.hero.imageAlt': 'Jedilnica, pogrnjena za obed', // MOCK — real photo, alt TODO(Webline)
  'menu.hero.badge.title': 'Domače jedi', // MOCK
  'menu.hero.badge.sub': 'po družinskih receptih', // MOCK
  'menu.hero.pill.breakfast': 'Zajtrk',
  'menu.hero.pill.mains': 'Izdatne glavne jedi',
  'menu.hero.pill.soups': 'Juhe in solate',
  'menu.hero.pill.desserts': 'Domače sladice',
  'menu.pdf.title': 'Celoten jedilnik (PDF)',
  'menu.pdf.download': 'Prenesi jedilnik (PDF)',
  'menu.pdf.fallback': 'Odpri jedilnik v novem zavihku',
  'menu.price': 'Cena',
  'menu.legend.title': 'Alergeni',
  'menu.legend.note': 'Prosimo, da nas ob naročilu opozorite na morebitne alergije ali posebne prehranske zahteve.',

  // --- Contact page + form ---
  'contact.title': 'Kontakt',
  'contact.intro': 'Pišite nam ali nas pokličite.',
  'contact.details.title': 'Kontaktni podatki',
  'contact.form.name': 'Ime',
  'contact.form.email': 'E-pošta',
  'contact.form.phone': 'Telefon',
  'contact.form.message': 'Sporočilo',
  'contact.form.consent': 'Strinjam se s politiko zasebnosti.',
  'contact.form.submit': 'Pošlji sporočilo',
  'contact.form.required': 'To polje je obvezno.',
  'contact.form.invalidEmail': 'Vnesite veljaven e-poštni naslov.',
  'contact.form.consentRequired': 'Za pošiljanje se morate strinjati s politiko zasebnosti.',
  'contact.form.honeypot': 'Tega polja ne izpolnjujte, če ste človek', // honeypot label (CSS-hidden anti-spam)

  // --- Thank-you page ---
  'thankYou.title': 'Hvala!',
  'thankYou.text': 'Vaše sporočilo je prispelo. Odgovorili vam bomo čim prej.',
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
  // The Slovenian landing carries the content of the client's final Russian copy (2026-10-07, see
  // ru.ts), written as Slovenian rather than translated line by line — TODO(Webline): native read
  // before running campaigns. The image alts are still the earlier drafts.
  'lp.meta.description':
    'Planinski dom sredi gozda, približno uro vožnje od Ljubljane: domačni apartmaji, savna na drva in domača hrana. Preverite proste termine in rezervirajte neposredno pri nas.', // also the link-preview text when the page is shared
  'lp.cta': 'Izberite termin', // every booking CTA on the landing — kept short so it fits a phone button on one line
  'lp.hero.title': 'Gozdni oddih na Travni gori',
  'lp.hero.subtitle': 'Kraj, kjer si zares odpočijete',
  'lp.hero.intro':
    'Udobni apartmaji, domača kuhinja in savna na drva sredi gozdov Travne gore – približno uro vožnje od Ljubljane.',
  // The place — the home welcome block under the landing's own copy.
  'lp.place.title': 'Domačni apartmaji sredi gozda', // same wording as home.welcome.title
  'lp.place.text':
    'Pustite mestni vrvež za seboj in si odpočijte v Planinskem domu na Travni gori. Gozd se začne tik ob hiši, naokrog se odpirajo zeleni travniki, zrak pa je svež in diši po gozdu. Sem ljudje prihajajo po naravo, tišino in priložnost, da za nekaj dni zamenjajo vsakdanji ritem.',
  'lp.place.pill.nature': 'Narava vsenaokrog',
  // Rooms row.
  'lp.stay.title': 'Za pare, družine in prijatelje',
  'lp.stay.text':
    'Izberete lahko posamezno sobo ali najamete celo hišo. Prostora je dovolj za pare, družine z otroki in skupine prijateljev.',
  'lp.stay.point1': 'Cela hiša z ločenim vhodom in lastno kuhinjo sprejme do 6 gostov.',
  'lp.stay.point2': 'Na voljo so tudi prijetne sobe za 1–4 osebe.',
  'lp.stay.alt.balcony': 'Lesen balkon glavne hiše s pogledom na gozd',
  'lp.stay.alt.attic': 'Mansardna soba z zakonsko posteljo in strešnim oknom',
  'lp.stay.alt.bathroom': 'Lastna kopalnica s tušem',
  'lp.atmosphere.title': 'Toplo, domače vzdušje',
  'lp.atmosphere.text':
    'Tukaj se hitro počutite kot doma. Gostitelji so vedno pri roki in vsakega gosta sprejmejo osebno, za skupno mizo pa ob večerji in dobrem pogovoru pogosto ostanete dlje, kot ste nameravali.',
  'lp.atmosphere.alt.1': 'Mavrica nad hišo in travnikom pred njo', // MOCK — stand-in photo
  'lp.atmosphere.alt.2': 'Mize in stoli na terasi s pogledom na travnik in gozd', // MOCK — stand-in photo
  'lp.atmosphere.alt.3': 'Ljudje na sončnem travniku pod hišami', // MOCK — stand-in photo
  'lp.atmosphere.alt.4': 'Miza za piknik na travniku, ob gozdu se vleče megla', // MOCK — stand-in photo
  'lp.atmosphere.alt.5': 'Košato drevo, mize za piknik in lesena tabla z dobrodošlico na travniku ob hiši', // MOCK — stand-in photo
  'lp.atmosphere.alt.6': 'Ogenj v kamnitem kaminu', // MOCK — stand-in photo
  // Sauna row. A blank line in the text starts a new paragraph.
  'lp.sauna.text':
    'Po sprehodu po gozdu ali napornem dnevu ni lepšega kot savna na drva, kjer se pogrejete in naberete novih moči. Naravni les, mehka toplota in tišina vas hitro sprostijo.\n\nPo savni stopite na svež zrak Travne gore in si v miru odpočijte v naravi.',
  'lp.sauna.point1': 'Sodobna savna z vsem, kar potrebujete',
  'lp.sauna.point2': 'Odlična sprostitev po aktivnem dnevu',
  'lp.sauna.point3': 'Toplota in počitek v mirnem okolju',
  // Activities teaser (LandingActivities.astro): heading, a short intro and four tiles — a name and
  // one line each. The photos come from the activities / destinations collections.
  'lp.activities.eyebrow': 'Okoli Travne gore', // same wording as activities.eyebrow
  'lp.activities.title': 'Kaj početi v okolici', // same wording as home.activities.title
  'lp.activities.intro':
    'Narava se začne že na pragu. Od tu se lahko odpravite na sprehod po gozdu, s kolesom po okolici ali na izlet do naravnih znamenitosti v bližini.',
  'lp.activities.hiking.title': 'Pohodi in razgledišča',
  'lp.activities.hiking.text': 'Pohodne poti in gozdne steze se začnejo tik ob hiši.',
  'lp.activities.cycling.title': 'Kolesarjenje po gozdnih poteh',
  'lp.activities.cycling.text': 'Mirne gozdne ceste so kot nalašč za vožnjo s kolesom, stran od prometa.',
  'lp.activities.bears.title': 'Opazovanje rjavih medvedov na Kočevskem',
  'lp.activities.bears.text': 'Približno 20–30 minut vožnje z avtom.',
  'lp.activities.cave.title': 'Križna jama',
  'lp.activities.cave.text': 'Znamenita kraška jama, od nas oddaljena približno 40 minut vožnje.',
  // Restaurant row.
  'lp.restaurant.eyebrow': 'Domača kuhinja',
  'lp.restaurant.title': 'Preprosto in okusno',
  'lp.restaurant.text':
    'Kuhamo preprosto domačo hrano iz svežih sestavin. Zjutraj si lahko naročite zajtrk, čez dan pa tople juhe, izdatne glavne jedi, solate in domače sladice.',
  'lp.restaurant.pill.mains': 'Glavne jedi',
  'lp.restaurant.favorites': 'Priljubljeno med gosti', // heads the dishes flagged `featured` in the menu collection
  'lp.restaurant.imageAlt': 'Krožnik domače hrane iz naše kuhinje',
  // Guest reviews — the shared Testimonials block under the landing's own heading.
  'lp.reviews.title': 'Kaj pravijo naši gostje', // same wording as testimonials.title
  'lp.reviews.intro': 'O vzdušju pri nas najbolje povedo tisti, ki so že bili tukaj.',
  // Reservation (LandingReservation.astro).
  'lp.reservation.title': 'Izberite termin za oddih',
  'lp.reservation.intro':
    'Privoščite si nekaj dni sredi gozdov Travne gore. Izberite termin, ki vam ustreza, in rezervirajte neposredno pri nas.',
  'lp.reservation.help': 'Imate pred rezervacijo še kakšno vprašanje? Pokličite nas ali nam pišite:',

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
  'footer.nav.book': 'Rezervirajte',
  'footer.nav.privacy': 'Politika zasebnosti',
  'footer.legal.title': 'Podatki o podjetju',
  'footer.legal.entity': 'Planinski dom na Travni gori d.o.o.', // MOCK — replace with real legal entity
  'footer.legal.address': 'Ulica 1, 0000 Mesto', // MOCK — replace with real address
  'footer.legal.country': 'Slovenija', // MOCK
  'footer.legal.taxId': 'ID za DDV: SI00000000', // MOCK — replace with real VAT/DDV number
  'footer.directions': 'Kratka opomba o tem, kako pridete do nas.',
  'footer.rights': 'Vse pravice pridržane',
  'footer.credit.text': 'Oblikovanje in razvoj:',
  'footer.credit.company': 'Webline', // agency name — not localized

  // --- Cookie consent (GA4 gate) ---
  'consent.message': 'Za analizo obiska uporabljamo piškotke.',
  'consent.accept': 'Sprejmi',
  'consent.decline': 'Zavrni',
} as const;

export default sl;
