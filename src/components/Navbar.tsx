"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./Logo";
import { site, whatsappLink } from "@/data/site";

const links = [
  { href: "/produtos", label: "Produtos" },
  { href: "/#categorias", label: "Categorias" },
  { href: "/#sobre", label: "A LIT" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#localizacao", label: "Onde estamos" },
];

export function Navbar() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [aberto]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ${
          rolou
            ? "border-b border-bone/10 bg-ink/80 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10">
          <Link href="/" aria-label="LIT STORE — início" className="shrink-0">
            <Logo className={`transition-all duration-500 ${rolou ? "text-[15px]" : "text-[19px]"}`} />
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative text-[13px] font-medium uppercase tracking-[0.18em] text-bone/70 transition-colors hover:text-bone"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-bronze transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={whatsappLink("Olá, LIT STORE! Vim pelo site e quero saber mais sobre as peças.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-bone px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-ink transition-all duration-300 hover:bg-bronze hover:text-ink sm:inline-block"
            >
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setAberto((v) => !v)}
              aria-expanded={aberto}
              aria-controls="menu-mobile"
              aria-label={aberto ? "Fechar menu" : "Abrir menu"}
              className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="flex h-3.5 w-5 flex-col justify-between">
                <span
                  className={`h-[1.5px] w-full bg-bone transition-transform duration-300 ${
                    aberto ? "translate-y-[6.5px] rotate-45" : ""
                  }`}
                />
                <span className={`h-[1.5px] w-full bg-bone transition-opacity ${aberto ? "opacity-0" : ""}`} />
                <span
                  className={`h-[1.5px] w-full bg-bone transition-transform duration-300 ${
                    aberto ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {aberto && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink lg:hidden"
          >
            <motion.nav
              aria-label="Menu móvel"
              className="flex h-full flex-col justify-center gap-2 px-6 pb-20"
            >
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setAberto(false)}
                    className="display block border-b border-bone/10 py-4 text-[12vw] text-bone/90 transition-colors hover:text-bronze"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.42, duration: 0.5 }}
                href={whatsappLink("Olá, LIT STORE! Vim pelo site e quero saber mais sobre as peças.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 rounded-full bg-bronze px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-ink"
              >
                Falar no WhatsApp
              </motion.a>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-bone-dim"
              >
                {site.endereco.completo}
              </motion.p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
