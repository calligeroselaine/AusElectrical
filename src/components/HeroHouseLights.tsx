"use client";

/**
 * Lights the six windows of the hero house, left to right.
 *
 * The base photo (public/images/hero-house-dark.png, 1672x941) shows the house
 * with its windows dark. This draws the lit windows over it as an SVG that uses
 * the same coordinate space as the photo and `slice` scaling, which is exactly
 * what `object-cover` does for the <Image>, so the windows stay locked to the
 * panes at every viewport size.
 *
 * Pane edges were measured from the base image; OVERSCAN covers the one-pixel
 * anti-aliased edge so no grey fringe shows around a lit window. The lit colour
 * (`lamp`) was sampled from the original illuminated hero image.
 *
 * Each window is a small stack: a wide soft bloom and a tighter halo (light
 * spilling onto the wall), the lit pane itself, and a hotter centre. The layer
 * is drawn above the hero's dark gradient and blended with `screen` so it reads
 * as light rather than as a coloured shape.
 */
const VIEWBOX_W = 1672;
const VIEWBOX_H = 941;
const OVERSCAN = 1;
const PANE_Y0 = 329;
const PANE_Y1 = 391;
const PANES_X: ReadonlyArray<readonly [number, number]> = [
  [471, 514],
  [617, 661],
  [763, 807],
  [909, 953],
  [1056, 1099],
  [1202, 1245],
];

const FIRST_DELAY_S = 0.5;
const STEP_S = 0.5;

export default function HeroHouseLights({ active }: { active: boolean }) {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full mix-blend-screen"
      >
        <defs>
          <filter id="hero-bloom" x="-400%" y="-250%" width="900%" height="600%">
            <feGaussianBlur stdDeviation="30" />
          </filter>
          <filter id="hero-halo" x="-200%" y="-120%" width="500%" height="340%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="hero-core" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        {PANES_X.map(([x0, x1], index) => {
          const x = x0 - OVERSCAN;
          const y = PANE_Y0 - OVERSCAN;
          const w = x1 - x0 + OVERSCAN * 2;
          const h = PANE_Y1 - PANE_Y0 + OVERSCAN * 2;
          return (
            <g
              key={x0}
              // Off until the sequence starts, then each window fades on once and
              // stays on (animation fill-mode: forwards). Reduced motion: lit at once.
              className={`hero-window opacity-0 motion-reduce:opacity-100 ${
                active ? "animate-window-on motion-reduce:animate-none" : ""
              }`}
              style={
                active
                  ? { animationDelay: `${FIRST_DELAY_S + index * STEP_S}s` }
                  : undefined
              }
            >
              {/* light spilling onto the wall around the window */}
              <rect
                x={x - 14}
                y={y - 10}
                width={w + 28}
                height={h + 20}
                className="fill-lamp"
                opacity={0.45}
                filter="url(#hero-bloom)"
              />
              <rect
                x={x - 3}
                y={y - 3}
                width={w + 6}
                height={h + 6}
                className="fill-lamp"
                opacity={0.8}
                filter="url(#hero-halo)"
              />
              {/* the lit pane */}
              <rect
                data-pane=""
                x={x}
                y={y}
                width={w}
                height={h}
                className="fill-lamp"
              />
              {/* hotter centre, like a bright room behind the glass */}
              <rect
                x={x + w * 0.2}
                y={y + h * 0.16}
                width={w * 0.6}
                height={h * 0.68}
                className="fill-lamp-light"
                opacity={0.9}
                filter="url(#hero-core)"
              />
            </g>
          );
        })}
      </svg>
      {/* Without JavaScript the sequence can't run, so show the lit house. */}
      <noscript>
        <style>{".hero-window{opacity:1 !important}"}</style>
      </noscript>
    </>
  );
}
