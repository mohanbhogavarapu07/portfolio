import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { id: "story", label: "Story" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
          scrolled ? "glass-strong shadow-elevated" : "glass"
        }`}
      >
        <a href="#hero" className="rounded-full px-3 py-1.5 font-display text-sm font-semibold text-foreground">
          <span className="text-gradient-electric">A</span>ditya
        </a>
        <div className="mx-1 hidden h-4 w-px bg-white/10 sm:block" />
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="hidden rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-1 rounded-full bg-electric px-3 py-1.5 font-semibold text-primary-foreground transition-all hover:brightness-110"
        >
          Hire me
        </a>
      </nav>
    </motion.header>
  );
}
