import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-surface-border bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="#home" className="text-2xl font-bold tracking-tight inline-block mb-2">
              <span className="text-primary">H</span>K.
            </Link>
            <p className="text-foreground/60 text-sm font-medium">
              Computer Science & Engineering Student
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/heena024" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-surface hover:bg-surface-border rounded-full transition-colors text-foreground/80 hover:text-primary"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/heena-kouser-3332783bb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-surface hover:bg-surface-border rounded-full transition-colors text-foreground/80 hover:text-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:heenakouser244@gmail.com" 
              className="p-2 bg-surface hover:bg-surface-border rounded-full transition-colors text-foreground/80 hover:text-primary"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-surface-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-foreground/50">
          <p>&copy; {currentYear} Heena Kouser. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
