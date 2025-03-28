
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, LineChart, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-10">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold md:text-4xl">About SecureAware</h1>
              <p className="mt-4 text-muted-foreground">
                Our mission is to protect users from social engineering attacks through interactive education.
              </p>
            </div>
            
            <Card className="mb-10">
              <CardContent className="pt-6">
                <div className="prose max-w-none">
                  <p>
                    SecureAware is an interactive educational platform designed to help individuals recognize and avoid social engineering attacks. In today's digital world, cybercriminals increasingly target human psychology rather than technical vulnerabilities, making awareness the first line of defense.
                  </p>
                  
                  <p>
                    Our tool provides realistic simulations of common social engineering tactics, from phishing emails to suspicious links, allowing users to experience these threats in a safe environment. Each scenario includes immediate feedback and explanations, helping users learn to spot red flags before they encounter them in real life.
                  </p>
                  
                  <p>
                    We've designed SecureAware with accessibility in mind, making cybersecurity education approachable for everyone, regardless of technical expertise. Our special focus on older adults and those with limited technical experience ensures that those most vulnerable to such attacks have resources tailored to their needs.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <h2 className="mb-6 text-2xl font-bold text-center">Why Social Engineering Awareness Matters</h2>
            
            <div className="grid gap-6 mb-10 md:grid-cols-2">
              <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <Shield className="mb-4 h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Growing Threat</h3>
                <p className="text-muted-foreground">
                  Social engineering attacks have increased by over 300% in the last five years, becoming one of the primary vectors for security breaches.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <Users className="mb-4 h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Human Vulnerability</h3>
                <p className="text-muted-foreground">
                  Even with strong technical security measures, human decisions remain the weakest link in the security chain.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <LineChart className="mb-4 h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Financial Impact</h3>
                <p className="text-muted-foreground">
                  The average cost of a successful social engineering attack exceeds $130,000 for small businesses and can be devastating for individuals.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <BookOpen className="mb-4 h-10 w-10 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Education Works</h3>
                <p className="text-muted-foreground">
                  Studies show that interactive security awareness training can reduce susceptibility to social engineering by up to 70%.
                </p>
              </div>
            </div>
            
            <h2 className="mb-6 text-2xl font-bold text-center">Our Approach</h2>
            
            <Card className="mb-10">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold">Interactive Learning</h3>
                      <p className="text-sm text-muted-foreground">
                        Our scenarios simulate real-world social engineering attacks, allowing users to practice identifying threats in a safe environment.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold">Immediate Feedback</h3>
                      <p className="text-sm text-muted-foreground">
                        Each scenario provides instant feedback, explaining the red flags and how to recognize similar attacks in the future.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold">Accessible Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Our interface is designed for users of all technical abilities, with a focus on clarity and ease of use.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold">Practical Resources</h3>
                      <p className="text-sm text-muted-foreground">
                        Beyond scenarios, we provide educational resources and tools to help users stay safe online.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <p className="mt-2">
                <a href="mailto:contact@secureaware.example.com" className="text-primary hover:underline">
                  contact@secureaware.example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
