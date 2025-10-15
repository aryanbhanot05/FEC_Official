import { Link } from "react-router-dom";
import { Leaf, Zap, Users, Sprout } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import projectsData from "@/data/projects.json";
import beehiveImg from "@/assets/project-beehive.jpg";
import solarImg from "@/assets/project-solar.jpg";
import gardenImg from "@/assets/project-garden.jpg";
import youthImg from "@/assets/project-youth.jpg";

const Index = () => {
  const featuredProjects = projectsData.slice(0, 3);
  
  // Map images to projects
  const projectImages: Record<string, string> = {
    "beehive-initiative": beehiveImg,
    "solar-education": solarImg,
    "community-gardens": gardenImg,
    "youth-mentorship": youthImg,
  };

  const features = [
    {
      icon: Zap,
      title: "Clean Energy",
      description: "Supporting renewable energy initiatives and education programs across Alberta.",
    },
    {
      icon: Sprout,
      title: "Sustainable Agriculture",
      description: "Building community gardens and promoting local food production.",
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Empowering communities through collaboration and shared resources.",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Protecting biodiversity and natural ecosystems for future generations.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />

        {/* Mission Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                FEC is dedicated to fostering sustainable energy innovation, building resilient communities, and creating opportunities for youth engagement in environmental stewardship.
              </p>
              <p className="text-lg text-muted-foreground">
                Through strategic investments in research, agriculture, and technology access, we're creating a more sustainable and equitable future for all Albertans.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-card border border-border hover-lift"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <feature.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Featured Projects</h2>
                <p className="text-muted-foreground">Making a real impact in our communities</p>
              </div>
              <Button variant="outline" asChild className="hidden sm:flex">
                <Link to="/projects">View All Projects</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  image={projectImages[project.id] || project.image}
                />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild>
                <Link to="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-2xl font-serif italic text-foreground mb-6">
                "FEC's community garden program transformed our neighborhood. We're not just growing food – we're growing connections, knowledge, and hope for a sustainable future."
              </blockquote>
              <p className="text-muted-foreground font-medium">— Maria Santos, Community Garden Member</p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter for updates on projects, events, and opportunities to get involved.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  aria-label="Email address"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
