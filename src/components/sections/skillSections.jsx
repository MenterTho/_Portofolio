"use client";

import { skills } from "@/src/data/skills";

export default function SkillSection() {
  return (
    <section
      id="skills"
      className="relative py-24 px-4 bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary text-glow">Skills</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Technologies and tools I use to build scalable, performant
            applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <div
              key={index}
              className="
                relative rounded-xl
                p-6
                bg-card/85 backdrop-blur
                border border-border
                transition-transform duration-300
                hover:-translate-y-1
              "
            >
              {/* 🌫 Ambient glow – luôn bật */}
              <div
                className="
                  pointer-events-none absolute -inset-[2px] rounded-xl
                  bg-gradient-to-br
                  from-primary/30 via-primary/10 to-transparent
                  blur-lg opacity-70
                "
              />

              {/* Inner layer */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-5">
                  {group.title}
                </h3>

                {/* Skill items */}
                <div
                  className="
                    grid gap-3
                    grid-cols-[repeat(auto-fill,minmax(100px,1fr))]
                    auto-rows-fr
                  "
                >
                  {group.items.map((skill, i) => (
                    <div
                      key={i}
                      className="
                        flex items-center justify-center
                        text-center text-sm font-medium
                        px-3 py-2 rounded-md
                        bg-secondary text-secondary-foreground
                        whitespace-normal break-words leading-snug
                        transition-colors duration-200
                        hover:bg-primary hover:text-primary-foreground
                      "
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
