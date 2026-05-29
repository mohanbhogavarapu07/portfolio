import { motion } from "motion/react";
import { Award, FileText } from "lucide-react";
import { SectionHeader } from "./Story";

const certs = [
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { title: "LangChain for LLM Apps", issuer: "DeepLearning.AI", year: "2024" },
  { title: "Prompt Engineering", issuer: "OpenAI", year: "2024" },
  { title: "Full Stack Web Dev", issuer: "Meta", year: "2023" },
  { title: "Python for Data Science", issuer: "IBM", year: "2023" },
  { title: "System Design Foundations", issuer: "Educative", year: "2023" },
  { title: "PostgreSQL Advanced", issuer: "Postgres.org", year: "2024" },
  { title: "Generative AI Specialization", issuer: "Google Cloud", year: "2024" },
];

export function Certifications() {
  const loop = [...certs, ...certs];
  return (
    <section id="certifications" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Certifications"
          title={<>A gallery of <span className="text-gradient-electric">verified craft.</span></>}
        />
      </div>

      <div className="mt-16 mask-fade-x overflow-hidden">
        <div className="flex w-max gap-5 animate-marquee">
          {loop.map((c, i) => (
            <CertCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ title, issuer, year }: { title: string; issuer: string; year: string }) {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      className="glass-strong group relative flex w-[300px] shrink-0 flex-col gap-4 rounded-2xl p-5 text-left transition-shadow hover:shadow-glow"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-electric/20 via-electric/5 to-transparent">
        <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
          <Award className="size-10 text-electric/80" />
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Certificate · {year}
          </div>
        </div>
      </div>
      <div>
        <div className="font-display text-base font-semibold leading-tight text-foreground">{title}</div>
        <div className="mt-1 text-xs text-muted-foreground">{issuer}</div>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-electric opacity-0 transition-opacity group-hover:opacity-100">
        <FileText className="size-3.5" /> Preview
      </div>
    </motion.button>
  );
}
