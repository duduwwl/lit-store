"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import {
  categorias,
  coresDisponiveis,
  marcas,
  produtos,
  tamanhosDisponiveis,
  type Produto,
} from "@/data/products";
import { ProductCard } from "../ProductCard";
import { ProductModal } from "../ProductModal";
import { whatsappLink } from "@/data/site";

type Ordem = "novidades" | "az" | "menor" | "maior";

const ordens: { valor: Ordem; label: string }[] = [
  { valor: "novidades", label: "Novidades" },
  { valor: "az", label: "A — Z" },
  { valor: "menor", label: "Menor preço" },
  { valor: "maior", label: "Maior preço" },
];

function toggle(lista: string[], valor: string) {
  return lista.includes(valor) ? lista.filter((v) => v !== valor) : [...lista, valor];
}

export function Catalogo() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const reduzido = useReducedMotion();

  const [busca, setBusca] = useState(params.get("q") ?? "");
  const [cats, setCats] = useState<string[]>(params.getAll("categoria"));
  const [mrcs, setMrcs] = useState<string[]>(params.getAll("marca"));
  const [tams, setTams] = useState<string[]>(params.getAll("tamanho"));
  const [cors, setCors] = useState<string[]>(params.getAll("cor"));
  const [ordem, setOrdem] = useState<Ordem>((params.get("ordem") as Ordem) ?? "novidades");
  const [drawer, setDrawer] = useState(false);
  const [aberto, setAberto] = useState<Produto | null>(null);

  // Reflete os filtros na URL (sem recarregar a página).
  useEffect(() => {
    const sp = new URLSearchParams();
    if (busca.trim()) sp.set("q", busca.trim());
    cats.forEach((c) => sp.append("categoria", c));
    mrcs.forEach((m) => sp.append("marca", m));
    tams.forEach((t) => sp.append("tamanho", t));
    cors.forEach((c) => sp.append("cor", c));
    if (ordem !== "novidades") sp.set("ordem", ordem);
    const query = sp.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [busca, cats, mrcs, tams, cors, ordem, pathname, router]);

  useEffect(() => {
    document.documentElement.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [drawer]);

  const limpar = useCallback(() => {
    setBusca("");
    setCats([]);
    setMrcs([]);
    setTams([]);
    setCors([]);
    setOrdem("novidades");
  }, []);

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    const lista = produtos.filter((p) => {
      if (cats.length && !cats.includes(p.categoria)) return false;
      if (mrcs.length && !mrcs.includes(p.marca)) return false;
      if (tams.length && !p.tamanhos.some((t) => tams.includes(t))) return false;
      if (cors.length && !p.cores.some((c) => cors.includes(c))) return false;
      if (termo) {
        const alvo = `${p.nome} ${p.marca} ${p.categoria} ${p.descricao} ${p.cores.join(" ")}`.toLowerCase();
        if (!alvo.includes(termo)) return false;
      }
      return true;
    });

    const semPreco = Number.MAX_SAFE_INTEGER;
    return [...lista].sort((a, b) => {
      if (ordem === "az") return a.nome.localeCompare(b.nome, "pt-BR");
      if (ordem === "menor") return (a.preco ?? semPreco) - (b.preco ?? semPreco);
      if (ordem === "maior") return (b.preco ?? -1) - (a.preco ?? -1);
      return Number(Boolean(b.novidade)) - Number(Boolean(a.novidade));
    });
  }, [busca, cats, mrcs, tams, cors, ordem]);

  const chips = [
    ...cats.map((v) => ({ v, grupo: "categoria" as const, acao: () => setCats((l) => toggle(l, v)) })),
    ...mrcs.map((v) => ({ v, grupo: "marca" as const, acao: () => setMrcs((l) => toggle(l, v)) })),
    ...tams.map((v) => ({ v, grupo: "tamanho" as const, acao: () => setTams((l) => toggle(l, v)) })),
    ...cors.map((v) => ({ v, grupo: "cor" as const, acao: () => setCors((l) => toggle(l, v)) })),
  ];

  const filtros = (
    <div className="space-y-9">
      <Grupo titulo="Categoria" opcoes={[...categorias]} ativos={cats} onToggle={(v) => setCats((l) => toggle(l, v))} />
      <Grupo titulo="Marca" opcoes={marcas} ativos={mrcs} onToggle={(v) => setMrcs((l) => toggle(l, v))} />
      <Grupo
        titulo="Tamanho"
        opcoes={tamanhosDisponiveis}
        ativos={tams}
        onToggle={(v) => setTams((l) => toggle(l, v))}
        pills
      />
      <Grupo titulo="Cor" opcoes={coresDisponiveis} ativos={cors} onToggle={(v) => setCors((l) => toggle(l, v))} />
      <div>
        <h3 className="eyebrow">Faixa de preço</h3>
        <p className="mt-3 text-sm leading-relaxed text-bone-dim">
          Os valores variam por marca e coleção. Todas as peças estão como{" "}
          <strong className="font-semibold text-bone">Consulte</strong> — chame no WhatsApp para o preço do dia.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-4 pb-24 pt-28 sm:px-6 lg:px-10 lg:pt-36">
        <header>
          <p className="eyebrow">Catálogo completo</p>
          <h1 className="display mt-4 text-[clamp(2.6rem,10vw,7rem)]">Produtos</h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-bone-dim">
            As peças que estão na loja, direto do nosso Instagram. Encontrou algo? É só pedir pelo WhatsApp que
            a gente separa.
          </p>
        </header>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-14">
          <div className="relative flex-1">
            <label htmlFor="busca" className="sr-only">
              Buscar produtos
            </label>
            <input
              id="busca"
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por peça, marca ou cor…"
              className="w-full rounded-full border border-bone/20 bg-ink-2 px-5 py-3.5 text-sm text-bone placeholder:text-bone-dim focus:border-bronze focus:outline-none"
            />
          </div>

          <div className="flex gap-3">
            <label htmlFor="ordem" className="sr-only">
              Ordenar por
            </label>
            <select
              id="ordem"
              value={ordem}
              onChange={(e) => setOrdem(e.target.value as Ordem)}
              className="rounded-full border border-bone/20 bg-ink-2 px-5 py-3.5 text-sm text-bone focus:border-bronze focus:outline-none"
            >
              {ordens.map((o) => (
                <option key={o.valor} value={o.valor}>
                  {o.label}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setDrawer(true)}
              className="rounded-full border border-bone/20 bg-ink-2 px-5 py-3.5 text-sm font-semibold lg:hidden"
            >
              Filtros{chips.length ? ` (${chips.length})` : ""}
            </button>
          </div>
        </div>

        {chips.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {chips.map((c) => (
              <button
                key={`${c.grupo}-${c.v}`}
                type="button"
                onClick={c.acao}
                className="group flex items-center gap-2 rounded-full border border-bronze/50 bg-bronze/10 px-4 py-1.5 text-xs font-semibold text-bone"
              >
                {c.v}
                <span aria-hidden className="text-bronze transition-transform group-hover:rotate-90">
                  ✕
                </span>
                <span className="sr-only">Remover filtro</span>
              </button>
            ))}
            <button
              type="button"
              onClick={limpar}
              className="ml-1 text-xs font-semibold uppercase tracking-[0.16em] text-bone-dim underline-offset-4 hover:text-bronze hover:underline"
            >
              Limpar tudo
            </button>
          </div>
        )}

        <div className="mt-10 grid gap-10 lg:grid-cols-[250px_1fr] lg:gap-14">
          <aside aria-label="Filtros" className="hidden lg:block">
            <div className="sticky top-28">{filtros}</div>
          </aside>

          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-bone-dim" aria-live="polite">
              {filtrados.length} {filtrados.length === 1 ? "peça" : "peças"}
            </p>

            <LayoutGroup>
              <motion.ul layout className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:gap-x-6">
                <AnimatePresence mode="popLayout">
                  {filtrados.map((p, i) => (
                    <motion.li
                      key={p.slug}
                      layout={!reduzido}
                      initial={reduzido ? false : { opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ProductCard produto={p} onAbrir={setAberto} priority={i < 2} />
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
            </LayoutGroup>

            {filtrados.length === 0 && (
              <div className="flex flex-col items-center rounded-sm border border-dashed border-bone/20 px-6 py-20 text-center">
                <span className="display text-[clamp(3rem,12vw,7rem)] leading-none text-bone/15">000</span>
                <h2 className="mt-6 text-lg font-semibold">Nada por aqui com esses filtros</h2>
                <p className="mt-3 max-w-sm text-sm text-bone-dim">
                  A loja gira rápido e nem tudo está no catálogo. Limpe os filtros ou pergunte pra gente — se
                  existir, a LIT acha.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={limpar}
                    className="rounded-full bg-bone px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bronze"
                  >
                    Limpar filtros
                  </button>
                  <a
                    href={whatsappLink(
                      `Olá, LIT STORE! Procurei no site${busca ? ` por "${busca}"` : ""} e não achei. Vocês têm algo parecido?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-bone/30 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] transition-colors hover:border-bronze hover:text-bronze"
                  >
                    Perguntar no WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {drawer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[75] bg-ink/80 backdrop-blur-sm lg:hidden"
            onClick={() => setDrawer(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Filtros"
              className="absolute inset-x-0 bottom-0 max-h-[85svh] overflow-y-auto rounded-t-2xl border-t border-bone/15 bg-ink-2 p-6 pb-28"
            >
              <div className="mb-8 flex items-center justify-between">
                <h2 className="display text-3xl">Filtros</h2>
                <button
                  type="button"
                  onClick={() => setDrawer(false)}
                  aria-label="Fechar filtros"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/20"
                >
                  ✕
                </button>
              </div>
              {filtros}
              <div className="fixed inset-x-0 bottom-0 flex gap-3 border-t border-bone/10 bg-ink-2 p-4">
                <button
                  type="button"
                  onClick={limpar}
                  className="flex-1 rounded-full border border-bone/25 py-3.5 text-[12px] font-bold uppercase tracking-[0.16em]"
                >
                  Limpar
                </button>
                <button
                  type="button"
                  onClick={() => setDrawer(false)}
                  className="flex-[2] rounded-full bg-bronze py-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-ink"
                >
                  Ver {filtrados.length} {filtrados.length === 1 ? "peça" : "peças"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ProductModal produto={aberto} onFechar={() => setAberto(null)} />
    </>
  );
}

function Grupo({
  titulo,
  opcoes,
  ativos,
  onToggle,
  pills = false,
}: {
  titulo: string;
  opcoes: string[];
  ativos: string[];
  onToggle: (v: string) => void;
  pills?: boolean;
}) {
  return (
    <fieldset>
      <legend className="eyebrow">{titulo}</legend>
      <div className={pills ? "mt-4 flex flex-wrap gap-2" : "mt-4 space-y-2.5"}>
        {opcoes.map((o) => {
          const ativo = ativos.includes(o);
          if (pills) {
            return (
              <button
                key={o}
                type="button"
                onClick={() => onToggle(o)}
                aria-pressed={ativo}
                className={`min-w-[46px] rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  ativo ? "border-bronze bg-bronze text-ink" : "border-bone/20 text-bone hover:border-bone/50"
                }`}
              >
                {o}
              </button>
            );
          }
          return (
            <label key={o} className="flex cursor-pointer items-center gap-3 text-sm text-bone/85">
              <input
                type="checkbox"
                checked={ativo}
                onChange={() => onToggle(o)}
                className="peer sr-only"
              />
              <span
                aria-hidden
                className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[3px] border text-[11px] transition-colors ${
                  ativo ? "border-bronze bg-bronze text-ink" : "border-bone/30"
                } peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-bronze-bright`}
              >
                {ativo ? "✓" : ""}
              </span>
              <span className="transition-colors hover:text-bone">{o}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
