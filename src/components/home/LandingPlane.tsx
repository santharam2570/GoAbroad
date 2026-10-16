"use client";

import { animate, motion, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const DURATION = 7.5;
const FLARE = 0.45;
const TOUCHDOWN = 0.55;
const DEROTATE = 0.66;
const GROUND = 0.93;
const START_ALT = 0.8;
// Main-gear position inside the 240×80 artwork; the plane pivots and lands on this point.
const GEAR_X = 140 / 240;

const smooth = (t: number) => {
  const c = Math.min(1, Math.max(0, t));
  return c * c * (3 - 2 * c);
};
const easeOutCubic = (t: number) => 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3);

// Constant approach speed, then linear braking to a stop at p = 1.
const distance = (p: number) => {
  if (p <= TOUCHDOWN) return p;
  const q = p - TOUCHDOWN;
  return TOUCHDOWN + q - (q * q) / (2 * (1 - TOUCHDOWN));
};

export function LandingPlane({ delay = 1.8 }: { delay?: number }) {
  const reduce = useReducedMotion();
  const layer = useRef<HTMLDivElement>(null);
  const plane = useRef<HTMLDivElement>(null);
  const [touchdown, setTouchdown] = useState<{ x: number; y: number } | null>(null);

  const x = useMotionValue(-9999);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);
  const scale = useMotionValue(0.3);
  const opacity = useMotionValue(0);
  const shadowX = useMotionValue(-9999);
  const shadowY = useMotionValue(0);
  const shadowScale = useMotionValue(0.3);
  const shadowOpacity = useMotionValue(0);

  useEffect(() => {
    const el = layer.current;
    const pl = plane.current;
    if (reduce || !el || !pl) return;

    const W = el.offsetWidth;
    const H = el.offsetHeight;
    const pw = pl.offsetWidth;
    const ph = pl.offsetHeight;
    const ground = H * GROUND;

    const x0 = W + pw;
    const xEnd = W * (W < 640 ? 0.35 : 0.5);
    const total = distance(1);

    const a0 = H * START_ALT;
    const aFlare = a0 * 0.105;
    const span = TOUCHDOWN - FLARE;
    const sink = (a0 - aFlare) / FLARE;
    const curve = (sink * span - aFlare) / (span * span);
    const altitude = (p: number) => {
      if (p < FLARE) return a0 - sink * p;
      if (p < TOUCHDOWN) {
        const q = p - FLARE;
        return Math.max(0, aFlare - sink * q + curve * q * q);
      }
      return 0;
    };

    const pitch = (p: number) => {
      const turbulence = Math.sin(p * 46) * 0.9 * (1 - smooth(p / FLARE));
      if (p < FLARE) return 2.5 + turbulence;
      if (p < TOUCHDOWN) return 2.5 + 4.5 * smooth((p - FLARE) / span);
      return 7 * (1 - smooth((p - TOUCHDOWN) / (DEROTATE - TOUCHDOWN)));
    };

    shadowY.set(ground - 6);
    let landed = false;

    const controls = animate(0, 1, {
      duration: DURATION,
      delay,
      ease: "linear",
      onUpdate: (p) => {
        const cx = x0 - (x0 - xEnd) * (distance(p) / total);
        const alt = altitude(p);
        const bob = Math.sin(p * 31) * 4 * (1 - smooth(p / FLARE));
        const s = 0.32 + 0.68 * easeOutCubic(p / 0.5);

        x.set(cx - pw * GEAR_X);
        y.set(ground - alt - ph + bob);
        rotate.set(pitch(p));
        scale.set(s);
        opacity.set(Math.min(1, p / 0.04) * (1 - smooth((p - 0.86) / 0.14)));

        shadowX.set(cx - pw * 0.4);
        shadowScale.set(s * (1 + (alt / H) * 0.8));
        shadowOpacity.set(0.6 * Math.pow(Math.max(0, 1 - alt / (H * 0.4)), 2) * (1 - smooth((p - 0.86) / 0.14)));

        if (!landed && p >= TOUCHDOWN) {
          landed = true;
          setTouchdown({ x: cx, y: ground });
        }
      },
    });

    return () => controls.stop();
  }, [reduce, delay, x, y, rotate, scale, opacity, shadowX, shadowY, shadowScale, shadowOpacity]);

  if (reduce) return null;

  return (
    <div ref={layer} aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[100svh] overflow-hidden">
      <motion.div
        style={{ x: shadowX, y: shadowY, scale: shadowScale, opacity: shadowOpacity }}
        className="absolute left-0 top-0 h-3 w-[120px] rounded-[50%] bg-black/80 blur-[6px] sm:w-[184px]"
      />

      {touchdown && <TyreSmoke x={touchdown.x} y={touchdown.y} />}

      <motion.div
        ref={plane}
        style={{ x, y, rotate, scale, opacity, transformOrigin: `${GEAR_X * 100}% 100%` }}
        className="absolute left-0 top-0 w-[150px] sm:w-[230px]"
      >
        <Airliner />
      </motion.div>
    </div>
  );
}

