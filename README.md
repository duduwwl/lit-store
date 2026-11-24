# LIT STORE — site oficial

Site da LIT STORE, loja masculina multimarcas em Três Corações – MG (@litstore.tc).

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lenis.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Onde editar cada coisa

| O quê | Arquivo |
| --- | --- |
| **Número do WhatsApp** | `src/data/site.ts` → constante `WHATSAPP` (um lugar só, vale para o site inteiro) |
| Endereço, horários, marcas, links | `src/data/site.ts` |
| **Catálogo** (nomes, marcas, preços, tamanhos, cores, fotos) | `src/data/products.ts` |
| Look do dia / hotspots | `src/data/products.ts` → `lookDoDia` |
| Grade do Instagram na home | `src/data/products.ts` → `galeria` |
| Depoimentos | `src/components/home/Depoimentos.tsx` |
| FAQ | `src/components/home/FAQ.tsx` |
| Textos de "A LIT" | `src/components/home/Sobre.tsx` |

### Colocar preço em um produto

Em `src/data/products.ts`, troque `preco: null` por um número:

```ts
preco: 249.9,   // vira "R$ 249,90"
preco: null,    // vira "Consulte"
```

### Adicionar fotos

1. Coloque o arquivo em `public/images/produtos/`.
2. Rode `node scripts/optimize.mjs` (redimensiona para 1500px e comprime).
3. Aponte o caminho em `src/data/products.ts`.

## ⚠️ O que ainda é placeholder

- **WhatsApp** — `5535999999999` em `src/data/site.ts`. O perfil do Instagram não expõe o número.
- **Horários** — o perfil só informa "Seg à Sex". Os horários do site são uma suposição.
- **Depoimentos** — textos de exemplo, verossímeis mas inventados.
- **Fotos de TIME LIT / PREMIAÇÃO / interior da loja** — estão nos destaques do Instagram, que exigem login. A seção "A LIT" usa fotos de produto no lugar.
- **LIT P/ Elas** — sem fotos disponíveis; o card leva para o destaque do Instagram.
- **Preços** — todos como "Consulte".

## Fotos

Todas as imagens em `public/images/produtos/` vieram dos posts públicos de
@litstore.tc (outubro e novembro de 2026), já otimizadas.

---
Desenvolvido por ZoryonWeb.
