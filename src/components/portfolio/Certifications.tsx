import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Award, FileText } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const certs = [
  { type: "Certificate", title: "Generative AI Specialization", issuer: "Huebits", year: "2024", file: `${import.meta.env.BASE_URL}Huebits_GEN_AI_Internship.pdf` },
  { type: "Publication", title: "IEEE Membership", issuer: "IEEE Conference", year: "2024", file: `${import.meta.env.BASE_URL}IEEE.pdf` },
  { type: "Certificate", title: "Process Mining Internship", issuer: "Celonis", year: "2023", file: `${import.meta.env.BASE_URL}Process_Mining_Internship.jpg` },
  { type: "Certificate", title: "Python (Basic) Certification", issuer: "HackerRank", year: "2024", file: `${import.meta.env.BASE_URL}Python(basic).jpg` },
  { type: "Certificate", title: "Java (Basic) Certification", issuer: "HackerRank", year: "2024", file: `${import.meta.env.BASE_URL}Java(basic).jpg` },
  { type: "Certificate", title: "Git & GitHub", issuer: "edX", year: "2024", file: `${import.meta.env.BASE_URL}git_github(EDX).jpg` },
  { type: "Certificate", title: "Machine Learning Internship", issuer: "SkillDzire", year: "2025", file: `${import.meta.env.BASE_URL}ML_Internship.jpg` },
];

export function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isHoveredRef = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Triple the items to allow seamless infinite scroll in both directions
  const duplicatedCerts = [...certs, ...certs, ...certs];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize to the middle set of items for seamless bidirectional scrolling
    const singleSetWidth = container.scrollWidth / 3;
    if (container.scrollLeft === 0 && singleSetWidth > 0) {
      container.scrollLeft = singleSetWidth;
    }

    const scrollSpeed = 0.6; // Scroll speed in pixels per frame

    const animate = () => {
      if (!isPaused && !isDragging.current) {
        container.scrollLeft += scrollSpeed;

        const singleSetWidth = container.scrollWidth / 3;
        if (singleSetWidth > 0) {
          if (container.scrollLeft >= singleSetWidth * 2) {
            container.scrollLeft -= singleSetWidth;
          } else if (container.scrollLeft <= 0) {
            container.scrollLeft += singleSetWidth;
          }
        }
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isPaused]);

  // Handle user scrolling (wheel/trackpad) or manual interactions
  const handleUserInteraction = () => {
    setIsPaused(true);
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
    // Resume auto-scrolling after 2 seconds of inactivity
    scrollTimeoutRef.current = window.setTimeout(() => {
      if (!isHoveredRef.current && !isDragging.current) {
        setIsPaused(false);
      }
    }, 2000);
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    setIsPaused(true);
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (isDragging.current) {
      isDragging.current = false;
      scrollTimeoutRef.current = window.setTimeout(() => {
        if (!isHoveredRef.current && !isDragging.current) {
          setIsPaused(false);
        }
      }, 1500);
    } else {
      setIsPaused(false);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    isDragging.current = true;
    setIsPaused(true);
    startX.current = e.pageX - container.offsetLeft;
    scrollLeftStart.current = container.scrollLeft;

    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const container = containerRef.current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag sensitivity
    container.scrollLeft = scrollLeftStart.current - walk;

    // Loop bounds reset during manual drag
    const singleSetWidth = container.scrollWidth / 3;
    if (singleSetWidth > 0) {
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft -= singleSetWidth;
        startX.current = x;
        scrollLeftStart.current = container.scrollLeft;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += singleSetWidth;
        startX.current = x;
        scrollLeftStart.current = container.scrollLeft;
      }
    }
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      scrollTimeoutRef.current = window.setTimeout(() => {
        if (!isHoveredRef.current && !isDragging.current) {
          setIsPaused(false);
        }
      }, 1500);
    }
  };

  const handleTouchStart = () => {
    isDragging.current = true;
    setIsPaused(true);
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    scrollTimeoutRef.current = window.setTimeout(() => {
      if (!isHoveredRef.current && !isDragging.current) {
        setIsPaused(false);
      }
    }, 2000);
  };

  return (
    <section id="certifications" className="relative pt-24 pb-24 sm:pt-32 sm:pb-32 border-b border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Certifications"
          title={
            <>
              Courses & <span className="text-electric">Certifications.</span>
            </>
          }
          subtitle="Real credentials and publications. Swipe or scroll horizontally to inspect."
        />
      </div>

      <div
        ref={containerRef}
        className="mt-16 overflow-x-auto mask-fade-x scrollbar-none select-none cursor-grab active:cursor-grabbing active:scroll-behavior-auto py-4"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onWheel={handleUserInteraction}
        onTouchStart={handleTouchStart}
        onTouchMove={handleUserInteraction}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex gap-6 pb-8 w-max px-6">
          {duplicatedCerts.map((c, i) => (
            <div key={i} className="snap-start">
              <CertCard {...c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ type, title, issuer, year, file }: { type: string; title: string; issuer: string; year: string; file: string }) {
  const isPdf = file.toLowerCase().endsWith(".pdf");

  return (
    <motion.a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="group relative flex w-[300px] h-[360px] shrink-0 flex-col justify-between rounded-2xl border border-border bg-[#0B0B0C] p-5 text-left transition-all duration-300 hover:border-white/20 cursor-pointer"
    >
      <div className="flex flex-col gap-4">
        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-[#121213] to-[#1a1a1c] border border-border/60 relative shrink-0">
          {isPdf ? (
            <>
              {/* Desktop PDF iframe */}
              <div className="hidden sm:block w-[109%] h-full overflow-hidden">
                <iframe
                  src={`${file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="w-full h-full border-0 pointer-events-none select-none overflow-hidden bg-[#121213]"
                  scrolling="no"
                />
              </div>
              {/* Mobile PDF Fallback Card */}
              <div className="sm:hidden flex flex-col items-center justify-center w-full h-full p-4 bg-gradient-to-br from-[#121213] to-[#1e1e22]">
                <FileText className="size-10 text-electric/80 mb-2 animate-pulse" />
                <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase tracking-widest text-center px-2 line-clamp-1">
                  {file.split('/').pop()?.replace(/%20/g, ' ')}
                </span>
                <span className="mt-3 inline-flex items-center justify-center rounded-lg border border-electric/30 bg-electric/10 px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-wider text-electric hover:bg-electric/20 transition-all">
                  Open PDF
                </span>
              </div>
            </>
          ) : (
            <img
              src={file}
              alt={title}
              className="w-full h-full object-cover pointer-events-none select-none bg-[#121213]"
            />
          )}
          {/* Glass overlay to block iframe scrolling/mouse capture and redirect actions */}
          <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-all duration-300 cursor-pointer" />
        </div>
        <div>
          <div className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-electric">
            {type} · {year}
          </div>
          <div className="mt-2 font-display text-base font-bold uppercase tracking-wide leading-tight text-foreground group-hover:text-electric transition-colors line-clamp-2">
            {title}
          </div>
          <div className="mt-1 font-sans text-xs text-muted-foreground">{issuer}</div>
        </div>
      </div>
      <div className="flex items-center gap-1.5 border-t border-border/30 pt-3 font-mono text-[9px] font-bold uppercase tracking-wider text-electric opacity-0 transition-opacity group-hover:opacity-100">
        <FileText className="size-3.5" /> Preview
      </div>
    </motion.a>
  );
}
