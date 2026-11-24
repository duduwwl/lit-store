/**
 * CATÁLOGO LIT STORE
 * Todas as fotos foram coletadas do Instagram @litstore.tc (posts de out/nov de 2026).
 * Para editar o catálogo, mexa só neste arquivo.
 *
 * preco: null  -> o card mostra "Consulte"
 * preco: 249.9 -> o card mostra "R$ 249,90"
 */

export type Categoria =
  | "Camisetas"
  | "Manga Longa"
  | "Polos"
  | "Camisas"
  | "Calças"
  | "Jeans"
  | "Bermudas"
  | "Bonés";

export type Produto = {
  slug: string;
  nome: string;
  marca: string;
  categoria: Categoria;
  preco: number | null;
  tamanhos: string[];
  cores: string[];
  imagens: string[];
  descricao: string;
  novidade?: boolean;
  destaque?: boolean;
};

const P = "/images/produtos";

export const produtos: Produto[] = [
  {
    slug: "bone-colcci-supply-areia",
    nome: "Boné Colcci Supply Areia",
    marca: "Colcci",
    categoria: "Bonés",
    preco: null,
    tamanhos: ["Único"],
    cores: ["Areia"],
    imagens: [`${P}/bone-colcci-areia-1.jpg`, `${P}/bone-colcci-areia-2.jpg`, `${P}/bone-colcci-areia-3.jpg`, `${P}/bone-colcci-areia-4.jpg`],
    descricao:
      "O toque neutro que faz toda a diferença. Boné Colcci na cor areia: versátil, moderno e perfeito para complementar o visual com estilo.",
    novidade: true,
    destaque: true,
  },
  {
    slug: "blusa-manga-longa-acostamento",
    nome: "Blusa Manga Longa Acostamento",
    marca: "Acostamento",
    categoria: "Manga Longa",
    preco: null,
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Preto", "Areia", "Verde", "Marinho"],
    imagens: [
      `${P}/manga-longa-acostamento-1.jpg`,
      `${P}/manga-longa-acostamento-2.jpg`,
      `${P}/manga-longa-acostamento-3.jpg`,
      `${P}/manga-longa-acostamento-4.jpg`,
      `${P}/manga-longa-acostamento-5.jpg`,
    ],
    descricao:
      "Estilo, conforto e versatilidade para os dias mais fresquinhos. Manga longa Acostamento em várias cores.",
    novidade: true,
    destaque: true,
  },
  {
    slug: "levis-501-original",
    nome: "Jeans Levi's 501 Original",
    marca: "Levi's",
    categoria: "Jeans",
    preco: null,
    tamanhos: ["38", "40", "42", "44", "46", "48"],
    cores: ["Azul médio"],
    imagens: [`${P}/levis-501-1.jpg`],
    descricao:
      "O clássico que nunca sai de moda. Modelagem tradicional e corte reto: a Levi's 501 é sinônimo de autenticidade. Um jeans atemporal, versátil e fácil de combinar.",
    destaque: true,
  },
  {
    slug: "polo-reserva-areia",
    nome: "Polo Reserva Areia",
    marca: "Reserva",
    categoria: "Polos",
    preco: null,
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Areia"],
    imagens: [`${P}/polo-reserva-areia-1.jpg`, `${P}/polo-reserva-areia-2.jpg`, `${P}/polo-reserva-areia-3.jpg`],
    descricao:
      "Contraste suave em um look tom sobre tom. A polo Reserva areia mantém a harmonia da paleta terrosa com elegância atemporal.",
    novidade: true,
    destaque: true,
  },
  {
    slug: "calca-sarja-marrom",
    nome: "Calça de Sarja Marrom",
    marca: "Colcci",
    categoria: "Calças",
    preco: null,
    tamanhos: ["38", "40", "42", "44", "46"],
    cores: ["Marrom"],
    imagens: [`${P}/polo-reserva-areia-1.jpg`, `${P}/polo-reserva-areia-3.jpg`],
    descricao:
      "Calça de sarja marrom com caimento impecável. Cria continuidade na composição e combina com tudo na paleta terrosa.",
  },
  {
    slug: "camisa-xadrez-acostamento",
    nome: "Camisa Xadrez Acostamento",
    marca: "Acostamento",
    categoria: "Camisas",
    preco: null,
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Azul com preto"],
    imagens: [
      `${P}/look-acostamento-xadrez-1.jpg`,
      `${P}/look-acostamento-xadrez-2.jpg`,
      `${P}/look-acostamento-xadrez-3.jpg`,
      `${P}/look-acostamento-xadrez-4.jpg`,
    ],
    descricao:
      "Elegância sem perder a casualidade. Xadrez discreto em azul com preto, com proposta moderna e cheia de personalidade.",
    destaque: true,
  },
  {
    slug: "calca-brim-preta-acostamento",
    nome: "Calça de Brim Preta Acostamento",
    marca: "Acostamento",
    categoria: "Calças",
    preco: null,
    tamanhos: ["38", "40", "42", "44", "46"],
    cores: ["Preto"],
    imagens: [`${P}/look-acostamento-xadrez-3.jpg`, `${P}/look-acostamento-xadrez-4.jpg`],
    descricao:
      "Aquele preto que não desbota. Calça de brim Acostamento com caimento reto, pronta para o casual e para o alinhado.",
  },
  {
    slug: "bermuda-sarja-reserva",
    nome: "Bermuda de Sarja Reserva",
    marca: "Reserva",
    categoria: "Bermudas",
    preco: null,
    tamanhos: ["38", "40", "42", "44", "46"],
    cores: ["Várias cores"],
    imagens: [`${P}/bermuda-sarja-reserva-1.jpg`],
    descricao:
      "Caimento impecável com o clássico bolso faca e uma variedade de cores para você escolher a que mais combina com seu estilo.",
    destaque: true,
  },
  {
    slug: "camiseta-minimalista-terrosa",
    nome: "Camiseta Minimalista Tons Terrosos",
    marca: "Colcci",
    categoria: "Camisetas",
    preco: null,
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Terracota", "Areia", "Verde musgo", "Marrom"],
    imagens: [`${P}/camisetas-terrosas-1.jpg`, `${P}/camisetas-terrosas-2.jpg`, `${P}/camisetas-terrosas-3.jpg`],
    descricao:
      "Minimalismo + tons terrosos: menos excessos, mais estilo. A escolha certa para quem valoriza versatilidade.",
    novidade: true,
    destaque: true,
  },
  {
    slug: "camiseta-acostamento",
    nome: "Camiseta Acostamento",
    marca: "Acostamento",
    categoria: "Camisetas",
    preco: null,
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Várias cores"],
    imagens: [`${P}/camisetas-acostamento-1.jpg`],
    descricao: "O básico que nunca sai de moda. Variedade em camisetas Acostamento direto na vitrine da LIT.",
  },
  {
    slug: "bones-colecao",
    nome: "Bonés — Coleção LIT",
    marca: "Colcci",
    categoria: "Bonés",
    preco: null,
    tamanhos: ["Único"],
    cores: ["Preto", "Areia", "Marrom", "Off-white"],
    imagens: [`${P}/bones-vitrine-1.jpg`, `${P}/bones-vitrine-2.jpg`, `${P}/bones-vitrine-3.jpg`],
    descricao:
      "O estilo vai da cabeça aos pés. O boné certo faz toda a diferença no visual — aposte nos detalhes e complete seu look com atitude.",
    destaque: true,
  },
  {
    slug: "calca-alfaiataria-calvin-klein",
    nome: "Calça de Alfaiataria Calvin Klein",
    marca: "Calvin Klein",
    categoria: "Calças",
    preco: null,
    tamanhos: ["38", "40", "42", "44", "46"],
    cores: ["Preto", "Grafite"],
    imagens: [`${P}/alfaiataria-ck-1.jpg`, `${P}/alfaiataria-ck-2.jpg`],
    descricao:
      "A combinação perfeita entre o clássico e o casual. Alfaiataria Calvin Klein para quem gosta de se vestir bem sem abrir mão do conforto.",
    destaque: true,
  },
  {
    slug: "camiseta-reserva",
    nome: "Camiseta Reserva",
    marca: "Reserva",
    categoria: "Camisetas",
    preco: null,
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Off-white", "Preto"],
    imagens: [`${P}/alfaiataria-ck-2.jpg`, `${P}/alfaiataria-ck-1.jpg`],
    descricao: "Camiseta Reserva de malha premium: a base versátil de qualquer produção bem resolvida.",
  },
  {
    slug: "jeans-calvin-klein",
    nome: "Jeans Calvin Klein Lavagem Clara",
    marca: "Calvin Klein",
    categoria: "Jeans",
    preco: null,
    tamanhos: ["38", "40", "42", "44", "46"],
    cores: ["Azul claro"],
    imagens: [`${P}/jeans-ck-1.jpg`, `${P}/jeans-ck-2.jpg`, `${P}/jeans-ck-3.jpg`],
    descricao:
      "Modelagem moderna, lavagem clara e aquele toque sofisticado que transforma qualquer produção. Clássico, versátil e atemporal.",
    novidade: true,
    destaque: true,
  },
  {
    slug: "camiseta-levis",
    nome: "Camiseta Levi's",
    marca: "Levi's",
    categoria: "Camisetas",
    preco: null,
    tamanhos: ["P", "M", "G", "GG"],
    cores: ["Terroso", "Off-white"],
    imagens: [`${P}/look-terroso-levis-1.jpg`, `${P}/look-terroso-levis-2.jpg`],
    descricao:
      "Tons terrosos para um visual moderno e cheio de personalidade. Camiseta Levi's: estilo, conforto e versatilidade.",
  },
];

