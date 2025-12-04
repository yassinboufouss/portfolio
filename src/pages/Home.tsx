import { MadeWithDyad } from "@/components/made-with-dyad";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12 md:py-24">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">Alex</span>.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            A passionate developer building modern, interactive, and visually stunning web applications.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="group">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </section>
        
        {/* Placeholder for other sections (e.g., Projects, Skills) */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to build something amazing?</h2>
          <p className="text-lg text-muted-foreground">
            Explore my work or reach out to discuss your next project.
          </p>
        </section>
      </main>
      
      <MadeWithDyad />
    </div>
  );
};

export default Home;