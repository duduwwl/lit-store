"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    const fino = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fino || reduzido) return;

    setAtivo(true);
    document.body.classList.add("cursor-host");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let frame = 0;

    const mover = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const alvo = (e.target as HTMLElement | null)?.closest("a,button,[data-cursor]");
      const inner = ring.current?.firstElementChild;
      inner?.classList.toggle("scale-[2.2]", Boolean(alvo));
      inner?.classList.toggle("bg-bronze/15", Boolean(alvo));
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", mover, { passive: true });
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", mover);
      cancelAnimationFrame(frame);
      document.body.classList.remove("cursor-host");
    };
  }, []);

  if (!ativo) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[90] hidden md:block">
      <div ref={ring} className="absolute -left-4 -top-4 h-8 w-8">
        <div className="h-full w-full rounded-full border border-bone/50 transition-[transform,background-color] duration-200 ease-out" />
      </div>
      <div ref={dot} className="absolute -left-[3px] -top-[3px] h-1.5 w-1.5 rounded-full bg-bronze" />
    </div>
  );
}
