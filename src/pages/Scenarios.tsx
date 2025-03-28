import { useState } from "react";
import { 
  Mail, 
  Link as LinkIcon, 
  AlertTriangle, 
  Users, 
  Phone, 
  MessageSquare, 
  CreditCard,
  Clock,
  HelpCircle,
  Info,
  Smartphone,
  UserRound,
  Usb,
  Lock,
  BadgeDollarSign
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PhishingEmail from "@/components/PhishingEmail";
import SuspiciousLink from "@/components/SuspiciousLink";
import SocialMediaScam from "@/components/SocialMediaScam";
import PhoneScam from "@/components/PhoneScam";
import SpearPhishing from "@/components/SpearPhishing";
import PaymentFraud from "@/components/PaymentFraud";
import TechSupportScam from "@/components/TechSupportScam";
import TechConfusionScam from "@/components/TechConfusionScam";
import LotteryScam from "@/components/LotteryScam";
import HealthProductScam from "@/components/HealthProductScam";
import Smishing from "@/components/Smishing";
import Pretexting from "@/components/Pretexting";
import BaitingAttack from "@/components/BaitingAttack";
import WhalingAttack from "@/components/WhalingAttack";
import RansomwareSimulation from "@/components/RansomwareSimulation";
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

  const socialMediaScamScenario = (
    <SocialMediaScam
      profileName="John Williams"
      username="johnwilliams_official"
      postContent={`
        <p>ATTENTION ALL FOLLOWERS! I've partnered with Amazon for a special giveaway! 🎉</p>
        <p>I'm giving away 50 brand new iPhones to my loyal followers! To claim yours:</p>
        <ol>
          <li>Like and share this post</li>
          <li>Click the link in my bio</li>
          <li>Enter your personal information to verify identity</li>
          <li>Pay a small $4.99 shipping fee</li>
        </ol>
        <p>Hurry! Only 5 phones left! This offer expires TODAY! 🔥🔥🔥</p>
        <p><a href="#" class="text-blue-600 underline">Claim Your Free iPhone Now!</a></p>
      `}
      redFlags={[
        "Offers that seem too good to be true (free expensive items)",
        "Creates a false sense of urgency with limited quantities and time",
        "Requires personal information that shouldn't be needed for a giveaway",
        "Requests payment for a supposedly 'free' item",
        "Uses excessive emojis and exclamation marks to create excitement",
        "The profile may be impersonating someone famous (check for verification)"
      ]}
      onComplete={(success) => handleScenarioComplete("social-media-scam", success)}
    />
  );

  const phoneScamScenario = (
    <PhoneScam
      callerName="IRS Tax Department"
      phoneNumber="(888) 555-1234"
      callScript={[
        "Hello, this is Agent Wilson from the IRS Tax Department. I'm calling regarding an urgent matter with your tax returns.",
        "Hello, what's this about? I filed my taxes on time.",
        "Our records indicate you have unpaid taxes from 2019-2021 and there's currently a lawsuit filed against you. The local authorities have been notified and will arrive at your residence within the hour for arrest unless payment is arranged immediately.",
        "What? That can't be right. I've never had issues with my taxes before.",
        "This is your final warning. To avoid arrest and additional penalties, you must make an immediate payment of $2,987 using gift cards or a wire transfer. I can guide you through the process now.",
        "Gift cards? Why would the IRS accept gift cards as payment?",
        "It's a new emergency procedure for urgent cases. I need you to stay on the line while you drive to the nearest store to purchase these cards. Do not tell anyone why you're buying them - this is a confidential tax matter."
      ]}
      redFlags={[
        "Government agencies like the IRS never initiate contact by phone for tax issues",
        "Creating fear and urgency by threatening immediate arrest",
        "Requesting payment through unusual methods like gift cards",
        "Insistence on staying on the phone while you get the payment method",
        "Warning you not to tell others what you're doing",
        "Poor grammar or unusual speech patterns may be present",
        "The caller ID may show a seemingly legitimate number (spoofed)"
      ]}
      onComplete={(success) => handleScenarioComplete("phone-scam", success)}
    />
  );

  const spearPhishingScenario = (
    <SpearPhishing
      sender="hr-benefits@technovation-global.net"
      subject="Urgent: Benefits Update Required - Response Needed by EOD"
      content={`
        <p>Hello,</p>
        <p>I hope you're doing well after the company retreat last month in Colorado. It was great to see you at the team building activities!</p>
        <p>As discussed in yesterday's all-hands meeting, we're updating our benefits portal for the upcoming enrollment period. As part of the IT department, you have priority access to the new system.</p>
        <p>Please review and update your information by end of day. This requires your network credentials to verify your identity before making changes. Our CEO, Mark Reynolds, has emphasized the importance of completing this promptly.</p>
        <p><a href="#" class="text-blue-600 underline">Access Benefits Portal</a></p>
        <p>If you have any questions, don't hesitate to reach out.</p>
        <p>Best regards,</p>
        <p>Jennifer Parker<br>Human Resources Director<br>Technovation Global Inc.</p>
      `}
      companyInfo={{
        name: "Technovation Global Inc.",
        role: "IT Security Specialist"
      }}
      personalDetails={[
        "Knowledge of your recent company retreat location (Colorado)",
        "Reference to your department (IT)",
        "Knowledge of an all-hands meeting",
        "Correct CEO name (Mark Reynolds)",
        "Using professional HR terminology appropriate for your company"
      ]}
      redFlags={[
        "The email domain doesn't match your company's official domain (technovation-global.net vs technovation.com)",
        "Creating urgency with 'Response Needed by EOD'",
        "Requesting network credentials that HR wouldn't typically need",
        "Link destination doesn't lead to your company's actual benefits portal",
        "Uses specific details about you and your company to appear legitimate",
        "Uses authority (CEO name) to pressure compliance"
      ]}
      onComplete={(success) => handleScenarioComplete("spear-phishing", success)}
    />
  );

  const paymentFraudScenario = (
    <PaymentFraud
      merchantName="ExclusiveDeals Market"
      totalAmount="$19.99"
      paymentDetails={{
        description: "Premium Subscription - Lifetime Access",
        originalPrice: "$499.99",
        discountedPrice: "$19.99"
      }}
      redFlags={[
        "Unrealistic discounts (from $499.99 to $19.99)",
        "Creates urgency with time-limited offers and countdowns",
        "Merchant name is generic and unfamiliar",
        "No detailed contact information or verifiable business address",
        "Website URL may be slightly misspelled or use unusual domains (.co, .net instead of .com)",
        "Poor design, spelling errors, or unprofessional appearance",
        "No secure payment indicators (HTTPS, padlock icon)",
        "Lack of privacy policy or terms of service"
      ]}
      onComplete={(success) => handleScenarioComplete("payment-fraud", success)}
    />
  );

  const techSupportScamScenario = (
    <TechSupportScam
      alertTitle="SYSTEM SECURITY ALERT"
      alertMessage="Your computer has been infected with dangerous malware. Call our technicians immediately!"
      supportNumber="1-888-555-9876"
      technicalDetails={[
        "ERROR_MALWARE_DETECTED: Trojan.FakeAlert.Win32",
        "SYSTEM_SCAN: 3 threats detected, severity level: CRITICAL",
        "IP_ADDRESS: 192.168.1.1 has been COMPROMISED",
        "PERSONAL_DATA: Banking information at risk of theft",
        "SYSTEM_REGISTRY: Multiple corrupted keys detected"
      ]}
      redFlags={[
        "Unsolicited pop-ups claiming to have detected viruses or malware",
        "Scare tactics and urgent language to create panic",
        "Providing a phone number to call for 'immediate assistance'",
        "Use of technical jargon to appear legitimate",
        "Claims that your personal data is at immediate risk",
        "Alert windows that can't be easily closed",
        "Poor grammar and spelling in supposedly 'official' messages",
        "Legitimate tech companies never use pop-ups with phone numbers"
      ]}
      onComplete={(success) => handleScenarioComplete("tech-support-scam", success)}
    />
  );

  const techConfusionScamScenario = (
    <TechConfusionScam
      serviceName="Windows Security Team"
      problem="Your computer has a dangerous virus! It is sending your personal information to hackers. You need immediate help!"
      supportNumber="1-800-555-1234"
      redFlags={[
        "Sudden popups claiming your computer has a virus",
        "Creating fear and urgency with alarming messages",
        "Providing a phone number to call for 'immediate help'",
        "Mentioning well-known companies like Microsoft or Windows to seem legitimate",
        "Using technical terms to confuse less tech-savvy users",
        "Requesting remote access to your computer",
        "Asking for payment to fix the 'problem'"
      ]}
      onComplete={(success) => handleScenarioComplete("tech-confusion-scam", success)}
    />
  );

  const lotteryScamScenario = (
    <LotteryScam
      prizeName="International Sweepstakes Award"
      prizeAmount="$2,500,000.00 USD"
      deadline="May 15, 2023 (48 hours remaining)"
      contactPerson="Mr. James Wilson, Claims Officer"
      contactEmail="claims-office@sweepstakes-intl.net"
      redFlags={[
        "You're notified of winning a lottery or sweepstakes you never entered",
        "The notification creates urgency with a tight deadline",
        "Poor grammar or unprofessional formatting",
        "The email address domain doesn't match the supposed organization",
        "Requests for personal information like bank details or ID",
        "Requires payment of fees before receiving your 'prize'",
        "The offer seems too good to be true"
      ]}
      onComplete={(success) => handleScenarioComplete("lottery-scam", success)}
    />
  );

  const healthProductScamScenario = (
    <HealthProductScam
      productName="MiracleFlex Joint Formula"
      medicalClaims={[
        "Eliminates joint pain in just 7 days!",
        "Rebuilds damaged cartilage naturally",
        "Works better than prescription medications",
        "Doctor-recommended secret formula",
        "Cures arthritis, rheumatism, and other conditions"
      ]}
      specialOffer="Buy 1 bottle for $89.99 and get 2 FREE! Limited supply - only 13 bottles left!"
      testimonial={{
        name: "Margaret Johnson",
        age: "78",
        quote: "I've suffered from terrible joint pain for 15 years. After just one week of MiracleFlex, I can walk, garden and play with my grandchildren again! The doctors were amazed!"
      }}
      redFlags={[
        "Making miraculous claims about curing health conditions",
        "Promising results that seem too good to be true",
        "Creating false urgency with 'limited time' or 'limited supply' offers",
        "Using testimonials that can't be verified",
        "Mentioning 'secret formulas' or 'breakthroughs' that mainstream medicine doesn't know about",
        "Claiming to be better than prescription medications",
        "Fine print disclaimer contradicting the main claims",
        "High-priced products with 'free' bonus offers"
      ]}
      onComplete={(success) => handleScenarioComplete("health-product-scam", success)}
    />
  );

  const smishingScenario = (
    <Smishing
      senderNumber="+1 (833) 555-2390"
      messageContent={`ALERT: Your Netflix account has been suspended. To reactivate your account and avoid additional charges, verify your payment information now: http://netflix-account-verify.tk/login`}
      redFlags={[
        "Sends urgency-based message about account problems",
        "Uses a suspicious domain (.tk instead of .com)",
        "Contains shortened or suspicious URLs",
        "Requests payment or account information via text",
        "Mentions financial consequences to create fear",
        "Comes from an unrecognized phone number"
      ]}
      onComplete={(success) => handleScenarioComplete("smishing", success)}
    />
  );

  const pretextingScenario = (
    <Pretexting
      scenario="You receive a call from someone claiming to be from your company's IT department. They explain that there's been a security breach and they need to verify your account credentials immediately."
      callerIdentity="Mark - IT Department"
      conversationSteps={[
        "Hello, this is Mark from the IT department. We've detected some suspicious login attempts to our company systems from an overseas location.",
        "Hi Mark, what's going on? Is my account affected?",
        "Yes, your account might be compromised. We need to verify your identity before we can secure it. Could you confirm your username and password for our records?",
        "I'm not sure I should share my password over the phone. Is there another way to verify my identity?",
        "We're in an emergency situation and need to act fast. This is our standard procedure. Your CEO has authorized this emergency protocol. If you don't verify now, we'll have to disable your account completely.",
        "I still don't feel comfortable sharing my password. Maybe I should call the IT helpdesk back using the company directory number?"
      ]}
      redFlags={[
        "Requesting credentials over the phone is against standard security protocols",
        "Creating a sense of urgency to pressure quick decisions",
        "Mentioning authority figures (CEO) to encourage compliance",
        "Threatening negative consequences if you don't comply",
        "Caller contacted you rather than you contacting official support",
        "Unable to verify the caller's actual identity"
      ]}
      onComplete={(success) => handleScenarioComplete("pretexting", success)}
    />
  );

  const baitingAttackScenario = (
    <BaitingAttack
      scenarioTitle="Free Movie Download"
      scenarioDescription="You've found a website offering free downloads of movies still in theaters."
      baitType="download"
      baitDetails={`EXCLUSIVE ACCESS! Download the latest Hollywood blockbusters for FREE!
      
      • No subscription required
      • HD quality guaranteed
      • Movies still in theaters
      • Just download our special video player to access
      
      DOWNLOAD NOW: MovieUnlockerPro.exe (13.5 MB)
      
      *By downloading, you agree to install our recommended browser extension and toolbar.`}
      redFlags={[
        "Offers content that would normally cost money for free",
        "Requires downloading a special software to access content",
        "Movies still in theaters are not legally available for download",
        "Contains hidden agreements to install additional software",
        "Executable file download (.exe) instead of a video file",
        "Poor grammar or unprofessional appearance",
        "Website lacks proper contact information or privacy policy"
      ]}
      onComplete={(success) => handleScenarioComplete("baiting-attack", success)}
    />
  );

  const whalingAttackScenario = (
    <WhalingAttack
      sender="Sandra Miller"
      senderTitle="Chief Financial Officer"
      recipient="James Wilson"
      recipientTitle="Chief Executive Officer"
      subject="URGENT: Time-sensitive wire transfer needed"
      content={`
        <p>James,</p>
        <p>I hope this email finds you well despite the short notice. I'm currently in a confidential meeting with potential investors that could significantly benefit our Q4 results.</p>
        <p>We need to make an immediate wire transfer of $457,000 to secure this opportunity. Due to the sensitive nature of the deal, please keep this matter strictly confidential until the official announcement next week.</p>
        <p>Banking details:</p>
        <ul>
          <li>Bank: International Commerce Bank</li>
          <li>Account Name: Global Investment Partners</li>
          <li>Account Number: 7592301458</li>
          <li>SWIFT: INTCOM452</li>
        </ul>
        <p>Please confirm when this has been processed as the investors are waiting for our commitment.</p>
        <p>Thanks for your immediate attention to this matter.</p>
        <p>Sandra</p>
        <p><i>Sent from my iPhone</i></p>
      `}
      urgency="high"
      redFlags={[
        "Creating extreme urgency for a large financial transaction",
        "Requesting unusual confidentiality about the transaction",
        "Unusual timing or circumstances (executive supposedly in meetings)",
        "Bypassing normal financial approval processes",
        "Attempt to invoke authority of executive positions",
        "Contains details that can't be easily verified immediately",
        "May have subtle differences from the actual executive's email address",
        "The email might use 'sent from mobile device' to explain errors or brevity"
      ]}
      onComplete={(success) => handleScenarioComplete("whaling-attack", success)}
    />
  );

  const ransomwareSimulationScenario = (
    <RansomwareSimulation
      ransonAmaunt="$3,500 in Bitcoin"
      timeLimit="48 hours"
      redFlags={[
        "Unexpected file access slowdowns or unusual system behavior",
        "Unusual network activity on your device",
        "Files with changed extensions (like .encrypted, .locked, .crypto)",
        "Ransom notes as text files or desktop backgrounds",
        "Inability to open normal files",
        "Suspicious email attachments or links clicked recently"
      ]}
      preventionTips={[
        "Keep regular backups of important files (offline)",
        "Keep your operating system and software updated",
        "Use reputable antivirus and anti-malware software",
        "Be cautious with email attachments and links",
        "Use strong spam filters and email security",
        "Implement network segmentation in business environments",
        "Use principle of least privilege for system access",
        "Train employees/family members to recognize threats"
      ]}
      onComplete={(success) => handleScenarioComplete("ransomware-simulation", success)}
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
                    {activeScenario === "social-media-scam" && "Social Media Scam Scenario"}
                    {activeScenario === "phone-scam" && "Phone Scam Scenario"}
                    {activeScenario === "spear-phishing" && "Spear Phishing Scenario"}
                    {activeScenario === "payment-fraud" && "Payment Fraud Scenario"}
                    {activeScenario === "tech-support-scam" && "Tech Support Scam Scenario"}
                    {activeScenario === "tech-confusion-scam" && "Computer Virus Alert Scenario"}
                    {activeScenario === "lottery-scam" && "Lottery Prize Scenario"}
                    {activeScenario === "health-product-scam" && "Health Product Advertisement Scenario"}
                    {activeScenario === "smishing" && "SMS Phishing (Smishing) Scenario"}
                    {activeScenario === "pretexting" && "Pretexting Attack Scenario"}
                    {activeScenario === "baiting-attack" && "Baiting Attack Scenario"}
                    {activeScenario === "whaling-attack" && "Whaling Attack Scenario"}
                    {activeScenario === "ransomware-simulation" && "Ransomware Attack Simulation"}
                  </h2>
                  <Button variant="outline" onClick={resetScenario}>
                    Choose Another Scenario
                  </Button>
                </div>

                {activeScenario === "phishing-email" && phishingEmailScenario}
                {activeScenario === "suspicious-link" && suspiciousLinkScenario}
                {activeScenario === "social-media-scam" && socialMediaScamScenario}
                {activeScenario === "phone-scam" && phoneScamScenario}
                {activeScenario === "spear-phishing" && spearPhishingScenario}
                {activeScenario === "payment-fraud" && paymentFraudScenario}
                {activeScenario === "tech-support-scam" && techSupportScamScenario}
                {activeScenario === "tech-confusion-scam" && techConfusionScamScenario}
                {activeScenario === "lottery-scam" && lotteryScamScenario}
                {activeScenario === "health-product-scam" && healthProductScamScenario}
                {activeScenario === "smishing" && smishingScenario}
                {activeScenario === "pretexting" && pretextingScenario}
                {activeScenario === "baiting-attack" && baitingAttackScenario}
                {activeScenario === "whaling-attack" && whalingAttackScenario}
                {activeScenario === "ransomware-simulation" && ransomwareSimulationScenario}
              </div>
            ) : (
              <Tabs defaultValue="common" className="space-y-6">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
                  <TabsTrigger value="common">Common</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                  <TabsTrigger value="seniors">For Seniors</TabsTrigger>
                  <TabsTrigger value="new">New Threats</TabsTrigger>
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
                        <LinkIcon className="h-6 w-6 text-primary" />
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
                      onClick={() => setActiveScenario("social-media-scam")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <Users className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("social-media-scam") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Social Media Scam</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify fraudulent posts and promotions
                      </p>
                    </button>
                    
                    <button
                      onClick={() => setActiveScenario("phone-scam")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <Phone className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("phone-scam") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Phone Scam</h3>
                      <p className="text-sm text-muted-foreground">
                        Recognize fraudulent calls and voice phishing
                      </p>
                    </button>
                  </div>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <button
                      onClick={() => setActiveScenario("spear-phishing")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <MessageSquare className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("spear-phishing") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Spear Phishing</h3>
                      <p className="text-sm text-muted-foreground">
                        Detect targeted phishing attacks using personal information
                      </p>
                    </button>
                    
                    <button
                      onClick={() => setActiveScenario("payment-fraud")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <CreditCard className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("payment-fraud") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Payment Fraud</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify fake payment pages and too-good-to-be-true offers
                      </p>
                    </button>
                    
                    <button
                      onClick={() => setActiveScenario("tech-support-scam")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <AlertTriangle className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("tech-support-scam") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Tech Support Scam</h3>
                      <p className="text-sm text-muted-foreground">
                        Spot fake virus alerts and technical support offers
                      </p>
                    </button>
                  </div>
                </TabsContent>

                <TabsContent value="seniors" className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <button
                      onClick={() => setActiveScenario("tech-confusion-scam")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <HelpCircle className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("tech-confusion-scam") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Computer Virus Alert</h3>
                      <p className="text-sm text-muted-foreground">
                        Recognize fake computer virus warnings
                      </p>
                    </button>
                    
                    <button
                      onClick={() => setActiveScenario("lottery-scam")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <Clock className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("lottery-scam") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Lottery Prize</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify fake lottery and sweepstakes scams
                      </p>
                    </button>
                    
                    <button
                      onClick={() => setActiveScenario("health-product-scam")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <Info className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("health-product-scam") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Health Product Ad</h3>
                      <p className="text-sm text-muted-foreground">
                        Spot misleading health product advertisements
                      </p>
                    </button>
                  </div>
                </TabsContent>
                
                <TabsContent value="new" className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <button
                      onClick={() => setActiveScenario("smishing")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <Smartphone className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("smishing") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">SMS Phishing</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify text message fraud attempts
                      </p>
                    </button>
                    
                    <button
                      onClick={() => setActiveScenario("pretexting")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <UserRound className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("pretexting") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Pretexting</h3>
                      <p className="text-sm text-muted-foreground">
                        Spot deception through false identities
                      </p>
                    </button>
                    
                    <button
                      onClick={() => setActiveScenario("baiting-attack")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <Usb className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("baiting-attack") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Baiting Attack</h3>
                      <p className="text-sm text-muted-foreground">
                        Recognize tempting traps set by attackers
                      </p>
                    </button>
                    
                    <button
                      onClick={() => setActiveScenario("whaling-attack")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <BadgeDollarSign className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("whaling-attack") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Whaling Attack</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify targeted attacks against executives
                      </p>
                    </button>
                    
                    <button
                      onClick={() => setActiveScenario("ransomware-simulation")}
                      className="flex flex-col items-start rounded-lg border p-4 text-left shadow-sm transition-all hover:bg-muted/50 hover:shadow"
                    >
                      <div className="mb-2 flex w-full items-center justify-between">
                        <Lock className="h-6 w-6 text-primary" />
                        {completedScenarios.includes("ransomware-simulation") && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold">Ransomware Attack</h3>
                      <p className="text-sm text-muted-foreground">
                        Experience a ransomware attack and learn proper response
                      </p>
                    </button>
                  </div>
                </TabsContent>

                <TabsContent value="completed" className="space-y-6 hidden md:block">
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
                            <LinkIcon className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Suspicious Link</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("social-media-scam") && (
                        <button
                          onClick={() => setActiveScenario("social-media-scam")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <Users className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Social Media Scam</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("phone-scam") && (
                        <button
                          onClick={() => setActiveScenario("phone-scam")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <Phone className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Phone Scam</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("spear-phishing") && (
                        <button
                          onClick={() => setActiveScenario("spear-phishing")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <MessageSquare className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Spear Phishing</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("payment-fraud") && (
                        <button
                          onClick={() => setActiveScenario("payment-fraud")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <CreditCard className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Payment Fraud</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("tech-support-scam") && (
                        <button
                          onClick={() => setActiveScenario("tech-support-scam")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <AlertTriangle className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Tech Support Scam</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("tech-confusion-scam") && (
                        <button
                          onClick={() => setActiveScenario("tech-confusion-scam")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <HelpCircle className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Computer Virus Alert</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("lottery-scam") && (
                        <button
                          onClick={() => setActiveScenario("lottery-scam")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <Clock className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Lottery Prize</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("health-product-scam") && (
                        <button
                          onClick={() => setActiveScenario("health-product-scam")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <Info className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Health Product Ad</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("smishing") && (
                        <button
                          onClick={() => setActiveScenario("smishing")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <Smartphone className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">SMS Phishing</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("pretexting") && (
                        <button
                          onClick={() => setActiveScenario("pretexting")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <UserRound className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Pretexting</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("baiting-attack") && (
                        <button
                          onClick={() => setActiveScenario("baiting-attack")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <Usb className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Baiting Attack</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("whaling-attack") && (
                        <button
                          onClick={() => setActiveScenario("whaling-attack")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <BadgeDollarSign className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Whaling Attack</h3>
                          <p className="text-sm text-muted-foreground">
                            Completed
                          </p>
                        </button>
                      )}
                      
                      {completedScenarios.includes("ransomware-simulation") && (
                        <button
                          onClick={() => setActiveScenario("ransomware-simulation")}
                          className="flex flex-col items-start rounded-lg border border-green-200 bg-green-50 p-4 text-left shadow-sm"
                        >
                          <div className="mb-2 flex w-full items-center justify-between">
                            <Lock className="h-6 w-6 text-primary" />
                            <CheckCircle className="h-5 w-5 text-secondary" />
                          </div>
                          <h3 className="text-lg font-semibold">Ransomware Attack</h3>
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
