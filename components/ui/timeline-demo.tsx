"use client";
import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";
import { motion, useInView } from "framer-motion";

export function TimelineDemo() {
  const data = [
    {
      title: "ACHIEVEMENTS",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base md:text-sm font-mono font-medium tracking-wide mb-6 sm:mb-8 xl:ml-[25%] md:ml-[25%]">
          Milestones that define my journey in development
          </p>
          <GlowingEffectDemo />
        </div>
      ),
    },
    {
      title: "RECENT PROJECTS",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-mono font-medium tracking-wide mb-12">
            I started by crafting simple front-end projects, 
            <br /> then moved on to building full-stack applications. My curiosity led me to Web3, where I explored decentralized technologies, learned Solidity, and began creating DApps. Here are some key projects reflecting that journey.
          </p>
        </div>
      ),
    },
    {
      title: "Grind App",
      content: (
        <ProjectShowcase
          title="Grind App"
          description="GrindGrid is your AI-powered companion for skill development. Track progress, get smart suggestions, and achieve your learning goals."
          image="/GrindAppHero.png"
          imageAlt="GrindGrid - AI-powered skill development platform"
          buttonText="View Project"
          buttonLink="https://grindapp.vercel.app/"
          layout="left"
          techStack={["Next.js", "PostgreSQL", "Gemini AI"]}
        />
      ),
    },
    {
      title: "Polytix",
      content: (
        <ProjectShowcase
          title="Polytix"
          description={
            <>
              <span className="text-yellow-500 dark:text-yellow-400">(Top 10 projects in Fair3 hackathon 2025)</span>
              <br />
              A decentralized voting system built on Polygon ensuring transparent and tamper-proof elections using blockchain.
            </>
          }
          image="/polytix-hero.png"
          imageAlt="PolyTix - Decentralized voting on Polygon"
          buttonText="View Demo"
          buttonLink="https://polytix.vercel.app/"
          layout="right"
          techStack={["Next.js", "Solidity", "Ethers.js", "The Graph"]}
        />
      ),
    },
    {
      title: "EduPayChain",
      content: (
        <ProjectShowcase
          title="EduPayChain"
          description="Decentralized university fee payment system using blockchain. Enables transparent payments, NFT-based credentials, and efficient management."
          image="/EduPay-Hero.png"
          imageAlt="EduPayChain - Blockchain-based university fee payment"
          buttonText="View Project"
          buttonLink="https://edu-pay-chain.vercel.app/"
          layout="left"
          techStack={["Next.js", "Solidity", "IPFS"]}
        />
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

function ProjectShowcase({
  title,
  description,
  image,
  imageAlt,
  buttonText,
  buttonLink,
  layout,
  techStack,
}: {
  title: string;
  description: string | React.ReactNode;
  image: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  layout: "left" | "right";
  techStack?: string[];
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const isLeftLayout = layout === "left";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12"
    >
      <div
        className={`flex flex-col ${
          isLeftLayout ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8 items-center`}
      >
        {/* Image - appears first on mobile, position changes on desktop */}
        <div className={`flex-1 w-full ${isLeftLayout ? "md:order-2" : "md:order-1"}`}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-lg overflow-hidden shadow-xl border border-neutral-300 dark:border-neutral-700"
          >
            <Image
              src={image}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
          {/* Tech Stack Icons */}
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Text Content - appears after image on mobile */}
        <div className={`flex-1 ${isLeftLayout ? "md:text-left md:order-1" : "md:text-right md:order-2"} text-center md:text-left`}>
          <h3 className="text-3xl md:text-4xl font-bold tracking-[-2px] md:tracking-[-4px] mb-4 text-black dark:text-white">
            {title}
          </h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-mono font-medium tracking-wide mb-6 leading-relaxed">
            {description}
          </p>
          <motion.a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {buttonText}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

