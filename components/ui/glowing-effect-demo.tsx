"use client";

import { Box, Lock, Settings } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-3 gap-6 md:grid-cols-12 md:grid-rows-2 md:gap-4 lg:gap-4 xl:grid-rows-2 xl:ml-[25%] md:ml-[25%]">
      <GridItem
        area="md:[grid-area:1/1/2/9] xl:[grid-area:1/1/2/9]"
        icon={<Box className="h-5 w-5 sm:h-6 sm:w-6 md:h-4 md:w-4 text-black dark:text-neutral-400" />}
        title="BCA Graduate with 9.01 CGPA"
        description="Built strong knowledge in comp fundamentals, DBMS, OS, and programming."
      />

      <GridItem
        area="md:[grid-area:2/1/3/9] xl:[grid-area:2/1/3/9]"
        icon={<Settings className="h-5 w-5 sm:h-6 sm:w-6 md:h-4 md:w-4 text-black dark:text-neutral-400" />}
        title="1x Hackathon Winner"
        description="Secured 2nd prize at Celo Kolkata Hackathon 2025."
      />

      <GridItem
        area="md:[grid-area:1/9/3/13] xl:[grid-area:1/9/3/13]"
        icon={<Lock className="h-5 w-5 sm:h-6 sm:w-6 md:h-4 md:w-4 text-black dark:text-neutral-400" />}
        title="Deep dived into Web3 and Blockchain"
        description="Gained hands-on experience with smart contracts, Solidity, and decentralized systems."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[16rem] sm:min-h-[18rem] md:min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-3 sm:p-4 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 sm:gap-8 overflow-hidden rounded-xl p-6 sm:p-8 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-4 sm:gap-5 md:gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2.5 sm:p-3 md:p-2">
              {icon}
            </div>
            <div className="space-y-3 sm:space-y-4 md:space-y-3">
              <h3 className="pt-0.5 font-bold text-2xl/[1.5rem] sm:text-3xl/[1.75rem] text-balance text-black tracking-[-1px] sm:tracking-[-1.5px] md:text-2xl/[1.875rem] md:tracking-[-2px] dark:text-white">
                {title}
              </h3>
              <h2 className="font-mono font-medium tracking-wide text-base/[1.375rem] sm:text-lg/[1.5rem] text-black md:text-base/[1.375rem] dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

