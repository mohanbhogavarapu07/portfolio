import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const letters = [
  {
    company: "Drehill Private Limited",
    role: "Software Engineer Intern",
    period: "May 2025 – Mar 2026",
    file: `${import.meta.env.BASE_URL}Drehill_Exp_Letter.pdf`,
  },
  {
    company: "Graspear Solutions",
    role: "Full Stack Developer Intern",
    period: "Feb 2025 – Jul 2025",
    file: `${import.meta.env.BASE_URL}Graspear_Exp_Letter.pdf`,
  },
  {
    company: "Koyya Enterprises",
    role: "Software Engineer Intern",
    period: "Sep 2024 – Jan 2025",
    file: `${import.meta.env.BASE_URL}Koyya_Exp_Letter.pdf`,
  },
];

export function Letters() {
  return (
    <section id="letters" className="relative pt-20 pb-20 border-b border-border/50 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Experience Letters"
          title={
            <>
              Experience <span className="text-electric">Letters.</span>
            </>
          }
          subtitle="Verified internship experience credentials. Click preview to inspect."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {letters.map((l, i) => (
            <motion.a
              key={l.company}
              href={l.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-[#0B0B0C] p-6 hover:border-white/20 transition-all duration-300 flex flex-col gap-5 cursor-pointer group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-[#121213] to-[#1a1a1c] border border-border/60">
                {/* Desktop PDF iframe */}
                <div className="hidden sm:block w-[109%] h-full overflow-hidden">
                  <iframe
                    src={`${l.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="w-full h-full border-0 pointer-events-none select-none overflow-hidden bg-[#121213]"
                    scrolling="no"
                  />
                </div>
                {/* Mobile PDF Fallback Card */}
                <div className="sm:hidden flex flex-col items-center justify-center w-full h-full p-4 bg-gradient-to-br from-[#121213] to-[#1e1e22]">
                  <FileText className="size-12 text-electric/80 mb-3 animate-pulse" />
                  <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase tracking-widest text-center px-2 line-clamp-1">
                    {l.file.split('/').pop()?.replace(/%20/g, ' ')}
                  </span>
                  <span className="mt-4 inline-flex items-center justify-center rounded-lg border border-electric/30 bg-electric/10 px-3 py-1.5 font-sans text-[9px] font-bold uppercase tracking-wider text-electric hover:bg-electric/20 transition-all">
                    Open PDF
                  </span>
                </div>
                {/* Glass overlay to block iframe scrolling/mouse capture and redirect actions */}
                <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-all duration-300 cursor-pointer" />
              </div>
              
              <div>
                <div className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-electric">
                  {l.period}
                </div>
                <div className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-foreground group-hover:text-electric transition-colors leading-snug">
                  {l.company}
                </div>
                <div className="mt-1 font-sans text-xs text-muted-foreground">{l.role}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
