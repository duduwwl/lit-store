"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { whatsappLink } from "@/data/site";

const linha1 = "ELEVANDO";
const linha2 = "ESTILOS";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduzido = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const escala = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden">
      <motion.div
        style={reduzido ? undefined : { y, scale: escala }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/produtos/bones-vitrine-1.jpg"
          alt="Vitrine de bonés da LIT STORE em Três Corações"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-ink/60" />
      </motion.div>

      <div className="mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:px-10 lg:pb-24">
        <motion.p
          initial={reduzido ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="eyebrow"
        >
          Três Corações — MG · desde 2017
        </motion.p>

        <h1 className="display mt-5 text-[clamp(3.2rem,15vw,13rem)]">
          <span className="sr-only">LIT STORE — elevando estilos desde 2017</span>
          <span aria-hidden className="block overflow-hidden">
            <motion.span
              initial={reduzido ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {linha1}
            </motion.span>
          </span>
          <span aria-hidden className="block overflow-hidden">
            <motion.span
              initial={reduzido ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="block text-bronze"
            >
              {linha2}
            </motion.span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 border-t border-bone/15 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={reduzido ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="max-w-md text-base leading-relaxed text-bone/75 sm:text-lg"
          >
            Loja masculina multimarcas. Levi&apos;s, Colcci, Calvin Klein, Reserva e Acostamento
            selecionadas peça a peça — mais de <strong className="font-semibold text-bone">60 mil estilos</strong>{" "}
            desde 2017.
          </motion.p>

          <motion.div
            initial={reduzido ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/produtos"
              className="group relative overflow-hidden rounded-full bg-bone px-8 py-4 text-center text-[13px] font-bold uppercase tracking-[0.2em] text-ink"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-ink">
                Ver coleção
              </span>
              <span className="absolute inset-0 -z-0 translate-y-full bg-bronze transition-transform duration-400 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0" />
            </Link>
            <a
              href={whatsappLink("Olá, LIT STORE! Vim pelo site e quero ver as novidades.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-bone/30 px-8 py-4 text-center text-[13px] font-bold uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:border-bronze hover:text-bronze"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-bone-dim">Role</span>
        <span className="h-10 w-px bg-gradient-to-b from-bronze to-transparent" />
      </motion.div>
    </section>
  );
}
