"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, MapPin, Navigation, Map, Eye, Activity, Cpu } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedSection } from "./AnimatedSection";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    id: "traffica",
    title: "TRAFFICA",
    subtitle: "AI-Powered Traffic Prediction & Navigation",
    description: "An AI-powered traffic prediction and dynamic delivery navigation system designed to analyze real-time traffic conditions and dynamically adjust delivery routes.",
    technologies: ["Python", "APIs", "Flutter", "Firebase Firestore"],
    features: [
      "Integrated real-time traffic APIs",
      "Predictive logic for traffic conditions",
      "Traffic pattern analysis",
      "Flutter mobile application",
      "Firebase Firestore integration",
      "Dynamic delivery route navigation",
      "Real-time traffic-based route adjustments"
    ],
    github: "https://github.com/heena024/Traffica",
    color: "from-blue-500/20 to-purple-500/20",
    icon: <Map className="w-12 h-12 text-blue-400" />,
    visual: (
      <div className="relative w-full h-48 rounded-xl overflow-hidden glass flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <motion.div 
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute w-full h-full opacity-50"
        >
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/40" d="M20,100 C60,50 140,150 180,100" />
            <circle cx="20" cy="100" r="4" className="fill-primary" />
            <circle cx="180" cy="100" r="4" className="fill-secondary" />
          </svg>
        </motion.div>
        <div className="z-10 flex gap-4">
          <div className="p-3 bg-surface border border-surface-border rounded-lg animate-pulse"><MapPin className="w-6 h-6 text-red-400" /></div>
          <div className="p-3 bg-surface border border-surface-border rounded-lg"><Navigation className="w-6 h-6 text-blue-400" /></div>
        </div>
      </div>
    )
  },
  {
    id: "silent-speech",
    title: "Silent Speech AI",
    subtitle: "Real-Time Lip Movement Recognition",
    description: "A real-time silent speech recognition system that predicts spoken words from lip movements captured through a webcam.",
    technologies: ["Python", "Flask", "MediaPipe", "OpenCV", "Scikit-learn", "KNN", "HTML", "CSS", "JS"],
    features: [
      "Real-time webcam processing",
      "MediaPipe facial landmark detection",
      "Custom dataset collection & Feature engineering",
      "StandardScaler normalization & KNN classification",
      "10-word vocabulary with sliding-window prediction",
      "Flask REST backend & Browser-based frontend",
      "Establishes a foundation for future temporal models (LSTM, CNN, Transformers)",
      "Achieved ~50% baseline classification accuracy on custom dataset"
    ],
    github: "https://github.com/heena024/Silent_Speech_AI",
    color: "from-emerald-500/20 to-teal-500/20",
    icon: <Eye className="w-12 h-12 text-emerald-400" />,
    visual: (
      <div className="relative w-full h-48 rounded-xl overflow-hidden glass flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="z-10 flex items-center gap-6">
          <div className="relative">
            <Activity className="w-10 h-10 text-emerald-400/80" />
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-emerald-400 rounded-full blur-md" />
          </div>
          <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-16 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent" />
          <div className="p-3 bg-surface border border-surface-border rounded-lg shadow-[0_0_15px_rgba(52,211,153,0.2)]">
            <Cpu className="w-6 h-6 text-emerald-300" />
          </div>
        </div>
      </div>
    )
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <AnimatedSection key={project.id} delay={0.1 * idx}>
              <div 
                className={cn(
                  "glass-card p-6 rounded-3xl cursor-pointer group hover:border-primary/50 transition-all duration-300 relative overflow-hidden",
                  "hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
                )}
                onClick={() => setSelectedProject(project)}
              >
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br transition-opacity duration-500 -z-10", project.color)} />
                
                {project.visual}
                
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-foreground/80 font-medium mb-4">{project.subtitle}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="text-xs font-semibold px-2.5 py-1 bg-surface border border-surface-border rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs font-semibold px-2.5 py-1 bg-surface border border-surface-border rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                      View Details
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          >
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-6 md:p-10 z-10 custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-surface hover:bg-surface-border rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-surface rounded-2xl border border-surface-border">
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-lg text-foreground/70 font-medium">{selectedProject.subtitle}</p>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <h4 className="text-xl font-semibold mb-3 text-primary">Overview</h4>
                <p className="text-foreground/80 leading-relaxed mb-8">{selectedProject.description}</p>
                
                <h4 className="text-xl font-semibold mb-3 text-primary">Key Features</h4>
                <ul className="list-disc pl-5 mb-8 text-foreground/80 space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                
                <h4 className="text-xl font-semibold mb-3 text-primary">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-surface border border-surface-border rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-6 border-t border-surface-border">
                  <a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    View Repository
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
