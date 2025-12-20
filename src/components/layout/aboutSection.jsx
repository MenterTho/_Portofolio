"use client";
import { Briefcase, Code, User } from "lucide-react";
export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative bg-gradient-to-b from-background to-muted/20"> 
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow opacity-0 animate-fade-in"> 
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in-delay-1"> 
            <h3 className="text-2xl font-semibold text-glow">Passionate Web Developer & Tech Creator</h3> 
            <p className="text-muted-foreground leading-relaxed">
              Hi, Im Tuấn Thọ – a passionate Back End developer from Vietnam with experience in building scalable web applications using technologies like Node.js, Express, and SQL.
            </p>
            <p className="text-muted-foreground leading-relaxed"> 
              I enjoy creating efficient and robust backend systems, and in my free time, I explore new tools and contribute to open-source projects. Lets connect to discuss tech or collaborations!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="cosmic-button hover:shadow-primary/30" 
              >
                Get In Touch
              </a>
              <a
                href="#" 
                className="cosmic-button px-6 py-2 rounded-full border border-primary text-primary bg-transparent hover:bg-primary/10 hover:shadow-primary/30 transition-all duration-300" 
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 opacity-0 animate-fade-in-delay-2"> 
            <div className="gradient-border p-6 card-hover border border-primary/30 rounded-xl bg-card/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"> 
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover border border-primary/30 rounded-xl bg-card/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"> {/* Tương tự */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Personal Skills</h4>
                  <p className="text-muted-foreground">
                    Strong problem-solving, team collaboration, and continuous learning in tech.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover border border-primary/30 rounded-xl bg-card/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow"> {/* Tương tự */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Professional Experience</h4>
                  <p className="text-muted-foreground">
                    Building backend services for scalable apps with modern tools and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}