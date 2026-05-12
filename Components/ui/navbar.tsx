"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function ThompsonLogo() {
  return (
    <a href="#inicio" className="flex items-center gap-3 group">
      <div className="relative flex items-end gap-[3px] h-9">
        <div className="w-[11px] h-8 bg-[#BFDFF6] [clip-path:polygon(20%_0%,100%_0%,80%_100%,0%_100%)]" />
        <div className="w-[11px] h-8 bg-[#42B4E8] [clip-path:polygon(20%_0%,100%_0%,80%_100%,0%_100%)]" />
        <div className="w-[9px] h-8 bg-[#1A4568] [clip-path:polygon(20%_0%,100%_0%,80%_100%,0%_100%)]" />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className="text-[#1A4568] font-black text-lg tracking-widest uppercase"
          style={{ fontFamily: "var(--font-general-sans), 'General Sans', sans-serif" }}
        >
          THOMPSON
        </span>
        <span className="text-[#255F8F] font-medium text-[10px] tracking-[0.28em] uppercase mt-[-1px]">
          SEGUROS
        </span>
      </div>
    </a>
  );
}

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <ThompsonLogo />

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#4A5568] hover:text-[#255F8F] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                className="bg-[#255F8F] hover:bg-[#1A4568] text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
              >
                Falar com especialista
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6 text-[#1A4568]" />
              ) : (
                <Menu className="h-6 w-6 text-[#1A4568]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#BFDFF6] px-4 pb-5 pt-3">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#4A5568] font-medium py-1.5 hover:text-[#255F8F] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                className="mt-2 bg-[#255F8F] text-white text-center font-semibold px-5 py-3 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                Falar com especialista
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5521960190289"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1eb358] text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 hover:shadow-2xl"
        aria-label="Falar pelo WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  );
}
