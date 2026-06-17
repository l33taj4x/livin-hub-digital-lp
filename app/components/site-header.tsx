"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "what-we-do", label: "Quem somos" },
  { to: "services", label: "Serviços" },
  { to: "portfolio", label: "Portfólio" },
  { to: "feedbacks", label: "Feedbacks" },
  { to: "why-livin", label: "Por que a Livin?" },
  { to: "contact-us", label: "Contato" },
];

const WHATSAPP =
  "https://wa.me/5548998604665?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Livin%20Hub%20Digital";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body com o menu mobile aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "bg-white/85 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <a href="#" className="block w-24 lg:w-28" aria-label="Livin Hub Digital — início">
          <Image
            src={solid ? "/livin-logotipo-new-blue.svg" : "/livin-logotipo-white.svg"}
            alt="Livin Hub Digital"
            width={200}
            height={102}
            priority
            className="h-auto w-full"
          />
        </a>

        {/* Navegação desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <ScrollLink
              key={n.to}
              to={n.to}
              smooth
              duration={900}
              offset={-80}
              className={cn(
                "cursor-pointer text-sm font-medium transition-colors",
                solid
                  ? "text-brand-ink hover:text-brand-active"
                  : "text-white hover:text-brand-lime"
              )}
            >
              {n.label}
            </ScrollLink>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-brand-active"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex items-center justify-center rounded-xl p-2 md:hidden",
            solid ? "text-brand-ink" : "text-white"
          )}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Painel mobile */}
      <div
        className={cn(
          "overflow-hidden border-black/5 bg-white/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-[80vh] border-t opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV.map((n) => (
            <ScrollLink
              key={n.to}
              to={n.to}
              smooth
              duration={900}
              offset={-80}
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-xl px-3 py-3 text-base font-medium text-brand-ink transition-colors hover:bg-brand-blue/5 hover:text-brand-active"
            >
              {n.label}
            </ScrollLink>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-active"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
