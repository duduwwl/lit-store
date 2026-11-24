import Link from "next/link";
import { whatsappLink } from "@/data/site";
import { Reveal } from "../Reveal";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden border-t border-bone/10 bg-bronze text-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-ink/70">
            Sua próxima peça está aqui
          </p>
          <h2 className="display mt-6 text-[clamp(2.8rem,11vw,8rem)] text-ink">
            Vem elevar
            <br />
            seu estilo
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Olá, LIT STORE! Vim pelo site e quero montar meu look.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-9 py-4 text-center text-[13px] font-bold uppercase tracking-[0.2em] text-bone transition-transform duration-300 hover:scale-[1.03]"
            >
              Falar no WhatsApp
            </a>
            <Link
              href="/produtos"
              className="rounded-full border border-ink/40 px-9 py-4 text-center text-[13px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              Ver o catálogo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
