"use client";

import { Component as Hero } from "@/Components/ui/the-infinite-grid";
import { TiltCard } from "@/Components/ui/tilt-card";
import { Marquee } from "@/Components/ui/marquee";
import { SpotlightCard } from "@/Components/ui/spotlight-card";
import { TestimonialsColumn, type Testimonial } from "@/Components/ui/testimonials-column";
import { Cta4 } from "@/Components/ui/cta4";
import { Footer } from "@/Components/ui/footer";
import { Navbar } from "@/Components/ui/navbar";
import { SolutionsCarousel } from "@/Components/ui/solutions-carousel";
import { ContactSection } from "@/Components/ui/contact-section";
import { motion } from "framer-motion";
import { Car, Home as HomeIcon, HeartPulse, Heart, Building2 } from "lucide-react";

/* ── Font shorthand ───────────────────────────────── */
const GS = "var(--font-general-sans), 'General Sans', sans-serif";

/* ── Data ─────────────────────────────────────────── */

const testimonials: Testimonial[] = [
  {
    text: '"Precisei fazer uma cirurgia às pressas e fiquei semanas sem conseguir trabalhar. O seguro me ajudou financeiramente nesse período e a Thompson acompanhou tudo comigo. Numa hora dessas, isso faz muita diferença."',
    image: "https://ui-avatars.com/api/?name=Jo%C3%A3o+Alves&background=42B4E8&color=fff&bold=true",
    name: "João Alves",
    role: "Pintor autônomo",
  },
  {
    text: '"Um vazamento aqui em casa acabou atingindo o apartamento do vizinho também. Eu achei que ia gastar muito mais, mas o seguro resolveu os danos e a Thompson me ajudou em todo o processo."',
    image: "https://ui-avatars.com/api/?name=Mariana+Costa&background=255F8F&color=fff&bold=true",
    name: "Mariana Costa",
    role: "Arquiteta",
  },
  {
    text: '"Bateram no meu carro e eu precisava dele pra trabalhar todos os dias. A Thompson agilizou tudo com oficina, guincho e seguradora — consegui voltar pra rotina muito mais rápido."',
    image: "https://ui-avatars.com/api/?name=Felipe+Ramos&background=42B4E8&color=fff&bold=true",
    name: "Felipe Ramos",
    role: "Dono de oficina mecânica",
  },
  {
    text: '"Eu sempre achei consórcio complicado, mas eles me explicaram tudo com calma. Hoje já estou me organizando pra comprar meu apartamento sem precisar entrar num financiamento pesado."',
    image: "https://ui-avatars.com/api/?name=Carla+Menezes&background=255F8F&color=fff&bold=true",
    name: "Carla Menezes",
    role: "Professora",
  },
  {
    text: '"A empresa teve um problema elétrico que interrompeu parte da operação por alguns dias. O suporte da Thompson ajudou muito pra gente conseguir resolver rápido e reduzir o prejuízo."',
    image: "https://ui-avatars.com/api/?name=Grupo+Atlas&background=42B4E8&color=fff&bold=true",
    name: "Grupo Atlas Engenharia",
    role: "Seguro empresarial",
  },
  {
    text: '"A gente precisava organizar os seguros da empresa mas ninguém entendia direito o que precisava contratar. A Thompson conseguiu explicar tudo de forma clara e deixou o processo muito mais simples."',
    image: "https://ui-avatars.com/api/?name=Studio+V%C3%A9rtice&background=255F8F&color=fff&bold=true",
    name: "Studio Vértice Comunicação",
    role: "Seguro empresarial",
  },
  {
    text: '"Um dos caminhões sofreu um acidente na estrada e ficou parado alguns dias. A Thompson deu suporte do início ao fim e ajudou pra operação não virar uma dor de cabeça ainda maior."',
    image: "https://ui-avatars.com/api/?name=Marcelo+Tavares&background=42B4E8&color=fff&bold=true",
    name: "Marcelo Tavares",
    role: "Transportador autônomo",
  },
];

const col1 = testimonials.filter((_, i) => i % 3 === 0);
const col2 = testimonials.filter((_, i) => i % 3 === 1);
const col3 = testimonials.filter((_, i) => i % 3 === 2);

