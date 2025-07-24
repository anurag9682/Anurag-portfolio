import {
  CodeXml,
  Database,
  FileCode,
  FileText,
  Server,
  Wind,
  Code,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const skills = [
  { name: "React.js", icon: CodeXml },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "JavaScript", icon: FileCode },
  { name: "HTML", icon: FileCode },
  { name: "CSS", icon: FileCode },
  { name: "Tailwind CSS", icon: Wind },
  { name: "SQL", icon: Database },
  { name: "Python", icon: Code },
  { name: "C++", icon: Code },
];

export function About() {
  return (
    <section id="about" className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I’m a passionate web developer currently pursuing a B.C.A. at
              Pranveer Singh Institute of Technology, with hands-on experience
              in building full-stack web applications using the MERN stack. I
              love solving problems on platforms like LeetCode and HackerRank
              and enjoy participating in hackathons and technical fests.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <a href="/AnuragDubey_Resume.pdf" download>
                  <FileText className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-xl bg-background p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Key Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="secondary"
                  className="flex items-center gap-2 px-3 py-1 text-sm"
                >
                  <skill.icon className="h-4 w-4 text-primary" />
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
