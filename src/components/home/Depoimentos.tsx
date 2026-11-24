"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "../Reveal";

/**
 * ⚠️ PLACEHOLDER: depoimentos de exemplo.
 * Troque pelos feedbacks reais dos clientes (nome + texto) antes de divulgar o site.
 */
const depoimentos = [
  {
    nome: "Rafael M.",
    local: "Três Corações",
    texto:
      "Fui atrás de uma calça e saí com o look inteiro. O pessoal entende de caimento e não empurra peça — indica o que fica bom em você.",
  },
  {
    nome: "Diego P.",
    local: "Varginha",
    texto:
      "Faço 40 minutos de estrada só pra comprar na LIT. Marca boa, preço justo e eles sempre têm a numeração que preciso.",
  },
  {
    nome: "Lucas A.",
    local: "Três Corações",
    texto:
      "Comprei a Levi's 501 e o boné Colcci no mesmo dia. Atendimento rápido pelo WhatsApp, separaram tudo antes de eu chegar.",
  },
  {
    nome: "Thiago S.",
    local: "São Lourenço",
    texto:
      "A curadoria é o diferencial. Tudo que está na loja combina com tudo — fica fácil montar look sem errar.",
  },
];

export function Depoimentos() {
  const [i, setI] = useState(0);
  const atual = depoimentos[i];

  const ir = (dir: 1 | -1) => setI((v) => (v + dir + depoimentos.length) % depoimentos.length);

  return (
    <section
      aria-label="Depoimentos de clientes"
      className="scroll-mt-24 border-t border-bone/10 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="eyebrow">Quem veste LIT</p>
        </Reveal>

        <div className="mt-10 min-h-[260px] sm:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="max-w-4xl text-[clamp(1.35rem,3.6vw,2.6rem)] font-medium leading-[1.25] text-bone">
                <span aria-hidden className="text-bronze">
                  “
                </span>
                {atual.texto}
                <span aria-hidden className="text-bronze">
                  ”
                </span>
              </p>
              <footer className="mt-7 text-sm text-bone-dim">
                <cite className="not-italic font-semibold text-bone">{atual.nome}</cite> — {atual.local}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center gap-6">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => ir(-1)}
              aria-label="Depoimento anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/25 transition-colors hover:border-bronze hover:text-bronze"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => ir(1)}
              aria-label="Próximo depoimento"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/25 transition-colors hover:border-bronze hover:text-bronze"
            >
              →
            </button>
          </div>
          <div className="flex gap-2" aria-hidden>
            {depoimentos.map((d, idx) => (
              <span
                key={d.nome}
                className={`h-[3px] w-8 rounded-full transition-colors ${
                  idx === i ? "bg-bronze" : "bg-bone/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