function TyreSmoke({ x, y }: { x: number; y: number }) {
  return (
    <div className="absolute left-0 top-0" style={{ transform: `translate(${x}px, ${y}px)` }}>
      {Array.from({ length: 6 }, (_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.85, scale: 0.2, x: -10, y: -10 }}
          animate={{ opacity: 0, scale: 2.4 + i * 0.35, x: 26 + i * 16, y: -16 - i * 5 }}
          transition={{ duration: 1.5 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="absolute h-5 w-5 rounded-full bg-white/50 blur-[3px]"
        />
      ))}
      <motion.span
        initial={{ opacity: 0.9, scaleX: 0.2 }}
        animate={{ opacity: 0, scaleX: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute -left-2 -top-px h-[2px] w-24 origin-left rounded-full bg-gradient-to-r from-sun-300 to-transparent"
      />
    </div>
  );
}

function Airliner() {
  return (
    <svg viewBox="0 0 240 80" className="h-auto w-full overflow-visible">
      <defs>
        <linearGradient id="plane-body" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#b9c7da" />
        </linearGradient>
        <linearGradient id="plane-tail" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="#0084bd" />
          <stop offset="100%" stopColor="#33c2ff" />
        </linearGradient>
        <linearGradient id="plane-engine" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e8eef6" />
          <stop offset="100%" stopColor="#8fa2bc" />
        </linearGradient>
        <linearGradient id="plane-beam" x1="1" x2="0" y1="0" y2="0">
          <stop offset="0%" stopColor="#fff6dc" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fff6dc" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="plane-light">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#fff2c4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#fff2c4" stopOpacity="0" />
        </radialGradient>
      </defs>

      <path d="M44 58 L-190 36 L-190 116 Z" fill="url(#plane-beam)" />

      <path d="M196 36 L232 31 L237 35 L206 41 Z" fill="#9fb0c8" />

      <g stroke="#3a4a66" strokeWidth="2.2" strokeLinecap="round">
        <line x1="46" y1="50" x2="46" y2="71" />
        <line x1="140" y1="50" x2="140" y2="71" />
      </g>
      <g fill="#111a2c">
        <circle cx="46" cy="75.5" r="4.5" />
        <circle cx="135.5" cy="75.5" r="4.5" />
        <circle cx="144.5" cy="75.5" r="4.5" />
      </g>

      <path
        d="M14 44 C14 36 24 31 40 31 L190 31 L222 6 L236 6 L228 36 L220 47 C200 51 60 52 38 52 C22 52 14 50 14 44 Z"
        fill="url(#plane-body)"
      />
      <path d="M190 31 L222 6 L236 6 L228 36 Z" fill="url(#plane-tail)" />
      <path d="M208 24 L231 10" stroke="#ffc061" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 42 L214 42" stroke="#00a3e6" strokeWidth="2.6" />
      <path d="M19 38 C21 35 26 34 32 34 L33 38 Z" fill="#0b1426" />
      <rect x="40" y="33" width="4.5" height="12" rx="1.2" fill="none" stroke="#8fa2bc" strokeWidth="0.8" />
      <g fill="#0b1426">
        {Array.from({ length: 22 }, (_, i) => (
          <circle key={i} cx={54 + i * 6.4} cy={37} r={1.5} />
        ))}
      </g>

      <path d="M86 46 L148 46 L184 59 L168 60 Z" fill="#c8d4e4" stroke="#8fa2bc" strokeWidth="0.6" />
      <rect x="92" y="50" width="40" height="12" rx="6" fill="url(#plane-engine)" />
      <ellipse cx="94" cy="56" rx="2.4" ry="5" fill="#0b1426" />

      <circle cx="46" cy="58" r="9" fill="url(#plane-light)" />
      <motion.circle
        cx="120"
        cy="30.5"
        r="2.2"
        fill="#ff4d4d"
        animate={{ opacity: [1, 0.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.circle
        cx="234"
        cy="7"
        r="2.4"
        fill="#ffffff"
        animate={{ opacity: [0, 1, 0, 0] }}
        transition={{ duration: 1.2, times: [0, 0.08, 0.16, 1], repeat: Infinity }}
      />
    </svg>
  );
}
