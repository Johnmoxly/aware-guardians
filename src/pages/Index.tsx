
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Mail, Shield, Link, Users, HelpCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScenarioCard from "@/components/ScenarioCard";
import SecurityTipCard from "@/components/SecurityTipCard";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("scenarios");

  const handleScenarioClick = (scenario: string) => {
    // In a full implementation, we would navigate to a specific scenario
    // For now, we'll just show an alert
    console.log(`Starting scenario: ${scenario}`);
    navigate("/scenarios");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="container space-y-6 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Stay Safe from Social Engineering
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Learn to identify and protect yourself from common social engineering attacks through interactive scenarios and practical tips.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => navigate("/scenarios")}>
                Try Interactive Scenarios
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/resources")}>
                View Resources
              </Button>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16">
          <div className="container">
            <Tabs defaultValue="scenarios" value={activeTab} onValueChange={setActiveTab} className="mx-auto max-w-4xl">
              <div className="mb-8 text-center">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                  <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
                  <TabsTrigger value="tips">Security Tips</TabsTrigger>
                  <TabsTrigger value="about">About</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="scenarios" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold">Interactive Scenarios</h2>
                  <p className="mt-2 text-muted-foreground">
                    Test your knowledge with realistic social engineering scenarios
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <ScenarioCard
                    title="Phishing Email"
                    description="Learn to identify suspicious emails"
                    difficulty="easy"
                    icon={Mail}
                    onClick={() => handleScenarioClick("phishing-email")}
                  />
                  
                  <ScenarioCard
                    title="Suspicious Links"
                    description="Spot malicious URLs before clicking"
                    difficulty="medium"
                    icon={Link}
                    onClick={() => handleScenarioClick("suspicious-links")}
                  />
                  
                  <ScenarioCard
                    title="Social Media Scams"
                    description="Identify scams on social platforms"
                    difficulty="medium"
                    icon={Users}
                    onClick={() => handleScenarioClick("social-media")}
                  />
                </div>
              </TabsContent>

              <TabsContent value="tips" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold">Security Tips</h2>
                  <p className="mt-2 text-muted-foreground">
                    Practical advice to help protect yourself from social engineering attacks
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <SecurityTipCard
                    title="Verify the Sender"
                    description="Always check email addresses carefully, even if the display name looks familiar."
                    icon={Mail}
                  />
                  
                  <SecurityTipCard
                    title="Hover Before Clicking"
                    description="Hover over links to see where they actually lead before clicking them."
                    icon={Link}
                  />
                  
                  <SecurityTipCard
                    title="Be Skeptical"
                    description="If an offer seems too good to be true or creates a sense of urgency, be extra cautious."
                    icon={AlertTriangle}
                  />
                  
                  <SecurityTipCard
                    title="Use Strong Passwords"
                    description="Create unique, complex passwords for each of your accounts."
                    icon={Shield}
                  />
                  
                  <SecurityTipCard
                    title="Enable 2FA"
                    description="Turn on two-factor authentication for all accounts that offer it."
                    icon={HelpCircle}
                  />
                  
                  <SecurityTipCard
                    title="Stay Updated"
                    description="Keep your devices and software updated with the latest security patches."
                    icon={Bell}
                  />
                </div>
              </TabsContent>

              <TabsContent value="about" className="space-y-8">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="text-3xl font-bold">About This Tool</h2>
                  <p className="mt-4 text-muted-foreground">
                    SecureAware is an interactive learning platform designed to help people recognize and avoid social engineering attacks. Our mission is to make cybersecurity education accessible, engaging, and effective for everyone.
                  </p>
                  
                  <Card className="mt-8">
                    <CardContent className="pt-6">
                      <div className="prose max-w-none">
                        <h3>Why Social Engineering Awareness Matters</h3>
                        <p>
                          Social engineering attacks target human psychology rather than technical vulnerabilities. By manipulating emotions like fear, curiosity, or trust, attackers trick people into divulging sensitive information or taking harmful actions.
                        </p>
                        <p>
                          These attacks are increasingly sophisticated and can affect anyone, regardless of technical expertise. Our interactive scenarios are designed to help you experience these attacks in a safe environment, learning to recognize the warning signs before encountering them in real life.
                        </p>
                        <h3>Who This Tool Is For</h3>
                        <p>
                          SecureAware is designed for everyone, with a particular focus on making cybersecurity accessible to older adults and those with limited technical experience. Our approach emphasizes practical, real-world scenarios rather than technical jargon.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-muted py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold">Ready to Test Your Knowledge?</h2>
            <p className="mt-4 text-muted-foreground mx-auto max-w-2xl">
              Try our interactive scenarios to see if you can spot common social engineering tactics. Each scenario provides immediate feedback to help you learn and improve.
            </p>
            <Button size="lg" className="mt-6" onClick={() => navigate("/scenarios")}>
              Start Learning Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
