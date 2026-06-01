import { motion } from "motion/react";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 bg-background">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-[#0B0B0C] p-10 md:p-16 transition-all duration-300 hover:border-white/20"
        >
          <div className="absolute right-0 top-0 size-72 rounded-full bg-electric/5 blur-3xl pointer-events-none" />
          
          <div className="relative text-center">
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-electric">
              [ Let's Build ]
            </div>
            
            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight uppercase text-foreground sm:text-6xl">
              Have a problem <br className="hidden sm:block" /> worth{" "}
              <span className="text-electric">solving?</span>
            </h2>

            <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
              <ContactLink
                icon={Mail}
                label="Email"
                value="mohanbhogavarapu@gmail.com"
              />
              <ContactLink icon={Linkedin} label="LinkedIn" value="/in/mohan-bhogavarapu" href="https://www.linkedin.com/in/mohan-bhogavarapu/" />
              <ContactLink icon={Github} label="GitHub" value="@mohanbhogavarapu07" href="https://github.com/mohanbhogavarapu07" />
              <ContactLink icon={Download} label="Resume" value="View Resume" href="https://drive.google.com/file/d/1rCupIIghNtsg4tcoAycGbUrjeKfIJwfm/view?usp=sharing" primary />
            </div>
          </div>
        </motion.div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 text-xs text-muted-foreground sm:flex-row font-sans">
          <div>© {new Date().getFullYear()} MOHAN. Built with care, shipped with intent.</div>
          <div className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-electric">v1.0 · Active</div>
        </footer>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  primary,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  primary?: boolean;
}) {
  const content = (
    <>
      <div className="flex items-center gap-3.5">
        <Icon className="size-4 text-electric group-hover:scale-105 transition-transform" style={{ color: primary ? '#ffffff' : undefined }} />
        <div>
          <div
            className={`font-mono text-[9px] font-bold uppercase tracking-[0.2em] ${primary ? "text-primary-foreground/80" : "text-muted-foreground"}`}
          >
            {label}
          </div>
          <div className="mt-1 font-sans text-xs font-bold uppercase tracking-wider">{value}</div>
        </div>
      </div>
      {href && <ArrowUpRight className="size-4 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  );

  const className = `group flex items-center justify-between gap-4 rounded-xl border p-5 text-left transition-all duration-300 ${
    primary
      ? "border-electric bg-electric text-primary-foreground hover:brightness-115"
      : href
      ? "border-border bg-black/35 text-foreground hover:border-white/20 hover:bg-[#121213]"
      : "border-border bg-black/35 text-foreground"
  }`;

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>
      {content}
    </div>
  );
}
