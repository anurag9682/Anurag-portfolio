import { HeartHandshake, Swords, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    icon: HeartHandshake,
    text: "Volunteered in college tech fests and managed events. 🤝",
  },
  {
    icon: Swords,
    text: "Active participant in online coding competitions. ⚔️",
  },
  {
    icon: Lightbulb,
    text: "Exploring new tech and keeping up with innovation. 💡",
  },
];

export function ExtraCurricular() {
  return (
    <section id="extra-curricular" className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Extra Curricular 🌟
          </h2>
          <Card className="transition-all duration-300 hover:shadow-xl hover:border-primary">
            <CardContent className="p-6">
              <ul className="space-y-4">
                {activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <activity.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-1 text-muted-foreground">{activity.text}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
