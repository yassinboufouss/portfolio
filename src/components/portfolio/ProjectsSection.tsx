import React from "react";
import ProjectCard from "@/components/portfolio/ProjectCard";

const mockProjects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React, TypeScript, and a robust backend.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "An intuitive task manager featuring drag-and-drop functionality and real-time updates.",
    tags: ["Vue.js", "Firebase", "Framer Motion", "PWA"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard displaying complex data sets using Recharts and custom components.",
    tags: ["React", "Recharts", "API Integration", "Shadcn/ui"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="#" className="text-primary hover:underline font-medium">
          View All Projects &rarr;
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;