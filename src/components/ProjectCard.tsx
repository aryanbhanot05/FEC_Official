import { Link } from "react-router-dom";
import { MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  date: string;
}

const ProjectCard = ({ id, title, description, image, category, location, date }: ProjectCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover-lift">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
        <Button variant="outline" asChild className="w-full">
          <Link to={`/projects/${id}`}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
