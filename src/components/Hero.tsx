"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Code2, Database, Cpu } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px] -z-10 opacity-70" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <AnimatedSection delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Internships
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Heena Kouser</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-foreground/90 mb-6">
              Computer Science Student Building Real-World Technology
            </h2>
            
            <p className="text-foreground/70 text-lg leading-relaxed mb-8 max-w-xl">
              Computer Science and Engineering student with a strong foundation in programming, databases, software development, data analytics, and emerging AI technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="#projects"
                className="flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-6 py-3 rounded-xl font-medium transition-transform hover:scale-105 active:scale-95"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href="/Heena_Kouser_Resume.pdf"
                download
                className="flex items-center gap-2 glass px-6 py-3 rounded-xl font-medium hover:bg-surface-border transition-colors border border-surface-border"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              
              <Link
                href="#contact"
                className="text-foreground/80 hover:text-primary underline-offset-4 hover:underline px-4 py-3 font-medium transition-colors"
              >
                Let's Connect
              </Link>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3} className="hidden lg:block relative h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[400px] h-[400px]">
                {/* Orbital Rings */}
                <div className="absolute inset-0 border border-surface-border rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-8 border border-surface-border/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-16 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
                
                {/* Floating Icons */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-10 left-1/2 -translate-x-1/2 glass-card p-4 rounded-2xl"
                >
                  <Code2 className="w-8 h-8 text-primary" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 15, 0] }} 
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 left-10 glass-card p-4 rounded-2xl"
                >
                  <Database className="w-8 h-8 text-secondary" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, -20, 0] }} 
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                  className="absolute top-32 right-4 glass-card p-4 rounded-2xl"
                >
                  <Terminal className="w-8 h-8 text-foreground" />
                </motion.div>

                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }} 
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl flex items-center justify-center"
                >
                  <Cpu className="w-12 h-12 text-primary opacity-80" />
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
