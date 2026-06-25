// English UI dictionary — single source of truth for ALL visible UI strings (Phase 1: EN only).
//
// [MOCK]: every value below is placeholder copy. TODO: replace with final client copy before launch.
// Do NOT hardcode visible strings in components — always read them through the helpers in `./index.ts`.
//
// i18n-ready: to add Slovenian/Russian later, create `./sl.ts` / `./ru.ts` with this SAME key set,
// register them in `./index.ts` (`ui` map + `locales`), and enable routing in `astro.config.mjs`.
// No component rewrites are required — only new dictionaries + content entries + routing.

export const en = {
  // --- Global / brand ---
  'site.name': 'Dom na Travni gori', // brand — not localized
  'site.tagline': '[MOCK] Cozy mountain house tagline', // TODO

  // --- Accessibility / chrome ---
  'a11y.skipToContent': '[MOCK] Skip to content', // TODO
  'a11y.openMenu': '[MOCK] Open menu', // TODO
  'a11y.closeMenu': '[MOCK] Close menu', // TODO
  'a11y.mapTitle': '[MOCK] Map to Dom na Travni gori', // TODO
  'a11y.primaryNav': '[MOCK] Primary navigation', // TODO

  // --- Header / navigation ---
  'nav.home': '[MOCK] Home', // TODO
  'nav.accommodation': '[MOCK] Accommodation', // TODO
  'nav.activities': '[MOCK] Activities', // TODO
  'nav.menu': '[MOCK] Menu', // TODO
  'nav.contact': '[MOCK] Contact', // TODO
  'nav.book': '[MOCK] Book', // TODO

  // --- Language switcher (non-functional stub in Phase 1) ---
  'lang.current': 'EN',
  'lang.label': '[MOCK] Choose language', // TODO
  'lang.si': 'SI',
  'lang.ru': 'RU',

  // --- Generic buttons / CTAs ---
  'cta.checkAvailability': '[MOCK] Check availability', // TODO
  'cta.exploreArea': '[MOCK] Explore the area', // TODO
  'cta.bookNow': '[MOCK] Book now', // TODO
  'cta.viewAccommodation': '[MOCK] View accommodation', // TODO
  'cta.viewActivities': '[MOCK] Discover activities', // TODO
  'cta.viewMenu': '[MOCK] View menu', // TODO
  'cta.contactUs': '[MOCK] Contact us', // TODO

  // --- Home: hero ---
  'home.hero.title': '[MOCK] Where time flows slower', // TODO
  'home.hero.subtitle': '[MOCK] Short atmospheric subhead about the mountain house.', // TODO

  // --- Home: value props section ---
  'home.valueProps.title': '[MOCK] Why stay with us', // TODO

  // --- Home: accommodation preview ---
  'home.accommodation.title': '[MOCK] Your cozy mountain retreat', // TODO
  'home.accommodation.text': '[MOCK] One short paragraph teasing the accommodation.', // TODO

  // --- Home: activities preview ---
  'home.activities.title': '[MOCK] Explore the surroundings', // TODO
  'home.activities.text': '[MOCK] Short intro to nearby activities.', // TODO

  // --- Home: book-direct value strip ---
  'home.bookDirect.title': '[MOCK] Book direct', // TODO
  'home.bookDirect.benefit1': '[MOCK] Instant confirmation', // TODO
  'home.bookDirect.benefit2': '[MOCK] Best price', // TODO
  'home.bookDirect.benefit3': '[MOCK] Direct communication', // TODO

  // --- Accommodation page ---
  'accommodation.title': '[MOCK] Accommodation', // TODO
  'accommodation.description': '[MOCK] Warm, atmospheric description of the house.', // TODO
  'accommodation.amenities.title': '[MOCK] What you’ll find', // TODO
  'accommodation.amenities.wifi': '[MOCK] Wi-Fi', // TODO
  'accommodation.amenities.parking': '[MOCK] Parking', // TODO
  'accommodation.amenities.kitchen': '[MOCK] Kitchen', // TODO
  'accommodation.amenities.fireplace': '[MOCK] Fireplace', // TODO
  'accommodation.amenities.heating': '[MOCK] Heating', // TODO
  'accommodation.amenities.terrace': '[MOCK] Terrace', // TODO
  'accommodation.cta': '[MOCK] Check availability', // TODO
  'accommodation.slider.label': '[MOCK] Photo gallery', // TODO
  'accommodation.slider.prev': '[MOCK] Previous photo', // TODO
  'accommodation.slider.next': '[MOCK] Next photo', // TODO

  // --- Activities page ---
  'activities.title': '[MOCK] Activities & surroundings', // TODO
  'activities.intro': '[MOCK] Intro about the Notranjska region.', // TODO

  // --- Menu page ---
  'menu.title': '[MOCK] Menu', // TODO
  'menu.intro': '[MOCK] Short intro to the menu.', // TODO
  'menu.pdf.title': '[MOCK] Full menu (PDF)', // TODO
  'menu.pdf.download': '[MOCK] Download menu (PDF)', // TODO
  'menu.pdf.fallback': '[MOCK] Open the menu in a new tab', // TODO
  'menu.price': '[MOCK] Price', // TODO

  // --- Contact page + form ---
  'contact.title': '[MOCK] Contact', // TODO
  'contact.intro': '[MOCK] Get in touch with us.', // TODO
  'contact.details.title': '[MOCK] Contact details', // TODO
  'contact.form.name': '[MOCK] Name', // TODO
  'contact.form.email': '[MOCK] Email', // TODO
  'contact.form.phone': '[MOCK] Phone', // TODO
  'contact.form.checkin': '[MOCK] Check-in', // TODO
  'contact.form.checkout': '[MOCK] Check-out', // TODO
  'contact.form.message': '[MOCK] Message', // TODO
  'contact.form.consent': '[MOCK] I agree to the privacy policy.', // TODO
  'contact.form.submit': '[MOCK] Send message', // TODO
  'contact.form.required': '[MOCK] This field is required.', // TODO
  'contact.form.invalidEmail': '[MOCK] Please enter a valid email.', // TODO
  'contact.form.consentRequired': '[MOCK] Please accept the privacy policy.', // TODO

  // --- Thank-you page ---
  'thankYou.title': '[MOCK] Thank you', // TODO
  'thankYou.text': '[MOCK] We received your message and will reply soon.', // TODO
  'thankYou.backHome': '[MOCK] Back to home', // TODO

  // --- Booking page (Bentral) ---
  'booking.title': '[MOCK] Book your stay', // TODO
  'booking.intro': '[MOCK] Short intro above the reservation widget.', // TODO
  'booking.widgetTitle': '[MOCK] Reservation system', // TODO (iframe title — a11y)
  'booking.placeholder': '[MOCK] Reservation widget will appear here.', // TODO (shown until Bentral embed is pasted)

  // --- Hidden advertising landing (/lp) ---
  'lp.hero.title': '[MOCK] Special offer headline', // TODO
  'lp.hero.subtitle': '[MOCK] Short supporting line.', // TODO
  'lp.reason1': '[MOCK] Reason to book #1', // TODO
  'lp.reason2': '[MOCK] Reason to book #2', // TODO
  'lp.reason3': '[MOCK] Reason to book #3', // TODO
  'lp.socialProof': '[MOCK] Social proof / testimonial.', // TODO
  'lp.cta': '[MOCK] Book your stay', // TODO

  // --- Footer ---
  'footer.contact.title': '[MOCK] Contact', // TODO
  'footer.contact.phone': '[MOCK] +386 0 000 000', // TODO
  'footer.contact.email': '[MOCK] info@example.com', // TODO
  'footer.social.title': '[MOCK] Follow us', // TODO
  'footer.social.instagram': 'Instagram', // brand name (link label)
  'footer.social.facebook': 'Facebook', // brand name (link label)
  'footer.legal.title': '[MOCK] Legal', // TODO
  'footer.legal.entity': '[MOCK] Dom na TRAVNI GORI d.o.o.', // TODO
  'footer.legal.address': '[MOCK] Street 1, 0000 City, Slovenia', // TODO
  'footer.directions': '[MOCK] Short “how to reach us” note.', // TODO
  'footer.rights': '[MOCK] All rights reserved.', // TODO

  // --- Cookie consent (GA4 gate) ---
  'consent.message': '[MOCK] We use cookies for analytics.', // TODO
  'consent.accept': '[MOCK] Accept', // TODO
  'consent.decline': '[MOCK] Decline', // TODO
} as const;

export default en;
