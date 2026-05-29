import { motion } from "motion/react";
import { Bot, Building2, Rocket, Workflow } from "lucide-react";
import { SectionHeader } from "./Story";

const visions = [
  { icon: Bot, title: "AI Products", body: "Consumer + B2B tools where the LLM is the product, not a feature toggle." },
  { icon: Workflow, title: "Agentic Systems", body: "Multi-agent systems that plan, act, and recover — running real workflows." },
  { icon: Building2, title: "Enterprise Solutions", body: "Battle-tested AI infrastructure for teams that need reliability, observability, and control." },
  { icon: Rocket, title: "Startup Journey", body: "Founder energy from day one. Building things people pay for is the goal." },
];

export function Vision() {
  return (
    <section id="vision" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Future Vision"
          title={<>What I'm <span className="text-gradient-electric">building toward.</span></>}
        />
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {visions.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="glass-strong group relative overflow-hidden rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-electric/15 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start gap-5">
                <div className="glass flex size-12 shrink-0 items-center justify-center rounded-xl text-electric">
                  <v.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{v.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
