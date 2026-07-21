// TestimonialsSlider.jsx — React island for the guest reviews carousel.
//
// Infinite-loop carousel: the active card plus the next two peeking in, passed in as `reviews`
// props by the .astro caller (same convention as AccommodationSlider). Never dead-ends — prev/next
// always work, looping seamlessly past the last/first review, which matters as more reviews get
// added over time. The loop illusion is the standard clone trick: `visibleCount` slides are
// duplicated at each end of the track, so sliding "past" the last real review just continues into
// a clone; once the transition finishes we silently snap the track back to the equivalent real
// position with the transition briefly disabled, so the jump is invisible.
//
// How many cards are visible at once is owned by CSS (`--testimonials-visible`, see
// _testimonials.scss); this component just measures the rendered slide width so the track
// animates by exactly one card each step, at any breakpoint. Controls: prev/next buttons, touch
// swipe, and arrow keys when the slider is focused. Starts on the second review. Accessible:
// labelled carousel region, per-slide group labels, a polite status announcement, visible focus.
// All visible strings (region label, prev/next labels, rating label) come from the i18n
// dictionary via props.

import { useEffect, useRef, useState } from 'react';

// Minimum horizontal travel (px) for a touch to count as a swipe rather than a tap.
const SWIPE_THRESHOLD = 40;

const QUOTE_MARK_PATH =
  '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1 2 2 0 0 0 2 2 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1 2 2 0 0 0 2 2 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>';
const STAR_PATH =
  '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>';

const stars = [0, 1, 2, 3, 4];

/**
 * @param {{ reviews?: Array<{ quote: string, author: string, meta: string }>, label?: string, prevLabel?: string, nextLabel?: string, ratingLabel?: string }} props
 */
export default function TestimonialsSlider({ reviews = [], label, prevLabel, nextLabel, ratingLabel }) {
  const count = reviews.length;
  const hasSlides = count > 0;

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const prevVisibleCountRef = useRef(1);

  const [visibleCount, setVisibleCount] = useState(1);
  const [step, setStep] = useState(0); // px width of one slide, including the gap to the next
  // trackIndex points into the clone-padded array below; extended[visibleCount + realIndex] is
  // reviews[realIndex]. Starts on the second review (offset by the initial head-clone padding).
  const [trackIndex, setTrackIndex] = useState(() => 1 + Math.min(1, Math.max(count - 1, 0)));
  const [skipTransition, setSkipTransition] = useState(false);

  // Pad both ends with clones of the real reviews so the track can keep sliding "past" the last
  // (or first) real card instead of snapping — the illusion of an infinite loop.
  const extended = hasSlides
    ? [
        ...reviews.slice(-visibleCount).map((review, i) => ({ review, key: `head-${i}` })),
        ...reviews.map((review, i) => ({ review, key: `real-${i}` })),
        ...reviews.slice(0, visibleCount).map((review, i) => ({ review, key: `tail-${i}` })),
      ]
    : [];

  // The number of cards on screen at once lives in CSS (--testimonials-visible, per breakpoint);
  // this just reads it back so the JS step math never falls out of sync with the layout.
  useEffect(() => {
    if (!hasSlides) return undefined;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    const measure = () => {
      const perView = parseInt(window.getComputedStyle(viewport).getPropertyValue('--testimonials-visible'), 10) || 1;
      const firstSlide = track.children[0];
      if (!firstSlide) return;
      const gap = parseFloat(window.getComputedStyle(track).columnGap || '0');
      setVisibleCount(perView);
      setStep(firstSlide.getBoundingClientRect().width + gap);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [hasSlides, count]);

  // Re-centre the track on the same real review when the visible-slot count changes (e.g. resize
  // crossing a breakpoint) — the clone padding width changes with it, so the offset must too.
  useEffect(() => {
    const prevVisible = prevVisibleCountRef.current;
    if (prevVisible !== visibleCount && count > 0) {
      setTrackIndex((ti) => {
        const real = ((ti - prevVisible) % count + count) % count;
        return visibleCount + real;
      });
      setSkipTransition(true);
    }
    prevVisibleCountRef.current = visibleCount;
  }, [visibleCount, count]);

  // Once a step's transition finishes, if it landed us in clone territory, snap invisibly back to
  // the equivalent real position (transition disabled for that one jump).
  const onTrackTransitionEnd = () => {
    setTrackIndex((ti) => {
      if (ti >= visibleCount + count) {
        setSkipTransition(true);
        return ti - count;
      }
      if (ti < visibleCount) {
        setSkipTransition(true);
        return ti + count;
      }
      return ti;
    });
  };

  // Re-enable the transition on the frame after a silent snap, so the next real move animates.
  useEffect(() => {
    if (!skipTransition) return undefined;
    const id = requestAnimationFrame(() => setSkipTransition(false));
    return () => cancelAnimationFrame(id);
  }, [skipTransition]);

  const prev = () => setTrackIndex((ti) => ti - 1);
  const next = () => setTrackIndex((ti) => ti + 1);
  const goToReal = (realIndex) => setTrackIndex(visibleCount + realIndex);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  if (!hasSlides) return null;

  const realIndex = ((trackIndex - visibleCount) % count + count) % count;

  return (
    <div
      className="testimonials-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="testimonials-slider__viewport" ref={viewportRef}>
        <ul
          className="testimonials-slider__track"
          ref={trackRef}
          onTransitionEnd={onTrackTransitionEnd}
          style={{
            transform: `translateX(-${trackIndex * step}px)`,
            transition: skipTransition ? 'none' : undefined,
          }}
        >
          {extended.map(({ review, key }, i) => (
            <li
              key={key}
              className="testimonials-slider__slide"
              role="group"
              aria-roledescription="slide"
              aria-label={review.author}
              aria-hidden={i < trackIndex || i >= trackIndex + visibleCount ? 'true' : undefined}
            >
              <article className="testimonials__card">
                <span
                  className="testimonials__quote-mark"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${QUOTE_MARK_PATH}</svg>`,
                  }}
                />
                <div className="testimonials__stars" role="img" aria-label={ratingLabel}>
                  {stars.map((s) => (
                    <span
                      key={s}
                      className="testimonials__star"
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{
                        __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${STAR_PATH}</svg>`,
                      }}
                    />
                  ))}
                </div>
                <blockquote className="testimonials__quote">{review.quote}</blockquote>
                <footer className="testimonials__author">
                  <span className="testimonials__author-name">{review.author}</span>
                  <span className="testimonials__author-meta">{review.meta}</span>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <span className="testimonials-slider__status" aria-live="polite">
        {`${realIndex + 1} / ${count}`}
      </span>

      <div className="testimonials-slider__nav">
        <button
          type="button"
          className="testimonials-slider__control testimonials-slider__control--prev"
          onClick={prev}
          aria-label={prevLabel}
        >
          <span className="testimonials-slider__arrow" aria-hidden="true">‹</span>
        </button>

        <ul className="testimonials-slider__dots">
          {reviews.map((review, i) => (
            <li key={review.author + review.meta}>
              <button
                type="button"
                className={i === realIndex ? 'testimonials-slider__dot testimonials-slider__dot--active' : 'testimonials-slider__dot'}
                aria-label={`${i + 1} / ${count}`}
                aria-current={i === realIndex ? 'true' : undefined}
                onClick={() => goToReal(i)}
              ></button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="testimonials-slider__control testimonials-slider__control--next"
          onClick={next}
          aria-label={nextLabel}
        >
          <span className="testimonials-slider__arrow" aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}
