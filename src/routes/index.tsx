import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Story } from "@/components/portfolio/Story";
import { Defines } from "@/components/portfolio/Defines";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { Certifications } from "@/components/portfolio/Certifications";
import { Letters } from "@/components/portfolio/Letters";
import { Achievements } from "@/components/portfolio/Achievements";
import { Vision } from "@/components/portfolio/Vision";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya — Full Stack Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Aditya — Full Stack Developer, AI Engineer and Product Builder shipping production AI systems and end-to-end products.",
      },
      { property: "og:title", content: "Aditya — Full Stack Developer & AI Engineer" },
      {
        property: "og:description",
        content: "Builder of AI systems, agents, and production products. Available for new work.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Story />
      <Defines />
      <Experience />
      <Skills />
      <Projects />
      <Philosophy />
      <Certifications />
      <Letters />
      <Achievements />
      <Vision />
      <Contact />
    </main>
  );
}
