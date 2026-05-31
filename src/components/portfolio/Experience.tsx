import { useState } from "react";
import { motion } from "motion/react";
import { Building2, ChevronDown } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const roles = [
  {
    company: "Drehill Private Limited",
    role: "Software Engineer Intern",
    location: "Remote",
    period: "May 2025 – Mar 2026",
    year: "2025 – 26",
    bullets: [
      "Delivered multiple production-level platforms end-to-end, transforming product requirements into fully functional systems used in real-world scenarios.",
      "Designed and implemented assessment workflows that handled user evaluations, automated result generation, and improved overall user experience.",
      "Built the company's official website from the ground up, structuring business information, services, and workflows into a clear, accessible platform for users and stakeholders.",
    ],
  },
  {
    company: "Graspear Solutions",
    role: "Full Stack Developer Intern",
    location: "Remote",
    period: "Feb 2025 – Jul 2025",
    year: "2025",
    bullets: [
      "Built a fitness exercise analysis system that processed user-uploaded videos and evaluated movement accuracy across 10+ exercise types, reducing manual supervision effort through rule-based and predictive logic that delivered instant automated feedback.",
      "Developed supporting tools such as scoring systems and interactive modules, enhancing user engagement and data representation clarity across applications.",
    ],
  },
  {
    company: "Koyya Enterprises",
    role: "Software Engineer Intern",
    location: "Remote",
    period: "Sep 2024 – Jan 2025",
    year: "2024 – 25",
    bullets: [
      "Contributed to Sleek, a workflow-driven application that tracks 6+ process stages end-to-end, improving validation consistency and reducing execution errors by identifying and resolving 15+ critical bugs in a live environment.",
      "Built a language translation application enabling seamless conversion between languages with a focus on usability and response accuracy.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative pt-20 pb-20 border-b border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Internships"
          title={
            <>
              Internship <span className="text-electric">Experience.</span>
            </>
          }
          subtitle="Three remote software engineering internships focused on full-stack architecture, workflow systems, and production platforms."
        />

        <div className="relative mt-24 w-full max-w-6xl mx-auto">
          {/* Vertical timeline line (desktop shifted, mobile left) */}
          <div className="absolute left-[15px] md:left-[120px] top-0 h-full w-px bg-border/80" />
          
          <div className="space-y-12">
            {roles.map((r, i) => (
              <RoleCard key={r.company} r={r} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleCard({ r, i }: { r: typeof roles[0]; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="relative pl-12 md:pl-[160px]"
    >
      {/* Year tag on the left (desktop only) */}
      <div className="absolute left-0 top-[26px] hidden md:flex w-[100px] flex-col items-end text-right">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-electric">
          {r.year}
        </span>
        <span className="font-mono text-[9px] font-bold text-muted-foreground/40 uppercase mt-0.5">
          [ Intern ]
        </span>
      </div>

      {/* Timeline visual marker (desktop shifted, mobile left) */}
      <div className="absolute left-[12px] md:left-[117px] top-[28px] size-[7px] rounded-full bg-electric ring-[6px] ring-background" />
      
      <div
        onClick={() => setOpen(!open)}
        className="group relative overflow-hidden rounded-2xl border border-border bg-[#0B0B0C] p-8 transition-all duration-300 hover:border-white/20 cursor-pointer select-none"
      >
        {/* Dynamic Chevron Indicator in top-right */}
        <ChevronDown
          className={`absolute right-6 top-6 size-4 text-electric transition-all duration-300 ${
            open ? "rotate-180" : "opacity-40 group-hover:opacity-100 group-hover:translate-y-0.5"
          } sm:right-8 sm:top-8`}
        />

        <div className="flex flex-col gap-4">
          <div className="flex-1 pr-8">
            {/* Mobile Year Badge */}
            <span className="md:hidden font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-electric mb-2 block">
              [ {r.year} ]
            </span>

            <div className="flex flex-wrap items-center gap-2 text-muted-foreground font-mono text-[10px] font-bold uppercase tracking-wider">
              <Building2 className="size-3.5 text-electric/80" />
              <span>{r.period}</span>
              <span className="text-border">|</span>
              <span>{r.location}</span>
            </div>
            
            <h3 className="mt-3 font-display text-2xl font-bold text-foreground uppercase tracking-wide">
              {r.company}
            </h3>
            <div className="mt-1 font-sans text-xs font-semibold text-electric uppercase tracking-wider">{r.role}</div>
          </div>
        </div>
        
        {/* Animated Dropdown Description */}
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <ul className="mt-6 space-y-3.5 border-t border-border/30 pt-6">
            {r.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground font-sans font-medium">
                <span className="mt-[7px] size-[4px] shrink-0 rounded-full bg-electric/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
