"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { countries, origin } from "@/data/countries";
import { cn } from "@/lib/cn";

export function Globe({ className, focus }: { className?: string; focus?: [number, number] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const pointer = useRef<number | null>(null);
  const drag = useRef(0);
  const focusRef = useRef(focus);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    focusRef.current = focus;
  }, [focus]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = wrap.offsetWidth;
    let phi = 4.3;
    let theta = reduce ? 0.28 : -0.35;
    const start = performance.now();
    let visible = true;
    let raf = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi,
      theta,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 18000,
      mapBrightness: 5.5,
      mapBaseBrightness: 0.02,
      baseColor: [0.09, 0.16, 0.3],
      markerColor: [1, 0.75, 0.38],
      glowColor: [0.05, 0.35, 0.55],
      arcColor: [0.2, 0.76, 1],
      arcWidth: 0.6,
      arcHeight: 0.28,
      markerElevation: 0.01,
      markers: [
        { location: origin.coords, size: 0.07, color: [1, 1, 1] },
        ...countries.map((c) => ({ location: c.coords, size: 0.035 })),
      ],
      arcs: countries.map((c) => ({ from: origin.coords, to: c.coords })),
    });

    const toAngles = ([lat, lng]: [number, number]) => [Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180];

    const render = () => {
      if (!reduce) phi += 0.11 * Math.exp(-(performance.now() - start) / 1100);
      const f = focusRef.current;
      if (f && pointer.current === null) {
        const [tp, tt] = toAngles(f);
        const twoPi = Math.PI * 2;
        let diff = ((tp - drag.current - phi) % twoPi + twoPi) % twoPi;
        if (diff > Math.PI) diff -= twoPi;
        phi += diff * 0.06;
        theta += (tt - theta) * 0.06;
      } else if (pointer.current === null && !reduce) {
        phi += 0.0028;
      }
      if (visible) globe.update({ phi: phi + drag.current, theta, width: width * dpr, height: width * dpr });
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const ro = new ResizeObserver(() => {
      width = wrap.offsetWidth;
    });
    ro.observe(wrap);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(wrap);

    const t = setTimeout(() => setReady(true), 80);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      ro.disconnect();
      io.disconnect();
      globe.destroy();
    };
  }, []);

  return (
    <div ref={wrapRef} className={cn("relative aspect-square w-full", className)}>
      <canvas
        ref={canvasRef}
        aria-label="Interactive globe showing routes from India to 20 study destinations"
        role="img"
        className={cn("h-full w-full cursor-grab transition-opacity duration-[1.6s] active:cursor-grabbing", ready ? "opacity-100" : "opacity-0")}
        style={{ contain: "layout paint size" }}
        onPointerDown={(e) => {
          pointer.current = e.clientX - drag.current * 200;
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerUp={() => {
          pointer.current = null;
        }}
        onPointerCancel={() => {
          pointer.current = null;
        }}
        onPointerMove={(e) => {
          if (pointer.current !== null) drag.current = (e.clientX - pointer.current) / 200;
        }}
      />
    </div>
  );
}
