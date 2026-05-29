import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const techBadges = [
  { label: "React", x: "8%", y: "22%", delay: 0 },
  { label: "TypeScript", x: "84%", y: "18%", delay: 0.2 },
  { label: "Python", x: "12%", y: "72%", delay: 0.4 },
  { label: "LangChain", x: "82%", y: "68%", delay: 0.6 },
  { label: "Node.js", x: "92%", y: "44%", delay: 0.8 },
  { label: "OpenAI", x: "4%", y: "48%", delay: 1.0 },
  { label: "AWS", x: "72%", y: "86%", delay: 1.2 },
  { label: "PostgreSQL", x: "22%", y: "88%", delay: 1.4 },
];

const codeLines = [
  { t: "// agent.ts", c: "text-muted-foreground" },
  { t: "const agent = createAgent({", c: "" },
  { t: "  model: 'gpt-4o',", c: "" },
  { t: "  tools: [search, code, plan],", c: "" },
  { t: "  memory: vectorStore,", c: "" },
  { t: "});", c: "" },
  { t: "", c: "" },
  { t: "await agent.run(task);", c: "text-electric" },
];

function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio);
    const dots = Array.from({ length: 70 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.4,
    }));

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    window.addEventListener("resize", resize);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120, 170, 255, 0.5)";
        ctx.fill();
      }
      // lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const max = 140 * devicePixelRatio;
          if (dist < max) {
            ctx.strokeStyle = `rgba(120, 170, 255, ${0.18 * (1 - dist / max)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 size-full" aria-hidden />;
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const glowX = useTransform(sx, (v) => `${50 + v * 8}%`);
  const glowY = useTransform(sy, (v) => `${30 + v * 6}%`);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
      my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const [typed, setTyped] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTyped((t) => (t + 1) % (codeLines.length + 8)), 380);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-background"
      id="hero"
    >
      <div className="absolute inset-0 bg-grid mask-fade-b" />
      <Particles />
      <motion.div
        className="pointer-events-none absolute size-[800px] rounded-full blur-3xl"
        style={{
          left: glowX,
          top: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, oklch(0.72 0.19 240 / 0.35), transparent 60%)",
        }}
      />

      {/* floating tech badges */}
      {techBadges.map((b) => (
        <motion.div
          key={b.label}
          className="absolute hidden md:block"
          style={{ left: b.x, top: b.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + b.delay, duration: 0.8 }}
        >
          <div className="glass animate-float rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80"
               style={{ animationDelay: `${b.delay}s` }}>
            {b.label}
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-electric opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-electric" />
          </span>
          Available for new product & AI engineering work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-gradient">Aditya</span>
          <br />
          <span className="text-foreground">Builds <span className="text-gradient-electric">AI Systems.</span></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Full Stack Developer <span className="text-foreground/60">·</span> AI Engineer{" "}
          <span className="text-foreground/60">·</span> Product Builder.
          Shipping production systems where humans and agents work together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-electric px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.02] hover:brightness-110"
          >
            <Sparkles className="size-4" />
            Explore My Work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-white/5"
          >
            <Download className="size-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Animated code snippet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="glass-strong mt-16 w-full max-w-xl overflow-hidden rounded-2xl text-left shadow-elevated"
        >
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-yellow-400/70" />
            <span className="size-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 font-mono text-[11px] text-muted-foreground">agent.ts</span>
          </div>
          <pre className="overflow-hidden p-5 font-mono text-[13px] leading-relaxed text-foreground/80">
            {codeLines.map((l, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ${i <= typed ? "opacity-100" : "opacity-30"} ${l.c}`}
              >
                <span className="mr-4 inline-block w-4 select-none text-right text-muted-foreground/40">
                  {i + 1}
                </span>
                {l.t || "\u00A0"}
              </div>
            ))}
          </pre>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        scroll
      </motion.div>
    </section>
  );
}
