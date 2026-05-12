"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

const GS = "var(--font-general-sans), 'General Sans', sans-serif";

export interface HeroProps {
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: Array<{ value: string; label: string }>;
}

export const Component = ({
  title = "O que é importante para você",
  titleAccent = "merece estar seguro.",
  subtitle = "A Thompson acompanha pessoas e empresas há mais de 40 anos oferecendo proteção para o presente e mais segurança para o futuro.",
  primaryCta = { label: "Quero uma análise gratuita", href: "#solucoes" },
  secondaryCta = { label: "Falar com especialista", href: "#contato" },
  stats = [
    { value: "40+", label: "anos de mercado" },
    { value: "100%", label: "independente" },
    { value: "Múltiplas", label: "seguradoras parceiras" },
  ],
}: HeroProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.4) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.4) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="inicio"
      className={cn(
        "relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-20"
      )}
    >
      {/* Subtle grid base */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <GridPattern id="grid-bg" offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Mouse-spotlight grid */}
      <motion.div
        className="absolute inset-0 z-0 opacity-25"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern id="grid-spotlight" offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Brand glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-15%] top-[-15%] w-[45%] h-[45%] rounded-full bg-[#42B4E8]/15 blur-[140px]" />
        <div className="absolute left-[-10%] bottom-[-15%] w-[40%] h-[40%] rounded-full bg-[#BFDFF6]/35 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h1
            className="text-5xl md:text-7xl font-semibold text-[#1A2D45] leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: GS }}
          >
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-[#255F8F]">{titleAccent}</span>
              </>
            )}
          </h1>
          <p className="text-base md:text-lg text-[#5A6A7A] max-w-2xl mx-auto leading-relaxed font-normal mt-5">
            {subtitle}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-3 pt-2"
        >
          <a
            href={primaryCta.href}
            className="px-7 py-3.5 bg-[#255F8F] text-white font-medium rounded-lg hover:bg-[#1A4568] transition-all shadow-sm hover:shadow-md active:scale-[0.98] text-sm"
            style={{ fontFamily: GS }}
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="px-7 py-3.5 border border-[#255F8F]/40 text-[#255F8F] font-medium rounded-lg hover:border-[#255F8F] hover:bg-[#F0F7FF] transition-all active:scale-[0.98] text-sm"
            style={{ fontFamily: GS }}
          >
            {secondaryCta.label}
          </a>
        </motion.div>

        {/* Stats */}
        {stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-12 pt-6 border-t border-[#E2EDF5] w-full justify-center"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-0.5">
                <span
                  className="text-2xl font-semibold text-[#255F8F]"
                  style={{ fontFamily: GS }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-[#8A9BAD] tracking-wide font-normal">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

const GridPattern = ({
  id,
  offsetX,
  offsetY,
}: {
  id: string;
  offsetX: ReturnType<typeof useMotionValue<number>>;
  offsetY: ReturnType<typeof useMotionValue<number>>;
}) => (
  <svg className="w-full h-full">
    <defs>
      <motion.pattern
        id={id}
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
        x={offsetX}
        y={offsetY}
      >
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#255F8F" strokeWidth="0.8" />
      </motion.pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${id})`} />
  </svg>
);
