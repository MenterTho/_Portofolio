"use client";

export function ProjectSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each projects was carefully crafted
            with attention to detail, performance, and user experience
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img src="" alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
              </div>
              <div className="">
                <div className="flex flex-wrap gap-2 mb-4">

                </div>
              </div>
            </div>
          </div>
        </h2>
      </div>
    </section>
  );
}
