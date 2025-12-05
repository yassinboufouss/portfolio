import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import ProjectsSection from "@/components/portfolio/ProjectsSection";

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <h1 className="text-5xl font-extrabold tracking-tight text-center mb-12">My Projects</h1>
          <ProjectsSection />
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ProjectsPage;