import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import teamData from "@/data/team.json";

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-earth py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Team</h1>
              <p className="text-xl text-muted-foreground">
                Passionate individuals dedicated to building a sustainable future for Alberta
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamData.map((member) => (
                <div
                  key={member.id}
                  className="bg-card rounded-xl overflow-hidden border border-border hover-lift"
                >
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center text-4xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Contact
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for passionate individuals who want to make a difference. Check out our current opportunities or get in touch to learn more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent/5 transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
