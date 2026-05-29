import { motion } from "motion/react";

const chapters = [
  {
    year: "2019",
    title: "First line of code",
    body: "Discovered programming. Built tiny scripts and got hooked on the loop: idea → code → result.",
  },
  {
    year: "2021",
    title: "Full-stack mindset",
    body: "Stopped thinking in features and started thinking in systems — frontend, API, database, deploy.",
  },
  {
    year: "2023",
    title: "Production at scale",
    body: "Shipped real products to real users. Learned what 'it works on my machine' actually costs.",
  },
  {
    year: "2024",
    title: "AI-first engineering",
    body: "Building agents, RAG pipelines, and LLM-native products. The interface to software is changing.",
  },
  {
    year: "Now",
    title: "Product Builder",
    body: "End-to-end ownership: design, build, ship, iterate. Engineering as a startup discipline.",
  },
];

export function Story() {
  return (
    <section id="story" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="My Story"
          title={<>From curiosity <span className="text-gradient-electric">to compound execution.</span></>}
          subtitle="The short version of how I went from a first Hello World to shipping AI systems in production."
        />

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-electric/40 to-transparent md:left-1/2" />
          <div className="space-y-16">
            {chapters.map((c, i) => (
              <motion.div
                key={c.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="font-mono text-xs uppercase tracking-[0.25em] text-electric">{c.year}</div>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground">{c.body}</p>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 top-1.5 size-3 -translate-x-1/2 rounded-full bg-electric shadow-glow md:left-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <div className="glass mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="size-1 rounded-full bg-electric" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
