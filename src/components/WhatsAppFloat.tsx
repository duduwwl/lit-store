"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/data/site";

export function WhatsAppFloat() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink("Olá, LIT STORE! Vim pelo site e quero atendimento.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a LIT STORE no WhatsApp"
      className={`fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-bronze text-ink shadow-[0_10px_40px_-8px_rgba(192,134,74,0.7)] transition-all duration-500 hover:scale-110 hover:bg-bronze-bright ${
        visivel ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.78 9.78 0 0 1-4.98-1.37l-.36-.21-3.7.97.99-3.61-.23-.37a9.76 9.76 0 0 1-1.5-5.21c0-5.4 4.4-9.79 9.8-9.79 2.62 0 5.07 1.02 6.92 2.87a9.72 9.72 0 0 1 2.87 6.93c-.01 5.4-4.4 9.79-9.8 9.79M20.52 3.45A11.73 11.73 0 0 0 12.05 0C5.5 0 .18 5.32.17 11.86c0 2.09.55 4.13 1.59 5.93L.07 24l6.35-1.66a11.9 11.9 0 0 0 5.67 1.44h.01c6.55 0 11.87-5.32 11.88-11.86 0-3.17-1.23-6.15-3.47-8.39" />
      </svg>
    </a>
  );
}
