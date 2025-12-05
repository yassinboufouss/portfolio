import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumePage: React.FC = () => {
  // Placeholder for the actual resume file path or external link
  const resumeLink = "#"; // Replace with actual resume PDF link

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-24 max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">My Resume / CV</h1>
        <p className="text-lg text-muted-foreground mb-10">
          A detailed overview of my professional experience, skills, and education.
        </p>

        <div className="p-8 border-2 border-dashed border-primary/50 rounded-lg bg-card shadow-lg space-y-6">
          <p className="text-xl font-semibold">
            Download my full resume for a comprehensive look at my career.
          </p>
          <Button size="lg" asChild>
            <a href={resumeLink} download="Yassin_Boufous_Resume.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Note: This is a placeholder link. Please replace '#' with the actual link to your resume PDF.
          </p>
        </div>
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default ResumePage;