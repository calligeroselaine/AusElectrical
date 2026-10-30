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
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        {PANES_X.map(([x0, x1], index) => (
          <rect
            key={x0}
            x={x0 - OVERSCAN}
            y={PANE_Y0 - OVERSCAN}
            width={x1 - x0 + OVERSCAN * 2}
            height={PANE_Y1 - PANE_Y0 + OVERSCAN * 2}
            // Off until the sequence starts, then each window fades on once and
            // stays on (animation fill-mode: forwards). Reduced motion: lit at once.
            className={`hero-window fill-lamp opacity-0 motion-reduce:opacity-100 ${
              active ? "animate-window-on motion-reduce:animate-none" : ""
            }`}
            style={
              active
                ? { animationDelay: `${FIRST_DELAY_S + index * STEP_S}s` }
                : undefined
            }
          />
        ))}
      </svg>
      {/* Without JavaScript the sequence can't run, so show the lit house. */}
      <noscript>
        <style>{".hero-window{opacity:1 !important}"}</style>
      </noscript>
    </>
  );
}