const services = [
  "Seguro Automóvel", "Seguro Residencial", "Seguro de Vida", "Seguro Saúde",
  "Seguro Odontológico", "Seguro Viagem", "Consórcio", "Seguro Empresarial",
  "Cyber Risk", "Vida em Grupo", "Seguro para Frotas", "Seguro Condomínio",
  "Garantia", "D&O", "E&O", "RC Geral", "Riscos de Engenharia",
];

const logos = [
  { name: "Porto Seguro", src: "/logos/porto-seguro.png" },
  { name: "Allianz", src: "/logos/allianz.png" },
  { name: "Tokio Marine", src: "/logos/tokio-marine.png" },
  { name: "HDI Seguros", src: "/logos/hdi.png" },
  { name: "Azul Seguros", src: "/logos/azul.png" },
  { name: "Yelum", src: "/logos/yelum.png" },
];

const eseCards = [
  {
    question: "E se seu carro sofresse uma batida amanhã?",
    answer: "Conserto, terceiros, guincho e dias sem veículo podem mudar toda a rotina.",
    icon: <Car className="w-6 h-6 text-white/60" />,
    color: "rgba(66,180,232,0.25)",
  },
  {
    question: "E se um vazamento causasse danos na sua casa?",
    answer: "Alguns reparos simples podem acabar gerando custos maiores do que o esperado.",
    icon: <HomeIcon className="w-6 h-6 text-white/60" />,
    color: "rgba(37,95,143,0.25)",
  },
  {
    question: "E se você precisasse de atendimento médico inesperadamente?",
    answer: "Ter acesso rápido e suporte adequado faz diferença em qualquer momento.",
    icon: <HeartPulse className="w-6 h-6 text-white/60" />,
    color: "rgba(191,223,246,0.3)",
  },
  {
    question: "E se sua família precisasse de suporte financeiro no futuro?",
    answer: "Proteção também é cuidar das pessoas que fazem parte da sua vida.",
    icon: <Heart className="w-6 h-6 text-white/60" />,
    color: "rgba(66,180,232,0.25)",
  },
  {
    question: "E se sua empresa precisasse interromper a operação por alguns dias?",
    answer: "Alguns imprevistos impactam rotina, equipe e planejamento ao mesmo tempo.",
    icon: <Building2 className="w-6 h-6 text-white/60" />,
    color: "rgba(37,95,143,0.25)",
  },
];

const differentials = [
  {
    title: "Atendimento próximo",
    description: "Você fala com pessoas de verdade — sem robôs, sem fila, sem scripts.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#42B4E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: "rgba(66,180,232,0.15)",
  },
  {
    title: "Sem letra miúda",
    description: "Coberturas, exclusões e valores explicados com clareza. Sem surpresas no sinistro.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#42B4E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
      </svg>
    ),
    color: "rgba(37,95,143,0.15)",
  },
  {
    title: "40 anos de mercado",
    description: "Décadas ao lado de pessoas e empresas nos momentos que realmente importam.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#42B4E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    color: "rgba(66,180,232,0.15)",
  },
  {
    title: "Presença contínua",
    description: "Acompanhamos renovações, sinistros e mudanças de perfil. Não sumimos depois do contrato.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#42B4E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    color: "rgba(37,95,143,0.15)",
  },
];

const steps = [
  { num: "01", title: "Você nos conta sua realidade", color: "#EEF6FD", text: "#1A4568" },
  { num: "02", title: "Analisamos as melhores opções disponíveis", color: "#D4EDFA", text: "#1A4568" },
  { num: "03", title: "Explicamos tudo com clareza", color: "#255F8F", text: "white" },
  { num: "04", title: "Você decide com segurança", color: "#1A4568", text: "white" },
  { num: "05", title: "Seguimos ao seu lado quando precisar", color: "#0D2137", text: "white" },
];

const protectionItems = [
  "Seu carro", "Sua saúde", "Sua casa", "Sua empresa",
  "Seu celular", "Sua renda", "Sua viagem", "Sua família",
];

