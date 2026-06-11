import { motion } from "motion/react";

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
  const alignClass = align === "center" ? "mx-auto max-w-4xl text-center flex flex-col items-center" : "max-w-4xl";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={alignClass}
    >
      <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-electric mb-3.5 block">
        [ {eyebrow} ]
      </span>
      <h2 className="font-display text-[clamp(1.2rem,6.5vw,2.5rem)] sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground uppercase break-words">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base ${align === "center" ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
