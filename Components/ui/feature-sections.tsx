interface Feature {
  image: string;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  heading?: string;
  subheading?: string;
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png",
    title: "Atendimento consultivo",
    description: "Analisamos seus riscos, explicamos coberturas e comparamos possibilidades — sem burocracia e sem pressão.",
  },
  {
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png",
    title: "Soluções personalizadas",
    description: "Cada cliente recebe uma análise individual. Não vendemos produtos, construímos estratégias de proteção.",
  },
  {
    image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png",
    title: "Suporte pós-contratação",
    description: "Nosso acompanhamento não termina na assinatura da apólice. Estamos com você em cada etapa.",
  },
];

export default function FeatureSection({
  heading = "40+ anos. Cada vez mais perto.",
  subheading = "A Thompson faz diferente. Aqui, cada cliente recebe orientação real e acompanhamento de verdade.",
  features = defaultFeatures,
}: FeatureSectionProps) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-14 px-4">
        <h2
          className="text-4xl md:text-5xl font-black uppercase text-[#1A4568]"
          style={{ fontFamily: "var(--font-general-sans), 'General Sans', sans-serif" }}
        >
          {heading}
        </h2>
        <p className="text-sm text-[#718096] mt-3 leading-relaxed">{subheading}</p>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-10 px-4">
        {features.map((f) => (
          <div key={f.title} className="max-w-80 hover:-translate-y-1 transition duration-300 group">
            <div className="overflow-hidden rounded-xl">
              <img
                className="rounded-xl w-full group-hover:scale-105 transition duration-300"
                src={f.image}
                alt={f.title}
              />
            </div>
            <h3 className="text-base font-bold text-[#1A4568] mt-4">{f.title}</h3>
            <p className="text-sm text-[#4A5568] mt-1 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
