import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { SectionHeader } from "./Story";

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
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Achievement Wall"
          title={<>Numbers that <span className="text-gradient-electric">compound.</span></>}
        />
        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-strong relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute -right-6 -top-6 size-24 rounded-full bg-electric/20 blur-2xl" />
              <div className="font-display text-5xl font-semibold tracking-tight text-gradient">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
