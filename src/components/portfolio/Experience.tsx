import { motion } from "motion/react";
import { Building2 } from "lucide-react";
import { SectionHeader } from "./Story";

const roles = [
  {
    company: "Drehill Private Limited",
    role: "Full Stack & AI Engineer",
    period: "2024 — Present",
    summary:
      "Building production AI features: agentic workflows, RAG pipelines, and the React surface to drive them.",
    bullets: [
      "Designed an agent orchestration layer powering 5+ internal tools",
      "Cut RAG answer latency 38% with smarter retrieval + caching",
      "Owned end-to-end delivery — schema → UI → deploy",
    ],
    metrics: [
      { k: "Latency ↓", v: "38%" },
      { k: "Agents shipped", v: "12" },
    ],
  },
  {
    company: "Graspear Solutions",
    role: "Full Stack Developer",
    period: "2023 — 2024",
    summary:
      "Shipped customer-facing web products end-to-end. React + Node + Postgres on the daily.",
    bullets: [
      "Led the rebuild of the assessment platform front-end",
      "Built reusable component system used across 4 products",
      "Set up CI/CD that took deploys from 25 min → 4 min",
    ],
    metrics: [
      { k: "Deploy time ↓", v: "84%" },
      { k: "Products", v: "4" },
    ],
  },
  {
    company: "Koyya Enterprises",
    role: "Software Engineering Intern",
    period: "2022 — 2023",
    summary:
      "First production codebase. Learned what shipping really means and where shortcuts come back to bite you.",
    bullets: [
      "Implemented internal dashboards used by ops team daily",
      "Wrote the first integration test suite for the API",
      "Migrated legacy queries onto an ORM — 0 prod incidents",
    ],
    metrics: [
      { k: "Test coverage", v: "70%" },
      { k: "Incidents", v: "0" },
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title={<>Roles that <span className="text-gradient-electric">shipped real things.</span></>}
          subtitle="Three companies. One pattern: own the problem, ship the solution, measure the impact."
        />

        <div className="relative mt-20">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-electric/40 via-electric/20 to-transparent" />
          <div className="space-y-10">
            {roles.map((r, i) => (
              <motion.div
                key={r.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative pl-16"
              >
                <div className="absolute left-3.5 top-6 size-3 rounded-full bg-electric shadow-glow" />
                <div className="glass-strong group rounded-2xl p-7 transition-all hover:shadow-elevated">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Building2 className="size-4" />
                        <span className="font-mono text-xs uppercase tracking-[0.18em]">{r.period}</span>
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                        {r.company}
                      </h3>
                      <div className="text-electric">{r.role}</div>
                    </div>
                    <div className="flex gap-2">
                      {r.metrics.map((m) => (
                        <div key={m.k} className="glass rounded-xl px-3 py-2 text-right">
                          <div className="font-display text-lg font-semibold text-foreground">{m.v}</div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{m.k}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">{r.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-foreground/85">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-electric" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
