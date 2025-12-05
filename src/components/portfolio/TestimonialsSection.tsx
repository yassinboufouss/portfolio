import React from "react";
import TestimonialCard from "@/components/portfolio/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    quote: "Yassin delivered an exceptional full-stack application ahead of schedule. His expertise in React and Node.js is truly impressive.",
    name: "Alex Johnson",
    title: "CTO, Tech Innovators Inc.",
    avatarUrl: "/placeholder.svg",
  },
  {
    quote: "Working with Yassin was a pleasure. He is a meticulous developer who pays close attention to detail and performance.",
    name: "Maria Rodriguez",
    title: "Product Manager, Global Solutions",
    avatarUrl: "/placeholder.svg",
  },
  {
    quote: "The performance improvements he implemented drastically reduced our load times. Highly recommend his services for complex web projects.",
    name: "David Lee",
    title: "Lead Engineer, DataStream Co.",
    avatarUrl: "/placeholder.svg",
  },
  {
    quote: "A true professional. Yassin's ability to handle complex state management and API integrations made our project a success.",
    name: "Sarah Chen",
    title: "Founder, Startup X",
    avatarUrl: "/placeholder.svg",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          What Clients Say
        </h2>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <TestimonialCard {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;