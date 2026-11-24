import { site, whatsappLink } from "@/data/site";
import { Reveal } from "../Reveal";

export function Localizacao() {
  return (
    <section id="localizacao" className="scroll-mt-24 border-t border-bone/10 py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <Reveal>
          <p className="eyebrow">Onde estamos</p>
          <h2 className="display mt-4 text-[clamp(2.4rem,7vw,4.6rem)]">
            Centro de
            <br />
            <span className="text-bronze">Três Corações</span>
          </h2>

          <address className="mt-8 not-italic">
            <p className="text-xl font-semibold text-bone">{site.endereco.rua}</p>
            <p className="mt-1 text-bone-dim">
              {site.endereco.bairro} — {site.endereco.cidade}/{site.endereco.uf}
            </p>
          </address>

          <dl className="mt-8 max-w-sm divide-y divide-bone/10 border-y border-bone/10">
            {site.horarios.map((h) => (
              <div key={h.dia} className="flex items-center justify-between gap-4 py-3.5 text-sm">
                <dt className="text-bone-dim">{h.dia}</dt>
                <dd className="font-semibold text-bone">{h.hora}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.maps.rota}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-bone px-7 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bronze"
            >
              Como chegar
            </a>
            <a
              href={whatsappLink("Olá, LIT STORE! Queria confirmar o horário de funcionamento de hoje.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-bone/30 px-7 py-3.5 text-center text-[12px] font-bold uppercase tracking-[0.18em] transition-colors hover:border-bronze hover:text-bronze"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-bone/15 bg-ink-3 lg:aspect-square">
            <iframe
              src={site.maps.embed}
              title="Mapa com a localização da LIT STORE na Av. Presidente Dutra, 129, Centro, Três Corações – MG"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full w-full grayscale-[0.85] contrast-[1.1] invert-[0.92] hue-rotate-180 transition-[filter] duration-500 hover:grayscale-0 hover:invert-0 hover:hue-rotate-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
