import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="philosophy" className="relative overflow-hidden py-24 sm:py-32 border-b border-border/50">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 bg-grid opacity-20"
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/5 blur-[120px]" />

      <motion.div style={{ opacity }} className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="mt-0 font-display text-[8vw] sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-[#E5E5E7] uppercase">
          I don't just <span className="text-muted-foreground/30">write code.</span>
          <br />I build <span className="text-electric">systems</span> that
          <br /> solve real problems.
        </h2>

      </motion.div>
    </section>
  );
}
