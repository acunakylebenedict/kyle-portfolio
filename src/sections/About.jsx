import { Group, Lightbulb, UserSearch, UserStar } from "lucide-react";

const highlights = [
    {
        icon: Group,
        title: "Works well with others",
        description: "I’m an easy-going professional who gets along well with others and excels in team collaboration.",
    },
    {
        icon: UserStar,
        title: "Leadership Skill",
        description: "I have strong leadership skills and can guide teams effectively toward their goals."
    },
    {
        icon: UserSearch,
        title: "Research Skill",
        description: "I have strong research skills and can efficiently gather, analyze, and apply information to solve problems."
    },
    {
        icon: Lightbulb,
        title: "Problem Solving Skill",
        description: "I am innovative and enjoy creating creative solutions that improve processes and outcomes."


    }
]

export const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z=10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-300 text-secondary-foreground">
                    Building the future,
                    <span className="font-serif italic font-normal text-white"> one program at a time.</span>
                </h2>
                <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-500 text-lg">
                    <p>
                        I am Kyle Benedict S. Acuña, a fresh graduate in Computer Engineering who is eager to begin my professional career and apply the knowledge and skills I have gained through my studies. I am highly motivated to continuously learn, grow, and improve my technical abilities through real-world experience.
                    </p>
                    <p>
                        I specialize in building web applications using Vue, React, and PHP with Laravel, focusing on clean, efficient, and user-friendly solutions. I also have working knowledge of Python and Java, which helps me adapt to different projects and technologies as needed.
                    </p>
                    <p>
                       When I’m not coding, I enjoy playing computer games like Dota 2, Valorant, and PUBG: Battlegrounds to relax and unwind. I’m also passionate about keeping exotic pets, especially tarantulas and lizards, which has taught me patience and responsibility outside of tech. 
                    </p>
                </div>
                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animate-delay-700">
                    <p className="text-lg font-medium italic text-foreground">
                        My goal is to create websites that are not only visually appealing but also easy to use and highly functional. I aim to build digital experiences that users enjoy interacting with and can rely on every day.
                    </p>
                </div>
            </div>
            {/* Right Column */}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, idx) => (
                    <div key={idx} className="glass p-6 rounded-2xl aniamte-fade-in" style={{animationDelay: '${(idx + 1) * 100}ms'}}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                            <item.icon className="w-6 h-6 text-primary"/>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                            <p className="text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </h3>
                    </div>
                ))}

            </div>
        </div>
</div>
    </section>;
}