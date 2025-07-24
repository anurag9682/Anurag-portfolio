import { Header } from "@/components/shared/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { Achievements } from "@/components/sections/achievements";
import { Skills } from "@/components/sections/skills";
import { ExtraCurricular } from "@/components/sections/extra-curricular";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="space-y-0">
          <About />
          <Education />
          <Projects />
          <Certifications />
          <Achievements />
          <Skills />
          <ExtraCurricular />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
