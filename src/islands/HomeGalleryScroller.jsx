import { useEffect, useState } from 'react';

export default function HomeGalleryScroller({ title, intro, images = [], openLabel, closeLabel, outroTitle, outroText, ctaLabel }) {
  const [activeIndex, setActiveIndex] = useState(null);

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
    <section className="home-gallery reveal">
      <div className="home-gallery__sticky">
        <div className="home-gallery__inner">
          <header className="section-header section-header--center home-gallery__header">
            <h2 className="section-header__title">{title}</h2>
            <p className="section-header__subtitle">{intro}</p>
          </header>

          <div className="home-gallery__layout">
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                className={`home-gallery__card home-gallery__card--${index + 1}`}
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
