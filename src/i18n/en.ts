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
  'home.hero.title': 'Where time flows slower',
  'home.hero.subtitle': 'Short atmospheric subhead about the mountain house.',

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
