"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { lookDoDia, produtos, type Produto } from "@/data/products";
import { ProductModal } from "../ProductModal";
import { Reveal } from "../Reveal";

export function LookDoDia() {
  const [ativo, setAtivo] = useState<string | null>(null);
  const [aberto, setAberto] = useState<Produto | null>(null);

  const pecas = lookDoDia.pontos
    .map((pt) => ({ ...pt, produto: produtos.find((p) => p.slug === pt.slug) }))
    .filter((pt): pt is typeof pt & { produto: Produto } => Boolean(pt.produto));

  return (
    <section id="look" className="scroll-mt-24 border-t border-bone/10 bg-ink-2 py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">Monte seu look</p>
          <h2 className="display mt-4 text-[clamp(2.4rem,7vw,4.6rem)]">{lookDoDia.titulo}</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-bone-dim">{lookDoDia.legenda}</p>

          <ul className="mt-8 divide-y divide-bone/10 border-y border-bone/10">
            {pecas.map((pt) => (
              <li key={pt.slug}>
                <button
                  type="button"
                  onMouseEnter={() => setAtivo(pt.slug)}
                  onFocus={() => setAtivo(pt.slug)}
                  onMouseLeave={() => setAtivo(null)}
                  onBlur={() => setAtivo(null)}
                  onClick={() => setAberto(pt.produto)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-bronze"
                >
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-bronze">
                      {pt.produto.marca}
                    </span>
                    <span className="mt-1.5 block text-base font-semibold">{pt.produto.nome}</span>
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      ativo === pt.slug ? "border-bronze bg-bronze text-ink" : "border-bone/25"
                    }`}
                  >
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative aspect-square overflow-hidden rounded-sm bg-ink-3">
            <Image
              src={lookDoDia.imagem}
              alt={lookDoDia.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {pecas.map((pt) => (
              <div key={pt.slug} className="absolute" style={{ left: `${pt.x}%`, top: `${pt.y}%` }}>
                <button
                  type="button"
                  onMouseEnter={() => setAtivo(pt.slug)}
                  onMouseLeave={() => setAtivo(null)}
                  onFocus={() => setAtivo(pt.slug)}
                  onBlur={() => setAtivo(null)}
                  onClick={() => setAberto(pt.produto)}
                  aria-label={`Ver ${pt.produto.nome}`}
                  className="relative -ml-4 -mt-4 flex h-8 w-8 items-center justify-center rounded-full border border-ink/30 bg-bone/90 text-ink"
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-bone/40 [animation-duration:2.6s]" />
                  <span className="relative text-lg leading-none">+</span>
                </button>

                <AnimatePresence>
                  {ativo === pt.slug && (
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="pointer-events-none absolute left-6 top-0 w-max max-w-[55vw] rounded-full bg-ink/95 px-3 py-1.5 text-xs font-semibold text-bone"
                    >
                      {pt.produto.nome}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <ProductModal produto={aberto} onFechar={() => setAberto(null)} />
    </section>
  );
}
