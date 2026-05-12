"use client";

import { useState } from "react";
import { TiltCard } from "@/Components/ui/tilt-card";

interface ProtectItem {
  emoji: string;
  label: string;
  insurance: string;
  bg: string;
  border: string;
}

const PARA_VOCE: ProtectItem[] = [
  { emoji: "🚗", label: "Meu carro", insurance: "Seguro Automóvel", bg: "bg-[#EFF6FF]", border: "border-blue-100" },
  { emoji: "🏠", label: "Minha casa", insurance: "Seguro Residencial", bg: "bg-[#F0FDF4]", border: "border-green-100" },
  { emoji: "❤️", label: "Minha família", insurance: "Seguro de Vida", bg: "bg-[#FFF1F2]", border: "border-red-100" },
  { emoji: "💊", label: "Minha saúde", insurance: "Seguro Saúde", bg: "bg-[#F0FDF4]", border: "border-emerald-100" },
  { emoji: "😁", label: "Meu sorriso", insurance: "Seguro Odontológico", bg: "bg-[#FEFCE8]", border: "border-yellow-100" },
  { emoji: "✈️", label: "Minhas viagens", insurance: "Seguro Viagem", bg: "bg-[#F5F3FF]", border: "border-violet-100" },
  { emoji: "📱", label: "Meus equipamentos", insurance: "Celular, Bike, Câmera", bg: "bg-[#F7F9FC]", border: "border-slate-100" },
  { emoji: "💼", label: "Meu planejamento", insurance: "Consórcio", bg: "bg-[#FFF7ED]", border: "border-orange-100" },
  { emoji: "⚖️", label: "Minha responsabilidade", insurance: "Resp. Profissional", bg: "bg-[#EFF6FF]", border: "border-blue-100" },
];

const PARA_EMPRESA: ProtectItem[] = [
  { emoji: "🏢", label: "Minha operação", insurance: "Seguro Empresarial", bg: "bg-[#EFF6FF]", border: "border-blue-100" },
  { emoji: "👥", label: "Minha equipe", insurance: "Vida em Grupo + Saúde Empresarial", bg: "bg-[#F0FDF4]", border: "border-green-100" },
  { emoji: "🚚", label: "Minha frota", insurance: "Seguro para Frotas", bg: "bg-[#FFF7ED]", border: "border-orange-100" },
  { emoji: "🏗️", label: "Meu condomínio", insurance: "Seguro Condomínio", bg: "bg-[#F7F9FC]", border: "border-slate-100" },
  { emoji: "🔒", label: "Meus riscos digitais", insurance: "Cyber Risk", bg: "bg-[#FFF1F2]", border: "border-red-100" },
  { emoji: "📋", label: "Meus contratos", insurance: "Garantia e Fiança", bg: "bg-[#F0F9FF]", border: "border-cyan-100" },
  { emoji: "⚖️", label: "Minha responsabilidade jurídica", insurance: "RC Geral, D&O e E&O", bg: "bg-[#F5F3FF]", border: "border-violet-100" },
  { emoji: "🔧", label: "Meus projetos", insurance: "Riscos de Engenharia e Eventos", bg: "bg-[#FEFCE8]", border: "border-yellow-100" },
];

export function ProtectTabs() {
  const [tab, setTab] = useState<"voce" | "empresa">("voce");
  const items = tab === "voce" ? PARA_VOCE : PARA_EMPRESA;

  return (
    <div>
      {/* Tab switcher */}
      <div className="flex justify-center mb-10">
        <div className="flex bg-[#F7F9FC] border border-[#BFDFF6] rounded-full p-1 gap-1">
          <button
            onClick={() => setTab("voce")}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
              tab === "voce"
                ? "bg-[#255F8F] text-white shadow"
                : "text-[#4A5568] hover:text-[#255F8F]"
            }`}
          >
            Para Você
          </button>
          <button
            onClick={() => setTab("empresa")}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
              tab === "empresa"
                ? "bg-[#255F8F] text-white shadow"
                : "text-[#4A5568] hover:text-[#255F8F]"
            }`}
          >
            Para Minha Empresa
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {items.map((item) => (
          <TiltCard
            key={item.label}
            tiltLimit={8}
            scale={1.04}
            className={`rounded-xl p-5 border ${item.bg} ${item.border} cursor-pointer`}
          >
            <div className="flex flex-col gap-2">
              <span className="text-3xl">{item.emoji}</span>
              <p className="font-bold text-[#1A4568] text-sm leading-tight">{item.label}</p>
              <p className="text-[#718096] text-xs leading-tight">{item.insurance}</p>
            </div>
          </TiltCard>
        ))}
      </div>

      <p className="text-center text-[#718096] text-sm mt-8">
        Não encontrou? Temos ainda: Título de Capitalização, Seguro Ambiental, Eventos,{" "}
        <a href="#contato" className="text-[#255F8F] underline underline-offset-2 hover:text-[#42B4E8]">
          fale com um especialista
        </a>
        .
      </p>
    </div>
  );
}
