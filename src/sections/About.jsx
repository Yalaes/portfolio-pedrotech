import { Accessibility, Code2, Layers, Lightbulb } from "lucide-react";
import React from "react";

const highlights = [
  {
    icon: Code2,
    title: "Handcrafted Digital Solutions",
    description:
      "Tailored solutions built with care, purpose and attention to detail.",
  },
  {
    icon: Lightbulb,
    title: "Purpose-Driven Development",
    description: "Every feature has a reason. Every solution solves a problem.",
  },
  {
    icon: Layers,
    title: "Beyond the Interface",
    description: "Functional, scalable and thoughtful digital experiences.",
  },
  {
    icon: Accessibility,
    title: "Built for Everyone",
    description: "Accessible, responsive and intuitive by design.",
  },
];
const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="font-grotesk text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Making a difference,{" "}
              <span className="font-inter italic text-white">
                one solution at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm driven by curiosity and a passion for turning ideas into
                meaningful digital experiences. I enjoy exploring new
                technologies, understanding how things work and finding better
                ways to bring ideas to life.
              </p>
              <p>
                I believe great digital solutions start with understanding
                people. I combine creativity, technical skills and modern tools,
                to build experiences that are purposeful, intuitive and tailored
                to real needs.
              </p>
              <p>
                For me, every project is an opportunity to learn, experiment and
                make something better. I focus on the details, value thoughtful
                problem-solving and believe that technology should always serve
                a greater purpose.
              </p>
            </div>
            <div className="glass rounded-2xl glow-border p-6 animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to bridge ideas and technology, creating
                thoughtful digital solutions that empower people, simplify
                everyday challenges and help businesses move forward with
                purpose."
              </p>
            </div>
          </div>
          {/* right column, highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex justify-center items-center mb-4 hover:bg-primary/40">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
