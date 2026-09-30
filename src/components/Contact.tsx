"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AnimatedSection } from "./AnimatedSection";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for now
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Meaningful</span></h2>
            <p className="text-lg text-foreground/70">
              I'm always interested in learning, building, and exploring opportunities where technology can solve real-world problems.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection delay={0.1}>
              <a 
                href="mailto:heenakouser244@gmail.com"
                className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 bg-surface rounded-xl group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-medium">Email</p>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors truncate">heenakouser244@gmail.com</p>
                </div>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <a 
                href="https://linkedin.com/in/heena-kouser-3332783bb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 bg-surface rounded-xl group-hover:scale-110 transition-transform">
                  <FaLinkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-medium">LinkedIn</p>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors truncate">linkedin.com/in/heena-kouser-3332783bb</p>
                </div>
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <a 
                href="https://github.com/heena024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-2xl hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 bg-surface rounded-xl group-hover:scale-110 transition-transform">
                  <FaGithub className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 font-medium">GitHub</p>
                  <p className="text-foreground font-semibold group-hover:text-primary transition-colors truncate">github.com/heena024</p>
                </div>
              </a>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.4}>
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl flex flex-col gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mt-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    className="w-full bg-surface border border-surface-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Hello Heena, I'd like to discuss..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className="mt-4 flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 disabled:opacity-70 disabled:hover:bg-foreground px-6 py-4 rounded-xl font-semibold transition-all"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
