"use client";

import { AnimatedSection } from "./AnimatedSection";

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    skills: ["Python", "C"]
  },
  {
    title: "Data Analytics",
    skills: ["Python / Pandas", "Excel", "Power Query", "Pivot Tables", "Tableau", "Power BI", "Data Cleaning", "Data Visualization"]
  },
  {
    title: "Database",
    skills: ["SQL", "DBMS"]
  },
  {
    title: "Core CS",
    skills: ["Data Structures", "Operating Systems"]
  },
  {
    title: "Development Tools",
    skills: ["Git", "VS Code"]
  },
  {
    title: "Project Tech",
    skills: ["Flutter", "Firebase Firestore", "Flask", "OpenCV", "MediaPipe", "Scikit-learn"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technical Arsenal</h2>
            <div className="w-20 h-1 bg-secondary rounded-full mx-auto" />
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <AnimatedSection key={category.title} delay={0.1 * idx}>
              <div className="glass-card p-6 rounded-3xl h-full hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-6 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 text-sm font-medium bg-surface hover:bg-surface-border border border-surface-border rounded-lg transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Subtle decorative connection line */}
        <AnimatedSection delay={0.5} className="mt-20">
          <div className="glass-card max-w-4xl mx-auto p-8 rounded-full hidden md:flex items-center justify-between text-sm font-medium text-foreground/70 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
            <span className="relative z-10 px-4">Python</span>
            <span className="relative z-10 text-primary">→</span>
            <span className="relative z-10 px-4">Data</span>
            <span className="relative z-10 text-primary">→</span>
            <span className="relative z-10 px-4">AI</span>
            <span className="relative z-10 text-primary">→</span>
            <span className="relative z-10 px-4">Software</span>
            <span className="relative z-10 text-primary">→</span>
            <span className="relative z-10 px-4 text-foreground">Real-World Solutions</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
