"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GS = "var(--font-general-sans), 'General Sans', sans-serif";

const ITEM_HEIGHT = 64;
const AUTO_PLAY_INTERVAL = 3000;

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

const GRADIENTS = [
  "from-[#1A4568] to-[#255F8F]",
  "from-[#255F8F] to-[#3A7AAF]",
  "from-[#1A2D45] to-[#255F8F]",
  "from-[#0D1F33] to-[#1A4568]",
  "from-[#255F8F] to-[#42B4E8]",
  "from-[#1A4568] to-[#42B4E8]",
  "from-[#0D2137] to-[#255F8F]",
  "from-[#1A2D45] to-[#42B4E8]",
];

interface Feature {
  id: string;
  label: string;
  description: string;
}

const VOCE: Feature[] = [
  { id: "auto", label: "Seguro Automóvel", description: "Proteção para sua rotina dentro e fora das ruas." },
  { id: "res", label: "Seguro Residencial", description: "Mais tranquilidade para cuidar do seu patrimônio." },
  { id: "vida", label: "Seguro de Vida", description: "Segurança financeira para quem faz parte da sua vida." },
  { id: "saude", label: "Seguro Saúde", description: "Suporte e acesso quando mais importa." },
  { id: "odonto", label: "Seguro Odontológico", description: "Cuidado contínuo para seu bem-estar." },
  { id: "viagem", label: "Seguro Viagem", description: "Mais tranquilidade para imprevistos longe de casa." },
  { id: "consorcio", label: "Consórcio", description: "Planejamento inteligente para grandes conquistas." },
  {
    id: "outros",
    label: "Outros Seguros",
    description:
      "Celular, bike, equipamentos, responsabilidade profissional, fiança e muito mais.",
  },
];

const EMPRESA: Feature[] = [
  { id: "emp", label: "Seguro Empresarial", description: "Proteção para operação, patrimônio e continuidade." },
  { id: "cond", label: "Seguro Condomínio", description: "Mais segurança para gestão e áreas compartilhadas." },
  { id: "saudemp", label: "Seguro Saúde Empresarial", description: "Benefícios que acompanham sua equipe." },
  { id: "frotas", label: "Seguro para Frotas", description: "Mais controle e proteção para veículos corporativos." },
  { id: "vida-grupo", label: "Vida em Grupo", description: "Cuidado que valoriza pessoas e empresas." },
  { id: "cyber", label: "Cyber Risk", description: "Proteção digital para operações modernas." },
  {
    id: "outros-corp",
    label: "Outros Seguros Corporativos",
    description:
      "Garantia, D&O, E&O, eventos, engenharia, ambiental e soluções sob medida.",
  },
];

export function SolutionsCarousel() {
  const [tab, setTab] = useState<"voce" | "empresa">("voce");
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const features = tab === "voce" ? VOCE : EMPRESA;
  const currentIndex = ((step % features.length) + features.length) % features.length;
  const activeFeature = features[currentIndex];
  const gradient = GRADIENTS[currentIndex % GRADIENTS.length];

  const advance = useCallback(() => {
    setStep((s) => s + 1);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(advance, AUTO_PLAY_INTERVAL);
    return () => clearInterval(id);
  }, [advance, isPaused]);

  const handleTabChange = (newTab: "voce" | "empresa") => {
    setTab(newTab);
    setStep(0);
  };

  const handleItemClick = (index: number) => {
    const diff = (index - currentIndex + features.length) % features.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  const counterLabel = `${String(currentIndex + 1).padStart(2, "0")} / ${String(features.length).padStart(2, "0")}`;

  return (
    <div>
      {/* Tab switcher */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center bg-[#F0F5FA] rounded-full p-1 gap-1">
          <button
            onClick={() => handleTabChange("voce")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              tab === "voce"
                ? "bg-[#255F8F] text-white shadow-sm"
                : "text-[#5A6A7A] hover:text-[#255F8F]"
            }`}
            style={{ fontFamily: GS }}
          >
            Para você
          </button>
          <button
            onClick={() => handleTabChange("empresa")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              tab === "empresa"
                ? "bg-[#255F8F] text-white shadow-sm"
                : "text-[#5A6A7A] hover:text-[#255F8F]"
            }`}
            style={{ fontFamily: GS }}
          >
            Para sua empresa
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="flex flex-col lg:flex-row min-h-[500px] rounded-3xl overflow-hidden w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left panel */}
        <div className="relative w-full lg:w-[40%] bg-[#1A2D45] flex items-center justify-center overflow-hidden py-16 px-8 lg:px-10">
          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#1A2D45] to-transparent z-10 pointer-events-none" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1A2D45] to-transparent z-10 pointer-events-none" />

          <div className="relative w-full flex items-center justify-center z-20" style={{ height: `${ITEM_HEIGHT * 5}px` }}>
            {features.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const len = features.length;
              const wrappedDistance = wrap(-(len / 2), len / 2, distance);

              return (
                <motion.div
                  key={`${tab}-${feature.id}`}
                  style={{ height: ITEM_HEIGHT, width: "100%" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.22,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 22,
                    mass: 1,
                  }}
                  className="absolute flex items-center justify-center"
                >
                  <button
                    onClick={() => handleItemClick(index)}
                    className={`w-full px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 text-left whitespace-nowrap overflow-hidden text-ellipsis border ${
                      isActive
                        ? "bg-white text-[#1A2D45] font-medium border-white"
                        : "text-white/50 bg-transparent border-white/10 hover:border-white/20 hover:text-white/70"
                    }`}
                    style={{ fontFamily: GS }}
                  >
                    {feature.label}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right panel */}
        <div className={`relative flex-1 bg-gradient-to-br ${gradient} transition-all duration-700 flex items-center px-10 lg:px-14 py-14 overflow-hidden`}>
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            <svg className="w-full h-full">
              <defs>
                <pattern id="solutions-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#solutions-grid)" />
            </svg>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${tab}-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-lg"
            >
              <p className="text-white/30 text-xs font-medium tracking-widest uppercase mb-6" style={{ fontFamily: GS }}>
                {counterLabel}
              </p>
              <h3
                className="text-white font-semibold text-2xl md:text-3xl leading-snug mb-4"
                style={{ fontFamily: GS }}
              >
                {activeFeature.label}
              </h3>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                {activeFeature.description}
              </p>
              <a
                href="#formulario"
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
                style={{ fontFamily: GS }}
              >
                Saiba mais →
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
