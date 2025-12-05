import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/portfolio/ContactSection";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <h1 className="text-5xl font-extrabold tracking-tight text-center mb-12">Contact Me</h1>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;