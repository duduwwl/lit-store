"use client";

import Image from "next/image";
import type { Produto } from "@/data/products";

export function precoFormatado(preco: number | null) {
  if (preco === null) return "Consulte";
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function ProductCard({
  produto,
  onAbrir,
  priority = false,
}: {
  produto: Produto;
  onAbrir: (p: Produto) => void;
  priority?: boolean;
}) {
  const segunda = produto.imagens[1] ?? produto.imagens[0];

  return (
    <article className="group">
      <button
        type="button"
        onClick={() => onAbrir(produto)}
        className="block w-full text-left"
        aria-label={`Ver detalhes de ${produto.nome}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink-3">
          <Image
            src={produto.imagens[0]}
            alt={produto.nome}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04] group-hover:opacity-0"
          />
          <Image
            src={segunda}
            alt=""
            aria-hidden
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover opacity-0 transition-[opacity,transform] duration-[800ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04] group-hover:opacity-100"
          />

          {produto.novidade && (
            <span className="absolute left-3 top-3 rounded-full bg-bronze px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
              Novo
            </span>
          )}

          <span className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-3 rounded-full bg-bone/95 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Ver detalhes
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.25em] text-bronze">{produto.marca}</p>
            <h3 className="mt-1.5 text-sm font-semibold leading-snug text-bone">{produto.nome}</h3>
            <p className="mt-1 text-xs text-bone-dim">{produto.categoria}</p>
          </div>
          <p className="shrink-0 text-sm font-semibold text-bone/90">{precoFormatado(produto.preco)}</p>
        </div>
      </button>
    </article>
  );
}
