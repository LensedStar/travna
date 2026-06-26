// AccommodationSlider.jsx — React island for the Accommodation photo gallery (TASK-017).
//
// Shows interior + nature images from the `gallery` content collection, passed in as props by
// the .astro caller (islands cannot call getCollection themselves) — no hardcoded copy here.
// Controls: prev/next buttons, touch swipe, and arrow keys when the slider is focused.
// Accessible: labelled carousel region, per-slide group labels, polite live region, visible focus.
// No layout shift: the viewport reserves a fixed aspect-ratio (styled in blocks/_accommodation.scss);
// images carry explicit width/height and load lazily.
//
// All visible strings (region label, prev/next labels) come from the i18n dictionary via props.

import { useEffect, useRef, useState } from 'react';

// Minimum horizontal travel (px) for a touch to count as a swipe rather than a tap.
const SWIPE_THRESHOLD = 40;

export default function AccommodationSlider({ images = [], label, prevLabel, nextLabel }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const count = images.length;
  const hasSlides = count > 0;

  const go = (next) => {
    if (!hasSlides) return;
    setIndex((prev) => (next + count) % count); // wrap around both ends
  };
  const prev = () => go(index - 1);
  const next = () => go(index + 1);

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

  // Keep the active index valid if the image set changes (e.g. content edits).
  useEffect(() => {
    if (index > count - 1) setIndex(0);
  }, [count, index]);

  if (!hasSlides) return null;

  return (
    <div
      className="slider"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="slider__viewport">
        <ul className="slider__track" aria-live="polite">
          {images.map((image, i) => (
            <li
              key={image.src}
              className="slider__slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${count}`}
              aria-hidden={i !== index ? 'true' : undefined}
              hidden={i !== index}
            >
              <img
                className="slider__image"
                src={image.src}
                srcSet={image.srcset}
                sizes={image.sizes}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                draggable="false"
              />
            </li>
          ))}
        </ul>
      </div>

      <button type="button" className="slider__control slider__control--prev" onClick={prev} aria-label={prevLabel}>
        <span className="slider__arrow" aria-hidden="true">‹</span>
      </button>
      <button type="button" className="slider__control slider__control--next" onClick={next} aria-label={nextLabel}>
        <span className="slider__arrow" aria-hidden="true">›</span>
      </button>

      <ul className="slider__dots">
        {images.map((image, i) => (
          <li key={image.src}>
            <button
              type="button"
              className={i === index ? 'slider__dot slider__dot--active' : 'slider__dot'}
              aria-label={`${i + 1} / ${count}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => go(i)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
