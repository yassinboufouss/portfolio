import React from "react";
import ProjectCard from "@/components/portfolio/ProjectCard";

const yassinProjects = [
  {
    title: "Gym Operations Manager",
    description: "A seamless platform for managing gym operations, including membership tracking and scheduling.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://scc-pos-developed-by-manga.vercel.app/",
    githubUrl: "#",
    imageUrl: "/images/gym-manager-preview.png",
  },
  {
    title: "Self-Hosted Music Collection",
    description: "A personal, self-hosted application for managing and streaming a YouTube music collection.",
    tags: ["Next.js", "Docker", "AWS", "Tailwind CSS"],
    liveUrl: "https://dreamy-seahorse-dash.vercel.app/",
    githubUrl: "#",
    imageUrl: "/images/music-collection-preview.png",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {yassinProjects.map((project, index) => (
          <div 
            key={index} 
            className="animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <div className="text-center mt-12 animate-in fade-in duration-700 delay-500">
        <a href="#" className="text-primary hover:underline font-medium">
          View All Projects &rarr;
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;