import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certificates" },
  { id: "letters", label: "Letters" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 border-b border-border backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-[0.15em] text-foreground transition-colors hover:text-electric"
        >
          MOHAN BHOGAVARAPU
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-border px-5 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-foreground transition-all hover:bg-white/5"
        >
          Let's Connect
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-75"></span>
            <span className="relative inline-flex size-1.5 rounded-full bg-electric"></span>
          </span>
        </a>
      </div>
    </motion.header>
  );
}
