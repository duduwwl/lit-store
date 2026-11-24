/**
 * Dados da loja em um único lugar.
 * TROCAR AQUI: telefone do WhatsApp e horários, se mudarem.
 */

// ⚠️ PLACEHOLDER — troque pelo número real da loja (formato internacional, só dígitos).
export const WHATSAPP = "5535999999999";

export const site = {
  nome: "LIT STORE",
  cidade: "Três Corações",
  uf: "MG",
  tagline: "Desde 2017 elevando mais de 60 mil estilos",
  descricao:
    "Loja masculina multimarcas em Três Corações – MG. Levi's, Colcci, Calvin Klein, Reserva e Acostamento em um só lugar.",
  instagram: "https://www.instagram.com/litstore.tc/",
  instagramHandle: "@litstore.tc",
  endereco: {
    rua: "Av. Presidente Dutra, 129",
    bairro: "Centro",
    cidade: "Três Corações",
    uf: "MG",
    completo: "Av. Presidente Dutra, 129 — Centro, Três Corações – MG",
  },
  // ⚠️ PLACEHOLDER — o perfil só informa "Seg à Sex". Confirme os horários exatos.
  horarios: [
    { dia: "Segunda a Sexta", hora: "09h — 18h" },
    { dia: "Sábado", hora: "09h — 13h" },
    { dia: "Domingo", hora: "Fechado" },
  ],
  maps: {
    embed:
      "https://www.google.com/maps?q=Av.+Presidente+Dutra,+129,+Centro,+Tr%C3%AAs+Cora%C3%A7%C3%B5es+-+MG&output=embed",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Av.+Presidente+Dutra,+129,+Centro,+Tr%C3%AAs+Cora%C3%A7%C3%B5es+-+MG",
  },
  stats: [
    { valor: 60000, sufixo: "mil+", label: "estilos elevados", divisor: 1000 },
    { valor: 2017, sufixo: "", label: "desde", divisor: 1 },
    { valor: 3000, sufixo: "mil+", label: "seguidores", divisor: 1000 },
    { valor: 5, sufixo: "+", label: "marcas premium", divisor: 1 },
  ],
  marcas: ["LEVI'S", "COLCCI", "CALVIN KLEIN", "RESERVA", "ACOSTAMENTO"],
} as const;

export function whatsappLink(mensagem: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}
