"use client";

import { animateKeywords } from "@/ai/flows/animate-keywords";
import { useEffect, useState, useMemo } from "react";
import { Skeleton } from "./ui/skeleton";

export function AnimatedKeywords({ keywords }: { keywords: string[] }) {
  const [animatedKeywords, setAnimatedKeywords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const getAnimated = async () => {
      setIsLoading(true);
      try {
        const result = await animateKeywords({ keywords: keywords.join(",") });
        if (result.animatedKeywords && result.animatedKeywords.length > 0) {
          setAnimatedKeywords(result.animatedKeywords);
        } else {
          setAnimatedKeywords(keywords); // Fallback...
        }
      } catch (error) {
        console.error("Failed to fetch animated keywords:", error);
        setAnimatedKeywords(keywords); // Fallback on error
      } finally {
        setIsLoading(false);
      }
    };
    if (keywords.length > 0) {
      getAnimated();
    }
  }, [keywords]);

  useEffect(() => {
    if (isLoading || animatedKeywords.length === 0) return;

    const handleTyping = () => {
      const fullText = animatedKeywords[currentKeywordIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentKeywordIndex((prev) => (prev + 1) % animatedKeywords.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, animatedKeywords, currentKeywordIndex, isLoading]);

  if (isLoading) {
    return <Skeleton className="h-8 w-48" />;
  }

  return (
    <span className="inline-block font-bold text-primary min-h-[1.2em]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
