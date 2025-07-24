import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText } from "lucide-react";
import { AnimatedKeywords } from "@/components/animated-keywords";

export function Hero() {
  const keywords = ["React Developer", "AI Enthusiast", "Competitive Coder"];

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100dvh-5rem)] w-full items-center justify-center overflow-hidden bg-background py-24"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 flex animate-fade-in-up flex-col items-center text-center md:order-1 md:items-start md:text-left">
            <h1 className="mb-4 font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Anurag Dubey 👋
            </h1>
            <h2 className="mb-4 text-2xl font-semibold text-muted-foreground md:text-3xl">
              MERN Stack Developer | <AnimatedKeywords keywords={keywords} />
            </h2>
            <p className="mb-8 max-w-2xl text-base text-muted-foreground md:text-lg">
              Building innovative full-stack solutions with passion and
              precision. 🚀
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href="/AnuragDubey_Resume.pdf" download>
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#contact">
                  Let's Connect
                  <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <div className="relative h-64 w-64 md:h-96 md:w-96 perspective-1000">
              <Image
                src="https://as2.ftcdn.net/v2/jpg/07/78/33/73/1000_F_778337308_Df9ifwfSsjaDwah7wFXRVHawSn8euos1.jpg"
                alt="Anurag Dubey"
                width={400}
                height={400}
                priority
                className="rounded-full border-4 border-primary/20 object-cover shadow-lg transition-transform duration-500 ease-in-out hover:[transform:rotateY(10deg)_rotateX(5deg)_scale(1.05)]"
                data-ai-hint="profile picture"
              />
              <div className="absolute inset-0 rounded-full border-4 border-primary ring-4 ring-primary/20 ring-offset-4 ring-offset-background animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
