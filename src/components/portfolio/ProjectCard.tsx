import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, liveUrl, githubUrl, imageUrl }) => {
  return (
    <Card className="flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:border-primary/70 hover:-translate-y-1">
      {imageUrl && (
        <div className="overflow-hidden rounded-t-lg">
          <AspectRatio ratio={16 / 9}>
            <img 
              src={imageUrl} 
              alt={`Preview of ${title}`} 
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </AspectRatio>
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start space-x-2 pt-0">
        {liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button variant="ghost" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;