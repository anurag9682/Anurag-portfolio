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
    description: "Built a full-stack healthcare web application that enables patients to upload and manage medical records securely. Each patient receives a unique QR code linked to their encrypted data, allowing doctors to access records after role-based authentication. Integrated AES encryption for file security and JWT for session management. Doctors can scan QR codes, view records with patient consent, and access emergency data like allergies and blood group instantly.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "JWT", "AES", "Cloudinary"],
    image: "https://placehold.co/600x400.png",
    imageHint: "healthcare security",
    liveLink: null,
    codeLink: "https://github.com/anurag9682",
  },
  {
    title: "Mock Mentor",
    description:
      "AI-powered mock interview web app that provides real-time feedback and analysis. 🤖",
    tech: ["React.js", "JSX", "Node.js", "Tailwind CSS", "Google API"],
    image: "https://as2.ftcdn.net/v2/jpg/07/78/33/73/1000_F_778337308_Df9ifwfSsjaDwah7wFXRVHawSn8euos1.jpg",
    imageHint: "AI interview",
    liveLink: null,
    codeLink: "https://github.com/anurag9682/Mock-Mentor",
  },
  {
    title: "Uber Clone",
    description:
      "Uber Clone app using the MERN stack, with fully functional user authentication, ride request flow, real-time updates, and responsive UI design. 🚗",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    image: "https://placehold.co/600x400.png",
    imageHint: "ride hailing app",
    liveLink: null,
    codeLink: "https://github.com/anurag9682",
  },
  {
    title: "Coffee Shop Landing Page",
    description:
      "Responsive and visually appealing landing page for a coffee shop. ☕",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://placehold.co/600x400.png",
    imageHint: "coffee shop",
    liveLink: "https://a-dubey.github.io/Coffee-Shop-Landing-Page/",
    codeLink: "https://github.com/anurag9682/Coffee-Shop-Landing-Page",
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
              className="group h-full overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
