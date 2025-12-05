import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AboutSection from "@/components/portfolio/AboutSection";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import TypingEffectTitle from "@/components/portfolio/TypingEffectTitle";

const Home = () => {
  const titleText = "Hi, I'm Yassin Boufous.";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-24 text-center max-w-4xl">
          <div className="animate-in fade-in slide-in-from-top-4 duration-700">
            <TypingEffectTitle text={titleText} />
          </div>
          <div className="animate-in fade-in slide-in-from-top-4 duration-700 delay-150">
            <p className="text-xl md:text-2xl text-muted-foreground mb-10">
              A passionate developer building modern, interactive, and visually stunning web applications.
            </p>
          </div>
          <div className="animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="group" asChild>
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;