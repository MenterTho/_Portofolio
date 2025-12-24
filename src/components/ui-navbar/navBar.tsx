"use client";

import { cn } from "@/src/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/src/components/ui/themeToggle";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

type NavbarProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

export function Navbar({ isDarkMode, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40",
        "transition-[background,box-shadow,padding] duration-300",
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-lg shadow-lg"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between relative z-50">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold flex gap-1">
          <span className="text-foreground">PedroTech</span>
          <span className="text-primary">Portfolio</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile right */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme toggle */}
          <ThemeToggle
            isDarkMode={isDarkMode}
            onToggle={toggleTheme}
            className="h-10 w-10" // đảm bảo size đều với menu icon
          />

          {/* Menu button */}
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className="h-10 w-10 flex items-center justify-center p-2 rounded-md hover:bg-border transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 md:hidden z-30",
          "bg-background/95 backdrop-blur-xl",
          "transition-opacity duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}