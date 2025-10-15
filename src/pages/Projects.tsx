import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import beehiveImg from "@/assets/project-beehive.jpg";
import solarImg from "@/assets/project-solar.jpg";
import gardenImg from "@/assets/project-garden.jpg";
import youthImg from "@/assets/project-youth.jpg";

const Projects = () => {
  const projectImages: Record<string, string> = {
    "beehive-initiative": beehiveImg,
    "solar-education": solarImg,
    "community-gardens": gardenImg,
    "youth-mentorship": youthImg,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-earth py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-muted-foreground">
                Discover how we're creating sustainable change across Alberta through community-led initiatives
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  image={projectImages[project.id] || project.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
