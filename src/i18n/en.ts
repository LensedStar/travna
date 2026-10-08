// English UI dictionary — single source of truth for ALL visible UI strings (Phase 1: EN only).
//
// Values below are placeholder copy. Replace with final client copy before launch.
// Do NOT hardcode visible strings in components — always read them through the helpers in `./index.ts`.
//
// i18n-ready: to add Slovenian/Russian later, create `./sl.ts` / `./ru.ts` with this SAME key set,
// register them in `./index.ts` (`ui` map + `locales`), and enable routing in `astro.config.mjs`.
// No component rewrites are required — only new dictionaries + content entries + routing.

export const en = {
  // --- Global / brand ---
  'site.name': 'Planinski dom na Travni gori', // brand — not localized
  'site.tagline': 'Cozy mountain house tagline',

  // --- Accessibility / chrome ---
  'a11y.skipToContent': 'Skip to content',
  'a11y.openMenu': 'Open menu',
  'a11y.closeMenu': 'Close menu',
  'a11y.mapTitle': 'Map to Planinski dom na Travni gori',
  'a11y.primaryNav': 'Primary navigation',
  'a11y.footerNav': 'Footer navigation',

  // --- Header / navigation ---
  'nav.home': 'Home',
  'nav.accommodation': 'Apartments',
  'nav.activities': 'Activities',
  'nav.menu': 'Menu',
  'nav.contact': 'Contact',
  'nav.book': 'Book',

  // --- Language switcher (live: EN + SL + RU) ---
  'lang.en': 'EN',
  'lang.label': 'Choose language',
  'lang.sl': 'SI',
  'lang.ru': 'RU',

  // --- Generic buttons / CTAs ---
  'cta.checkAvailability': 'Check availability',
  'cta.exploreArea': 'Explore the area',
  'cta.bookNow': 'Book now',
  'cta.viewAccommodation': 'View apartments',
  'cta.viewActivities': 'Discover activities',
  'cta.viewMenu': 'View menu',
  'cta.contactUs': 'Contact us',

  // --- Home: hero ---
  'home.hero.title': 'Planinski dom na Travni gori',
  'home.hero.subtitle': 'Where time runs slower',
  // TODO: replace with client-approved copy — atmospheric draft, makes no factual claims.
  'home.hero.intro': 'Warm wood, quiet mornings and forest air — a mountain house made for slow days, long evenings by the fire, and nothing much on the schedule.',
  'home.hero.ratingsLabel': 'Guest ratings',
  'home.hero.bookingLabel': 'Booking.com',
  'home.hero.bookingScale': 'out of 10',
  'home.hero.airbnbLabel': 'Airbnb',
  'home.hero.airbnbScale': 'out of 5',

  // --- Home: value props section ---
  'home.valueProps.title': 'Why stay with us',

  // --- Home: accommodation preview ---
  'home.accommodation.title': 'Your cozy mountain retreat',
  'home.accommodation.text': 'One short paragraph teasing the accommodation.',

  // --- Home: activities preview ---
  'home.activities.title': 'Explore the surroundings',
  'home.activities.text': 'Short intro to nearby activities.',

  // --- Home: welcome / the house (first section after the hero) ---
  'home.welcome.title': 'Cozy apartments in the heart of the forest',
  'home.welcome.lead':
    'Leave the city behind and find quiet on Travna Gora, a high mountain plateau above the Ribnica valley, covered in forest. Open meadows sit between the trees, the forest comes right up to your apartment, and the air still smells like forest, not traffic. Come to slow down, breathe deeply and explore a quiet corner of Slovenia few travelers ever find.',
  'home.welcome.imageAlt': 'Planinski dom na Travni gori — the house surrounded by forest', // MOCK — real photo alt
  'home.welcome.pill.apartments': 'Cozy apartments', // MOCK
  'home.welcome.pill.kitchen': 'Homemade kitchen', // MOCK
  'home.welcome.pill.forest': 'Forest at the doorstep', // MOCK
  'home.welcome.pill.pets': 'Pets welcome', // MOCK

  // --- Home: heritage timeline (one-family historic house) ---
  // TODO: replace with real dates & history copy from client
  'home.heritage.eyebrow': 'Our story', // MOCK
  'home.heritage.title': 'One house, many generations', // MOCK
  'home.heritage.intro':
    'Enjoy your vacation in a house that has welcomed travelers and explorers for almost 100 years — of course, with modern room comforts.',
  'home.heritage.m1.era': '1927',
  'home.heritage.m1.title': 'A lodge on the mountain', // TODO: confirm the opening year with the client (a local source dates the dom to 1958)
  'home.heritage.m1.body':
    'In 1927, the house opened as a planinski dom — a mountain lodge where hikers and travelers stopped to rest, eat, and warm up after a day on the trails.',
  'home.heritage.m1.alt': 'Archival photograph of the house in its early years, with a horse and cart out front',
  'home.heritage.m2.era': '19—', // TODO: confirm real year
  'home.heritage.m2.title': 'Long tables, full house', // MOCK
  'home.heritage.m2.body':
    'Lorem ipsum dolor sit amet — a gathering place where neighbours and wanderers paused at long outdoor tables.', // MOCK
  'home.heritage.m2.alt': 'Archival photograph of a crowd gathered at outdoor tables outside the house',
  'home.heritage.m3.era': '1969',
  'home.heritage.m3.title': 'The ski years',
  'home.heritage.m3.body':
    'By the late 1960s the slopes below the house had become a small ski centre, with a lift and wooden bungalows — winter brought whole families up the mountain for the day.',
  'home.heritage.m3.alt': 'Vintage postcard of Travna Gora: skiers on the slope below the house, and a wooden bungalow',
  'home.heritage.m4.era': '2026',
  'home.heritage.m4.title': 'The house today',
  'home.heritage.m4.body':
    'Nearly a century later, the same house is still standing — lovingly restored with modern comforts, ready to welcome you for a stay you won\'t forget.',
  'home.heritage.m4.alt': 'Modern colour photograph of the house as it stands today',

  // --- Home: apartments showcase (icon-tabbed photo slider) ---
  // TODO: replace with real apartment copy, bullets & photos from client
  'home.apartments.eyebrow': 'The apartments', // MOCK
  'home.apartments.title': 'Cozy spaces, made for slow days', // MOCK
  'home.apartments.intro':
    'Warm, characterful rooms deep in the Slovenian countryside — forest all around and home-cooked food on the table.', // MOCK
  'home.apartments.hint': 'Pick an icon to explore each one', // MOCK — shown as an on-image hint, not in the subheader
  'home.apartments.rooms.title': 'Rooms for every stay',
  'home.apartments.rooms.text':
    'Fresh, cozy rooms for groups of any size — a warm welcome for big families, couples, and solo travelers alike.',
  'home.apartments.rooms.tab': 'Rooms', // MOCK — short label for the icon tab
  'home.apartments.rooms.b1':
    'Book the whole house to yourselves — private entrance, own kitchen, sleeps 1–6.',
  'home.apartments.rooms.b2': 'Or just a room — cozy options for 1–4 guests.',
  'home.apartments.rooms.b3': 'Unwind in the wood-fired sauna — privately with family and friends, or shared with other guests.',
  'home.apartments.rooms.alt': 'A warmly lit apartment interior with wooden furniture', // MOCK — replace with real photo
  'home.apartments.slovenia.title': 'Heart of Slovenia',
  'home.apartments.slovenia.text':
    'A great location close to some of Slovenia’s best-known sights — Ljubljana and the karst caves among them, with lakes, forests and castles all within about an hour’s drive.',
  'home.apartments.slovenia.tab': 'Slovenia', // MOCK — short label for the icon tab
  'home.apartments.slovenia.b1': 'About an hour’s drive to most major sights',
  'home.apartments.slovenia.b2': 'Close to Ljubljana and the famous karst caves — Postojna and Križna jama',
  // TODO(Webline): confirm before launch — the nearby Krokar & Rajhenavski Rog beech primeval
  // forests are UNESCO-listed; naming them explicitly is an option once the client approves.
  'home.apartments.slovenia.b3': 'On the edge of some of Europe’s oldest and best-protected forests',
  'home.apartments.slovenia.alt': 'Mock exterior view of the house surrounded by the Slovenian countryside', // MOCK — replace with real photo
  'home.apartments.nature.title': 'For nature lovers',
  'home.apartments.nature.text':
    'Wake up beside one of Europe’s most beautiful forests — fall asleep to birdsong, and if you’re lucky, deer will wander by to say hello.',
  'home.apartments.nature.tab': 'Nature', // MOCK — short label for the icon tab
  'home.apartments.nature.b1': 'Breathe clean air and finally slow down from your everyday routine',
  'home.apartments.nature.b2': 'Discover why Slovenia is known as the green gem of Europe',
  'home.apartments.nature.b3': 'Spot wild bears in their natural habitat on a guided tour',
  'home.apartments.nature.alt': 'Forest and meadow surrounding the mountain house', // MOCK — replace with real photo
  'home.apartments.food.title': 'Homemade kitchen',
  'home.apartments.food.text':
    'Enjoy classic, home-cooked meals made the traditional Slovenian way — hearty, comforting dishes cooked with love.',
  'home.apartments.food.tab': 'Food', // MOCK — short label for the icon tab
  'home.apartments.food.b1': 'Traditional recipes, cooked with love',
  'home.apartments.food.b2': 'Hearty meals made from local, seasonal produce',
  'home.apartments.food.b3': 'Breakfast available on request',
  'home.apartments.food.alt': 'A rustic table set with homemade food', // MOCK — replace with real photo

  // --- Home: editorial gallery block ---
  'home.gallery.eyebrow': 'A closer look', // MOCK
  'home.gallery.title': 'The mood of the house, inside and out', // MOCK
  'home.gallery.intro':
    'A small gallery for the quiet details: warm corners, evening light, forest edges and slow breakfasts outdoors.', // MOCK
  'home.gallery.card.1': 'A warm welcome',
  'home.gallery.card.2': 'Rainbow over the house',
  'home.gallery.card.3': 'Terrace views',
  'home.gallery.card.4': 'Forest silence',
  'home.gallery.card.5': 'Winter mountain roads',
  'home.gallery.card.6': 'Fire-lit evenings',
  'home.gallery.card.7': 'Open mountain air', // MOCK
  'home.gallery.card.8': 'Long-table dinner', // MOCK
  'home.gallery.open': 'Open image', // MOCK
  'home.gallery.close': 'Close image', // MOCK
  'home.gallery.outro.title': 'Book more than an apartment', // MOCK
  'home.gallery.outro.text': 'Come for the quiet rooms, stay for the slower mornings, long-table dinners and the feeling of having somewhere to exhale.', // MOCK
  'home.gallery.outro.cta': 'Book your stay', // MOCK

  // --- Home: finding us (editorial map + scenic-route story) ---
  'home.findUs.eyebrow': 'Finding us', // MOCK
  'home.findUs.title': 'Where we are, and how to get here', // MOCK
  'home.findUs.intro':
    'Tucked away on Travna Gora in Slovenia’s Notranjska region — close enough to reach with ease, far enough to feel like another world.', // MOCK
  'home.findUs.mapTitle': 'Map showing the location of Planinski dom na Travni gori', // a11y — iframe title
  // Floating map label
  'home.findUs.pin.name': 'Planinski dom na Travni gori',
  'home.findUs.pin.address': 'Travna Gora 42, 1317 Sodražica, Slovenia',
  'home.findUs.pin.link': 'Open in Google Maps',
  // Compact travel facts (beside the map)
  'home.findUs.fact.time': '17 min from Sodražica',
  'home.findUs.fact.road': 'Forest road',
  'home.findUs.fact.parking': 'Free parking on site',
  'home.findUs.fact.winter': 'Winter tyres advised in snow',
  // Directions action
  'home.findUs.cta': 'Get directions',
  // Road-tip (centered icon + title + subtitle, with the route map beneath)
  'home.findUs.tip.title': 'The easier way up the mountain', // MOCK
  'home.findUs.tip.text': 'It is not about saving minutes — it is about a calmer drive. Take the marked route through Sodražica: it stays wide and well-kept the whole way up. The road further south is narrower and runs along a steep cliff edge, so we suggest leaving that one to the locals.',
  'home.findUs.tip.alt': 'Route map showing the easier, well-kept drive up to Planinski dom na Travni gori', // MOCK — replace with final route map
  'home.findUs.tip.zoom': 'Enlarge the route map',
  'home.findUs.tip.close': 'Close the enlarged route map',

  // --- Home: book-direct value strip ---
  'home.bookDirect.title': 'Book direct',
  'home.bookDirect.intro':
    'When you book directly with us, you get the best experience at the best price — with personal care every step of the way.', // MOCK — review claims before launch
  'home.bookDirect.benefit1Title': 'Instant confirmation',
  'home.bookDirect.benefit1Desc': 'Your stay is confirmed right away, quick and hassle-free.',
  'home.bookDirect.benefit2Title': 'Best price',
  'home.bookDirect.benefit2Desc': 'We guarantee the best price when you book directly with us.', // MOCK — best-price claim, confirm with client
  'home.bookDirect.benefit3Title': 'Direct communication',
  'home.bookDirect.benefit3Desc': 'Talk to real people who care and are here to help you.',

  // --- Accommodation page ---
  'accommodation.title': 'Apartments',
  'accommodation.description': 'Warm, atmospheric description of the house.',
  'accommodation.amenities.title': 'What you’ll find',
  'accommodation.amenities.wifi': 'Wi-Fi',
  'accommodation.amenities.parking': 'Parking',
  'accommodation.amenities.kitchen': 'Kitchen',
  'accommodation.amenities.fireplace': 'Fireplace',
  'accommodation.amenities.heating': 'Heating',
  'accommodation.amenities.terrace': 'Terrace',
  'accommodation.cta': 'Check availability',
  'accommodation.slider.label': 'Photo gallery',
  'accommodation.slider.prev': 'Previous photo',
  'accommodation.slider.next': 'Next photo',

  // --- Accommodation page: hero / intro ---
  'accommodation.hero.eyebrow': 'The house', // MOCK
  'accommodation.hero.title': 'Cozy apartments with a view of true Slovenian nature', // MOCK
  'accommodation.hero.lead':
    'High on the Travna Gora plateau, our house sits right at the edge of the forest, where the air is cool and the fog settles slowly over the trees each morning. Two cozy apartments, warmed by wood and quiet, are built for guests who come to slow down.',
  'accommodation.hero.body':
    'The drive up winds through forest before opening onto the plateau, with free parking right at the door. From the terrace, the view rolls over the treetops toward the valley below — a good place for a coffee at dawn or a glass of wine as the fog rolls in.',
  'accommodation.hero.imageAlt': 'The mountain house at Travna Gora, surrounded by forest', // MOCK — replace with real photo
  'accommodation.hero.badge.title': 'Nature', // MOCK
  'accommodation.hero.badge.sub': 'all around', // MOCK
  'accommodation.hero.fact.location': 'Travna Gora, Notranjska', // MOCK
  'accommodation.hero.fact.locationLabel': 'Where we are',
  'accommodation.hero.fact.altitude': '≈ 900 m above sea level', // MOCK — confirm real altitude
  'accommodation.hero.fact.altitudeLabel': 'Elevation',
  'accommodation.hero.fact.access': 'Free parking at the door', // MOCK
  'accommodation.hero.fact.accessLabel': 'Getting here',
  // Quick amenity pills under the intro copy.
  'accommodation.hero.pill.pets': 'Pet friendly', // MOCK
  'accommodation.hero.pill.breakfast': 'Breakfast', // MOCK
  'accommodation.hero.pill.parking': 'Free parking', // MOCK
  'accommodation.hero.pill.wifi': 'Free Wi-Fi', // MOCK

  // --- Accommodation page: bonuses / why book (MOCK) ---
  'accommodation.bonuses.eyebrow': 'Good to know', // MOCK
  'accommodation.bonuses.title': 'Little things that make the stay', // MOCK
  'accommodation.bonuses.intro':
    'Lorem ipsum dolor sit amet — a short line on the extras that come with every stay.', // MOCK
  'accommodation.bonuses.b1.title': 'Pet friendly', // MOCK
  'accommodation.bonuses.b1.text': 'Lorem ipsum — your four-legged friends are welcome here.', // MOCK
  'accommodation.bonuses.b2.title': 'Free parking', // MOCK
  'accommodation.bonuses.b2.text': 'Lorem ipsum — park right at the door, free of charge.', // MOCK
  'accommodation.bonuses.b3.title': 'Fast Wi-Fi', // MOCK
  'accommodation.bonuses.b3.text': 'Lorem ipsum — stay connected when you want to.', // MOCK
  'accommodation.bonuses.b4.title': 'Wood-fired sauna', // MOCK
  'accommodation.bonuses.b4.text': '', // intentionally unused in the compact card layout
  'accommodation.bonuses.b5.title': 'Forest at the door', // MOCK
  'accommodation.bonuses.b5.text': 'Lorem ipsum — trailheads just steps from the terrace.', // MOCK
  'accommodation.bonuses.b6.title': 'Homemade breakfast', // MOCK
  'accommodation.bonuses.b6.text': 'Lorem ipsum — a hearty start to the day, on request.', // MOCK
  'accommodation.bonuses.score.value': '8.8',
  'accommodation.bonuses.score.scale': 'out of 10',
  'accommodation.bonuses.score.label': 'Rated on Booking.com', // MOCK — confirm live score
  'accommodation.bonuses.score.logoAlt': 'Booking.com',

  // --- Accommodation page: units — houses + rooms (MOCK) ---
  'accommodation.units.eyebrow': 'Where you’ll stay', // MOCK
  'accommodation.units.title': 'Houses and rooms', // MOCK
  'accommodation.units.intro':
    'Lorem ipsum dolor sit amet — choose a whole house to yourselves, or a cozy room in the main building.', // MOCK
  // Houses group. Names, capacities and the room list are the client's own description (2026-10-08):
  // two mobile houses — no. 1 for 6 guests (three rooms, kitchen, two WCs, shower, terrace) and
  // no. 3, "house three", for 5 guests; there is no number 2 — plus the sauna, which in summer is
  // let as a mobile house for 2. The client said nothing more about house 3, so the rest of its copy
  // describes only what the client's photos show — TODO(Webline): confirm with the client.
  'accommodation.units.houses.title': 'Mobile houses',
  'accommodation.units.houses.text':
    'Two mobile houses, each one all to yourselves — Mobile house 1 for up to six guests and Mobile house 3 for up to five. In summer the sauna is also let as a mobile house for two.',
  'accommodation.units.house1.name': 'Mobile house 1',
  'accommodation.units.house1.text': 'The larger of the two: three rooms, a kitchen, two WCs, a shower and a terrace — room for up to six guests.',
  'accommodation.units.house1.capacity': 'Up to 6 persons',
  'accommodation.units.house1.size': '3 rooms · kitchen · terrace',
  'accommodation.units.house1.tag.sleeps': 'Up to 6 persons',
  'accommodation.units.house1.tag.rooms': '3 rooms',
  'accommodation.units.house1.tag.kitchen': 'Kitchen',
  'accommodation.units.house1.tag.bathroom': '2 WCs · shower',
  'accommodation.units.house1.tag.terrace': 'Terrace',
  'accommodation.units.house1.alt1': 'Mobile house 1 seen from the meadow, timber-clad, at the edge of the forest',
  'accommodation.units.house1.alt2': 'Covered wooden terrace of Mobile house 1 with a table and chairs, looking out over the meadow and the forest',
  'accommodation.units.house1.alt3': 'Living room of Mobile house 1 with a dining table, a TV and glass doors onto the terrace',
  'accommodation.units.house1.alt4': 'Kitchen of Mobile house 1 with a hob, an oven, a microwave and a fridge',
  'accommodation.units.house1.alt5': 'The pale-wood kitchen of Mobile house 1 seen from the living room',
  'accommodation.units.house3.name': 'Mobile house 3',
  'accommodation.units.house3.text': 'A bright mobile house for up to five guests, with a kitchen, a sofa corner, two lofts under the roof, a bathroom with a shower and a terrace.', // capacity: client; the rest: from the photos
  'accommodation.units.house3.capacity': 'Up to 5 persons',
  'accommodation.units.house3.size': 'Kitchen · bathroom · terrace', // from the photos
  'accommodation.units.house3.tag.sleeps': 'Up to 5 persons',
  'accommodation.units.house3.tag.kitchen': 'Kitchen', // from the photos
  'accommodation.units.house3.tag.bathroom': 'Bathroom with shower', // from the photos
  'accommodation.units.house3.tag.terrace': 'Terrace', // from the photos
  'accommodation.units.house3.alt1': 'Inside Mobile house 3: the kitchen along one wall, a dining table, a sofa and a loft at the far end',
  'accommodation.units.house3.alt2': 'Sofa corner of Mobile house 3 under a loft reached by a wooden ladder',
  'accommodation.units.house3.alt3': 'Dining table, kitchen and the stairs up to the second loft in Mobile house 3',
  'accommodation.units.house3.alt4': 'Dining table by the terrace doors in Mobile house 3, with the loft ladder in front',
  'accommodation.units.house3.alt5': 'Kitchen of Mobile house 3 with the stairs to the loft and the bathroom door beyond',
  'accommodation.units.house3.alt6': 'Bathroom of Mobile house 3 with a washbasin, a round mirror and a WC',
  'accommodation.units.house3.alt7': 'Glass shower cabin and washbasin in the bathroom of Mobile house 3',
  'accommodation.units.house3.alt8': 'Wooden terrace of Mobile house 3 with a table and chairs, in the mountain fog',
  'accommodation.units.house3.alt9': 'The wooden terrace of Mobile house 3 seen through the curtain of the glass door',
  // Rooms group — one showcase entry per room, picked with the room selector. Room numbers and guest
  // counts are the client's list (2026-10-08): 1 (also called 101) – 2, 2 – 5, 3 – 4, 4 – 5, 5 – 3,
  // 7 – 4, 9 – 6, 10 – 6, 11 – 3; the list itself lives in AccommodationUnits.astro. The client gave
  // no description per room, so the feature pills name only what that room's photos show —
  // TODO(Webline): confirm with the client.
  'accommodation.units.rooms.title': 'Rooms in the main house', // MOCK
  'accommodation.units.rooms.text':
    'Warm, wood-lined rooms under the eaves of the main house — classic mountain style, fresh and clean, each with its own private bathroom and forest or valley views.',
  'accommodation.units.rooms.choose': 'Choose a room', // label above the room selector
  'accommodation.units.rooms.name': 'Room {n}', // {n} = the room number
  'accommodation.units.rooms.capacity': 'Up to {n} persons', // {n} = number of guests
  'accommodation.units.rooms.tag.bathroom': 'Private bathroom', // from the photos
  'accommodation.units.rooms.tag.kitchen': 'Kitchen', // from the photos
  'accommodation.units.rooms.tag.kitchenette': 'Kitchenette', // from the photos
  'accommodation.units.rooms.tag.balcony': 'Balcony', // from the photos
  // Photo alt texts are built as "<room name> — <what the photo shows>".
  'accommodation.units.rooms.shot.room': 'view of the room',
  'accommodation.units.rooms.shot.beds': 'the beds',
  'accommodation.units.rooms.shot.kitchen': 'the kitchen corner',
  'accommodation.units.rooms.shot.bathroom': 'bathroom with a shower',
  'accommodation.units.rooms.shot.balcony': 'the balcony',
  'accommodation.units.rooms.shot.view': 'view from the window',
  'accommodation.units.rooms.alt': 'A wood-lined double room under the eaves with forest views', // landing's rooms slider (older mixed set in public/images/rooms/)
  'accommodation.units.capacityLabel': 'Capacity',

  // --- Accommodation page: breakfast & kitchen ---
  'accommodation.kitchen.eyebrow': 'At the table',
  'accommodation.kitchen.title': 'Breakfast & the homemade kitchen',
  'accommodation.kitchen.lead':
    'There is nothing quite like the smell of fresh bread and coffee drifting through the house in the morning. Breakfast here is homemade, unhurried, and made the way it always used to be — with local, seasonal ingredients rather than anything out of a packet.',
  'accommodation.kitchen.body':
    'Take it out to the terrace with the mountain air still cool, or linger at the table as long as you like — mornings at Travna Gora are for slowing down. And when you feel like cooking your own, our fully equipped guest kitchen is yours to use, stocked and ready whenever hunger strikes.',
  'accommodation.kitchen.imageAlt': 'A rustic table set with homemade breakfast', // MOCK — replace with real photo
  'accommodation.kitchen.point1': 'Homemade breakfast, freshly prepared every morning',
  'accommodation.kitchen.point2': 'Local, seasonal produce from the region',
  'accommodation.kitchen.point4': 'Dietary needs and allergies happily accommodated on request',
  'accommodation.kitchen.cta': 'See the menu',

  // --- Sauna (shared block: apartments page + activities page) ---
  // TODO(Webline): confirm copy with the client. The sauna is wood-fired and shared by all guests
  // — it is NOT private to a house. In summer it is let as a mobile house for two (client,
  // 2026-10-08) — said in accommodation.units.houses.text, not in this block.
  'sauna.title': 'Wood-fired sauna',
  'sauna.shortTitle': 'Sauna', // heading used where the block stands on its own (activities page)
  'sauna.body':
    'After a day in the forest there is nothing better than heat, wood and quiet. The sauna is wood-fired, the way it has always been here — give it time to warm through, then step out into the cool mountain air.',
  'sauna.point1': 'A modern sauna with everything you need',
  'sauna.point2': 'Unwind after a long day',
  'sauna.point3': 'Good for body and mind',
  // Alt texts of the sauna photos, one per photo — the order is set in components/sections/saunaPhotos.ts.
  'sauna.photo.room': 'Inside the wood-fired sauna: timber benches in warm light beside the stove',
  'sauna.photo.benches': 'The sauna stove with its basket of stones beside the two-tier wooden benches',
  'sauna.photo.stove': 'The sauna stove piled with stones behind a wooden guard rail',
  'sauna.photo.door': 'The wood-lined sauna with its glass door and bucket',
  'sauna.photo.shower': 'The shower beside the sauna with a wooden dousing bucket',
  'sauna.photo.lounge': 'The rest room of the sauna house with a sofa, a round table and rattan chairs',
  'sauna.photo.table': 'Round table and rattan chairs in front of the corner sofa in the rest room',
  'sauna.photo.terrace': 'Covered wooden terrace of the sauna house with a table, chairs and the entrance door',
  'sauna.photo.tub': 'Round plunge tub set into the floor of the terrace',
  'sauna.photo.chairs': 'Two rattan chairs on the terrace, looking over the meadow to the forest',
  'sauna.photo.view': 'View from the terrace table over the roofs to the forest in the fog',
  'sauna.photo.exterior': 'The sauna house, a timber cabin with a covered terrace at the edge of the forest',
  'sauna.photo.evening': 'The covered terrace of the sauna house in the evening, lamps lit over the table and chairs',

  // --- Testimonials (real guest reviews, translated from Booking.com) ---
  'testimonials.score.value': '8.8',
  'testimonials.score.label': 'Excellent',
  'testimonials.score.meta': 'Based on 400 reviews on Booking.com',
  'testimonials.eyebrow': 'Guest voices', // MOCK
  'testimonials.title': 'What guests take home with them', // MOCK
  'testimonials.intro':
    'Don’t just take our word for it — here’s what guests had to say after their stay at Travna Gora.',
  'testimonials.t1.quote':
    'We arrived very late and were still welcomed and checked in — a wonderful place. A special thank you for the delicious breakfast! Beautiful views.',
  'testimonials.t1.author': 'Ayura7',
  'testimonials.t1.meta': 'Solo traveller, stayed in June',
  'testimonials.t2.quote':
    'Wonderful fresh air and a perfect place to relax — we stayed in the new room and everything was excellent. Don’t miss the dumplings and mushroom soup!',
  'testimonials.t2.author': 'Yevheniia',
  'testimonials.t2.meta': 'Family stay, in August',
  'testimonials.t3.quote':
    'We loved everything, and this wasn’t our first stay. Many thanks to the hosts for their friendly welcome and warm hospitality.',
  'testimonials.t3.author': 'Oleksii',
  'testimonials.t3.meta': 'Returning family guest, stayed in January',
  'testimonials.t4.quote':
    'A wonderfully rich, peaceful place, far away from civilization.',
  'testimonials.t4.author': 'Ievgen',
  'testimonials.t4.meta': 'Family stay, in September',
  'testimonials.t5.quote':
    'A wonderful place to relax in a quiet, peaceful spot. Beautiful forest, comfortable conditions in the cottage, and very hospitable hosts. The food was delicious — especially the dumplings, pelmeni, mushroom soup and pancakes. Both we and the kids were absolutely delighted.',
  'testimonials.t5.author': 'Igor',
  'testimonials.t5.meta': 'Family stay, in September',
  'testimonials.t6.quote':
    'A wonderful place in the forest — a pity we only booked for one night.',
  'testimonials.t6.author': 'Olga',
  'testimonials.t6.meta': 'Family stay, in July',
  'testimonials.ratingLabel': 'Rated 5 out of 5', // a11y label for the star row
  'testimonials.slider.label': 'Guest reviews',
  'testimonials.slider.prev': 'Previous review',
  'testimonials.slider.next': 'Next review',

  // --- Activities page — "Discover Slovenia from Travna Gora" ---
  // Real orientational content (nearby sights + approximate drive times supplied by the client).
  // Drive times are approximate — confirm before launch.
  'activities.eyebrow': 'Around Travna Gora',
  'activities.title': 'Discover Slovenia from Travna Gora',
  'activities.intro':
    'Travna Gora is a quiet place to slow down — yet from this forested corner of Slovenia many of the country’s best-loved sights are an easy day trip away. Wake to birdsong and forest air, then set out for caves, castles, lakes and the capital, most within about an hour’s drive.',
  'activities.hero.imageAlt': 'Forest landscape surrounding Travna Gora', // MOCK photo — TODO(Webline): swap alt with real photo
  // Badge figure restates the approximate drive time already in the intro copy — confirm before launch.
  'activities.hero.badge.title': '≈ 1 hour',
  'activities.hero.badge.sub': 'to most sights',
  // Highlight pills — the sight types named in the intro copy.
  'activities.hero.pill.caves': 'Karst caves',
  'activities.hero.pill.castles': 'Castles',
  'activities.hero.pill.lakes': 'Lakes & forests',
  'activities.hero.pill.capital': 'Ljubljana',

  // Doorstep activities — image cards rendered from the `activities` content collection.
  'activities.doorstep.eyebrow': 'Right on the doorstep',
  'activities.doorstep.title': 'Straight out the door',
  'activities.doorstep.intro':
    'You don’t have to go far. Trails, forest tracks and viewpoints begin at Travna Gora itself and around the nearby mountain hut Koča na Kamnem Griču.',

  // Day-trip destinations — cards rendered from the `destinations` content collection.
  'activities.trips.eyebrow': 'Easy day trips',
  'activities.trips.title': 'Slovenia within an hour’s drive',
  'activities.trips.intro':
    'Set between Ljubljana and Slovenia’s famous karst caves, Travna Gora makes an ideal base for exploring — most of these highlights are well under an hour away.',
  'activities.trips.driveLabel': 'Approx. drive', // label prefix on each distance badge
  'activities.trips.directions': 'Get directions', // link out to Google Maps, opens in a new tab

  // Day-trip sub-section headings (grouping the `destinations` collection by `section`).
  'activities.trips.section.forests': 'Forest walks',
  'activities.trips.section.caves': 'Caves',
  'activities.trips.section.wildlife': 'Wildlife',
  'activities.trips.section.history': 'History & castles',

  // Why guests love it — benefits list (icon + text).
  'activities.why.eyebrow': 'Why guests love it',
  'activities.why.title': 'A quiet corner, close to everything',
  'activities.why.b1': 'Complete peace, with none of the city noise',
  'activities.why.b2': 'On the edge of some of Europe’s largest forests',
  'activities.why.b3': 'A chance to see brown bears in the wild',
  'activities.why.b4': 'Set between Ljubljana and the karst cave region',

  // --- Menu page ---
  'menu.title': 'Menu',
  'menu.intro': 'Home-cooked dishes made with local produce, served in the house dining room.', // MOCK
  'menu.hero.eyebrow': 'From our kitchen', // MOCK
  'menu.hero.lead':
    'Everything here is cooked in the house, the way it has always been done — family recipes, local and seasonal produce, and nothing out of a packet. Mornings start with a homemade breakfast; later the kitchen turns to warming soups and hearty mountain mains, with something sweet to finish.', // TODO(Webline): confirm meal times & dish claims with the client
  'menu.hero.imageAlt': 'The house dining room, set for a meal', // MOCK — real photo, alt TODO(Webline)
  'menu.hero.badge.title': 'Homemade', // MOCK
  'menu.hero.badge.sub': 'family recipes', // MOCK
  'menu.hero.pill.breakfast': 'Breakfast',
  'menu.hero.pill.mains': 'Hearty mains',
  'menu.hero.pill.soups': 'Soups & salads',
  'menu.hero.pill.desserts': 'Homemade desserts',
  'menu.pdf.title': 'Full menu (PDF)',
  'menu.pdf.download': 'Download menu (PDF)',
  'menu.pdf.fallback': 'Open the menu in a new tab',
  'menu.price': 'Price',
  'menu.legend.title': 'Allergens',
  'menu.legend.note': 'Please inform your server of any allergies or dietary restrictions.',

  // --- Contact page + form ---
  'contact.title': 'Contact',
  'contact.intro': 'Get in touch with us.',
  'contact.details.title': 'Contact details',
  'contact.form.name': 'Name',
  'contact.form.email': 'Email',
  'contact.form.phone': 'Phone',
  'contact.form.checkin': 'Check-in',
  'contact.form.checkout': 'Check-out',
  'contact.form.message': 'Message',
  'contact.form.consent': 'I agree to the privacy policy.',
  'contact.form.submit': 'Send message',
  'contact.form.required': 'This field is required.',
  'contact.form.invalidEmail': 'Please enter a valid email.',
  'contact.form.consentRequired': 'Please accept the privacy policy.',
  'contact.form.honeypot': 'Do not fill this out if you are human', // honeypot label (CSS-hidden anti-spam)

  // --- Thank-you page ---
  'thankYou.title': 'Thank you',
  'thankYou.text': 'We received your message and will reply soon.',
  'thankYou.backHome': 'Back to home',

  // --- Booking page (Bentral) ---
  'booking.title': 'Book your stay',
  'booking.intro': 'Short intro above the reservation widget.',
  'booking.widgetTitle': 'Reservation system', // iframe title — a11y
  'booking.placeholder': 'Reservation widget will appear here.', // shown until Bentral embed is pasted

  // --- Hidden advertising landing (/social) ---
  // The page social profiles and ads link to: hero → the place → rooms → atmosphere → sauna →
  // activities → restaurant → reviews → reservation widget. It is built from the blocks of the other
  // pages but carries its own copy: every text worded for the landing lives here, so rewriting it
  // never changes another page. Only short labels that read the same everywhere are still shared
  // (home.welcome.pill.apartments / .kitchen, accommodation.units.eyebrow, accommodation.hero.pill.*,
  // sauna.title, menu.hero.pill.breakfast / .soups, cta.viewActivities, testimonials.score.* and the
  // reviews themselves, home.bookDirect.benefit*Title).
  // The Russian landing copy was supplied as final text (2026-10-07). EN and SL still carry the
  // wording of the pages the blocks come from, plus the earlier drafts — TODO(Webline): replace
  // with the EN / SL landing copy before running campaigns. "About an hour from Ljubljana" restates
  // the client-supplied drive time (≈ 55–60 min, destinations collection).
  'lp.meta.description':
    'A mountain house in the forest, about an hour from Ljubljana: cozy apartments, a wood-fired sauna and home-cooked food. Check availability and book directly.', // also the link-preview text when the page is shared
  'lp.cta': 'Check availability', // every booking CTA on the landing
  'lp.hero.title': 'Forest escape on Travna Gora',
  'lp.hero.subtitle': 'Where time runs slower', // same wording as home.hero.subtitle
  'lp.hero.intro':
    'Cozy apartments, a wood-fired sauna and home-cooked food — on a forest plateau about an hour from Ljubljana.',
  // The place — the home welcome block under the landing's own copy.
  'lp.place.title': 'Cozy apartments in the heart of the forest', // same wording as home.welcome.title
  'lp.place.text':
    'Leave the city behind and find quiet on Travna Gora, a high mountain plateau above the Ribnica valley, covered in forest. Open meadows sit between the trees, the forest comes right up to your apartment, and the air still smells like forest, not traffic. Come to slow down, breathe deeply and explore a quiet corner of Slovenia few travelers ever find.', // same wording as home.welcome.lead
  'lp.place.pill.nature': 'Forest at the doorstep', // same wording as home.welcome.pill.forest
  // Rooms row.
  'lp.stay.title': 'Rooms for every stay', // same wording as home.apartments.rooms.title
  'lp.stay.text':
    'Fresh, cozy rooms for groups of any size — a warm welcome for big families, couples, and solo travelers alike.', // same wording as home.apartments.rooms.text
  'lp.stay.point1': 'Book the whole house to yourselves — private entrance, own kitchen, sleeps 1–6.', // same wording as home.apartments.rooms.b1
  'lp.stay.point2': 'Or just a room — cozy options for 1–4 guests.', // same wording as home.apartments.rooms.b2
  'lp.stay.alt.balcony': 'Wooden balcony of the main house looking out over the forest',
  'lp.stay.alt.attic': 'Attic room with a double bed and a skylight',
  'lp.stay.alt.bathroom': 'Private bathroom with a shower',
  // Friendly-atmosphere block (LandingAtmosphere.astro). TODO(client): draft text, and the alts
  // describe the stand-in photos — rewrite both when the client's own photos arrive.
  'lp.atmosphere.title': 'A friendly atmosphere',
  'lp.atmosphere.text':
    'Guests keep writing to us about the same thing: you quickly stop feeling like a visitor here. The hosts are always close by, there is room at the table for everyone, and evenings run long over food and talk.', // MOCK
  'lp.atmosphere.alt.1': 'A rainbow over the house and the meadow in front of it', // MOCK — stand-in photo
  'lp.atmosphere.alt.2': 'Tables and chairs on the terrace, looking out over the meadow and the forest', // MOCK — stand-in photo
  'lp.atmosphere.alt.3': 'People out on the sunlit meadow below the houses', // MOCK — stand-in photo
  'lp.atmosphere.alt.4': 'Picnic table on the meadow, with mist lying under the forest', // MOCK — stand-in photo
  'lp.atmosphere.alt.5': 'A big shade tree, picnic tables and the wooden welcome sign on the meadow beside the house', // MOCK — stand-in photo
  'lp.atmosphere.alt.6': 'A fire burning in the stone fireplace of the house', // MOCK — stand-in photo
  // Sauna row. A blank line in the text starts a new paragraph.
  'lp.sauna.text':
    'After a day in the forest there is nothing better than heat, wood and quiet. The sauna is wood-fired, the way it has always been here — give it time to warm through, then step out into the cool mountain air.', // same wording as sauna.body
  'lp.sauna.point1': 'A modern sauna with everything you need', // same wording as sauna.point1
  'lp.sauna.point2': 'Unwind after a long day', // same wording as sauna.point2
  'lp.sauna.point3': 'Good for body and mind', // same wording as sauna.point3
  // Activities teaser (LandingActivities.astro): heading, a short intro and four tiles — a name and
  // one line each. The photos come from the activities / destinations collections.
  'lp.activities.eyebrow': 'Around Travna Gora', // same wording as activities.eyebrow
  'lp.activities.title': 'Explore the surroundings', // same wording as home.activities.title
  'lp.activities.intro':
    'Nature starts right at the doorstep. From here you can set off on a walk through the forest, cycle around the area or head out to the natural sights of the region.', // translated from the Russian landing copy — TODO(Webline): review
  'lp.activities.hiking.title': 'Hiking & viewpoints',
  'lp.activities.hiking.text': 'Walking routes and forest trails start right next to the house.', // translated from the Russian landing copy — TODO(Webline): review
  'lp.activities.cycling.title': 'Cycling the forest trails',
  'lp.activities.cycling.text': 'Quiet forest roads are ideal for cycling, away from busy traffic.', // translated from the Russian landing copy — TODO(Webline): review
  'lp.activities.bears.title': 'Brown bear watching (Kočevsko)',
  'lp.activities.bears.text': 'About 20–30 minutes by car.', // translated from the Russian landing copy — TODO(Webline): review
  'lp.activities.cave.title': 'Križna Cave (Cross Cave)',
  'lp.activities.cave.text': 'One of the well-known karst caves of Slovenia — about a 40-minute drive.', // translated from the Russian landing copy — TODO(Webline): review
  // Restaurant row.
  'lp.restaurant.eyebrow': 'From our kitchen', // same wording as menu.hero.eyebrow
  'lp.restaurant.title': 'A restaurant with home cooking',
  'lp.restaurant.text':
    'Everything here is cooked in the house, the way it has always been done — family recipes, local and seasonal produce, and nothing out of a packet. Mornings start with a homemade breakfast; later the kitchen turns to warming soups and hearty mountain mains, with something sweet to finish.', // same wording as menu.hero.lead
  'lp.restaurant.pill.mains': 'Hearty mains', // same wording as menu.hero.pill.mains
  'lp.restaurant.favorites': 'Guest favorites', // heads the dishes flagged `featured` in the menu collection
  'lp.restaurant.imageAlt': 'A plate of home-cooked food from the house kitchen',
  // Guest reviews — the shared Testimonials block under the landing's own heading.
  'lp.reviews.title': 'What guests take home with them', // same wording as testimonials.title
  'lp.reviews.intro':
    'Don’t just take our word for it — here’s what guests had to say after their stay at Travna Gora.', // same wording as testimonials.intro
  // Reservation (LandingReservation.astro).
  'lp.reservation.title': 'Book your stay', // same wording as booking.title
  'lp.reservation.intro':
    'Pick your dates and book directly with us — the house, the sauna and a warm meal are waiting.',
  'lp.reservation.help': 'Questions before you book? Call or write to us:',

  // --- Footer ---
  'footer.contact.title': 'Contact',
  'footer.contact.phone': '+386 0 000 000',
  'footer.contact.email': 'info@example.com',
  'footer.social.title': 'Follow us',
  'footer.social.instagram': 'Instagram', // brand name (link label / aria-label)
  'footer.social.facebook': 'Facebook', // brand name (link label / aria-label)
  // Footer navigation (mirrors the header nav; privacy policy is footer-only)
  'footer.nav.accommodation': 'Apartments',
  'footer.nav.activities': 'Activities',
  'footer.nav.contact': 'Contact & booking',
  'footer.nav.book': 'Book now',
  'footer.nav.privacy': 'Privacy policy',
  'footer.legal.title': 'Legal',
  'footer.legal.entity': 'Planinski dom na Travni gori d.o.o.', // MOCK — replace with real legal entity
  'footer.legal.address': 'Street 1, 0000 City', // MOCK — replace with real address
  'footer.legal.country': 'Slovenia', // MOCK
  'footer.legal.taxId': 'VAT ID: SI00000000', // MOCK — replace with real VAT/DDV number
  'footer.directions': 'Short “how to reach us” note.',
  'footer.rights': 'All rights are reserved',
  'footer.credit.text': 'Design & Developed by',
  'footer.credit.company': 'Webline', // agency name — not localized

  // --- Cookie consent (GA4 gate) ---
  'consent.message': 'We use cookies for analytics.',
  'consent.accept': 'Accept',
  'consent.decline': 'Decline',
} as const;

export default en;

