
import { useState } from "react";
import { Mail, Link, AlertTriangle, Users, Phone, MessageSquare, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PhishingEmail from "@/components/PhishingEmail";
import SuspiciousLink from "@/components/SuspiciousLink";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Scenarios = () => {
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [completedScenarios, setCompletedScenarios] = useState<string[]>([]);
  const { toast } = useToast();

  const handleScenarioComplete = (scenarioId: string, success: boolean) => {
    if (!completedScenarios.includes(scenarioId)) {
      setCompletedScenarios([...completedScenarios, scenarioId]);
      
      toast({
        title: success ? "Great job!" : "Keep practicing!",
        description: success 
          ? "You successfully identified the threat." 
          : "Don't worry, learning to spot these threats takes practice.",
        variant: success ? "default" : "destructive",
      });
    }
  };

  const resetScenario = () => {
    setActiveScenario(null);
  };

  const phishingEmailScenario = (
    <PhishingEmail
      sender="amazonn-support@amazzon-account-verify.com"
      subject="URGENT: Your Amazon Account Has Been Suspended"
      content={`
        <p>Dear Valued Customer,</p>
        <p>We regret to inform you that your Amazon account has been temporarily suspended due to suspicious activity. To restore your account access, you must verify your information immediately by clicking the link below:</p>
        <p><a href="#" className="text-blue-600 underline">Verify Account Now</a></p>
        <p>If you do not verify your account within 24 hours, it will be permanently deactivated.</p>
        <p>Thank you for your cooperation,<br />The Amazon Security Team</p>
      `}
      redFlags={[
        "The sender's email address contains typos (amazonn, amazzon)",
        "The message creates urgency to pressure you into acting quickly",
        "Generic greeting ('Valued Customer') rather than your name",
        "Poor grammar and unprofessional formatting",
        "Threatening consequences if you don't take immediate action"
      ]}
      onComplete={(success) => handleScenarioComplete("phishing-email", success)}
    />
  );

  const suspiciousLinkScenario = (
    <SuspiciousLink
      displayUrl="paypal.com/secure-login"
      actualUrl="paypa1-secure.phishingsite.com/login"
      explanation="This link appears to be from PayPal, but the actual URL is using a '1' instead of an 'l' in 'paypal' and directing to a completely different domain. Always check URLs carefully before clicking, especially when they involve financial services."
      isSafe={false}
      onComplete={(success) => handleScenarioComplete("suspicious-link", success)}
    />
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-10">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-center text-3xl font-bold md:text-4xl">Interactive Scenarios</h1>
            <p className="mb-10 text-center text-muted-foreground">
              Practice identifying social engineering attacks in a safe environment.
              Select a scenario to get started.
            </p>

            {activeScenario ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">
                    {activeScenario === "phishing-email" && "Phishing Email Scenario"}
                    {activeScenario === "suspicious-link" && "Suspicious Link Scenario"}
                  </h2>
                  <Button variant="outline" onClick={resetScenario}>
                    Choose Another Scenario
                  </Button>
                </div>

                {activeScenario === "phishing-email" && phishingEmailScenario}
                {activeScenario === "suspicious-link" && suspiciousLinkScenario}
              </div>
            ) : (
              <Tabs defaultValue="common" className="space-y-6">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                  <TabsTrigger value="common">Common Attacks</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="common" className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <button
                      onClick={() => setActiveScenario("phishing-email")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <Mail className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("phishing-email") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Phishing Email</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify red flags in a suspicious email
                      </p>
                    </button>

                    <button
                      onClick={() => setActiveScenario("suspicious-link")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <Link className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("suspicious-link") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Suspicious Link</h3>
                      <p className="text-sm text-muted-foreground">
                        Learn to spot malicious URLs before clicking
                      </p>
                    </button>
                    
                    <button
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                      disabled
                    >
                      <Users className="mb-2 h-6 w-6 text-muted-foreground" />
                      <h3 className="text-lg font-semibold text-muted-foreground">Social Media Scam</h3>
                      <p className="text-sm text-muted-foreground">
                        Coming soon...
                      </p>
                    </button>
                    
                    <button
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                      disabled
                    >
                      <Phone className="mb-2 h-6 w-6 text-muted-foreground" />
                      <h3 className="text-lg font-semibold text-muted-foreground">Phone Scam</h3>
                      <p className="text-sm text-muted-foreground">
                        Coming soon...
                      </p>
                    </button>
                  </div>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <button
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                      disabled
                    >
                      <MessageSquare className="mb-2 h-6 w-6 text-muted-foreground" />
                      <h3 className="text-lg font-semibold text-muted-foreground">Spear Phishing</h3>
                      <p className="text-sm text-muted-foreground">
                        Coming soon...
                      </p>
                    </button>
                    
                    <button
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                      disabled
                    >
                      <CreditCard className="mb-2 h-6 w-6 text-muted-foreground" />
                      <h3 className="text-lg font-semibold text-muted-foreground">Payment Fraud</h3>
                      <p className="text-sm text-muted-foreground">
                        Coming soon...
                      </p>
                    </button>
                    
                    <button
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                      disabled
                    >
                      <AlertTriangle className="mb-2 h-6 w-6 text-muted-foreground" />
                      <h3 className="text-lg font-semibold text-muted-foreground">Tech Support Scam</h3>
                      <p className="text-sm text-muted-foreground">
                        Coming soon...
                      </p>
                    </button>
                  </div>
                </TabsContent>

                <TabsContent value="completed" className="space-y-6">
                  {completedScenarios.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {completedScenarios.includes("phishing-email") && (
                        <button
                          onClick={() => setActiveScenario("phishing-email")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <Mail className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Phishing Email</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("suspicious-link") && (
                        <button
                          onClick={() => setActiveScenario("suspicious-link")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <Link className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Suspicious Link</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                    </div>
                  ) : (
                    <Alert>
                      <AlertTitle>No scenarios completed yet</AlertTitle>
                      <AlertDescription>
                        Try out some scenarios to see them appear here.
                      </AlertDescription>
                    </Alert>
                  )}
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Scenarios;
