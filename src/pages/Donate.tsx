import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const Donate = () => {
  const [amount, setAmount] = useState("50");
  const [frequency, setFrequency] = useState("one-time");
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = ["25", "50", "100", "250"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const donationAmount = customAmount || amount;
    toast.success(`Thank you for your ${frequency === "monthly" ? "monthly" : "one-time"} donation of $${donationAmount}!`);
  };

  const impactExamples = [
    { amount: "$25", impact: "Provides seeds and tools for one community garden plot" },
    { amount: "$50", impact: "Supports one student in our Youth Energy Leadership program" },
    { amount: "$100", impact: "Funds educational workshops for 20 participants" },
    { amount: "$250", impact: "Helps install solar panels for hands-on learning" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-earth py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="h-16 w-16 text-accent mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Support Our Mission</h1>
              <p className="text-xl text-muted-foreground">
                Your donation powers sustainable energy projects, community development, and environmental education across Alberta
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Make a Donation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Frequency */}
                <div>
                  <Label className="mb-3 block">Donation Type</Label>
                  <RadioGroup value={frequency} onValueChange={setFrequency}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="one-time" id="one-time" />
                      <Label htmlFor="one-time" className="cursor-pointer">One-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly" className="cursor-pointer">Monthly (recurring)</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="mb-3 block">Select Amount</Label>
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    {presetAmounts.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => {
                          setAmount(preset);
                          setCustomAmount("");
                        }}
                        className={`py-3 rounded-lg border-2 transition-colors ${
                          amount === preset && !customAmount
                            ? "border-accent bg-accent/10"
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        ${preset}
                      </button>
                    ))}
                  </div>
                  <Input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    min="1"
                  />
                </div>

                {/* Donor Info */}
                <div>
                  <Label htmlFor="donor-name">Full Name</Label>
                  <Input id="donor-name" required />
                </div>
                <div>
                  <Label htmlFor="donor-email">Email Address</Label>
                  <Input id="donor-email" type="email" required />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Donate ${customAmount || amount}
                  {frequency === "monthly" ? "/month" : ""}
                </Button>
              </form>

              {/* Trust Badges */}
              <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                  <h3 className="font-semibold">Secure & Trusted</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your donation is secure and will be used to support community-led sustainable energy projects. Tax receipts provided for all donations.
                </p>
              </div>
            </div>

            {/* Impact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Your Impact</h2>
              <div className="space-y-6">
                {impactExamples.map((example, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border border-border">
                    <div className="text-2xl font-bold text-accent mb-2">{example.amount}</div>
                    <p className="text-muted-foreground">{example.impact}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-accent" />
                  <h3 className="font-semibold">How Donations Help</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fund community garden infrastructure and supplies</li>
                  <li>• Provide scholarships for youth leadership programs</li>
                  <li>• Support renewable energy education initiatives</li>
                  <li>• Enable research and innovation in sustainable practices</li>
                  <li>• Build partnerships with Indigenous communities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
