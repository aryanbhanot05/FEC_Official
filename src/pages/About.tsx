import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Who We Are",
      description: "FEC is a community-driven foundation committed to advancing sustainable energy solutions and environmental stewardship across Alberta. Founded by passionate advocates for clean energy and social equity, we work at the intersection of innovation, education, and community development.",
    },
    {
      icon: Eye,
      title: "What We Do",
      description: "We support grassroots projects, provide educational resources, and build partnerships that empower communities to take action on climate change. From urban beekeeping to solar education, our initiatives create tangible impact while building local capacity.",
    },
    {
      icon: Heart,
      title: "Why We Exist",
      description: "We believe that sustainable energy transitions must be inclusive, just, and community-led. Our work addresses both environmental challenges and social inequities, ensuring that clean energy benefits reach all Albertans, especially those most affected by climate change.",
    },
  ];

  const impactStats = [
    { number: "25+", label: "Active Projects" },
    { number: "500+", label: "Community Members" },
    { number: "15", label: "Partner Organizations" },
    { number: "100k+", label: "Lives Impacted" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-earth py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">About FEC</h1>
              <p className="text-xl text-muted-foreground">
                Building a sustainable future through community-led innovation and environmental stewardship
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission & Vision</h2>
              <p className="text-lg text-muted-foreground text-center mb-12">
                To foster sustainable energy innovation, build resilient communities, and create pathways for youth engagement in environmental leadership. We envision an Alberta where clean energy access, environmental justice, and community prosperity go hand in hand.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 border border-border">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                      <value.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Strategic Focus Areas</h2>
              <div className="space-y-8">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-2xl font-semibold mb-3">Research & Innovation</h3>
                  <p className="text-muted-foreground">
                    We invest in cutting-edge renewable energy research, supporting both academic institutions and grassroots innovators developing practical solutions for Alberta's unique energy landscape.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-2xl font-semibold mb-3">Sustainable Agriculture</h3>
                  <p className="text-muted-foreground">
                    Our agriculture programs combine traditional knowledge with modern techniques, supporting urban gardens, regenerative farming practices, and local food security initiatives.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-2xl font-semibold mb-3">Technology Access & Education</h3>
                  <p className="text-muted-foreground">
                    We democratize access to clean technology through hands-on education programs, ensuring that all communities can participate in and benefit from the energy transition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
