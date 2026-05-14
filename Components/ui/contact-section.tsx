"use client";

import React, { useState } from "react";
import { PlusIcon, MapPin, Phone, Mail } from "lucide-react";

const GS = "var(--font-general-sans), 'General Sans', sans-serif";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, whatsapp }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.error || "Erro ao enviar solicitação");
        setLoading(false);
        return;
      }

      setSubmitted(true);
      // Redirecionar para WhatsApp após sucesso
      if (data.whatsappUrl) {
        setTimeout(() => {
          window.open(data.whatsappUrl, "_blank");
        }, 1500);
      }
    } catch (err) {
      setError("Erro ao enviar solicitação. Tente novamente.");
      setLoading(false);
    }
  };

  return (
    <section id="formulario" className="bg-[#F7F9FC] pt-24 pb-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative grid md:grid-cols-2 gap-0 border border-[#D5E4F0] rounded-2xl overflow-hidden bg-white shadow-sm">
          {/* Corner decorations */}
          <PlusIcon className="absolute -top-3 -left-3 h-5 w-5 text-[#D5E4F0]" />
          <PlusIcon className="absolute -top-3 -right-3 h-5 w-5 text-[#D5E4F0]" />
          <PlusIcon className="absolute -bottom-3 -left-3 h-5 w-5 text-[#D5E4F0]" />
          <PlusIcon className="absolute -bottom-3 -right-3 h-5 w-5 text-[#D5E4F0]" />

          {/* Left column — info */}
          <div className="p-10 lg:p-12 flex flex-col justify-between gap-10">
            <div className="space-y-4">
              <p
                className="text-xs font-medium uppercase tracking-widest text-[#42B4E8]"
                style={{ fontFamily: GS }}
              >
                Entre em contato
              </p>
              <h2
                className="text-2xl md:text-3xl font-semibold text-[#1A2D45] leading-[1.25]"
                style={{ fontFamily: GS }}
              >
                Receba uma cotação personalizada para você ou sua empresa.
              </h2>
              <p className="text-[#5A6A7A] text-sm leading-relaxed">
                Ou descubra possibilidades de planejamento e conquista através do consórcio.
                Nossos consultores entram em contato para entender sua realidade e orientar a
                melhor solução.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#42B4E8]" />
                <span className="text-sm text-[#5A6A7A]">
                  Jardim Botânico, Rio de Janeiro — RJ
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#42B4E8]" />
                <a
                  href="tel:+5521960190289"
                  className="text-sm text-[#5A6A7A] hover:text-[#255F8F] transition-colors"
                >
                  +55 21 96019-0289
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#42B4E8]" />
                <a
                  href="mailto:atendimento@thompsonseguros.com.br"
                  className="text-sm text-[#5A6A7A] hover:text-[#255F8F] transition-colors"
                >
                  atendimento@thompsonseguros.com.br
                </a>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="bg-[#F7F9FC] p-8 lg:p-10 border-t md:border-t-0 md:border-l border-[#D5E4F0]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1A2D45] text-lg" style={{ fontFamily: GS }}>
                  Solicitação enviada!
                </h3>
                <p className="text-[#5A6A7A] text-sm leading-relaxed max-w-xs">
                  Seus dados foram registrados e você receberá um email de confirmação. Um de nossos consultores entrará em contato via WhatsApp em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#5A6A7A]" htmlFor="contact-name">
                    Nome
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Seu nome completo"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                    className="border border-[#D5E4F0] rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-[#255F8F] bg-white disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#5A6A7A]" htmlFor="contact-email">
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="border border-[#D5E4F0] rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-[#255F8F] bg-white disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[#5A6A7A]" htmlFor="contact-whatsapp">
                    WhatsApp
                  </label>
                  <input
                    id="contact-whatsapp"
                    type="tel"
                    placeholder="+55 (__)_____-____"
                    required
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    disabled={loading}
                    className="border border-[#D5E4F0] rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-[#255F8F] bg-white disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#255F8F] hover:bg-[#1A4568] disabled:bg-[#5A7A96] text-white w-full py-3 rounded-lg font-medium text-sm transition-colors mt-1"
                  style={{ fontFamily: GS }}
                >
                  {loading ? "Enviando..." : "Solicitar contato"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
