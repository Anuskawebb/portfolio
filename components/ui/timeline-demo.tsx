"use client";
import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Trophy } from "lucide-react";

export function TimelineDemo() {
  const data = [
    // Removed "ACHIEVEMENTS" and "RECENT PROJECTS" sections as requested
    {
      title: "Mizu Pay",
      content: (
        <ProjectShowcase
          title="Mizu Pay"
          description="A decentralized payment gateway for effortless crypto shopping. Users can pay in cUSD or CELO, receive digital gift cards instantly, and contribute to regenerative finance — all in one seamless flow. Built with Next.js, Supabase, and Envio."
          image="/MizuPayPreview.png"
          imageAlt="Mizu Pay - Decentralized payment gateway on Celo"
          liveDemoLink="#"
          githubLink="#"
          year="2025"
          role="Full Stack Developer"
          achievement="2nd place - Celo Hackathon Kolkata 2025"
          techStack={["Next.js", "Supabase", "Envio"]}
        />
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
          liveDemoLink="https://grindapp.vercel.app/"
          githubLink="https://github.com/anuskawebb"
          year="2025"
          role="Full Stack Developer"
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
              A decentralized voting system built on Polygon ensuring transparent and tamper-proof elections using blockchain. <span className="text-yellow-500 dark:text-yellow-400">(Top 10 projects in Fair3 hackathon 2025)</span>
            </>
          }
          image="/polytix-hero.png"
          imageAlt="PolyTix - Decentralized voting on Polygon"
          liveDemoLink="https://polytix.vercel.app/"
          githubLink="https://github.com/anuskawebb"
          year="2025"
          role="Full Stack Developer"
          label="Challenge"
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
          liveDemoLink="https://edu-pay-chain.vercel.app/"
          githubLink="https://github.com/anuskawebb"
          year="2025"
          role="Full Stack Developer"
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

interface ProjectShowcaseProps {
  title: string;
  description: string | React.ReactNode;
  image: string;
  imageAlt: string;
  liveDemoLink?: string;
  githubLink?: string;
  year?: string;
  role?: string;
  client?: string;
  label?: string;
  techStack?: string[];
  achievement?: string;
}

function ProjectShowcase({
  title,
  description,
  image,
  imageAlt,
  liveDemoLink,
  githubLink,
  year,
  role,
  client,
  label,
  techStack,
  achievement,
}: ProjectShowcaseProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projectInfo = [];
  if (client) projectInfo.push({ label: "Client", value: client });
  if (year) projectInfo.push({ label: "Year", value: year });
  if (role) projectInfo.push({ label: "Role", value: role });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-16"
    >
      {/* Dark Card Container */}
      <div className="bg-[#212121] dark:bg-[#212121] rounded-lg p-6 md:p-8 lg:p-10 shadow-lg">
        {/* Top Left Label */}
        {label && (
          <div className="mb-4">
            <span className="text-neutral-400 dark:text-neutral-400 text-xs md:text-sm uppercase tracking-wider">
              {label}
            </span>
          </div>
        )}

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Image with Browser Frame */}
          <div className="flex-1">
            <div className="bg-white rounded-lg p-2 md:p-3 shadow-xl">
              <div className="bg-neutral-100 rounded-t-lg p-2 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="relative rounded-b-lg overflow-hidden">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Title */}
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-6">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-2px] md:tracking-[-4px] text-white leading-tight">
                  {title}
                </h3>
                {achievement && (
                  <div className="flex items-center gap-2 md:ml-auto">
                    <span className="text-2xl md:text-3xl" role="img" aria-label="trophy">🏆</span>
                    <span className="text-yellow-500 dark:text-yellow-400 text-sm md:text-base font-medium">
                      {achievement}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-neutral-400 dark:text-neutral-400 text-sm md:text-base font-mono font-medium tracking-wide mb-8 leading-relaxed">
                {description}
              </p>
            </div>

            <div>
              {/* PROJECT INFO Section */}
              {projectInfo.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-white font-bold text-sm md:text-base mb-4 uppercase tracking-wider">
                    PROJECT INFO
                  </h4>
                  <div className="space-y-0">
                    {projectInfo.map((info, index) => (
                      <React.Fragment key={index}>
                        <div className="flex justify-between items-center py-3">
                          <span className="text-neutral-400 dark:text-neutral-400 text-sm md:text-base">
                            {info.label}
                          </span>
                          <span className="text-white text-sm md:text-base font-medium">
                            {info.value}
                          </span>
                        </div>
                        {index < projectInfo.length - 1 && (
                          <div className="border-t border-neutral-700 dark:border-neutral-700"></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Links */}
              <div className="flex flex-wrap gap-4">
                {liveDemoLink && (
                  <motion.a
                    href={liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-[#A5FF0A] dark:text-[#A5FF0A] font-medium text-sm md:text-base hover:underline transition-colors"
                  >
                    LIVE DEMO
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
                {githubLink && (
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-[#A5FF0A] dark:text-[#A5FF0A] font-medium text-sm md:text-base hover:underline transition-colors"
                  >
                    SEE ON GITHUB
                    <Github className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

