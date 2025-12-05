import React from "react";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Layout } from "lucide-react";

const skills = {
  Frontend: [
    { name: "React", icon: <Code className="h-4 w-4" /> },
    { name: "TypeScript", icon: <Code className="h-4 w-4" /> },
    { name: "Tailwind CSS", icon: <Layout className="h-4 w-4" /> },
    { name: "Shadcn/ui", icon: <Layout className="h-4 w-4" /> },
    { name: "Redux", icon: <Code className="h-4 w-4" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <Database className="h-4 w-4" /> },
    { name: "Express", icon: <Database className="h-4 w-4" /> },
    { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
    { name: "MongoDB", icon: <Database className="h-4 w-4" /> },
  ],
  DevOps: [
    { name: "AWS", icon: <Cloud className="h-4 w-4" /> },
    { name: "Docker", icon: <Cloud className="h-4 w-4" /> },
    { name: "Vercel", icon: <Cloud className="h-4 w-4" /> },
  ],
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Expertise</h2>
        
        <div className="grid gap-10 md:grid-cols-3">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="p-6 bg-background rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 border-b pb-2 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill) => (
                  <Badge key={skill.name} className="px-4 py-2 text-base">
                    {skill.icon}
                    <span className="ml-2">{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;