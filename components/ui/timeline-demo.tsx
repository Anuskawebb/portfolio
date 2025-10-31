"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-mono font-medium tracking-wide mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-300">Placeholder</div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-300">Placeholder</div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-300">Placeholder</div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-300">Placeholder</div>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-mono font-medium tracking-wide mb-8">
            I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-mono font-medium tracking-wide mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-300">Placeholder</div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-300">Placeholder</div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-300">Placeholder</div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-300">Placeholder</div>
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-mono font-medium tracking-wide mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-mono font-medium tracking-wide">✅ Card grid component</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-mono font-medium tracking-wide">✅ Startup template Aceternity</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-mono font-medium tracking-wide">✅ Random file upload lol</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-mono font-medium tracking-wide">✅ Himesh Reshammiya Music CD</div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm font-mono font-medium tracking-wide">✅ Salman Bhai Fan Club registrations open</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-300">Placeholder</div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-300">Placeholder</div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-300">Placeholder</div>
            <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-xs text-neutral-600 dark:text-neutral-300">Placeholder</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}

