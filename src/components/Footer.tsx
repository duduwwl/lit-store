import Link from "next/link";
import { Logo } from "./Logo";
import { site, whatsappLink } from "@/data/site";
import { categorias } from "@/data/products";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-bone/10 bg-ink-2">
      <div className="mx-auto max-w-[1400px] px-4 pb-10 pt-16 sm:px-6 lg:px-10 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="text-[26px]" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-bone-dim">{site.tagline}.</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-bone transition-colors hover:text-bronze"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.36 2.67.95 3.34.64 4.13.34 4.9.14 5.77.08 7.05.02 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.92.31.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.77.3 1.64.5 2.92.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.92-.56.79-.31 1.46-.72 2.12-1.38.66-.66 1.07-1.33 1.38-2.12.3-.77.5-1.64.56-2.92.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.92-.31-.79-.72-1.46-1.38-2.12C21.33 1.36 20.66.95 19.87.64c-.77-.3-1.64-.5-2.92-.56C15.67.01 15.26 0 12 0m0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4m7.85-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44" />
              </svg>
              {site.instagramHandle}
            </a>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="eyebrow">Navegar</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "/produtos", label: "Todos os produtos" },
                { href: "/#categorias", label: "Categorias" },
                { href: "/#look", label: "Monte seu look" },
                { href: "/#sobre", label: "Sobre a LIT" },
                { href: "/#faq", label: "Dúvidas frequentes" },
                { href: "/#localizacao", label: "Como chegar" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-bone-dim transition-colors hover:text-bronze">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Categorias">
            <h2 className="eyebrow">Categorias</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {categorias.map((c) => (
                <li key={c}>
                  <Link
                    href={`/produtos?categoria=${encodeURIComponent(c)}`}
                    className="text-bone-dim transition-colors hover:text-bronze"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow">A loja</h2>
            <address className="mt-5 space-y-1 text-sm not-italic text-bone-dim">
              <p>{site.endereco.rua}</p>
              <p>
                {site.endereco.bairro} — {site.endereco.cidade}/{site.endereco.uf}
              </p>
            </address>
            <ul className="mt-5 space-y-1 text-sm text-bone-dim">
              {site.horarios.map((h) => (
                <li key={h.dia} className="flex justify-between gap-4">
                  <span>{h.dia}</span>
                  <span className="text-bone/80">{h.hora}</span>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink("Olá, LIT STORE! Vim pelo site.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full border border-bone/25 px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] transition-colors hover:border-bronze hover:text-bronze"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>

        <div
          aria-hidden
          className="display mt-16 select-none text-center text-[22vw] leading-[0.8] text-bone/[0.06] lg:mt-20"
        >
          LIT STORE
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-bone/10 pt-8 text-xs text-bone-dim sm:flex-row">
          <p>
            © {new Date().getFullYear()} LIT STORE — {site.endereco.cidade}/{site.endereco.uf}. Todos os
            direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <span className="font-semibold tracking-wide text-bone">ZoryonWeb</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
