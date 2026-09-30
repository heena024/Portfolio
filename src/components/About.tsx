"use client";

import { AnimatedSection } from "./AnimatedSection";
import { GraduationCap, Code, BrainCircuit, Target } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    value: "8.5",
    label: "Current CGPA"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-secondary" />,
    value: "2027",
    label: "Graduation"
  },
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    value: "2+",
    label: "Major Projects"
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-secondary" />,
    value: "CSE",
    label: "Computer Science"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2} className="glass-card p-8 rounded-3xl">
            <p className="text-lg leading-relaxed text-foreground/80">
              Computer Science and Engineering student with a strong foundation in programming, databases, software development, and emerging AI technologies. Experienced in developing academic and practical projects using Python, SQL, Flutter, Flask, OpenCV, and machine learning concepts.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mt-6">
              Strong problem-solving and analytical skills with hands-on experience in building technology-driven solutions, debugging applications, and working with data.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-6">
            {HIGHLIGHTS.map((item, i) => (
              <AnimatedSection key={item.label} delay={0.3 + (i * 0.1)}>
                <div className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4 hover:border-primary/50 transition-colors group">
                  <div className="p-3 bg-surface rounded-xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-1">{item.value}</h3>
                    <p className="text-sm font-medium text-foreground/60">{item.label}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
