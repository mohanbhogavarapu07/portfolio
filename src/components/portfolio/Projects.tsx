import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github, X } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    name: "Virtual Scrum Master",
    tag: "Event-Driven Scrum Automation",
    brief: "An autonomous, event-driven Scrum Master engine running on a LangGraph DAG state machine to fully automate ticket lifecycles.",
    problem:
      "Engineering teams lose hours to stand-up overhead and sprint admin. Tickets go stale when developers merge code but forget to update tracking boards, creating context gaps for product and engineering leaders.",
    solution:
      "An autonomous Scrum Master engine that aggregates Git webhooks (commits, PRs, comments) in real-time, routes them through a deterministic validation graph in LangGraph, and pushes instant board updates via Server-Sent Events (SSE).",
    tech: ["LangGraph", "FastAPI", "PostgreSQL", "Celery", "Redis", "React"],
    results: [
      "Developer Activity Tracking: Git and chat webhooks capture commits, pull requests, and comments in real time to eliminate manual logging.",
      "Autonomous AI Decisions: A hybrid LangGraph agent combines strict workflow rules with LLM reasoning to execute safe, fully-audited board transitions.",
      "Real-Time Asynchronous Sync: High-frequency event signals are aggregated in Celery background queues and instantly broadcast to the UI using Server-Sent Events.",
    ],
    accent: "from-electric/30 to-cyan-500/20",
    githubLinks: [
      { label: "VSM Agent", url: "https://github.com/mohanbhogavarapu07/vsm-agent" },
      { label: "VSM Backend", url: "https://github.com/mohanbhogavarapu07/vsm-v2-backend" },
      { label: "VSM Frontend", url: "https://github.com/mohanbhogavarapu07/vsm-v2-frontend" },
    ],
  },
  {
    name: "FactorBeam",
    tag: "Discovery & Skills Platform",
    brief: "A platform that helps you find your ideal career path, test your skills, and train your brain with engaging games.",
    problem:
      "People often struggle to choose the right career path and don't have a single place to discover their strengths, prepare for exams, or practice real-world skills.",
    solution:
      "A complete platform that combines free career discovery tests, quick 10-minute skill assessments, and fun brain-training games in one place.",
    tech: ["Node.js", "Express.js", "React.js", "MongoDB"],
    results: [
      "Free Career Finder: Built the Career Interest Compass and cognitive tests to help you mathematically map out your best career paths for free.",
      "Quick Skill Quizzes: Created 10-minute assessments to test your strengths in high-demand subjects like Python, SQL, and grammar.",
      "Brain Training Games: Developed interactive mini-games like Vocab Vortex and Logic Leap to boost your vocabulary, logic, and problem-solving skills.",
    ],
    accent: "from-violet-500/30 to-electric/20",
    demoUrl: "https://factorbeam.com/",
  },
  {
    name: "Fitness Motion Analytics",
    tag: "ML & Analytics",
    brief: "An intelligent fitness application that uses your webcam to track your body movements, check your workout form, and count your repetitions in real time.",
    problem:
      "When working out at home without a trainer, it is easy to perform exercises with incorrect posture, which can lead to poor results or painful physical injuries.",
    solution:
      "A smart app that uses body-tracking technology and machine learning to analyze your workout form, count your reps, and guide you to exercise safely.",
    tech: ["Python", "Django", "MediaPipe", "TensorFlow / Keras", "React.js", "Tailwind CSS"],
    results: [
      "Smart Posture Tracking: Analyzes your joints and body angles in real time to make sure you are doing pushups, squats, and other exercises with perfect posture.",
      "Advanced Rep Counter: Uses machine learning models to study your movement patterns and accurately count actual reps while filtering out random motions.",
      "Real-Time Web Feed: Overlays virtual lines on your webcam feed to show your posture score, active rep count, and live form feedback instantly.",
    ],
    accent: "from-amber-500/30 to-orange-500/20",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Lock body scroll when popup modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative py-24 border-b border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Portfolio"
          title={
            <>
              Projects I have <span className="text-electric">built.</span>
            </>
          }
          subtitle="Selected systems and web applications designed and built from scratch."
        />

        {/* main page project switcher bento cards grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedProject(p)}
              className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-[#070708] p-6 sm:p-8 md:p-10 cursor-pointer select-none transition-all duration-300 flex flex-col justify-between min-h-[280px] hover:border-white/20 hover:bg-[#0B0B0C]"
            >
              {/* Background grid accent detail inside cards */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none opacity-60" />

              <div>
                {/* Tag index */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold text-electric uppercase tracking-[0.25em]">
                    [ CASE STUDY 0{idx + 1} ]
                  </span>
                  <span className="rounded-full border border-border bg-white/5 px-2.5 py-0.5 font-sans text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                    {p.tag}
                  </span>
                </div>

                {/* Big Title */}
                <h3 className="mt-6 font-display text-[clamp(1.2rem,5vw,1.875rem)] sm:text-3xl md:text-[2.2rem] font-extrabold uppercase tracking-wide text-foreground leading-none break-words">
                  {p.name}
                </h3>

                {/* Brief Summary */}
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground font-sans max-w-lg text-justify hyphens-auto">
                  {p.brief}
                </p>
              </div>

              {/* Read link trigger */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 font-mono text-[9px] font-bold text-muted-foreground/30 mt-6 pt-4 border-t border-border/10">
                <span className="truncate max-w-full">SYS // {p.name.toUpperCase().replace(/ /g, "_")}</span>
                <span className="text-muted-foreground/40 group-hover:text-electric transition-colors duration-300 tracking-[0.15em] uppercase self-end sm:self-auto shrink-0">
                  READ CASE STUDY [ → ]
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Full Popup Drawer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProject(null)} // Close on background click
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="relative w-full max-w-5xl rounded-[2rem] md:rounded-[2.5rem] border border-border bg-[#0B0B0C] p-6 md:p-10 lg:p-12 overflow-y-auto max-h-[85vh] md:max-h-[90vh] shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()} // Prevent closing on clicking inside modal
            >
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 md:right-8 md:top-8 inline-flex size-10 items-center justify-center rounded-full border border-border bg-[#121213] text-muted-foreground hover:text-foreground hover:border-white/20 transition-all duration-300 group/btn z-20"
              >
                <X className="size-4 group-hover/btn:rotate-90 transition-transform duration-300" />
              </button>

              <div className="z-10 pr-12 md:pr-16">
                {/* Header Tag and Index */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-electric">
                    Case Study Detail
                  </span>
                  <span className="rounded-full border border-border bg-white/5 px-2.5 py-0.5 font-sans text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                    {selectedProject.tag}
                  </span>
                </div>

                {/* Case Study Title */}
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold tracking-wide text-foreground uppercase break-words">
                  {selectedProject.name}
                </h3>

                <div className="mt-3 border-t border-border/30 pt-3 space-y-4 w-full">
                  {/* Problem, Solution, and Results */}
                  <div className="space-y-4">
                    <Block label="Problem" body={selectedProject.problem} />
                    <Block label="Solution" body={selectedProject.solution} />
                    
                    <div>
                      <Label>Results & Metrics</Label>
                      <ul className="mt-2 space-y-3">
                        {selectedProject.results.map((r) => (
                          <li key={r} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-foreground/90 font-medium">
                            <span className="mt-2 size-1.5 shrink-0 rounded-sm bg-electric" />
                            <span className="text-justify hyphens-auto">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <Label>Technologies</Label>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-electric/30 bg-electric/5 px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-wider text-electric"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {selectedProject.demoUrl && (
                      <a
                        className="inline-flex items-center gap-1.5 rounded-full bg-electric px-5 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground shadow-glow hover:brightness-110"
                        href={selectedProject.demoUrl}
                      >
                        Live Demo <ArrowUpRight className="size-3.5" />
                      </a>
                    )}
                    {selectedProject.githubLinks?.map((link) => (
                      <a
                        key={link.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-transparent px-5 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-foreground hover:bg-white/5"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="size-3.5" /> {link.label}
                      </a>
                    ))}
                  </div>
                </div>


              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
    <div>
      <Label>{label}</Label>
      <p className="mt-2 text-foreground/90 leading-relaxed text-sm sm:text-base font-medium text-justify hyphens-auto">{body}</p>
    </div>
  );
}
