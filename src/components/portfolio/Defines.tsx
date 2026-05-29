import { motion } from "motion/react";
import {
  Brain, Compass, Layers, Rocket, Sparkles, Wrench,
} from "lucide-react";
import { SectionHeader } from "./Story";

const traits = [
  { icon: Wrench, title: "Problem Solving", body: "I reduce messy ambiguity into shippable systems. Constraints are inputs, not blockers." },
  { icon: Layers, title: "End-to-End Products", body: "From schema to pixels. I own the full slice — design, code, deploy, iterate." },
  { icon: Brain, title: "AI Integration", body: "Agents, RAG, evals, guardrails. LLMs as a runtime, not a feature." },
  { icon: Compass, title: "System Thinking", body: "Architecture before code. Trade-offs are explicit, contracts are clean." },
  { icon: Rocket, title: "Startup Mentality", body: "Speed × quality. Ship the smallest correct thing, then compound." },
  { icon: Sparkles, title: "Continuous Learning", body: "The stack changes weekly. Curiosity is a daily practice, not a phase." },
];

export function Defines() {
  return (
    <section id="defines" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What Defines Me"
          title={<>Six traits, one <span className="text-gradient-electric">operating system.</span></>}
        />
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric/0 via-electric/0 to-electric/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="glass inline-flex size-11 items-center justify-center rounded-xl text-electric">
                  <t.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
