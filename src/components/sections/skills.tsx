import {
  CodeXml,
  Server,
  Database,
  Code,
  Component,
  Terminal,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillsData = [
  {
    category: "Frontend",
    icon: CodeXml,
    skills: ["React.js", "HTML", "CSS", "Tailwind", "JavaScript"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MongoDB", "SQL"],
  },
  {
    category: "Languages",
    icon: Code,
    skills: ["Python", "C++"],
  },
  {
    category: "Tools & Platforms",
    icon: Component,
    skills: ["GitHub", "Firebase", "VS Code"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category) => (
            <Card
              key={category.category}
              className="transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <category.icon className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
