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
    title: "Medical History Vault with QR Code",
    description: "A secure healthcare web app that allows patients to manage medical records and share them with doctors via a unique, encrypted QR code. Features role-based access and AES encryption for data security.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JWT", "AES", "Cloudinary"],
    liveLink: null,
    codeLink: "https://github.com/anurag9682",
  },
  {
    title: "Mock Mentor",
    description:
      "AI-powered mock interview web app that provides real-time feedback and analysis. 🤖",
    tech: ["React.js", "JSX", "Node.js", "Tailwind CSS", "Google API"],
    liveLink: null,
    codeLink: "https://github.com/anurag9682/Mock-Mentor",
  },
  {
    title: "Uber Clone",
    description:
      "Uber Clone app using the MERN stack, with fully functional user authentication, ride request flow, real-time updates, and responsive UI design. 🚗",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    liveLink: null,
    codeLink: "https://github.com/anurag9682",
  },
  {
    title: "Responsive Coffee Shop Landing Page",
    description:
      "Responsive and visually appealing landing page for a coffee shop. ☕",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://anurag9682.github.io/Responsive-Coffee-Shop-Landing-page/",
    codeLink: "https://github.com/anurag9682/Responsive-Coffee-Shop-Landing-page",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-background py-24 sm:py-32">
       <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
      <div className="container relative mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My Projects 🚀
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 perspective-1000">
          {projectsData.map((project) => (
            <div key={project.title} className="transform-style-3d transition-transform duration-500 hover:[transform:rotateY(-15deg)]">
            <Card
              className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-headline text-xl font-bold">
                    {project.title}
                  </h3>
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
              <CardFooter className="mt-auto flex gap-4 bg-background/50 p-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
