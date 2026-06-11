import { motion } from "motion/react";

const codeLines = [
  { t: "// about.ts", c: "text-muted-foreground font-mono" },
  { t: "Full Stack Developer who turns ideas into real, working products end-to-end.", c: "" },
  { t: "I approach problems by understanding the whole system, breaking them down, and", c: "" },
  { t: "delivering solutions that actually work in real-world conditions. I focus on", c: "" },
  { t: "ownership, clarity, and execution, so what gets built is reliable, usable, and", c: "" },
  { t: "ready to scale. I work hands-on with data, structuring it, validating it, and", c: "" },
  { t: "using it to drive accurate results and meaningful outputs. I also ensure that", c: "" },
  { t: "applications are properly built, tested, and released, with smooth deployment", c: "" },
  { t: "and stable performance, so systems run consistently as they grow.", c: "" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center px-6 pt-28 pb-16 bg-background" id="hero">
      {/* Decorative top gradient */}
      <div className="absolute inset-x-0 top-0 h-[40vh] bg-gradient-hero pointer-events-none" />

      {/* Main card container */}
      <div className="mx-auto w-full max-w-7xl xl:max-w-[84rem] 2xl:max-w-[88rem]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-border bg-[#0B0B0C] p-6 sm:p-8 md:p-12 lg:p-16 shadow-elevated flex flex-col justify-between min-h-[500px] lg:min-h-[640px]"
        >
          {/* Header Metadata */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full border-b border-border/30 pb-6 mb-8 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
            <div className="flex flex-col gap-1">
              <span className="text-electric">[ Portfolio]</span>
              <span>© 2026</span>
            </div>
            <div className="text-left sm:text-right">
              <span>Developer — Andhra Pradesh, IN</span>
            </div>
          </div>

          {/* Central Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-8 lg:gap-12 items-center my-auto w-full">
            {/* Left Column: Bold Presentation & Bio */}
            <div className="flex flex-col items-start gap-8">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="font-display text-[10vw] sm:text-[8vw] lg:text-[4vw] xl:text-[4.4vw] font-extrabold uppercase leading-[0.85] tracking-[-0.03em] text-[#E5E5E7]"
              >
                MOHAN
                <br />
                <span className="text-muted-foreground/30 text-[8vw] sm:text-[6.5vw] lg:text-[3.4vw] xl:text-[3.6vw]">BUILDS</span>
              </motion.h1>

              <div className="flex flex-col gap-4">
                <span className="font-mono text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-electric">
                  [ Full Stack & AI Explorer ]
                </span>
                
                
              </div>

              {/* Action pill link */}
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-white/10 bg-[#0c0c0d] px-6 py-3.5 font-sans text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-foreground transition-all hover:border-electric hover:bg-[#121213]"
              >
                Let's Connect
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75"></span>
                  <span className="relative inline-flex size-1.5 rounded-full bg-electric"></span>
                </span>
              </a>
            </div>

            {/* Right Column: Code Snippet Panel directly inside */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full overflow-hidden rounded-2xl border border-border bg-[#070708] text-left shadow-lg"
            >
              <div className="flex items-center gap-2 border-b border-border/60 px-5 py-3.5 bg-black/30">
                <span className="size-2 rounded-full bg-electric/50" />
                <span className="size-2 rounded-full bg-white/5" />
                <span className="size-2 rounded-full bg-white/5" />
                <span className="ml-3 font-mono text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-muted-foreground">about.ts</span>
              </div>
              {/* Desktop layout: line-by-line editor with line numbers */}
              <pre className="hidden sm:block whitespace-pre-wrap break-words p-6 font-mono text-[12.5px] xl:text-[13px] font-medium leading-relaxed text-foreground max-h-[400px] overflow-y-auto">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-1">
                  {codeLines.map((l, i) => (
                    <motion.div key={i} variants={lineVariants} className={`flex items-start ${l.c || ""}`}>
                      <span className="mr-6 inline-block w-5 select-none text-right text-muted-foreground/25 font-bold shrink-0">
                        {i + 1}
                      </span>
                      <span className="flex-1 min-w-0">{l.t || "\u00A0"}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </pre>

              {/* Mobile layout: clean continuous paragraph matching IDE comment style */}
              <pre className="sm:hidden whitespace-pre-wrap break-words p-5 font-mono text-[11px] font-medium leading-relaxed text-foreground max-h-none overflow-y-visible">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  <div className="text-muted-foreground mb-3">// about.ts</div>
                  <p className="text-justify leading-relaxed text-[#E5E5E7]/90 font-mono hyphens-auto text-[10px] sm:text-[11.5px]">
                    Full Stack Developer who turns ideas into real, working products end-to-end. I approach problems by understanding the whole system, breaking them down, and delivering solutions that actually work in real-world conditions. I focus on ownership, clarity, and execution, so what gets built is reliable, usable, and ready to scale. I work hands-on with data, structuring it, validating it, and using it to drive accurate results and meaningful outputs. I also ensure that applications are properly built, tested, and released, with smooth deployment and stable performance, so systems run consistently as they grow.
                  </p>
                </motion.div>
              </pre>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
