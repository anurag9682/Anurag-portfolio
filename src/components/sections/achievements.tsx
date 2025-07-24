import { Trophy, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievementsData = [
  {
    icon: Trophy,
    title: "200+ Problems Solved 🏆",
    description: "on LeetCode",
  },
  {
    icon: Star,
    title: "4-Star Problem Solving ⭐",
    description: "on HackerRank",
  },
  {
    icon: Users,
    title: "Smart India Hackathon 2024 💡",
    description: "Participated with a project on ML-based construction monitoring.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative bg-background py-24 sm:py-32">
       <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
      <div className="container relative mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          My Achievements
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 perspective-1000">
          {achievementsData.map((achievement, index) => (
            <div key={achievement.title} className="transform-style-3d transition-transform duration-500 hover:[transform:rotateY(15deg)]">
              <Card
                className="h-full transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                    <achievement.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
