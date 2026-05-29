import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="philosophy" className="relative overflow-hidden py-40">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 bg-grid opacity-40"
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-[120px]" />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-electric">
          Engineering Philosophy
        </div>
        <h2 className="mt-8 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          I don't just <span className="text-muted-foreground/60">write code.</span>
          <br />
          I build <span className="text-gradient-electric">systems</span> that
          <br /> solve real problems.
        </h2>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { k: "Design", v: "Think in systems, not features" },
            { k: "Build", v: "Ship the smallest correct thing" },
            { k: "Iterate", v: "Measure, learn, compound" },
          ].map((p) => (
            <div key={p.k} className="glass rounded-xl p-4 text-left">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-electric">{p.k}</div>
              <div className="mt-1.5 text-sm text-foreground/85">{p.v}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
