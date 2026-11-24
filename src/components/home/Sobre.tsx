import Image from "next/image";
import { Reveal } from "../Reveal";

/**
 * ⚠️ PLACEHOLDER DE IMAGENS:
 * As fotos do TIME LIT, da PREMIAÇÃO e do interior da loja estão nos destaques do
 * Instagram, que exigem login para baixar. Enquanto não chegam, usamos fotos de
 * produto/vitrine. Troque os caminhos abaixo pelas fotos reais.
 */
const blocos = [
  {
    titulo: "Desde 2017",
    texto:
      "A LIT nasceu no centro de Três Corações com uma ideia simples: trazer para a cidade as marcas que o homem mineiro só encontrava em capital. Oito anos depois, são mais de 60 mil estilos elevados.",
    img: "/images/produtos/bones-vitrine-2.jpg",
    alt: "Vitrine da LIT STORE com bonés das marcas trabalhadas pela loja",
  },
  {
    titulo: "Time LIT",
    texto:
      "Atendimento que conhece caimento, tecido e numeração de cor. Você chega com uma ideia e sai com o look fechado — da camiseta ao boné.",
    img: "/images/produtos/polo-reserva-areia-3.jpg",
    alt: "Peças da LIT STORE combinadas em um look tom sobre tom",
  },
  {
    titulo: "Premiação",
    texto:
      "Reconhecida pelos clientes como referência em moda masculina na região. O prêmio fica na loja; o crédito é de quem confia na LIT desde o começo.",
    img: "/images/produtos/look-acostamento-xadrez-1.jpg",
    alt: "Look completo Acostamento disponível na LIT STORE",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-24 border-t border-bone/10 py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">A LIT</p>
          <h2 className="display mt-4 text-[clamp(2.4rem,9vw,6rem)]">
            Oito anos
            <br />
            <span className="text-bronze">vestindo</span> a cidade
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {blocos.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 0.08}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-ink-3 lg:aspect-[4/5]">
                <Image
                  src={b.img}
                  alt={b.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-85 transition-transform duration-[900ms] hover:scale-105"
                />
              </div>
              <h3 className="display mt-6 text-3xl">{b.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone-dim">{b.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
