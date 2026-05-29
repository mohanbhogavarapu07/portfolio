import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";
import { SectionHeader } from "./Story";

const letters = [
  { company: "Drehill Private Limited", role: "Full Stack & AI Engineer", period: "2024 — Present" },
  { company: "Graspear Solutions", role: "Full Stack Developer", period: "2023 — 2024" },
  { company: "Koyya Enterprises", role: "Software Engineering Intern", period: "2022 — 2023" },
];

export function Letters() {
  return (
    <section id="letters" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Experience Letters"
          title={<>Receipts, <span className="text-gradient-electric">not promises.</span></>}
          subtitle="Documents grouped by company. Click any letter to preview or download."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {letters.map((l, i) => (
            <motion.div
              key={l.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-strong group flex flex-col gap-4 rounded-2xl p-5 transition-shadow hover:shadow-glow"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-white/[0.04] to-electric/10">
                <div className="absolute inset-4 space-y-2">
                  <div className="h-2 w-2/3 rounded bg-foreground/20" />
                  <div className="h-1.5 w-1/2 rounded bg-foreground/10" />
                  <div className="mt-4 space-y-1.5">
                    {Array.from({ length: 10 }).map((_, k) => (
                      <div key={k} className="h-1 w-full rounded bg-foreground/8" style={{ opacity: 1 - k * 0.07 }} />
                    ))}
                  </div>
                </div>
                <FileText className="absolute right-3 top-3 size-5 text-electric/60" />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric">{l.period}</div>
                <div className="mt-1.5 font-display text-lg font-semibold text-foreground">{l.company}</div>
                <div className="text-xs text-muted-foreground">{l.role}</div>
              </div>
              <div className="flex gap-2">
                <button className="glass flex-1 rounded-lg px-3 py-2 text-xs font-medium text-foreground hover:bg-white/5">Preview</button>
                <button className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-electric px-3 py-2 text-xs font-semibold text-primary-foreground hover:brightness-110">
                  <Download className="size-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
