import { useEffect, useId, useRef, useState } from 'react';
import ShowcaseGallery, { Glyph } from './ShowcaseGallery.jsx';

/**
 * `selector` picks how the unit switcher is drawn:
 *   - 'pills' (default) — segmented pills inside the info panel, for a couple of options (the houses);
 *   - 'tiles' — a row of tiles across the showcase, above the gallery, each with the unit's name and
 *     the number of guests it sleeps (`guests`), for many options (the rooms). Above the gallery it
 *     also comes before the photos on a phone, where the panel sits under them.
 *
 * @param {{ houses?: Array<Record<string, any>>, strings?: Record<string, string>, bookHref?: string, selector?: 'pills' | 'tiles' }} props
 */
export default function HouseShowcase({ houses = [], strings = {}, bookHref, selector = 'pills' }) {
  const [activeHouse, setActiveHouse] = useState(0);
  const tiles = selector === 'tiles';
  const selectorLabelId = useId();

  // Sliding highlight behind the house-type switcher: we measure the active button (widths differ
  // per label) and move an absolutely-positioned indicator to it. `switcherReady` suppresses the
  // initial slide-in so the highlight only animates between user selections, not on first paint.
  const switcherRef = useRef(null);
  const [indicator, setIndicator] = useState(null);
  const [switcherReady, setSwitcherReady] = useState(false);

  const house = houses[activeHouse] ?? null;
  const houseCount = houses.length;

  // Position the sliding highlight over the active switch, and keep it aligned on resize.
  useEffect(() => {
    if (houseCount <= 1) return undefined;

    const measure = () => {
      const root = switcherRef.current;
      const active = root?.querySelector('.house-showcase__switch--active');
      if (!active) return;
      setIndicator({
        left: active.offsetLeft,
        top: active.offsetTop,
        width: active.offsetWidth,
        height: active.offsetHeight,
      });
    };

    measure();
    // Re-measure whenever the options change size, not just on window resize — a late web-font
    // swap or a label wrapping on a narrow phone moves the active button without a resize event.
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure);
    switcherRef.current?.querySelectorAll('.house-showcase__switch').forEach((el) => observer?.observe(el));
    window.addEventListener('resize', measure);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [activeHouse, houseCount]);

  // Enable the slide transition only after the first paint (positions the highlight without a flash).
  useEffect(() => {
    const id = requestAnimationFrame(() => setSwitcherReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!house) return null;

  const switcher = houseCount > 1 && (
    <div
      className={tiles ? 'house-showcase__switcher house-showcase__switcher--tiles' : 'house-showcase__switcher'}
      role="tablist"
      aria-label={tiles ? undefined : strings.galleryLabel}
      aria-labelledby={tiles ? selectorLabelId : undefined}
      ref={switcherRef}
    >
      {indicator && (
        <span
          className={
            switcherReady
              ? 'house-showcase__switch-indicator house-showcase__switch-indicator--ready'
              : 'house-showcase__switch-indicator'
          }
          style={{
            transform: `translate(${indicator.left}px, ${indicator.top}px)`,
            width: `${indicator.width}px`,
            height: `${indicator.height}px`,
          }}
          aria-hidden="true"
        />
      )}
      {houses.map((item, index) => (
        <button
          key={item.name}
          type="button"
          role="tab"
          className={index === activeHouse ? 'house-showcase__switch house-showcase__switch--active' : 'house-showcase__switch'}
          onClick={() => setActiveHouse(index)}
          aria-selected={index === activeHouse}
          // The tile shows the guest count as an icon and a bare number; spell it out for screen readers.
          aria-label={tiles && item.capacity ? `${item.name} — ${item.capacity}` : undefined}
        >
          {tiles ? (
            <>
              <span className="house-showcase__switch-name">{item.name}</span>
              {item.guests != null && (
                <span className="house-showcase__switch-meta">
                  <Glyph name="users" className="house-showcase__switch-meta-icon" />
                  {item.guests}
                </span>
              )}
            </>
          ) : (
            item.name
          )}
        </button>
      ))}
    </div>
  );

  return (
    <div className={tiles ? 'house-showcase house-showcase--tiles' : 'house-showcase'}>
      {tiles && switcher && (
        <div className="house-showcase__selector">
          <p className="house-showcase__selector-label" id={selectorLabelId}>{strings.selectorLabel}</p>
          {switcher}
        </div>
      )}

      <div className="house-showcase__body">
        {/* `key` resets the gallery to its first photo when another house is selected. */}
        <ShowcaseGallery
          key={house.name}
          images={house.images}
          label={house.name}
          strings={strings}
        />

        <div className="house-showcase__panel">
          {!tiles && switcher}
          <div className="house-showcase__copy">
            <h4 className="house-showcase__title">{house.name}</h4>
            {house.text && <p className="house-showcase__text">{house.text}</p>}
          </div>
          <ul className="house-showcase__tags" role="list">
            {(house.tags ?? [
              { icon: 'users', label: house.capacity },
              { icon: 'bed', label: house.size },
            ]).map((tag) => (
              <li className="house-showcase__tag" key={tag.label}>
                <Glyph name={tag.icon} />
                <span>{tag.label}</span>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary house-showcase__cta" href={bookHref}>
            {strings.availabilityLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
