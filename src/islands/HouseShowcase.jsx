import { useEffect, useRef, useState } from 'react';
import ShowcaseGallery, { Glyph } from './ShowcaseGallery.jsx';

/**
 * @param {{ houses?: Array<Record<string, any>>, strings?: Record<string, string> }} props
 */
export default function HouseShowcase({ houses = [], strings = {} }) {
  const [activeHouse, setActiveHouse] = useState(0);

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

  return (
    <div className="house-showcase">
      <div className="house-showcase__body">
        {/* `key` resets the gallery to its first photo when another house is selected. */}
        <ShowcaseGallery
          key={house.name}
          images={house.images}
          label={house.name}
          strings={strings}
        />

        <div className="house-showcase__panel">
          {houseCount > 1 && (
            <div className="house-showcase__switcher" role="tablist" aria-label={strings.galleryLabel} ref={switcherRef}>
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
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
          <div className="house-showcase__copy">
            <h4 className="house-showcase__title">{house.name}</h4>
            <p className="house-showcase__text">{house.text}</p>
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
          <a className="btn btn--primary house-showcase__cta" href="/rezervacija">
            {strings.availabilityLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
