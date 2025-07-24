import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projectsData = [
  {
    title: "Mock Mentor",
    date: "Nov 2024",
    description:
      "AI-powered mock interview web app that provides real-time feedback and analysis.",
    tech: ["React.js", "JSX", "Node.js", "Tailwind CSS", "Google API"],
    image: "https://placehold.co/600x400.png",
    imageHint: "AI interview",
    liveLink: null,
    codeLink: "https://github.com/a-dubey/Mock-Mentor",
  },
  {
    title: "Coffee Shop Landing Page",
    date: "Aug 2024",
    description:
      "Responsive and visually appealing landing page for a coffee shop.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://placehold.co/600x400.png",
    imageHint: "coffee shop",
    liveLink: "https://a-dubey.github.io/Coffee-Shop-Landing-Page/",
    codeLink: "https://github.com/a-dubey/Coffee-Shop-Landing-Page",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {projectsData.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-headline text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.date}</p>
                </div>
                <p className="mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4 bg-background/50 p-6">
                <Button asChild className="flex-1">
                  <Link
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Link>
                </Button>
                {project.liveLink && (
                  <Button asChild variant="outline" className="flex-1">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
