/* eslint-disable @next/next/no-img-element */
import React from "react";
import FloatingDockDemo from "@/components/floating-dock-demo";

export function HeroSection04() {
  return (
    <section className="min-h-screen overflow-hidden relative py-20">
      <div className="mx-auto max-w-7xl relative z-20 px-6">
        <div className="relative ">
          <h1
            className={`z-20 text-blue-700 relative font-bold text-center tracking-[-7px] text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[10rem]`}
          >
            WEB DEVELOPER
          </h1>
          {/* Desktop name: stacked lines, second shifted right */}
          <div className="hidden xl:block absolute -bottom-24 right-8 text-foreground">
            <p className="text-4xl font-thin tracking-[6px] leading-none">ANUSKA</p>
            <p className="text-4xl font-thin tracking-[6px] leading-none ml-8">SARKAR</p>
          </div>
          {/* Mobile name: stacked lines, second shifted right */}
          <div className="xl:hidden absolute -bottom-24 right-8 text-foreground">
            <p className="text-4xl font-thin tracking-[6px] leading-none">ANUSKA</p>
            <p className="text-4xl font-thin tracking-[6px] leading-none ml-6">SARKAR</p>
          </div>
        </div>

        <div className="grid relative">
          <div className="space-y-8 pt-20 flex gap-6 justify-center">
            <div className="flex gap-6 bg-zinc-200 dark:bg-zinc-800 w-full max-w-xl h-fit p-10 items-end space-y-2 text-xl font-bold md:text-2xl lg:text-3xl">
              <div className="font-semibold text-xl">
                <div>/ FRONTEND DESIGNS</div>
                <div>/ FULLSTACK APPS</div>
                <div>/ WEB3 dAPPS</div>
              </div>
              <div className="absolute hidden  md:flex left-1/2 -top-10 w-fit overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                <img
                  src="/my-pic2.jpg"
                  alt="Designer portrait"
                  className="h-100 w-full object-contain grayscale"
                />
              </div>
            </div>
          </div>
          <div className="flex md:hidden left-1/2 -top-10 w-full md:w-fit overflow-hidden bg-zinc-200 dark:bg-zinc-800">
            <img
              src="/my-pic2.jpg"
              alt="Designer portrait"
              className="h-100 w-full object-contain grayscale"
            />
          </div>
        </div>

        <div className="md:mt-40 mt-10">
          <p className="mx-auto max-w-2xl font-mono text-center text-sm font-medium tracking-wide md:text-base">
            I'M A VERSATILE WEB DEVELOPER,
            <br />
            SOLVING COMPLEX CHALLENGES BY BUILDING EVERYTHING FROM
            <br />
            ENGAGING FRONTENDS TO SCALABLE FULLSTACK AND SECURE WEB3 APPLICATIONS
          </p>
        </div>
        <div className="mt-10">
          <FloatingDockDemo />
        </div>
      </div>
      <div
        className="absolute block dark:hidden inset-0 z-0"
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

      <div
        className="absolute hidden dark:block inset-0 z-0"
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