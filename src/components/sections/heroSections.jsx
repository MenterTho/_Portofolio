"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function HeroSections() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-4"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 h-72 w-72 bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 h-72 w-72 bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="container max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">

        {/* ===== Left content ===== */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="block opacity-0 animate-fade-in">
              Hi, I&apos;m
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Tuấn
            </span>
            <span className="ml-2 text-glow opacity-0 animate-fade-in-delay-2">
              Thọ
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
            A passionate <span className="text-primary font-medium">Back End Developer</span>  
            building scalable and clean systems.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* ===== Right avatar ===== */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group perspective">

            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full animate-spin-slower">
              <div className="absolute inset-0 rounded-full border border-primary/40 blur-sm" />
            </div>

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse-subtle" />

            {/* Avatar */}
            <div
              className="
                avatar avatar-hover
                relative rounded-full overflow-hidden
                border-4 border-border
                transition-transform duration-500
                group-hover:rotate-3 group-hover:scale-105
              "
            >
              <Image
                src="/avatar.jpg"
                alt="Tuan Tho"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}
