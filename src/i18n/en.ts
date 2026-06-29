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
  'site.name': 'Dom na Travni gori', // brand — not localized
  'site.tagline': 'Cozy mountain house tagline',

  // --- Accessibility / chrome ---
  'a11y.skipToContent': 'Skip to content',
  'a11y.openMenu': 'Open menu',
  'a11y.closeMenu': 'Close menu',
  'a11y.mapTitle': 'Map to Dom na Travni gori',
  'a11y.primaryNav': 'Primary navigation',

  // --- Header / navigation ---
  'nav.home': 'Home',
  'nav.accommodation': 'Accommodation',
  'nav.activities': 'Activities',
  'nav.menu': 'Menu',
  'nav.contact': 'Contact',
  'nav.book': 'Book',

  // --- Language switcher (non-functional stub in Phase 1) ---
  'lang.current': 'EN',
  'lang.label': 'Choose language',
  'lang.si': 'SI',
  'lang.ru': 'RU',

  // --- Generic buttons / CTAs ---
  'cta.checkAvailability': 'Check availability',
  'cta.exploreArea': 'Explore the area',
  'cta.bookNow': 'Book now',
  'cta.viewAccommodation': 'View accommodation',
  'cta.viewActivities': 'Discover activities',
  'cta.viewMenu': 'View menu',
  'cta.contactUs': 'Contact us',

  // --- Home: hero ---
  'home.hero.eyebrow': 'Welcome',
  'home.hero.title': 'Dom na Travni gori',
  'home.hero.subtitle': 'Where time runs slower',
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

  // --- Home: explore the Dolenjska region (real regional content) ---
  'home.region.title': 'Discover the Dolenjska region',
  'home.region.intro':
    'Our doorstep opens onto Dolenjska — one of Slovenia’s gentlest corners, where the emerald Krka river winds between vineyard hills, thermal spa towns and quiet medieval streets.',
  'home.region.mapAlt': 'Map of Slovenia with the Dolenjska region highlighted',
  'home.region.item.krka': 'The emerald Krka river — paddling, swimming and riverside walks',
  'home.region.item.spas': 'Thermal spas at Dolenjske Toplice & Šmarješke Toplice',
  'home.region.item.wine': 'Vineyard wine roads and traditional “zidanica” cellars',
  'home.region.item.towns': 'Historic Novo mesto and the region’s castles',
  'home.region.item.cycling': 'Marked cycling routes through rolling countryside',
  'home.region.item.hiking': 'Hiking trails and panoramic viewpoints',

  // --- Home: heritage timeline (one-family historic house) ---
  // TODO: replace with real dates & history copy from client
  'home.heritage.eyebrow': 'Our story', // MOCK
  'home.heritage.title': 'One house, one family, many generations', // MOCK
  'home.heritage.intro':
    'Lorem ipsum dolor sit amet — a few warm lines on a mountain house kept by the same family across the years, from its earliest days to today.', // MOCK
  'home.heritage.m1.era': '1956',
  'home.heritage.m1.body':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit — the early years, when the house first stood on the mountain.', // MOCK
  'home.heritage.m1.alt': 'Archival photograph of the house in its early years, with a horse and cart out front',
  'home.heritage.m2.era': '19—', // TODO: confirm real year
  'home.heritage.m2.body':
    'Lorem ipsum dolor sit amet — a gathering place where neighbours and wanderers paused at long outdoor tables.', // MOCK
  'home.heritage.m2.alt': 'Archival photograph of a crowd gathered at outdoor tables outside the house',
  'home.heritage.m3.era': '1976',
  'home.heritage.m3.body':
    'Lorem ipsum dolor sit amet, consectetur adipiscing — mid-century days, when the first cars wound up the mountain road.', // MOCK
  'home.heritage.m3.alt': 'Mid-century archival photograph of vintage cars parked outside the house',
  'home.heritage.m4.era': '2026',
  'home.heritage.m4.body':
    'Lorem ipsum dolor sit amet — the same house today, still cared for by the same family, ready to welcome you.', // MOCK
  'home.heritage.m4.alt': 'Modern colour photograph of the house as it stands today',

  // --- Home: apartments showcase (icon-tabbed photo slider) ---
  // TODO: replace with real apartment copy, bullets & photos from client
  'home.apartments.eyebrow': 'The apartments', // MOCK
  'home.apartments.title': 'Cozy spaces, made for slow days', // MOCK
  'home.apartments.intro':
    'Warm, characterful apartments sized just right — whether you arrive as a family or as two. Pick an icon to explore each one.', // MOCK
  'home.apartments.hint': 'Select an icon to switch apartments', // MOCK
  'home.apartments.family.title': 'Right for families',
  'home.apartments.family.text':
    'Lorem ipsum — room to spread out, with cozy corners the little ones make their own.', // MOCK
  'home.apartments.family.tab': 'Families', // MOCK — short label for the icon tab
  'home.apartments.family.b1': 'Lorem ipsum — sleeps up to N guests', // MOCK
  'home.apartments.family.b2': 'Lorem ipsum — separate sleeping areas', // MOCK
  'home.apartments.family.b3': 'Lorem ipsum — space for little ones to play', // MOCK
  'home.apartments.family.alt': 'A warmly lit family apartment interior with wooden furniture', // MOCK — replace with real photo
  'home.apartments.couples.title': 'Just for two',
  'home.apartments.couples.text':
    'Lorem ipsum — an intimate retreat for couples, all soft light and quiet evenings.', // MOCK
  'home.apartments.couples.tab': 'Couples', // MOCK — short label for the icon tab
  'home.apartments.couples.b1': 'Lorem ipsum — snug double bedroom', // MOCK
  'home.apartments.couples.b2': 'Lorem ipsum — quiet, private setting', // MOCK
  'home.apartments.couples.b3': 'Lorem ipsum — forest views from the window', // MOCK
  'home.apartments.couples.alt': 'A snug apartment for two with a window onto the forest', // MOCK — replace with real photo
  'home.apartments.nature.title': 'For nature lovers',
  'home.apartments.nature.text':
    'Lorem ipsum — forest at the doorstep, fog over the meadow, birdsong instead of traffic.', // MOCK
  'home.apartments.nature.tab': 'Nature', // MOCK — short label for the icon tab
  'home.apartments.nature.b1': 'Lorem ipsum — trailheads steps from the door', // MOCK
  'home.apartments.nature.b2': 'Lorem ipsum — meadow and forest all around', // MOCK
  'home.apartments.nature.b3': 'Lorem ipsum — dark skies for stargazing', // MOCK
  'home.apartments.nature.alt': 'Forest and meadow surrounding the mountain house', // MOCK — replace with real photo
  'home.apartments.kitchen.title': 'Homemade kitchen',
  'home.apartments.kitchen.text':
    'Lorem ipsum — a homemade kitchen serving excellent, hearty food made from local produce.', // MOCK
  'home.apartments.kitchen.tab': 'Kitchen', // MOCK — short label for the icon tab
  'home.apartments.kitchen.b1': 'Lorem ipsum — hearty home-cooked meals', // MOCK
  'home.apartments.kitchen.b2': 'Lorem ipsum — made with local produce', // MOCK
  'home.apartments.kitchen.b3': 'Lorem ipsum — breakfast on request', // MOCK
  'home.apartments.kitchen.alt': 'A rustic table set with homemade food', // MOCK — replace with real photo

  // --- Home: editorial gallery block ---
  'home.gallery.eyebrow': 'A closer look', // MOCK
  'home.gallery.title': 'The mood of the house, inside and out', // MOCK
  'home.gallery.intro':
    'A small gallery for the quiet details: warm corners, evening light, forest edges and slow breakfasts outdoors.', // MOCK
  'home.gallery.card.1': 'Warm interiors', // MOCK
  'home.gallery.card.2': 'Fire-lit evenings', // MOCK
  'home.gallery.card.3': 'Forest silence', // MOCK
  'home.gallery.card.4': 'Terrace mornings', // MOCK
  'home.gallery.card.5': 'House on the hill', // MOCK
  'home.gallery.card.6': 'Quiet bedroom', // MOCK
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
  'home.findUs.mapTitle': 'Map showing the location of Dom na Travni gori', // a11y — iframe title
  // Floating map label
  'home.findUs.pin.name': 'Dom na Travni gori',
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
  'home.findUs.tip.title': 'The quicker way up the mountain', // MOCK
  'home.findUs.tip.text': 'Lorem ipsum — a short note on why this approach is the faster one.', // MOCK — explain why this route is faster
  'home.findUs.tip.alt': 'Route map showing the faster drive up to Dom na Travni gori', // MOCK — replace with final route map

  // --- Home: book-direct value strip ---
  'home.bookDirect.title': 'Book direct',
  'home.bookDirect.benefit1': 'Instant confirmation',
  'home.bookDirect.benefit2': 'Best price',
  'home.bookDirect.benefit3': 'Direct communication',

  // --- Accommodation page ---
  'accommodation.title': 'Accommodation',
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

  // --- Activities page ---
  'activities.title': 'Activities & surroundings',
  'activities.intro': 'Intro about the Notranjska region.',

  // --- Menu page ---
  'menu.title': 'Menu',
  'menu.intro': 'Short intro to the menu.',
  'menu.pdf.title': 'Full menu (PDF)',
  'menu.pdf.download': 'Download menu (PDF)',
  'menu.pdf.fallback': 'Open the menu in a new tab',
  'menu.price': 'Price',

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

  // --- Hidden advertising landing (/lp) ---
  'lp.hero.title': 'Special offer headline',
  'lp.hero.subtitle': 'Short supporting line.',
  'lp.reason1': 'Reason to book #1',
  'lp.reason2': 'Reason to book #2',
  'lp.reason3': 'Reason to book #3',
  'lp.socialProof': 'Social proof / testimonial.',
  'lp.cta': 'Book your stay',

  // --- Footer ---
  'footer.contact.title': 'Contact',
  'footer.contact.phone': '+386 0 000 000',
  'footer.contact.email': 'info@example.com',
  'footer.social.title': 'Follow us',
  'footer.social.instagram': 'Instagram', // brand name (link label)
  'footer.social.facebook': 'Facebook', // brand name (link label)
  'footer.legal.title': 'Legal',
  'footer.legal.entity': 'Dom na TRAVNI GORI d.o.o.',
  'footer.legal.address': 'Street 1, 0000 City, Slovenia',
  'footer.directions': 'Short “how to reach us” note.',
  'footer.rights': 'All rights reserved.',

  // --- Cookie consent (GA4 gate) ---
  'consent.message': 'We use cookies for analytics.',
  'consent.accept': 'Accept',
  'consent.decline': 'Decline',
} as const;

export default en;

