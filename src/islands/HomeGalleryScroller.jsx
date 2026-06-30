import { useEffect, useRef, useState } from 'react';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function cardStyle(progress, index) {
  const starts = [0, 0.1, 0.22, 0.42, 0.56, 0.7];
  const span = 0.24;
  const amount = clamp((progress - starts[index]) / span, 0, 1);
  const yOffsets = [96, 116, 136, 156, 176, 196];
  const xOffsets = [0, 28, -20, 10, 26, -18];
  const rotates = [0, -3, 2, -1.5, -2, 1.5];

  return {
    opacity: 0.2 + amount * 0.8,
    transform: `translate3d(${xOffsets[index] * (1 - amount)}px, ${yOffsets[index] * (1 - amount)}px, 0) scale(${0.84 + amount * 0.16}) rotate(${rotates[index] * (1 - amount)}deg)` ,
  };
}

export default function HomeGalleryScroller({ eyebrow, title, intro, images = [], openLabel, closeLabel, outroTitle, outroText, ctaLabel }) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) {
      setProgress(1);
      return undefined;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const total = Math.max(section.offsetHeight - window.innerHeight, 1);
      const traveled = clamp(-rect.top, 0, total);
      setProgress((prev) => {
        const next = traveled / total;
        return Math.abs(prev - next) > 0.004 ? next : prev;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex]);

  return (
    <section className="home-gallery reveal" ref={sectionRef}>
      <div className="home-gallery__sticky">
        <div className="home-gallery__inner">
          <header className="section-header section-header--center home-gallery__header">
            <p className="section-header__eyebrow">{eyebrow}</p>
            <h2 className="section-header__title">{title}</h2>
            <p className="section-header__subtitle">{intro}</p>
          </header>

          <div className="home-gallery__layout">
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                className={`home-gallery__card home-gallery__card--${index + 1}`}
                style={cardStyle(progress, index)}
                onClick={() => setActiveIndex(index)}
                aria-label={`${openLabel}: ${image.label}`}
              >
                <img
                  className="home-gallery__image"
                  src={image.src}
                  srcSet={image.srcset || undefined}
                  sizes={image.sizes}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <span className="home-gallery__caption">{image.label}</span>
                <span className="home-gallery__zoom-hint" aria-hidden="true">
                  <svg
                    className="home-gallery__zoom-hint-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" x2="16.65" y1="21" y2="16.65" />
                    <line x1="11" x2="11" y1="8" y2="14" />
                    <line x1="8" x2="14" y1="11" y2="11" />
                  </svg>
                </span>
              </button>
            ))}
          </div>

          <div className="home-gallery__outro">
            <p className="home-gallery__outro-kicker">{outroTitle}</p>
            <p className="home-gallery__outro-text">{outroText}</p>
            <a className="btn btn--primary home-gallery__outro-cta" href="/rezervacija">{ctaLabel}</a>
          </div>
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="home-gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={images[activeIndex].label}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            className="home-gallery__lightbox-close"
            onClick={() => setActiveIndex(null)}
            aria-label={closeLabel}
          >
            {'×'}
          </button>
          <figure className="home-gallery__lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <img
              className="home-gallery__lightbox-image"
              src={images[activeIndex].src}
              srcSet={images[activeIndex].srcset || undefined}
              sizes="100vw"
              width={images[activeIndex].width}
              height={images[activeIndex].height}
              alt={images[activeIndex].alt}
              decoding="async"
            />
            <figcaption className="home-gallery__lightbox-caption">{images[activeIndex].label}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
