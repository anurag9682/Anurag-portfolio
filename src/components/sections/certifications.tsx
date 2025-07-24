import { CertificationCard } from "@/components/certification-card";

const certificationsData = [
  {
    title: "AI/ML Geodata Analysis",
    issuer: "ISRO",
    date: "2024",
    skills: ["Geodata", "Machine Learning", "Remote Sensing"],
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "2024",
    skills: ["Generative AI", "LinkedIn", "Career Growth"],
  },
  {
    title: "Full Stack Development",
    issuer: "Infosys",
    date: "2024",
    skills: ["Full Stack", "Springboard", "Web Development"],
  },
  {
    title: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "2024",
    skills: ["Algorithms", "Data Structures", "Problem Solving"],
  },
  {
    title: "Python Fundamentals",
    issuer: "Infosys",
    date: "2024",
    skills: ["Python", "Core Concepts", "Programming"],
  },
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
    <section id="certifications" className="relative bg-background py-24 sm:py-32">
       <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
      <div className="container relative mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Certificates & Trainings 📜
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 perspective-1000">
          {certificationsData.map((cert) => (
            <div key={cert.title} className="transform-style-3d transition-transform duration-500 hover:[transform:rotateY(15deg)]">
              <CertificationCard {...cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
