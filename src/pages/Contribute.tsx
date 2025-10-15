import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HandHeart, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contribute = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll be in touch soon.");
    setFormData({ name: "", email: "", interest: "", message: "" });
  };

  const opportunities = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Join our community events, garden days, and educational workshops. Whether you have a few hours a month or can commit to regular involvement, we have opportunities that match your schedule.",
      action: "Sign Up to Volunteer",
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "We collaborate with businesses, non-profits, and government agencies to amplify our impact. Partner with us to support sustainable energy projects and community development.",
      action: "Explore Partnerships",
    },
    {
      icon: GraduationCap,
      title: "Student Sponsorships",
      description: "Support the next generation of environmental leaders through our youth mentorship and education programs. Your sponsorship creates pathways to green careers.",
      action: "Sponsor a Student",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-earth py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get Involved</h1>
              <p className="text-xl text-muted-foreground">
                Join us in building sustainable communities and creating lasting environmental impact
              </p>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {opportunities.map((opp, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover-lift text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                    <opp.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{opp.title}</h3>
                  <p className="text-muted-foreground mb-6">{opp.description}</p>
                  <Button className="w-full">{opp.action}</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Express Your Interest</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you with more information about how you can contribute
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="interest">Area of Interest</Label>
                  <Input
                    id="interest"
                    placeholder="e.g., Volunteering, Partnerships, Sponsorship"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Tell Us More</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Share your background, interests, and how you'd like to contribute..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contribute;
