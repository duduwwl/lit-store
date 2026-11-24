"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { valor: number; label: string; prefixo?: string; sufixo?: string };

const stats: Stat[] = [
  { valor: 60, prefixo: "+", sufixo: " mil", label: "estilos elevados" },
  { valor: 2017, label: "ano de fundação" },
  { valor: 3, prefixo: "+", sufixo: " mil", label: "seguidores no Instagram" },
  { valor: 5, prefixo: "+", label: "marcas premium" },
];

function Contador({ alvo, duracao = 1600 }: { alvo: number; duracao?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [valor, setValor] = useState(0);
  const feito = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const animar = () => {
      if (feito.current) return;
      feito.current = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setValor(alvo);
        return;
      }
      const inicio = performance.now();
      const tick = (agora: number) => {
        const t = Math.min((agora - inicio) / duracao, 1);
        setValor(Math.round(alvo * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    // Se o scroll foi rápido demais e o número já passou, mostra o valor final.
    const verificar = () => {
      if (feito.current) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0) {
        feito.current = true;
        setValor(alvo);
        return;
      }
      if (r.top < window.innerHeight) animar();
    };

    const io = new IntersectionObserver(
      (entradas) => entradas.forEach((e) => e.isIntersecting && animar()),
      { rootMargin: "-40px" }
    );
    io.observe(el);
    verificar();
    window.addEventListener("scroll", verificar, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", verificar);
      cancelAnimationFrame(frame);
    };
  }, [alvo, duracao]);

  return <span ref={ref}>{valor}</span>;
}

export function Stats() {
  return (
    <section aria-label="A LIT em números" className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse border-t border-bone/15 pt-5">
            <dt className="mt-3 text-[11px] uppercase tracking-[0.25em] text-bone-dim">{s.label}</dt>
            <dd className="display text-[clamp(2.6rem,8vw,4.6rem)] text-bone">
              {s.prefixo}
              <Contador alvo={s.valor} />
              {s.sufixo}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
