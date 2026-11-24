"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { produtos, type Produto } from "@/data/products";
import { ProductCard } from "../ProductCard";
import { ProductModal } from "../ProductModal";
import { Reveal } from "../Reveal";

export function Destaques() {
  const trilho = useRef<HTMLDivElement>(null);
  const [aberto, setAberto] = useState<Produto | null>(null);
  const lista = produtos.filter((p) => p.destaque);

  const deslizar = (dir: 1 | -1) => {
    const el = trilho.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 640), behavior: "smooth" });
  };

  return (
    <section
      id="destaques"
      className="scroll-mt-24 overflow-hidden border-t border-bone/10 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Selecionadas pela LIT</p>
            <h2 className="display mt-4 text-[clamp(2.4rem,8vw,5.5rem)]">Em destaque</h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => deslizar(-1)}
              aria-label="Produtos anteriores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/25 transition-colors hover:border-bronze hover:text-bronze"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => deslizar(1)}
              aria-label="Próximos produtos"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/25 transition-colors hover:border-bronze hover:text-bronze"
            >
              →
            </button>
          </div>
        </Reveal>
      </div>

      <div
        ref={trilho}
        className="no-bar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:mt-14 lg:gap-6 lg:px-10"
      >
        {lista.map((p, i) => (
          <div
            key={p.slug}
            className="w-[72vw] shrink-0 snap-start sm:w-[42vw] lg:w-[25vw] xl:w-[22rem]"
          >
            <ProductCard produto={p} onAbrir={setAberto} priority={i < 2} />
          </div>
        ))}
        <div className="flex w-[72vw] shrink-0 snap-start items-center sm:w-[42vw] lg:w-[25vw] xl:w-[22rem]">
          <Link
            href="/produtos"
            className="group flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 rounded-sm border border-dashed border-bone/25 transition-colors hover:border-bronze"
          >
            <span className="display text-3xl text-bone/80 transition-colors group-hover:text-bronze">
              Ver mais
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bronze text-ink transition-transform duration-300 group-hover:scale-110">
              →
            </span>
          </Link>
        </div>
      </div>

      <ProductModal produto={aberto} onFechar={() => setAberto(null)} />
    </section>
  );
}
