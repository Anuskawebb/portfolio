"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

export function EducationSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="w-full pt-12 md:pt-16 pb-20 px-4 md:px-8 lg:px-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-2px] md:tracking-[-4px] text-black dark:text-white mb-12 text-center mt-6 md:mt-8">
          Education
        </h2>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          {/* Boxed Container with Border */}
          <div className="bg-black dark:bg-black border border-white dark:border-white p-6 md:p-8 lg:p-10 relative">
            {/* Decorative Star in top-right */}
            <div className="absolute top-4 right-4 text-white text-xl">✦</div>
            
            {/* Education Entry */}
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                {/* Bullet with Date */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white"></span>
                  <span className="text-white text-lg md:text-xl font-mono font-medium">
                    2022 – 2025
                  </span>
                </div>
                
                {/* Institution Name - Indented */}
                <div className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-2px] md:tracking-[-3px] ml-4">
                  Sister Nivedita University, Kolkata
                </div>
                
                {/* Degree/Major - Right aligned with dash */}
                <div className="flex items-start gap-2 ml-4">
                  <span className="text-white">–</span>
                  <div className="flex-1 text-right">
                    <div className="text-white text-xl md:text-2xl font-semibold">
                      Bachelor of Computer Applications
                    </div>
                    <div className="text-white text-base md:text-lg font-mono font-medium mt-2">
                      CGPA: <span className="text-yellow-500 dark:text-yellow-400 font-bold text-lg md:text-xl">9.01</span>
                    </div>
                    <div className="text-white text-base md:text-lg font-mono font-medium mt-1">
                      Kolkata, West Bengal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Grid Background - Light Mode */}
      <div
        className="absolute block dark:hidden inset-x-0 top-20 md:top-24 bottom-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e5e5e5 1px, transparent 1px),
        linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />

      {/* Grid Background - Dark Mode */}
      <div
        className="absolute hidden dark:block inset-x-0 top-20 md:top-24 bottom-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #404040 1px, transparent 1px),
        linear-gradient(to bottom, #404040 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
    </section>
  );
}

