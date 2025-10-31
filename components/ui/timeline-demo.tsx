"use client";
import React, { useState, createContext, useContext } from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ProjectHoverContext = createContext<{
  hoveredDescription: string | null;
  setHoveredDescription: (desc: string | null) => void;
} | null>(null);

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-mono font-medium tracking-wide mb-8 xl:ml-[25%] md:ml-[25%]">
          Milestones that define my journey in development
          </p>
          <GlowingEffectDemo />
        </div>
      ),
    },
    {
      title: "LATE 2024 TO EARLY 2025",
      content: (
        <div>
          <ProjectSection>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-mono font-medium tracking-wide mb-8">
              I started by crafting simple front-end projects, 
              <br /> then moved on to building full-stack applications. My curiosity led me to Web3, where I explored decentralized technologies, learned Solidity, and began creating DApps. Here are some key projects reflecting that journey.
            </p>
            <ProjectMessageBox />
            <div className="grid grid-cols-2 gap-4 mt-8">
              <ProjectImage
                src="/GrindAppHero.png"
                alt="GrindGrid - AI-powered skill development platform"
                href="https://grindapp.vercel.app/"
                description="An AI-powered progress tracker that helps users manage tasks, set goals, and get personalized insights. Built with Next.js, PostgreSQL, and Gemini AI, featuring dashboards, AI-driven quiz generation, and daily progress tracking."
              />
              <ProjectImage
                src="/polytix-hero.png"
                alt="PolyTix - Decentralized voting on Polygon"
                href="https://polytix.vercel.app/"
                description="Decentralized voting dApp with proposal & candidate voting, role-based dashboards, and NFT ticketing. Built using Next.js, Solidity, Ethers.js, and The Graph to ensure transparent and secure elections."
              />
              <ProjectImage
                src="/mizu-pay-hero.png"
                alt="Mizu Pay - Fluid payments for a regenerative future"
                href="https://mizu-pay.vercel.app/"
                description=""
              />
              <ProjectImage
                src="/EduPay-Hero.png"
                alt="EduPayChain - Blockchain-based university fee payment"
                href="https://edu-pay-chain.vercel.app/"
                description="A decentralized tuition payment dApp built with Next.js, Solidity, and IPFS. Supports ERC-20 payments, escrow-based disbursements, and immutable receipts, ensuring transparent and secure fee management."
              />
            </div>
          </ProjectSection>
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

function ProjectSection({ children }: { children: React.ReactNode }) {
  const [hoveredDescription, setHoveredDescription] = useState<string | null>(null);

  return (
    <ProjectHoverContext.Provider value={{ hoveredDescription, setHoveredDescription }}>
      {children}
    </ProjectHoverContext.Provider>
  );
}

function ProjectMessageBox() {
  const context = useContext(ProjectHoverContext);
  const description = context?.hoveredDescription || null;

  return (
    <AnimatePresence>
      {description && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="mb-8 relative"
        >
          <div className="relative bg-gray-100 dark:bg-neutral-900 p-6 border-4 border-white dark:border-neutral-600 shadow-xl max-w-2xl"
            style={{
              borderRadius: "35px 45px 40px 50px / 50px 40px 45px 35px",
            }}
          >
            <button
              onClick={() => context?.setHoveredDescription(null)}
              className="absolute top-4 right-4 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base leading-relaxed pr-8 font-sans">
              {description}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectImage({ src, alt, href, description }: { src: string; alt: string; href: string; description: string }) {
  const context = useContext(ProjectHoverContext);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group rounded-lg h-20 md:h-44 lg:h-60 w-full overflow-hidden shadow-lg border border-neutral-300 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
      onMouseEnter={() => {
        setShowTooltip(true);
        if (description && context?.setHoveredDescription) {
          context.setHoveredDescription(description);
        }
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
        if (context?.setHoveredDescription) {
          context.setHoveredDescription(null);
        }
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
      {showTooltip && (
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 flex items-center justify-center rounded-lg">
          <span className="text-white text-sm font-medium px-4 py-2 rounded-md bg-blue-600 dark:bg-blue-500">
            View Project
          </span>
        </div>
      )}
    </a>
  );
}

