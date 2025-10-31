"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconFileText,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FloatingDockDemo() {
  const links = [
    {
      title: "Resume",
      icon: (
        <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://docs.google.com/document/d/1NVoJzvoqAb1CIJxCzxNnjMeqyDvJmiPfCkzhgTXyFmg/edit?tab=t.0",
    },
    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#late-2024-to-early-2025",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/anuska-s/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/ThizisAnuska",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/anuskawebb",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock items={links} />
    </div>
  );
}

