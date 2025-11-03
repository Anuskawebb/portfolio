import { HeroSection04 } from "@/components/ui/hero-04";
import { TimelineDemo } from "@/components/ui/timeline-demo";
import { SkillsSection } from "@/components/ui/skills-section";
import { EducationSection } from "@/components/ui/education-section";

export default function Home() {
  return (
    <>
      <HeroSection04 />
      <EducationSection />
      <SkillsSection />
      <TimelineDemo />
    </>
  );
}
