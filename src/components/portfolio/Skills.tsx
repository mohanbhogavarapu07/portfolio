import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const skillCategories = [
  {
    index: "01",
    category: "Languages",
    skills: ["Java", "Python"],
    span: "col-span-1 md:col-span-1 lg:col-span-5",
  },
  {
    index: "02",
    category: "Frontend",
    skills: ["React.js", "Tailwind CSS", "HTML / CSS"],
    span: "col-span-1 md:col-span-1 lg:col-span-7",
  },
  {
    index: "03",
    category: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot"],
    span: "col-span-1 md:col-span-1 lg:col-span-7",
  },
  {
    index: "04",
    category: "AI / LLM",
    skills: ["Gen AI", "AI Agents"],
    span: "col-span-1 md:col-span-1 lg:col-span-5",
  },
  {
    index: "05",
    category: "Database",
    skills: ["MongoDB", "SQL"],
    span: "col-span-1 md:col-span-1 lg:col-span-5",
  },
  {
    index: "06",
    category: "Tools / IDE",
    skills: ["Docker", "Git", "GitHub", "Render", "VS Code"],
    span: "col-span-1 md:col-span-1 lg:col-span-7",
  },
];

export function Skills() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (cat: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  return (
    <section id="skills" className="relative pt-24 pb-24 border-b border-border/40 bg-background overflow-hidden">
      {/* Editorial grid lines background detail */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeader
          eyebrow="Capabilities"
          title={
            <>
              Core <span className="text-electric">Stack.</span>
            </>
          }
          subtitle="A focused, clean index of the languages, frameworks, databases, and environments I use to ship robust software."
        />

        {/* Dynamic Asymmetric Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {skillCategories.map((item, idx) => {
            const isOpen = !!openCategories[item.category];

            return (
              <motion.div
                key={item.category}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => toggleCategory(item.category)}
                className={`group relative overflow-hidden rounded-[2rem] border p-5 md:p-6.5 xl:p-7 cursor-pointer select-none transition-all duration-300 flex flex-col justify-between h-[160px] md:h-[185px] ${item.span
                  } ${isOpen
                    ? "border-electric/50 bg-[#0E0E0F] shadow-[0_0_20px_rgba(255,79,0,0.04)]"
                    : "border-border bg-[#070708] hover:border-white/20 hover:bg-[#0B0B0C]"
                  }`}
              >
                {/* Visual grid texture within card */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none opacity-60" />

                <AnimatePresence mode="wait">
                  {!isOpen ? (
                    <motion.div
                      key="closed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full flex flex-col justify-between pointer-events-none"
                    >
                      {/* Closed State Header */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold text-muted-foreground/40 group-hover:text-electric transition-colors duration-300">
                          [{item.index}]
                        </span>
                        <span className="font-mono text-[8px] tracking-[0.2em] font-bold text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors duration-300">
                          TAP TO REVEAL
                        </span>
                      </div>

                      {/* Closed State Title */}
                      <div className="mb-2">
                        <h3 className="font-display text-xl sm:text-2xl lg:text-[1.65rem] xl:text-[1.85rem] font-extrabold uppercase tracking-wide text-foreground leading-none">
                          {item.category}
                        </h3>
                      </div>

                      {/* Closed State Footer */}
                      <div className="flex items-center justify-between font-mono text-[9px] font-bold text-muted-foreground/20">
                        <span>SYS // {item.category.toUpperCase().replace(" / ", "_")}</span>
                        <span className="text-muted-foreground/30 group-hover:text-electric transition-colors duration-300">[ + ]</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="w-full h-full flex flex-col justify-between pointer-events-none"
                    >
                      {/* Open State Header */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] font-bold tracking-widest text-electric uppercase">
                          {item.category} // {item.index}
                        </span>
                        <div className="flex items-center gap-1.5 font-mono text-[8px] font-bold text-electric">
                          <span className="size-1 rounded-full bg-electric animate-ping" />
                          <span>EXPANDED</span>
                        </div>
                      </div>

                      {/* Open State Body: Large Typographic Skills */}
                      <div className="my-auto py-2 flex flex-wrap items-center justify-center gap-x-4 md:gap-x-5 gap-y-2">
                        {item.skills.map((skill, sIdx) => (
                          <div key={skill} className="flex items-center gap-3">
                            <span className="font-display text-base sm:text-lg lg:text-[1.25rem] font-extrabold uppercase tracking-wide text-foreground">
                              {skill}
                            </span>
                            {sIdx < item.skills.length - 1 && (
                              <span className="text-[10px] text-electric/50 font-black font-mono">/</span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Open State Footer */}
                      <div className="flex items-center justify-between font-mono text-[9px] font-bold text-muted-foreground/40">
                        <span>TAP TO COLLAPSE</span>
                        <span className="text-electric">[ - ]</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


