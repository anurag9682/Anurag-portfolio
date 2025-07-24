import { GraduationCap, School } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const educationData = [
  {
    icon: GraduationCap,
    institution: "Pranveer Singh Institute of Technology",
    degree: "B.C.A. in Computer Applications",
    period: "2023 – 2026",
    details: "CGPA: 7.74 / 10",
  },
  {
    icon: School,
    institution: "S.V.M. Inter College, Pratapgarh",
    degree: "12th Grade",
    period: "2022",
    details: "Score: 59.80%",
  },
  {
    icon: School,
    institution: "S.V.M. Inter College, Pratapgarh",
    degree: "10th Grade",
    period: "2020",
    details: "Score: 74.40%",
  },
];

export function Education() {
  return (
    <section id="education" className="relative bg-background py-24 sm:py-32">
       <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
      <div className="container relative mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Education
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          <div className="grid gap-10">
            {educationData.map((edu, index) => (
              <div
                key={edu.institution + edu.degree}
                className={`flex items-center gap-6 ${
                  index % 2 === 0 ? "flex-row-reverse" : "flex-row"
                } justify-center`}
              >
                <div className="hidden md:block md:w-5/12"></div>
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <edu.icon className="h-5 w-5" />
                </div>
                <div className="w-full md:w-5/12">
                  <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">
                        {edu.institution}
                      </CardTitle>
                      <CardDescription>{edu.degree}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <p>{edu.period}</p>
                        <p className="mt-1 font-semibold text-foreground">
                          {edu.details}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
