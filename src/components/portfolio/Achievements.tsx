import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { value: 3, suffix: "+", label: "Internships completed" },
  { value: 8, suffix: "+", label: "Certifications earned" },
  { value: 14, suffix: "", label: "Projects shipped" },
  { value: 25, suffix: "+", label: "Technologies mastered" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative pt-20 pb-20 border-b border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Achievement Wall"
          title={
            <>
              Numbers that <span className="text-electric">compound.</span>
            </>
          }
        />
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-[#0B0B0C] p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className="font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 border-t border-border/30 pt-4 font-mono text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
