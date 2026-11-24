import Image from "next/image";
import { galeria } from "@/data/products";
import { site } from "@/data/site";
import { Reveal } from "../Reveal";

export function Galeria() {
  return (
    <section id="galeria" className="scroll-mt-24 border-t border-bone/10 bg-ink-2 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">No nosso Instagram</p>
            <h2 className="display mt-4 text-[clamp(2.4rem,8vw,5.5rem)]">{site.instagramHandle}</h2>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-bone px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bronze"
          >
            Seguir a LIT
          </a>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:mt-14 lg:grid-cols-6 lg:gap-3">
          {galeria.map((img, i) => (
            <Reveal
              as="li"
              key={img + i}
              delay={(i % 6) * 0.04}
              className={i === 0 || i === 7 ? "col-span-2 row-span-2" : ""}
            >
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-sm bg-ink-3"
              >
                <Image
                  src={img}
                  alt="Publicação da LIT STORE no Instagram"
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                  className="object-cover opacity-80 transition-[transform,opacity] duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-bone">Ver no IG</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
