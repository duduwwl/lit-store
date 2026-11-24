"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "../Reveal";

const perguntas = [
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Pix, dinheiro, débito e crédito — com parcelamento conforme o valor da compra. Fale com a gente no WhatsApp para confirmar condições e parcelas da peça que você quer.",
  },
  {
    q: "Posso trocar uma peça?",
    a: "Sim. Trocas por tamanho ou cor são feitas na loja em até 30 dias, com a etiqueta e o comprovante, e a peça sem uso. Peças em promoção seguem a mesma regra.",
  },
  {
    q: "Vocês entregam ou só retirada na loja?",
    a: "Em Três Corações combinamos entrega pelo WhatsApp. Para outras cidades enviamos por transportadora/correio com o frete calculado na hora do pedido.",
  },
  {
    q: "Como descubro meu tamanho?",
    a: "Manda uma mensagem com a peça e seu manequim habitual: a gente confere a modelagem de cada marca (Levi's, Colcci, Calvin Klein, Reserva e Acostamento vestem diferente) e indica o número certo.",
  },
  {
    q: "Dá para reservar uma peça que vi no Instagram?",
    a: "Dá. Mande o print ou o link do post no WhatsApp que separamos a peça e seguramos por 24h para você passar na loja.",
  },
  {
    q: "Vocês têm linha feminina?",
    a: "Temos uma seleção feminina — a LIT P/ Elas. As peças disponíveis ficam no destaque do Instagram @litstore.tc.",
  },
];

export function FAQ() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-bone/10 bg-ink-2 py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-10">
        <Reveal>
          <p className="eyebrow">Dúvidas</p>
          <h2 className="display mt-4 text-[clamp(2.4rem,7vw,4.6rem)]">Perguntas frequentes</h2>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="border-t border-bone/15">
            {perguntas.map((p, i) => {
              const ativo = aberta === i;
              return (
                <li key={p.q} className="border-b border-bone/15">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setAberta(ativo ? null : i)}
                      aria-expanded={ativo}
                      aria-controls={`faq-${i}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="text-base font-semibold text-bone sm:text-lg">{p.q}</span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                          ativo ? "rotate-45 border-bronze bg-bronze text-ink" : "border-bone/25"
                        }`}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {ativo && (
                      <motion.div
                        id={`faq-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pr-10 text-sm leading-relaxed text-bone-dim">{p.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
