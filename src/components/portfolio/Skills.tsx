import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./Story";

const categories = [
  { id: "frontend", label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vite"] },
  { id: "backend", label: "Backend", items: ["Node.js", "Python", "FastAPI", "Express", "tRPC", "REST"] },
  { id: "ai", label: "AI / LLM", items: ["OpenAI", "Anthropic", "LangChain", "LlamaIndex", "RAG", "Agents", "Evals"] },
  { id: "db", label: "Databases", items: ["PostgreSQL", "Supabase", "Redis", "Pinecone", "pgvector"] },
  { id: "cloud", label: "Cloud & Deploy", items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Cloudflare"] },
  { id: "tools", label: "Tools", items: ["Git", "Figma", "Linear", "Notion", "Postman"] },
];

export function Skills() {
  const [active, setActive] = useState("ai");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Skills · Command Center"
          title={<>The stack I <span className="text-gradient-electric">ship with.</span></>}
          subtitle="Not a checklist — a working ecosystem. These are the tools I reach for when I need to move fast and not break things."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          {/* category list */}
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`group relative shrink-0 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all lg:w-full ${
                  active === c.id
                    ? "glass-strong text-foreground shadow-glow"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span>{c.label}</span>
                  <span className={`font-mono text-[10px] ${active === c.id ? "text-electric" : "text-muted-foreground"}`}>
                    {String(c.items.length).padStart(2, "0")}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* network */}
          <div className="glass-strong relative aspect-[4/3] overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-dots" />
            <svg className="absolute inset-0 size-full" viewBox="0 0 400 300" preserveAspectRatio="none">
              {current.items.map((_, i) => {
                const angle = (i / current.items.length) * Math.PI * 2;
                const x = 200 + Math.cos(angle) * 110;
                const y = 150 + Math.sin(angle) * 90;
                return (
                  <line
                    key={i}
                    x1="200" y1="150" x2={x} y2={y}
                    stroke="oklch(0.72 0.19 240 / 0.35)"
                    strokeWidth="0.7"
                    strokeDasharray="2 3"
                  />
                );
              })}
            </svg>

            {/* center node */}
            <motion.div
              key={current.id}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="glass-strong animate-pulse-glow flex size-24 items-center justify-center rounded-full text-center">
                <div className="font-display text-sm font-semibold text-foreground">
                  {current.label}
                </div>
              </div>
            </motion.div>

            {/* outer nodes */}
            {current.items.map((item, i) => {
              const angle = (i / current.items.length) * Math.PI * 2;
              const x = 50 + Math.cos(angle) * 36;
              const y = 50 + Math.sin(angle) * 36;
              return (
                <motion.div
                  key={`${current.id}-${item}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <div className="glass rounded-full px-3 py-1.5 text-xs font-medium text-foreground/85 hover:text-electric">
                    {item}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
