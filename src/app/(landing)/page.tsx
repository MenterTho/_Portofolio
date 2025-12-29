"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/src/components/ui-navbar/navBar";
import { StarBackground } from "@/src/components/ui/startBackground";
import { ThemeToggle } from "@/src/components/ui/themeToggle";
import { HeroSections } from "@/src/components/sections/heroSections"
import  AboutSection  from "@/src/app/(content)/about/page"
import  SkillSection  from "@/src/components/sections/skillSections"
import  ProjectSection  from "@/src/app/(content)/projects/page"
import ContactSection from "@/src/app/(content)/contact/page"
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      {/* ThemeToggle */}
      <ThemeToggle
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode((p) => !p)}
        className="fixed top-5 right-5 z-50 hidden md:block"
      />
      {/* Navbar */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode((p) => !p)}
      />
      <main>
        <HeroSections />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
}
