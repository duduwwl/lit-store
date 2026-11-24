import type { Metadata } from "next";
import { Suspense } from "react";
import { Catalogo } from "@/components/produtos/Catalogo";

export const metadata: Metadata = {
  title: "Produtos — catálogo masculino multimarcas",
  description:
    "Camisetas, polos, camisas, calças, jeans, bermudas e bonés das marcas Levi's, Colcci, Calvin Klein, Reserva e Acostamento na LIT STORE, Três Corações – MG.",
  alternates: { canonical: "/produtos" },
};

export default function ProdutosPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1400px] px-4 pb-24 pt-32 sm:px-6 lg:px-10">
          <p className="eyebrow">Catálogo completo</p>
          <h1 className="display mt-4 text-[clamp(2.6rem,10vw,7rem)]">Produtos</h1>
          <p className="mt-8 text-sm text-bone-dim">Carregando peças…</p>
        </div>
      }
    >
      <Catalogo />
    </Suspense>
  );
}
