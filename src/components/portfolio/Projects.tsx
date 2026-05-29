import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeader } from "./Story";

const projects = [
  {
    name: "Virtual Scrum Master",
    tag: "AI Agent",
    problem: "Engineering teams lose hours every week to stand-up overhead, status chasing, and sprint admin.",
    solution: "An always-on agent that joins your tools, reads context, and runs the ceremonies for you.",
    architecture: ["LLM orchestrator", "Tool-using agents", "Vector memory", "Webhooks → Slack / Jira"],
    tech: ["LangChain", "OpenAI", "FastAPI", "Postgres", "pgvector", "Next.js"],
    results: ["Saved teams ~6 hrs/week", "92% accurate sprint summaries", "Zero-touch stand-ups"],
    accent: "from-electric/30 to-cyan-500/20",
  },
  {
    name: "FactorBeam",
    tag: "Assessment Platform",
    problem: "Hiring teams need to evaluate engineers across coding, system design, and judgement — without 6 tools.",
    solution: "A single platform that runs end-to-end technical assessments with rich analytics and anti-cheat signal.",
    architecture: ["Multi-tenant SaaS", "Sandboxed code runner", "Realtime collab", "Insights pipeline"],
    tech: ["React", "TypeScript", "Node.js", "Postgres", "Redis", "Docker"],
    results: ["1k+ assessments delivered", "Sub-second test runs", "Used by 12+ teams"],
    accent: "from-violet-500/30 to-electric/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Featured Projects"
          title={<>Case studies, <span className="text-gradient-electric">not screenshots.</span></>}
          subtitle="Two products I designed, built, and shipped. Real problems, real architecture, real results."
        />

        <div className="mt-20 space-y-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="glass-strong group relative overflow-hidden rounded-3xl shadow-elevated"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-30`} />
              <div className="relative grid grid-cols-1 gap-8 p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-12">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-electric">
                      Case Study · {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="glass rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    {p.name}
                  </h3>

                  <Block label="Problem" body={p.problem} />
                  <Block label="Solution" body={p.solution} />

                  <div className="mt-6">
                    <Label>Architecture</Label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.architecture.map((a) => (
                        <span key={a} className="glass rounded-lg px-2.5 py-1 text-xs text-foreground/85">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label>Technologies</Label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-lg border border-electric/30 px-2.5 py-1 text-xs text-electric">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a className="inline-flex items-center gap-1.5 rounded-full bg-electric px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow hover:brightness-110" href="#">
                      Live Demo <ArrowUpRight className="size-3.5" />
                    </a>
                    <a className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-foreground hover:bg-white/5" href="#">
                      <Github className="size-3.5" /> GitHub
                    </a>
                  </div>
                </div>

                {/* Mock preview */}
                <div className="relative">
                  <div className="glass-strong relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-grid opacity-50" />
                    <div className="absolute inset-x-4 top-4 flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-red-400/70" />
                      <span className="size-2 rounded-full bg-yellow-400/70" />
                      <span className="size-2 rounded-full bg-green-400/70" />
                      <span className="ml-2 font-mono text-[10px] text-muted-foreground">{p.name.toLowerCase().replace(/ /g, "-")}.app</span>
                    </div>
                    <div className="absolute inset-x-4 top-12 space-y-2">
                      <div className="h-3 w-1/3 rounded bg-electric/40" />
                      <div className="h-2 w-2/3 rounded bg-foreground/15" />
                      <div className="h-2 w-1/2 rounded bg-foreground/10" />
                    </div>
                    <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((k) => (
                        <div key={k} className="glass animate-pulse-glow rounded-lg p-2" style={{ animationDelay: `${k * 0.3}s` }}>
                          <div className="h-1.5 w-1/2 rounded bg-electric/60" />
                          <div className="mt-1.5 h-1 w-full rounded bg-foreground/15" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* results */}
                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {p.results.map((r) => (
                      <div key={r} className="glass rounded-xl p-3 text-xs text-foreground/85">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-electric">Result</div>
                        <div className="mt-1">{r}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
      {children}
    </div>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="mt-6">
      <Label>{label}</Label>
      <p className="mt-2 text-foreground/85">{body}</p>
    </div>
  );
}
