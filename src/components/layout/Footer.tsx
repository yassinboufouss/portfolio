import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/40 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Alex. All rights reserved.
        </p>
        
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="GitHub Profile">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="Twitter Profile">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
        </div>
        
        <nav className="space-x-4 text-sm hidden sm:block">
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;