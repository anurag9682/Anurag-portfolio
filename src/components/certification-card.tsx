"use client";

import { Award } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type CertificationCardProps = {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
};

export function CertificationCard({
  title,
  issuer,
  date,
  skills,
}: CertificationCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1">
          <CardHeader>
            <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                </div>
                <div className="flex-1">
                    <CardTitle className="text-lg font-bold">{title}</CardTitle>
                    <CardDescription>
                    {issuer} - {date}
                    </CardDescription>
                </div>
            </div>
            
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">{title}</DialogTitle>
          <DialogDescription>
            {issuer} - {date}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <h4 className="mb-2 font-semibold">Skills Covered:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
