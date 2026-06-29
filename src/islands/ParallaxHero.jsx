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

export default function ParallaxHero({ title, subtitle, ctaPrimaryLabel, ctaSecondaryLabel }) {
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
        <div className="hero__actions">
          <a className="btn btn--primary" href="/rezervacija">{ctaPrimaryLabel}</a>
          <a className="btn btn--secondary hero__cta-secondary" href="/activities">{ctaSecondaryLabel}</a>
        </div>
      </div>
    </section>
  );
}
