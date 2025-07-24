import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Button } from "../ui/button";

const contactDetails = [
  {
    icon: Mail,
    text: "aanurag.dy@gmail.com",
    href: "mailto:aanurag.dy@gmail.com",
  },
  { icon: MapPin, text: "Kanpur Nagar, Uttar Pradesh, India" },
];

const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/anurag9682",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anuragdubeyy/",
      label: "LinkedIn",
    },
    {
      icon: Code,
      href: "https://leetcode.com/u/anuragdubeyy/",
      label: "LeetCode",
    },
  ];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-background py-24 sm:py-32"
    >
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
      <div className="container relative mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get In Touch
        </h2>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-semibold">
                Contact Information
              </h3>
              <p className="mt-2 text-muted-foreground">
                Feel free to reach out via email or find me on social
                media.
              </p>
            </div>
            <ul className="space-y-4">
              {contactDetails.map((detail, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <detail.icon className="h-5 w-5" />
                  </div>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="transition-colors hover:text-primary"
                    >
                      {detail.text}
                    </a>
                  ) : (
                    <span>{detail.text}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 pt-4">
                {socialLinks.map((link) => (
                    <Button key={link.label} variant="outline" size="icon" asChild>
                        <Link href={link.href} target="_blank" rel="noopener noreferrer">
                            <link.icon className="h-5 w-5" />
                            <span className="sr-only">{link.label}</span>
                        </Link>
                    </Button>
                ))}
            </div>
          </div>
          <div className="rounded-lg border bg-card p-8 shadow-lg">
            <h3 className="mb-6 font-headline text-2xl font-semibold">
              Send me a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
