"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Produto } from "@/data/products";
import { precoFormatado } from "./ProductCard";
import { whatsappLink } from "@/data/site";

export function ProductModal({ produto, onFechar }: { produto: Produto | null; onFechar: () => void }) {
  const [indice, setIndice] = useState(0);
  const [tamanho, setTamanho] = useState<string | null>(null);
  const fecharRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIndice(0);
    setTamanho(produto?.tamanhos.length === 1 ? produto.tamanhos[0] : null);
  }, [produto]);

  useEffect(() => {
    if (!produto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFechar();
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    fecharRef.current?.focus();
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [produto, onFechar]);

  const mensagem = produto
    ? `Olá, LIT STORE! Vi no site e quero saber sobre: ${produto.nome} (${produto.marca})${
        tamanho ? ` — tamanho ${tamanho}` : ""
      }.`
    : "";

  return (
    <AnimatePresence>
      {produto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/85 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onFechar}
          role="dialog"
          aria-modal="true"
          aria-label={produto.nome}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92svh] w-full max-w-5xl overflow-y-auto rounded-t-2xl border border-bone/10 bg-ink-2 sm:rounded-2xl"
          >
            <button
              ref={fecharRef}
              type="button"
              onClick={onFechar}
              aria-label="Fechar"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-bone transition-colors hover:bg-bronze hover:text-ink"
            >
              ✕
            </button>

            <div className="grid gap-0 md:grid-cols-2">
              <div className="bg-ink-3">
                <div className="relative aspect-square w-full">
                  <Image
                    src={produto.imagens[indice]}
                    alt={`${produto.nome} — foto ${indice + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                {produto.imagens.length > 1 && (
                  <div className="no-bar flex gap-2 overflow-x-auto p-3">
                    {produto.imagens.map((img, i) => (
                      <button
                        key={img + i}
                        type="button"
                        onClick={() => setIndice(i)}
                        aria-label={`Ver foto ${i + 1}`}
                        aria-current={i === indice}
                        className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-sm border transition-colors ${
                          i === indice ? "border-bronze" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image src={img} alt="" fill sizes="64px" className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col p-6 lg:p-9">
                <p className="eyebrow">{produto.marca}</p>
                <h2 className="display mt-3 text-[clamp(1.8rem,5vw,2.8rem)]">{produto.nome}</h2>
                <p className="mt-4 text-sm leading-relaxed text-bone-dim">{produto.descricao}</p>

                <p className="mt-6 text-2xl font-semibold text-bone">{precoFormatado(produto.preco)}</p>

                <div className="mt-7">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-bone-dim">Tamanhos</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {produto.tamanhos.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTamanho(t)}
                        aria-pressed={tamanho === t}
                        className={`min-w-[46px] rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                          tamanho === t
                            ? "border-bronze bg-bronze text-ink"
                            : "border-bone/25 text-bone hover:border-bone/60"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-bone-dim">Cores</p>
                  <p className="mt-2 text-sm text-bone/85">{produto.cores.join(" · ")}</p>
                </div>

                <a
                  href={whatsappLink(mensagem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block rounded-full bg-bronze px-6 py-4 text-center text-[13px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-bronze-bright"
                >
                  Pedir pelo WhatsApp
                </a>
                <p className="mt-3 text-center text-xs text-bone-dim">
                  Retirada na loja: {`Av. Presidente Dutra, 129 — Centro`}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
