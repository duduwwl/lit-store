import type { Metadata, Viewport } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lit-store.vercel.app"),
  title: {
    default: "LIT STORE | Moda Masculina Multimarcas em Três Corações",
    template: "%s | LIT STORE",
  },
  description: site.descricao,
  keywords: [
    "moda masculina Três Corações",
    "loja multimarcas MG",
    "Levi's Três Corações",
    "Colcci",
    "Calvin Klein",
    "Reserva",
    "Acostamento",
    "LIT STORE",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lit-store.vercel.app",
    siteName: "LIT STORE",
    title: "LIT STORE | Moda Masculina Multimarcas em Três Corações",
    description: site.descricao,
    images: [{ url: "/images/produtos/polo-reserva-areia-1.jpg", width: 1500, height: 1500, alt: "LIT STORE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LIT STORE | Moda Masculina Multimarcas em Três Corações",
    description: site.descricao,
    images: ["/images/produtos/polo-reserva-areia-1.jpg"],
  },
  icons: { icon: "/logo-lit.svg" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "LIT STORE",
  description: site.descricao,
  image: "https://lit-store.vercel.app/images/produtos/polo-reserva-areia-1.jpg",
  url: "https://lit-store.vercel.app",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.endereco.rua,
    addressLocality: site.endereco.cidade,
    addressRegion: site.endereco.uf,
    addressCountry: "BR",
  },
  sameAs: [site.instagram],
  foundingDate: "2017",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${archivo.variable}`}>
      <body className="grain antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-bronze focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
