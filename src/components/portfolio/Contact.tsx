import { motion } from "motion/react";
import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[500px] max-w-5xl bg-electric/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-strong relative overflow-hidden rounded-3xl p-10 shadow-elevated md:p-16"
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative text-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-electric">
              Let's Build
            </div>
            <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
              Have a problem <br className="hidden sm:block" /> worth <span className="text-gradient-electric">solving?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              I'm picking my next project carefully — products, AI systems, or early-stage teams that want to move fast and build something real.
            </p>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              <ContactLink icon={Mail} label="Email" value="hello@aditya.dev" href="mailto:hello@aditya.dev" />
              <ContactLink icon={Linkedin} label="LinkedIn" value="/in/aditya" href="#" />
              <ContactLink icon={Github} label="GitHub" value="@aditya" href="#" />
              <ContactLink icon={Download} label="Resume" value="Download PDF" href="#" primary />
            </div>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Aditya. Built with care, shipped with intent.</div>
          <div className="font-mono uppercase tracking-[0.25em]">v1.0 · Live</div>
        </footer>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon, label, value, href, primary,
}: { icon: typeof Mail; label: string; value: string; href: string; primary?: boolean }) {
  return (
    <a
      href={href}
      className={`group flex items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left transition-all hover:-translate-y-0.5 ${
        primary
          ? "bg-electric text-primary-foreground shadow-glow hover:brightness-110"
          : "glass text-foreground hover:bg-white/5"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon className="size-4" />
        <div>
          <div className={`font-mono text-[10px] uppercase tracking-[0.2em] ${primary ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{label}</div>
          <div className="text-sm font-medium">{value}</div>
        </div>
      </div>
      <ArrowUpRight className="size-4 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
