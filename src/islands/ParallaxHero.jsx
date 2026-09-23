// ParallaxHero.jsx — React island for the Home hero (TASK-014).
//
// Atmosphere-only motion: a mountains layer and a fog layer translate at DIFFERENT speeds on scroll.
// Only `transform` is animated (GPU-friendly); nothing else moves.
// prefers-reduced-motion: parallax is disabled and the hero stays static.
//
// All visible copy comes from the i18n dictionary and is passed in as props by the .astro caller
// (no hardcoded strings here). CTA routes are navigation targets, like the Header nav links.
// Layer background images are placeholders styled in src/styles/blocks/_hero.scss.

import { useEffect, useRef } from 'react';

// Lucide line glyphs (same geometry as components/ui/Icon.astro) for the hero CTAs.
const GLYPHS = {
  calendar:
    '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'map-pin':
    '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
};

function Glyph({ name, className = 'hero__cta-icon' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: GLYPHS[name] ?? '' }}
    />
  );
}

export default function ParallaxHero({
  title,
  subtitle,
  intro,
  ctaPrimaryLabel,
  ctaSecondaryLabel,
  ratingsLabel,
  bookingLabel,
  airbnbLabel,
}) {
  const mountainsRef = useRef(null);
  const fogRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return; // static hero — no parallax for reduced-motion users

    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      // Layers move at different speeds to build depth — transform only.
      if (mountainsRef.current) {
        mountainsRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0)`;
      }
      if (fogRef.current) {
        fogRef.current.style.transform = `translate3d(0, ${y * 0.55}px, 0)`;
      }
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update(); // sync initial position (e.g. when navigating back mid-page)
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__layers" aria-hidden="true">
        {/* TODO: replace hero layer images (background-image in _hero.scss) with real art. */}
        <div className="hero__layer hero__layer--mountains" ref={mountainsRef}></div>
        <div className="hero__layer hero__layer--fog" ref={fogRef}></div>
      </div>
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        <p className="hero__intro">{intro}</p>
        <div className="hero__actions">
          <a className="btn btn--primary hero__cta hero__cta--primary" href="/rezervacija">
            <Glyph name="calendar" />
            <span>{ctaPrimaryLabel}</span>
            <Glyph name="arrow-right" className="hero__cta-icon hero__cta-icon--arrow" />
          </a>
          <a className="btn btn--secondary hero__cta hero__cta--secondary" href="/activities">
            <Glyph name="map-pin" />
            <span>{ctaSecondaryLabel}</span>
          </a>
        </div>
        <div className="hero__ratings" role="group" aria-label={ratingsLabel}>
          <div className="hero__rating">
            <strong className="hero__rating-score">8.8</strong>
            <span className="hero__rating-details">
              <img
                className="hero__rating-logo hero__rating-logo--booking"
                src="/images/booking-com-wordmark.png"
                alt={bookingLabel}
              />
            </span>
          </div>
          <div className="hero__rating">
            <strong className="hero__rating-score">4.7</strong>
            <span className="hero__rating-details">
              <img
                className="hero__rating-logo hero__rating-logo--airbnb"
                src="/images/airbnb-logo.webp"
                alt={airbnbLabel}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
