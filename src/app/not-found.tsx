import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-[1400px] flex-col justify-center px-4 py-32 sm:px-6 lg:px-10">
      <p className="eyebrow">Erro 404</p>
      <h1 className="display mt-4 text-[clamp(3rem,13vw,9rem)]">Peça não encontrada</h1>
      <p className="mt-5 max-w-md text-bone-dim">
        A página que você procurou saiu de linha. Volte para o catálogo e veja o que está na loja agora.
      </p>
      <Link
        href="/produtos"
        className="mt-8 w-fit rounded-full bg-bronze px-8 py-4 text-[13px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-bronze-bright"
      >
        Ver o catálogo
      </Link>
    </section>
  );
}
