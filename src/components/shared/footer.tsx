import Link from "next/link";
import { Github, Linkedin, Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/a-dubey",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anurag-dubey-2ba37a285/",
    label: "LinkedIn",
  },
  {
    icon: Code,
    href: "https://leetcode.com/aanurag_dy/",
    label: "LeetCode",
  },
  {
    icon: Mail,
    href: "mailto:aanurag.dy@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-center text-sm">
          &copy; {currentYear} Anurag Dubey. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="icon"
              asChild
              aria-label={link.label}
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
