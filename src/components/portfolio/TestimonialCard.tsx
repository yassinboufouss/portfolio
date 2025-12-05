import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatarUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, avatarUrl }) => {
  return (
    <Card className="h-full flex flex-col justify-between p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader className="p-0 mb-4">
        <Quote className="h-8 w-8 text-primary opacity-70" />
      </CardHeader>
      <CardContent className="flex-grow p-0">
        <p className="text-lg italic text-foreground/90">
          "{quote}"
        </p>
      </CardContent>
      <CardFooter className="flex items-center p-0 mt-6">
        <Avatar className="h-12 w-12 border-2 border-primary/50">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="ml-4 text-left">
          <p className="font-semibold text-base">{name}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;