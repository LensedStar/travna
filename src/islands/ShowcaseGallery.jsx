import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Line-style glyphs mirroring src/components/ui/Icon.astro (Lucide weight) so the React islands
// stay visually consistent with the .astro icon set — no emoji. Shared with HouseShowcase.jsx.
export const GLYPHS = {
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  bed:
    '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'zoom-in': '<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>',
  maximize:
    '<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/>',
  flame:
    '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  wifi:
    '<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.86a10 10 0 0 1 14 0"/><path d="M8.5 16.43a5 5 0 0 1 7 0"/>',
  utensils:
    '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  armchair:
    '<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"/><path d="M5 18v2"/><path d="M19 18v2"/>',
  'shower-head':
    '<path d="m4 4 2.5 2.5"/><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"/><path d="M15 5 5 15"/><path d="M14 17v.01"/><path d="M10 16v.01"/><path d="M13 13v.01"/><path d="M16 10v.01"/><path d="M11 20v.01"/><path d="M17 14v.01"/><path d="M20 11v.01"/>',
};

export function Glyph({ name, className = 'house-showcase__tag-icon' }) {
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

// Minimum horizontal travel (px) for a touch to count as a swipe rather than a tap.
const SWIPE_THRESHOLD = 40;

/**
 * The photo slider shared by the showcases on the site: framed main photo with a zoom affordance,
 * circular arrows, an index badge, a thumbnail strip and a full-screen lightbox. Used by the
 * houses/rooms showcases (HouseShowcase.jsx), the sauna block and the landing's feature rows, so
 * those galleries behave and look identical. Callers that swap the whole image set (e.g. the
 * house-type switcher) pass a `key` alongside the images so the active index resets with them.
 * An image may carry a small `thumb` for the thumbnail strip; without one the strip falls back to
 * the full-size `src`.
 *
 * @param {{ images?: Array<{ src: string, alt?: string, thumb?: string }>, label?: string, strings?: Record<string, string> }} props
 */
export default function ShowcaseGallery({ images = [], label = '', strings = {} }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStart = useRef(null);

  const imageCount = images.length;
  const image = images[activeImage] ?? null;

  const { prevImage, nextImage } = useMemo(() => ({
    prevImage: () => {
      if (!imageCount) return;
      setActiveImage((current) => (current - 1 + imageCount) % imageCount);
    },
    nextImage: () => {
      if (!imageCount) return;
      setActiveImage((current) => (current + 1) % imageCount);
    },
  }), [imageCount]);

  // Swipe left/right on the photo (and in the lightbox) to change it. A mostly-vertical gesture is
  // a page scroll and is left alone; a swipe never produces a click, so it can't open the lightbox.
  const swipeHandlers = {
    onTouchStart: (event) => {
      const touch = event.changedTouches[0];
      touchStart.current = { x: touch.clientX, y: touch.clientY };
    },
    onTouchEnd: (event) => {
      const start = touchStart.current;
      touchStart.current = null;
      if (!start) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - start.x;
      const dy = touch.clientY - start.y;
      if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
      if (dx < 0) nextImage();
      else prevImage();
    },
    onTouchCancel: () => {
      touchStart.current = null;
    },
  };

  // The thumbnails are one row of fixed-size thumbs. When the gallery has more photos than fit
  // under the photo, the row is sized to a whole number of thumbs (so none is cut off at the edge):
  // count how many fit and hand the number to the styles (.house-showcase__thumbs--fit).
  const thumbsRef = useRef(null);
  const [thumbsVisible, setThumbsVisible] = useState(null);
  useEffect(() => {
    const row = thumbsRef.current;
    const media = row?.parentElement;
    if (!media || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(([entry]) => {
      const gap = parseFloat(getComputedStyle(row).columnGap) || 0;
      const size = parseFloat(getComputedStyle(row.firstElementChild).flexBasis);
      if (!size) return;
      // The small allowance keeps a row that fits exactly from losing a thumb to rounding.
      const fits = Math.max(1, Math.floor((entry.contentRect.width + gap) / (size + gap) + 0.001));
      setThumbsVisible(fits < imageCount ? fits : null);
    });
    observer.observe(media);
    return () => observer.disconnect();
  }, [imageCount]);

  // Keep the active thumb in view when the photo changes via the arrows or the lightbox. Scrolls
  // only the row, never the page.
  useEffect(() => {
    const row = thumbsRef.current;
    const thumb = row?.children[activeImage];
    if (!row || !thumb || row.scrollWidth <= row.clientWidth) return;
    const rowBox = row.getBoundingClientRect();
    const thumbBox = thumb.getBoundingClientRect();
    row.scrollTo({
      left: row.scrollLeft + thumbBox.left - rowBox.left - (rowBox.width - thumbBox.width) / 2,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }, [activeImage, thumbsVisible]);

  // Lock background scroll + wire up keyboard nav while the lightbox is open
  // (same pattern as the home-page gallery — no in-modal zoom/pan to fight the scroll).
  useEffect(() => {
    if (!isLightboxOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevImage();
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        nextImage();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isLightboxOpen, prevImage, nextImage]);

  if (!image) return null;

  return (
    <>
      <div className="house-showcase__media">
        <div className="house-showcase__frame" {...swipeHandlers}>
          <button
            type="button"
            className="house-showcase__image-button"
            onClick={() => setIsLightboxOpen(true)}
            aria-label={image.alt}
          >
            <img
              className="house-showcase__image"
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
            <span className="house-showcase__zoom-hint" aria-hidden="true">
              <Glyph name="zoom-in" className="house-showcase__zoom-hint-icon" />
            </span>
          </button>

          {imageCount > 1 && (
            <>
              <button
                type="button"
                className="house-showcase__control house-showcase__control--prev"
                onClick={prevImage}
                aria-label={strings.prevLabel}
              >
                <Glyph name="chevron-left" className="house-showcase__control-icon" />
              </button>
              <button
                type="button"
                className="house-showcase__control house-showcase__control--next"
                onClick={nextImage}
                aria-label={strings.nextLabel}
              >
                <Glyph name="chevron-right" className="house-showcase__control-icon" />
              </button>
              <span className="house-showcase__counter" aria-hidden="true">
                {activeImage + 1} / {imageCount}
              </span>
            </>
          )}
        </div>

        {imageCount > 1 && (
          <div
            className={thumbsVisible ? 'house-showcase__thumbs house-showcase__thumbs--fit' : 'house-showcase__thumbs'}
            style={thumbsVisible ? { '--thumbs-visible': thumbsVisible } : undefined}
            role="tablist"
            aria-label={strings.galleryLabel}
            ref={thumbsRef}
          >
            {images.map((item, index) => (
              <button
                key={`${label}-${item.src}`}
                type="button"
                className={index === activeImage ? 'house-showcase__thumb house-showcase__thumb--active' : 'house-showcase__thumb'}
                onClick={() => setActiveImage(index)}
                aria-label={`${label} ${index + 1}`}
                aria-selected={index === activeImage}
              >
                <img className="house-showcase__thumb-image" src={item.thumb ?? item.src} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Portalled to <body>: rendered in place, the overlay is painted inside whatever stacking
          context its section creates (an inner wrapper with `z-index: 1` is enough), and the fixed
          site header then sits on top of it — covering the close button. */}
      {isLightboxOpen && createPortal(
        <div
          className="house-showcase__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            className="house-showcase__lightbox-close"
            onClick={() => setIsLightboxOpen(false)}
            aria-label={strings.closeLabel}
          >
            ×
          </button>

          {imageCount > 1 && (
            <>
              <button
                type="button"
                className="house-showcase__lightbox-nav house-showcase__lightbox-nav--prev"
                onClick={(event) => { event.stopPropagation(); prevImage(); }}
                aria-label={strings.prevLabel}
              >
                <Glyph name="chevron-left" className="house-showcase__lightbox-nav-icon" />
              </button>
              <button
                type="button"
                className="house-showcase__lightbox-nav house-showcase__lightbox-nav--next"
                onClick={(event) => { event.stopPropagation(); nextImage(); }}
                aria-label={strings.nextLabel}
              >
                <Glyph name="chevron-right" className="house-showcase__lightbox-nav-icon" />
              </button>
            </>
          )}

          <figure
            className="house-showcase__lightbox-figure"
            onClick={(event) => event.stopPropagation()}
            {...swipeHandlers}
          >
            <img
              className="house-showcase__lightbox-image"
              src={image.src}
              alt={image.alt}
              decoding="async"
            />
            <figcaption className="house-showcase__lightbox-caption">
              {label} · {activeImage + 1}/{imageCount}
            </figcaption>
          </figure>
        </div>,
        document.body
      )}
    </>
  );
}
