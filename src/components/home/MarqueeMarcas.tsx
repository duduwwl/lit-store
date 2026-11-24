import { site } from "@/data/site";

export function MarqueeMarcas() {
  const itens = [...site.marcas, ...site.marcas, ...site.marcas];

  return (
    <section aria-label="Marcas da LIT STORE" className="border-y border-bone/10 bg-ink-2 py-6 lg:py-8">
      <div className="marquee-pause relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track flex shrink-0 items-center gap-12 pr-12 lg:gap-20 lg:pr-20">
          {itens.map((m, i) => (
            <span key={`a-${m}-${i}`} className="flex shrink-0 items-center gap-12 lg:gap-20">
              <span className="display whitespace-nowrap text-[7vw] text-bone/80 lg:text-[3.2vw]">{m}</span>
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 bg-bronze" />
            </span>
          ))}
        </div>
        <div aria-hidden className="marquee-track flex shrink-0 items-center gap-12 pr-12 lg:gap-20 lg:pr-20">
          {itens.map((m, i) => (
            <span key={`b-${m}-${i}`} className="flex shrink-0 items-center gap-12 lg:gap-20">
              <span className="display whitespace-nowrap text-[7vw] text-bone/80 lg:text-[3.2vw]">{m}</span>
              <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-bronze" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
