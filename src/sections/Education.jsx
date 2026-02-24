const educations = [
  {
    School: "Pagsanjan Academy",
    Year_level: "Kinder to Preparatory",
    Year: "2005 - 2007",
    Description: "Still a kid just learning to get along with others, I'm very shy at this age."
  },
  {
    School: "Liceo De Pagsanjan",
    Year_level: "Elementary to Junior High",
    Year: "2007 - 2017",
    Description: "This is where I started getting the traits that I have right now, still a kid but starting to develop."
  },
  {
    School: "Colegio de san Juan de Letran Calamba",
    Year_level: "Senior High",
    Year: "2017 - 2019",
    Description: "During my stay at Letran, my character development grew significantly, shaping me into a more responsible, disciplined, and collaborative individual."
  },
  {
    School: "FEU Alabang",
    Year_level: "Bachelor of Science in Computer Engineering",
    Year: "2019 - 2025",
    Description: "Studying at FEU made me realize that everything is different from my previous school, it was significantly harder but still I managed to graduate without failing a subject."
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-300 text-secondary-foreground">
            My Academic <span className="font-serif italic font-normal text-white">Journey</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-500">
            A timeline of my educational background
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

          {/* Education Items */}
          <div className="space-y-12">
            {educations.map((edu, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 ring-4 ring-background z-10"></div>

                {/* Content */}
                <div className={`pl-8 md:pl-8 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {edu.Year}
                      <h3 className="text-xl font-semibold mt-2">{edu.Year_level}</h3>
                      <p className="text-muted-foreground">{edu.School}</p>
                      <p className="text-sm text-muted-foreground mt-4">{edu.Description}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};