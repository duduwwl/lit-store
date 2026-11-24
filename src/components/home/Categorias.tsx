import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../Reveal";
import { site } from "@/data/site";

const cards = [
  { nome: "Camisetas", img: "/images/produtos/camisetas-terrosas-1.jpg", span: "lg:col-span-2" },
  { nome: "Bonés", img: "/images/produtos/bone-colcci-areia-1.jpg", span: "" },
  { nome: "Polos", img: "/images/produtos/polo-reserva-areia-2.jpg", span: "" },
  { nome: "Camisas", img: "/images/produtos/look-acostamento-xadrez-1.jpg", span: "" },
  { nome: "Jeans", img: "/images/produtos/jeans-ck-2.jpg", span: "lg:col-span-2" },
  { nome: "Calças", img: "/images/produtos/alfaiataria-ck-1.jpg", span: "" },
  { nome: "Bermudas", img: "/images/produtos/bermuda-sarja-reserva-1.jpg", span: "" },
  { nome: "Manga Longa", img: "/images/produtos/manga-longa-acostamento-2.jpg", span: "" },
];

export function Categorias() {
  return (
    <section id="categorias" className="mx-auto max-w-[1400px] scroll-mt-24 px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">O que você procura</p>
          <h2 className="display mt-4 text-[clamp(2.4rem,8vw,5.5rem)]">Categorias</h2>
        </div>
        <Link
          href="/produtos"
          className="group inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-bone-dim transition-colors hover:text-bronze"
        >
          Ver tudo
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </Link>
      </Reveal>

      <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {cards.map((c, i) => (
          <Reveal as="li" key={c.nome} delay={i * 0.05} className={c.span}>
            <Link
              href={`/produtos?categoria=${encodeURIComponent(c.nome)}`}
              className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-ink-3 lg:aspect-[4/5]"
            >
              <Image
                src={c.img}
                alt=""
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-75 transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07] group-hover:opacity-100"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 lg:p-5">
                <span className="display text-[clamp(1.3rem,3.4vw,2rem)] leading-none">{c.nome}</span>
                <span className="flex h-8 w-8 shrink-0 translate-y-2 items-center justify-center rounded-full bg-bronze text-ink opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        ))}

        <Reveal as="li" delay={0.4} className="col-span-2 lg:col-span-4">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[180px] items-center justify-between gap-4 overflow-hidden rounded-sm border border-bronze/40 bg-gradient-to-r from-bronze/15 to-transparent p-6 lg:min-h-[220px] lg:p-10"
          >
            <span>
              <span className="eyebrow">Linha feminina</span>
              <span className="display mt-3 block text-[clamp(2rem,7vw,4rem)]">LIT P/ Elas</span>
              <span className="mt-3 block max-w-sm text-sm text-bone-dim">
                A seleção feminina da LIT fica no destaque do Instagram. Toque para ver as peças e chamar a
                gente.
              </span>
            </span>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-bronze text-ink transition-transform duration-300 group-hover:scale-110 lg:h-16 lg:w-16">
              →
            </span>
          </a>
        </Reveal>
      </ul>
    </section>
  );
}
