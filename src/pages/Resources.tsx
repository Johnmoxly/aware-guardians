
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, AlertTriangle, Book, FileText, ExternalLink } from "lucide-react";

const Resources = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-10">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-center text-3xl font-bold md:text-4xl">Security Resources</h1>
            <p className="mb-10 text-center text-muted-foreground">
              Educational materials to help you understand and protect against social engineering attacks.
            </p>

            <Tabs defaultValue="guides" className="space-y-6">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="news">Recent Scams</TabsTrigger>
                <TabsTrigger value="tools">Security Tools</TabsTrigger>
              </TabsList>

              <TabsContent value="guides" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <Book className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Understanding Phishing</CardTitle>
                      <CardDescription>How to identify and avoid email scams</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Always verify the sender's email address</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Be wary of urgent requests or threats</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Check for spelling and grammar errors</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Hover over links before clicking</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Never provide personal information via email</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Shield className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Creating Strong Passwords</CardTitle>
                      <CardDescription>Best practices for secure authentication</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Use at least 12 characters</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Include numbers, symbols, and mixed case letters</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Don't use personal information</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Use a different password for each account</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Consider using a password manager</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <AlertTriangle className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Recognizing Social Media Scams</CardTitle>
                      <CardDescription>Staying safe on social platforms</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Be cautious of unsolicited friend requests</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Verify accounts before interacting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Don't click on suspicious links in messages</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Be skeptical of giveaways and contests</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Adjust privacy settings to limit public information</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <FileText className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Phone Scam Protection</CardTitle>
                      <CardDescription>How to handle suspicious calls</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Never give personal information to unknown callers</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Be wary of calls creating a sense of urgency</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Hang up and call the company directly using their official number</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Government agencies won't call asking for money</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Register your number with the Do Not Call Registry</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="news" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold">Amazon Gift Card Scam Alert</h3>
                          <span className="text-xs text-muted-foreground">June 2023</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Scammers are sending emails claiming to offer Amazon gift cards in exchange for completing a survey. The survey collects personal information and may install malware.
                        </p>
                        <div className="mt-2 flex items-center text-sm">
                          <ExternalLink className="h-4 w-4 mr-1 text-primary" />
                          <span className="text-primary">Learn more</span>
                        </div>
                      </div>

                      <div className="border-b pb-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold">Banking SMS Phishing Campaign</h3>
                          <span className="text-xs text-muted-foreground">May 2023</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Users are receiving SMS messages claiming their bank account has been locked. The messages contain links to fake websites designed to steal login credentials.
                        </p>
                        <div className="mt-2 flex items-center text-sm">
                          <ExternalLink className="h-4 w-4 mr-1 text-primary" />
                          <span className="text-primary">Learn more</span>
                        </div>
                      </div>

                      <div className="border-b pb-4">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold">COVID-19 Vaccination Appointment Scam</h3>
                          <span className="text-xs text-muted-foreground">April 2023</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Scammers are calling seniors offering COVID-19 vaccination appointments but requesting Medicare information and payment details to "reserve" the slot.
                        </p>
                        <div className="mt-2 flex items-center text-sm">
                          <ExternalLink className="h-4 w-4 mr-1 text-primary" />
                          <span className="text-primary">Learn more</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-semibold">Cryptocurrency Investment Fraud</h3>
                          <span className="text-xs text-muted-foreground">March 2023</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Investors are being targeted with fake cryptocurrency investment opportunities promising unrealistic returns. The scammers disappear after receiving initial investments.
                        </p>
                        <div className="mt-2 flex items-center text-sm">
                          <ExternalLink className="h-4 w-4 mr-1 text-primary" />
                          <span className="text-primary">Learn more</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tools" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password Managers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Password managers help you create and store strong, unique passwords for all your accounts.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>LastPass</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>1Password</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Bitwarden</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Dashlane</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Antivirus Software</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Protect your devices from malware that might be installed through phishing attacks.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Norton</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>McAfee</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Bitdefender</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Avast</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Two-Factor Authentication Apps</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Add an extra layer of security to your accounts by requiring a second form of verification.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Google Authenticator</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Microsoft Authenticator</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Authy</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Duo Mobile</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Email Filtering Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        These tools help identify and filter phishing attempts from your inbox.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>SpamSieve</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>MailWasher</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Barracuda</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-0.5 text-primary">•</span>
                          <span>Proofpoint</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
