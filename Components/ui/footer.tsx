'use client';

import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Empresa',
    links: [
      { title: 'Início', href: '#inicio' },
      { title: 'Sobre nós', href: '#historia' },
      { title: 'Diferenciais', href: '#diferenciais' },
      { title: 'Depoimentos', href: '#depoimentos' },
    ],
  },
  {
    label: 'Para Você',
    links: [
      { title: 'Seguro Automóvel', href: '#solucoes' },
      { title: 'Seguro Residencial', href: '#solucoes' },
      { title: 'Seguro de Vida', href: '#solucoes' },
      { title: 'Seguro Saúde', href: '#solucoes' },
      { title: 'Seguro Viagem', href: '#solucoes' },
    ],
  },
  {
    label: 'Para Empresas',
    links: [
      { title: 'Seguro Empresarial', href: '#solucoes' },
      { title: 'Cyber Risk', href: '#solucoes' },
      { title: 'Vida em Grupo', href: '#solucoes' },
      { title: 'Seguro para Frotas', href: '#solucoes' },
      { title: 'D&O / E&O', href: '#solucoes' },
    ],
  },
  {
    label: 'Redes Sociais',
    links: [
      { title: 'Instagram', href: '#', icon: Instagram },
      { title: 'Facebook', href: '#', icon: Facebook },
      { title: 'LinkedIn', href: '#', icon: Linkedin },
    ],
  },
];

function ThompsonLogoFooter() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex items-end gap-[3px] h-9">
        <div className="w-[11px] h-8 bg-[#BFDFF6] [clip-path:polygon(20%_0%,100%_0%,80%_100%,0%_100%)]" />
        <div className="w-[11px] h-8 bg-[#42B4E8] [clip-path:polygon(20%_0%,100%_0%,80%_100%,0%_100%)]" />
        <div className="w-[9px] h-8 bg-[#255F8F] [clip-path:polygon(20%_0%,100%_0%,80%_100%,0%_100%)]" />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className="text-white font-black text-lg tracking-widest uppercase"
          style={{ fontFamily: "var(--font-general-sans), 'General Sans', sans-serif" }}
        >
          THOMPSON
        </span>
        <span className="text-[#BFDFF6] font-medium text-[10px] tracking-[0.28em] uppercase mt-[-1px]">
          SEGUROS
        </span>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-[#1A4568] text-white px-6 py-14 lg:py-20" id="contato">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-10 xl:gap-16">
          {/* Brand + contact */}
          <AnimatedContainer className="xl:col-span-1 space-y-5">
            <ThompsonLogoFooter />
            <p className="text-[#BFDFF6] text-sm leading-relaxed mt-4">
              Há mais de 40 anos protegendo o que realmente importa para pessoas e empresas.
            </p>
            <div className="space-y-3 text-sm text-[#BFDFF6]">
              <div className="flex items-start gap-2">
                <MapPinIcon className="h-4 w-4 mt-0.5 shrink-0 text-[#42B4E8]" />
                <span>R. Jardim Botânico, 600 - 301, Jardim Botânico, Rio de Janeiro - RJ</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 shrink-0 text-[#42B4E8]" />
                <a href="tel:+5521960190289" className="hover:text-white transition-colors">(21) 96019-0289</a>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-[#42B4E8]" />
                <a href="mailto:atendimento@thompsonseguros.com.br" className="hover:text-white transition-colors text-xs">
                  atendimento@thompsonseguros.com.br
                </a>
              </div>
            </div>
          </AnimatedContainer>

          {/* Nav links */}
          <div className="xl:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.08}>
                <div>
                  <h3 className="text-xs font-bold text-[#42B4E8] uppercase tracking-widest mb-4">
                    {section.label}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          className="text-[#BFDFF6] hover:text-white inline-flex items-center gap-1.5 transition-colors duration-200"
                        >
                          {link.icon && <link.icon className="h-4 w-4" />}
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#255F8F] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#718096]">
          <span>© {new Date().getFullYear()} Thompson Seguros. Todos os direitos reservados.</span>
          <span>SUSEP nº XXXXX</span>
          <a href="#" className="hover:text-[#BFDFF6] transition-colors">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: 8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
