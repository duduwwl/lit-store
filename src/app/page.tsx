import { Hero } from "@/components/home/Hero";
import { MarqueeMarcas } from "@/components/home/MarqueeMarcas";
import { Stats } from "@/components/home/Stats";
import { Categorias } from "@/components/home/Categorias";
import { Destaques } from "@/components/home/Destaques";
import { LookDoDia } from "@/components/home/LookDoDia";
import { Sobre } from "@/components/home/Sobre";
import { Galeria } from "@/components/home/Galeria";
import { Depoimentos } from "@/components/home/Depoimentos";
import { FAQ } from "@/components/home/FAQ";
import { Localizacao } from "@/components/home/Localizacao";
import { CTAFinal } from "@/components/home/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeMarcas />
      <Stats />
      <Categorias />
      <Destaques />
      <LookDoDia />
      <Sobre />
      <Galeria />
      <Depoimentos />
      <FAQ />
      <Localizacao />
      <CTAFinal />
    </>
  );
}
