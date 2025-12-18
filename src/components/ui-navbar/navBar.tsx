"use client";

import { cn } from "@/src/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
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
        "transition-[background,box-shadow,padding] duration-300 ease-out",
        isScrolled
          ? "py-3 bg-background/70 backdrop-blur-lg shadow-lg"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold flex items-center gap-1 will-change-transform"
        >
          <span className="text-glow text-foreground transition-transform duration-300 hover:scale-[1.03]">
            PedroTech
          </span>
          <span className="text-primary">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-foreground/80 transition-colors duration-300 hover:text-primary"
            >
              {item.name}
              {/* underline – transform only */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 will-change-transform hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setIsMenuOpen((p) => !p)}
          className="md:hidden p-2 rounded-md text-foreground hover:bg-border transition-colors z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 md:hidden",
            "bg-background/95 backdrop-blur-xl",
            "transition-opacity duration-300 ease-out",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div
            className={cn(
              "flex flex-col items-center justify-center h-full gap-8 text-2xl",
              "transition-transform duration-300 ease-out will-change-transform",
              isMenuOpen ? "translate-y-0" : "translate-y-6"
            )}
          >
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${i * 60}ms` }}
                className={cn(
                  "text-foreground/80 transition-all duration-300",
                  "hover:text-primary hover:translate-x-1",
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
