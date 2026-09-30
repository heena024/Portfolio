"use client";

import { AnimatedSection } from "./AnimatedSection";
import { GraduationCap, Award, Trophy } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education & Certs */}
          <div>
            <AnimatedSection>
              <div className="mb-10 flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <div className="relative pl-8 border-l-2 border-surface-border before:absolute before:left-[-9px] before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-primary before:border-4 before:border-background">
                <div className="glass-card p-6 rounded-2xl mb-12">
                  <span className="inline-block px-3 py-1 bg-surface border border-surface-border rounded-full text-xs font-semibold mb-4 text-primary">
                    2023 &mdash; 2027
                  </span>
                  <h3 className="text-xl font-bold mb-2">Bachelor of Technology</h3>
                  <h4 className="text-foreground/80 font-medium mb-4">Computer Science & Engineering</h4>
                  <p className="text-foreground/60 text-sm mb-4">HKBK College of Engineering, Bengaluru</p>
                  
                  <div className="inline-flex items-center justify-center bg-surface border border-surface-border px-4 py-2 rounded-lg">
                    <span className="text-sm font-semibold text-foreground/80">Current CGPA: <span className="text-primary">8.5</span></span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="mb-10 mt-16 flex items-center gap-4">
                <div className="p-3 bg-secondary/20 rounded-xl">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold">Certifications</h2>
              </div>
              
              <div className="relative pl-8 border-l-2 border-surface-border before:absolute before:left-[-9px] before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-secondary before:border-4 before:border-background">
                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold">AWS Cloud Practitioner Essentials</h3>
                    <span className="text-xs font-semibold px-2 py-1 bg-surface border border-surface-border rounded-md text-secondary">
                      2026
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                    <svg viewBox="0 0 256 256" className="w-8 h-8 fill-orange-500" xmlns="http://www.w3.org/2000/svg"><path d="M110.28,160.71a53,53,0,1,1,38.16,38.16l25,25a8,8,0,0,1-11.32,11.32l-25-25A53,53,0,0,1,110.28,160.71Zm4-75A37,37,0,1,0,140,140,37,37,0,0,0,114.28,85.71Z"/></svg>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Achievements */}
          <div>
            <AnimatedSection delay={0.3}>
              <div id="achievements" className="mb-10 flex items-center gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-xl">
                  <Trophy className="w-6 h-6 text-emerald-500" />
                </div>
                <h2 className="text-3xl font-bold">Achievements & Activities</h2>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              <AnimatedSection delay={0.4}>
                <div className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform border-l-4 border-l-emerald-500">
                  <h3 className="text-lg font-bold mb-2">IDEARUSH 1.0 Participant</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Participated in an 8-hour intensive ideathon at G. Madegowda Institute of Technology, collaborating on innovative problem-solving and rapid prototyping.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform border-l-4 border-l-blue-500">
                  <h3 className="text-lg font-bold mb-2">Smart India Hackathon (SIH)</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Active participant in the Smart India Hackathon at HKBK College of Engineering, focusing on building technology-driven solutions for real-world challenges.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
