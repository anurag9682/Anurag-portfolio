import { CertificationCard } from "@/components/certification-card";

const certificationsData = [
  {
    title: "Git & GitHub Essentials",
    issuer: "IIT Kanpur",
    date: "Nov 2024",
    skills: ["Version Control", "GitHub Workflow", "Branching Techniques"],
  },
  {
    title: "AI Prompt Engineering & Tools",
    issuer: "Be10X",
    date: "Feb 2024",
    skills: ["AI Tools", "Prompt Engineering", "Task Optimization"],
  },
  {
    title: "International Conference on India’s Economy",
    issuer: "PSIT",
    date: "Feb 2024",
    skills: ["Critical Thinking", "Economic Awareness", "Macro Analysis"],
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Certificates & Trainings
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificationsData.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
