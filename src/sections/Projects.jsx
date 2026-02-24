import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AttPay",
    description:
      "Developed a time-in and time-out system that automatically calculates employee salaries. The platform streamlines attendance tracking and payroll computation, ensuring accuracy and efficiency.",
    tags: ["React", "MongoDB"],
    image: "/Projects/Attpay.png",
  },
  {
    title: "Ticketing System",
    description:
      "A ticketing system featuring separate admin and user interfaces. Users can submit tickets, while admins manage, track, and resolve them efficiently through a dedicated dashboard.",
    tags: ["Vue", "JavaScript", "Php", "Laravel", "MySQL", "Postman", "Tailwind CSS"],
    image: "/Projects/Ticketing.png",
  },
  {
    title: "EarnReel",
    description:
      "A multi-page website featuring separate admin, creator, and merchant interfaces. Admins approve creator applications, creators apply to promote products and services, and merchants provide projects for promotion.",
    tags: ["Vue", "TypeScript", "Php", "Laravel", "MySQL", "Postman", "Tailwind CSS"],
    image: "/Projects/Earnreel.png",
  },
  {
    title: "CareHub AI",
    description:
      "A website for scheduling checkups and storing patients’ medical records. Users can also choose their preferred doctor, with the platform built entirely using React and CSS.",
    tags: ["React", "Tailwind CSS"],
    image: "/Projects/Carehub.png",
  },
  {
    title: "MediHydrate",
    description:
      "A thesis project that dispenses medicine automatically based on scheduled times, programmed in Arduino using C++. A React-based web interface allows users to control and monitor the dispensing system remotely.",
    tags: ["Arduino", "C++", "React", "MySQL"],
    image: "/Projects/Thesis.jpg",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-300 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-500">
            A compilation of my projects that I worked on during my academic study at FEU Alabang and during my internship at Ayahtek.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
                    {project.title}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between ">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  
                </div>
                <p className="text-sm text-muted-foreground ">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-4 py-1.5 font-medium rounded-full bg-surface border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transotion-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};