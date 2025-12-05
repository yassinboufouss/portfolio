import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Briefcase, GraduationCap, Heart } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image/Avatar */}
          <div className="flex-shrink-0">
            <Avatar className="h-48 w-48 md:h-64 md:w-64 border-4 border-primary shadow-xl">
              <AvatarImage src="/placeholder.svg" alt="Alex Profile" />
              <AvatarFallback className="text-4xl">A</AvatarFallback>
            </Avatar>
          </div>

          {/* Content */}
          <div className="md:w-2/3 space-y-6 text-lg text-muted-foreground">
            <p>
              I am a dedicated Full Stack Developer with 5+ years of experience specializing in modern JavaScript frameworks like React and Node.js. My passion lies in transforming complex problems into elegant, high-performance web solutions.
            </p>
            <p>
              I thrive in environments where I can continuously learn and apply new technologies. I focus on clean code, robust testing, and delivering exceptional user experiences.
            </p>
            
            <Separator className="my-6" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-medium text-foreground">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>B.S. Computer Science</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-primary" />
                <span>Open Source Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;