export const categorias = [
  "Camisetas",
  "Manga Longa",
  "Polos",
  "Camisas",
  "Calças",
  "Jeans",
  "Bermudas",
  "Bonés",
] as const;

export const marcas = Array.from(new Set(produtos.map((p) => p.marca))).sort();

export const tamanhosDisponiveis = Array.from(
  new Set(produtos.flatMap((p) => p.tamanhos))
).sort((a, b) => {
  const ordem = ["Único", "P", "M", "G", "GG"];
  const ia = ordem.indexOf(a);
  const ib = ordem.indexOf(b);
  if (ia !== -1 && ib !== -1) return ia - ib;
  if (ia !== -1) return -1;
  if (ib !== -1) return 1;
  return Number(a) - Number(b);
});

export const coresDisponiveis = Array.from(new Set(produtos.flatMap((p) => p.cores))).sort();

/** O "look do dia": peças com hotspot sobre a foto. */
export const lookDoDia = {
  imagem: `${P}/polo-reserva-areia-1.jpg`,
  alt: "Look tom sobre tom em tons terrosos: polo Reserva areia, calça de sarja marrom e boné Colcci",
  titulo: "Tom sobre tom terroso",
  legenda:
    "Calça de sarja marrom e boné marrom criam continuidade; a polo Reserva areia traz o contraste suave. Toque nos pontos para ver cada peça.",
  pontos: [
    { x: 68, y: 18, slug: "bone-colcci-supply-areia" },
    { x: 55, y: 70, slug: "polo-reserva-areia" },
    { x: 22, y: 32, slug: "calca-sarja-marrom" },
  ],
};

/** Grade estilo Instagram da home. */
export const galeria = [
  `${P}/bone-colcci-areia-1.jpg`,
  `${P}/look-acostamento-xadrez-1.jpg`,
  `${P}/jeans-ck-2.jpg`,
  `${P}/camisetas-terrosas-1.jpg`,
  `${P}/bones-vitrine-1.jpg`,
  `${P}/manga-longa-acostamento-2.jpg`,
  `${P}/look-terroso-levis-1.jpg`,
  `${P}/polo-reserva-areia-3.jpg`,
  `${P}/camisetas-acostamento-1.jpg`,
  `${P}/alfaiataria-ck-1.jpg`,
  `${P}/bermuda-sarja-reserva-1.jpg`,
  `${P}/jeans-ck-3.jpg`,
];