/* ── Page ─────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1 — HERO */}
      <Hero
        primaryCta={{ label: "Quero uma análise gratuita", href: "#formulario" }}
        secondaryCta={{ label: "Falar com especialista", href: "https://wa.me/5521960190289" }}
        stats={[
          { value: "40+", label: "anos de mercado" },
          { value: "100%", label: "Acompanhamento contínuo" },
          { value: "Múltiplas", label: "seguradoras parceiras" },
        ]}
      />

      {/* 2 — VOCÊ PROTEGE MENOS */}
      <section className="bg-[#1A2D45] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-[3.2rem] font-semibold text-white leading-[1.2] mb-12 text-center tracking-[-0.02em]"
            style={{ fontFamily: GS }}
          >
            Você provavelmente protege{" "}
            <span className="text-[#42B4E8]">menos do que imagina.</span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {protectionItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="bg-white/8 rounded-xl px-4 py-3.5 text-white font-medium text-sm text-center border border-white/10 hover:bg-white/15 transition-colors"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-center space-y-2"
          >
            <p className="text-[#A8C0D6] text-base md:text-lg">
              A maioria descobre isso no pior momento possível.
            </p>
            <p className="text-white font-medium text-base md:text-lg">
              A Thompson existe para cuidar do que não pode ser deixado ao acaso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 — MARQUEE */}
      <section className="py-7 bg-[#F7F9FC] border-y border-[#E2EDF5]">
        <p className="text-center text-[11px] text-[#8A9BAD] mb-4 uppercase tracking-widest font-medium">
          Soluções para todas as suas necessidades
        </p>
        <Marquee pauseOnHover duration={38} fadeAmount={8}>
          {services.map((s) => (
            <span
              key={s}
              className="px-7 text-[#3A6A94] font-medium text-sm tracking-wide select-none flex items-center gap-3"
            >
              {s}
              <span className="text-[#42B4E8]">·</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* 4 — E SE... */}
      <section id="solucoes" className="py-24 bg-[#0D1F33] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-[2.8rem] font-semibold text-white leading-[1.2] tracking-[-0.02em]"
              style={{ fontFamily: GS }}
            >
              Estar preparado não evita o imprevisto.
              <br />
              <span className="text-[#42B4E8]">Muda a forma como você atravessa ele.</span>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eseCards.map((card) => (
              <SpotlightCard
                key={card.question}
                className="p-7"
                spotlightColor={card.color}
              >
                <div className="flex flex-col gap-4">
                  {card.icon}
                  <h3 className="font-semibold text-white text-[15px] leading-snug" style={{ fontFamily: GS }}>{card.question}</h3>
                  <p className="text-[#7A96B0] text-sm leading-relaxed">{card.answer}</p>
                  <a
                    href="#formulario"
                    className="text-[#42B4E8] text-xs font-medium hover:text-white transition-colors mt-auto"
                  >
                    Ver cobertura →
                  </a>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — POSITIONING */}
      <section className="py-28 px-4 bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-4xl md:text-6xl font-semibold text-[#1A2D45] leading-[1.15] tracking-[-0.03em]"
              style={{ fontFamily: GS }}
            >
              Seguro não é esperar o pior,{" "}
              <span className="text-[#255F8F]">mas não depender da sorte.</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-10 space-y-2"
          >
            <p className="text-[#5A6A7A] text-lg">
              Você não protege algo porque acha que vai perder.
            </p>
            <p className="text-[#1A2D45] font-semibold text-xl" style={{ fontFamily: GS }}>
              Você protege porque reconhece o valor do que construiu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6 — SOLUÇÕES */}
      <section className="py-24 bg-[#F7F9FC] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[2.8rem] font-semibold text-[#1A2D45] leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: GS }}>
              Tudo o que protege sua vida{" "}
              <span className="text-[#255F8F]">e sua operação.</span>
            </h2>
            <p className="text-[#6B7A8D] mt-3 text-[15px] max-w-xl mx-auto">
              Soluções personalizadas para pessoas, patrimônios, empresas e planos futuros.
            </p>
          </div>
          <SolutionsCarousel />
        </div>
      </section>

      {/* 7 — OPERADORAS */}
      <section className="py-20 bg-white px-4 border-y border-[#E2EDF5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-medium text-[#42B4E8] uppercase tracking-widest mb-3">
              Operadoras parceiras
            </p>
            <h2
              className="text-3xl md:text-[2.6rem] font-semibold text-[#1A2D45] leading-[1.2] tracking-[-0.02em]"
              style={{ fontFamily: GS }}
            >
              Acesso às melhores{" "}
              <span className="text-[#255F8F]">seguradoras do mercado.</span>
            </h2>
            <p className="text-[#6B7A8D] mt-3 max-w-lg mx-auto text-[15px]">
              Nosso compromisso é encontrar soluções que façam sentido para a sua realidade.
            </p>
          </div>
          <Marquee pauseOnHover duration={45} fadeAmount={14}>
            {logos.map((logo) => (
              <div key={logo.name} className="px-10 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-9 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* 8 — DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 bg-[#0D1F33] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#7A96B0] text-[15px] max-w-lg mx-auto"
            >
              A maioria das pessoas contrata seguros sem entender o que está contratando.
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-[2.8rem] font-semibold text-white leading-[1.2] tracking-[-0.02em] mt-3"
              style={{ fontFamily: GS }}
            >
              A Thompson{" "}
              <span className="text-[#42B4E8]">faz diferente.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <SpotlightCard className="p-7 h-full" spotlightColor={d.color}>
                  <div className="flex flex-col gap-4">
                    <div className="p-2.5 bg-white/6 rounded-lg w-fit">{d.icon}</div>
                    <h3 className="font-semibold text-white text-lg" style={{ fontFamily: GS }}>{d.title}</h3>
                    <p className="text-[#7A96B0] text-sm leading-relaxed">{d.description}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center text-[#5A7A96] text-sm"
          >
            Sem pressão de venda · Sem linguagem complicada · Sem desaparecer depois do contrato
          </motion.p>
        </div>
      </section>

      {/* 9 — DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 bg-[#F7F9FC] px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-[2.8rem] font-semibold text-[#1A2D45] leading-[1.2] tracking-[-0.02em]"
              style={{ fontFamily: GS }}
            >
              Clientes que continuam com a Thompson
              <br />
              <span className="text-[#255F8F]">há anos dizem muito sobre como trabalhamos.</span>
            </h2>
            <p className="text-[#6B7A8D] mt-3 text-[15px]">
              Veja o que dizem sobre nós:
            </p>
          </div>
          <div className="flex justify-center gap-5 overflow-hidden" style={{ maxHeight: "640px" }}>
            <TestimonialsColumn testimonials={col1} duration={20} />
            <TestimonialsColumn testimonials={col2} duration={25} className="hidden md:block" />
            <TestimonialsColumn testimonials={col3} duration={18} className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* 10 — HISTÓRIA */}
      <section id="historia" className="py-24 bg-[#1A2D45] px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[3rem] font-semibold text-white leading-[1.2] tracking-[-0.02em]"
            style={{ fontFamily: GS }}
          >
            Algumas relações{" "}
            <span className="text-[#42B4E8]">duram décadas.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 space-y-4"
          >
            <p className="text-[#A8C0D6] text-lg leading-relaxed">
              Clientes que chegaram por indicação. Que ficaram por décadas. Que trouxeram os filhos.
            </p>
            <p className="text-white font-semibold text-xl" style={{ fontFamily: GS }}>
              Não somos a maior corretora. Somos a mais próxima.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 11 — COMO FUNCIONA */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-[2.8rem] font-semibold text-[#1A2D45] leading-[1.2] tracking-[-0.02em]"
              style={{ fontFamily: GS }}
            >
              Simples{" "}
              <span className="text-[#255F8F]">como deveria ser.</span>
            </h2>
            <p className="text-[#6B7A8D] mt-2 text-[15px]">Do primeiro contato à renovação. Sem surpresas.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <TiltCard
                  tiltLimit={8}
                  scale={1.03}
                  className="rounded-2xl p-6 h-full min-h-[170px] flex flex-col justify-between"
                  style={{ backgroundColor: step.color }}
                >
                  <span
                    className="text-4xl font-semibold opacity-30"
                    style={{ color: step.text, fontFamily: GS }}
                  >
                    {step.num}
                  </span>
                  <p
                    className="font-medium text-sm leading-snug mt-4"
                    style={{ color: step.text }}
                  >
                    {step.title}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 — FORMULÁRIO */}
      <ContactSection />

      {/* 13 — CTA FINAL */}
      <Cta4
        title="Pronto para olhar isso com mais atenção?"
        description="15 minutos de conversa podem evitar muita dor de cabeça no futuro."
        buttonText="Falar com um especialista"
        buttonUrl="https://wa.me/5521960190289"
        items={[
          "Sem compromisso de contratação",
          "Análise personalizada do seu perfil",
          "Atendimento humano e consultivo",
          "Mais de 40 anos de experiência",
          "Suporte contínuo após a contratação",
        ]}
      />

      {/* 14 — FOOTER */}
      <Footer />
    </main>
  );
}
