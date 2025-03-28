
import { useState } from "react";
import { AlertTriangle, CheckCircle, Mail, ExternalLink, Flag, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface SpearPhishingProps {
  sender: string;
  subject: string;
  content: string;
  companyInfo: {
    name: string;
    role: string;
  };
  personalDetails: string[];
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const SpearPhishing = ({ 
  sender, 
  subject, 
  content, 
  companyInfo,
  personalDetails,
  redFlags, 
  onComplete 
}: SpearPhishingProps) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [userIdentifiedPhishing, setUserIdentifiedPhishing] = useState(false);

  const handlePhishingIdentification = (isPhishing: boolean) => {
    setUserIdentifiedPhishing(isPhishing);
    setShowFeedback(true);
    onComplete(isPhishing);
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="border-b bg-muted/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <CardTitle className="text-lg">{subject}</CardTitle>
            </div>
            <CardDescription>From: {sender}</CardDescription>
          </div>
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">To: you@{companyInfo.name.toLowerCase().replace(/\s+/g, '')}.com</p>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          
          <div className="mt-6 rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-5 w-5 text-muted-foreground" />
              <h3 className="font-medium">Your Current Company Profile</h3>
            </div>
            <div className="pl-7 text-sm space-y-1">
              <p><span className="font-medium">Company:</span> {companyInfo.name}</p>
              <p><span className="font-medium">Role:</span> {companyInfo.role}</p>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="mt-3 w-full gap-1"
              onClick={() => setShowPersonalInfo(!showPersonalInfo)}
            >
              <Users className="h-4 w-4" />
              <span>{showPersonalInfo ? "Hide" : "Show"} Personal Information Used in Email</span>
            </Button>
            
            {showPersonalInfo && (
              <div className="mt-4 border-t pt-3">
                <h4 className="text-sm font-medium mb-2">Personal Details Referenced:</h4>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {personalDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <ExternalLink className="h-4 w-4" />
              <span>Open Attachment</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Flag className="h-4 w-4" />
              <span>Report</span>
            </Button>
          </div>
          <div className="space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handlePhishingIdentification(false)}
              disabled={showFeedback}
            >
              Seems Legitimate
            </Button>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => handlePhishingIdentification(true)}
              disabled={showFeedback}
            >
              This is Spear Phishing
            </Button>
          </div>
        </CardFooter>
      </Card>

      {showFeedback && (
        <Alert variant={userIdentifiedPhishing ? "default" : "destructive"} className="w-full max-w-3xl mx-auto">
          <div className="flex items-start gap-2">
            {userIdentifiedPhishing ? (
              <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
            ) : (
              <AlertTriangle className="h-5 w-5 mt-0.5" />
            )}
            <div>
              <AlertTitle>
                {userIdentifiedPhishing 
                  ? "Excellent! You identified a sophisticated spear phishing attempt." 
                  : "Careful! You missed a targeted spear phishing attack."}
              </AlertTitle>
              <AlertDescription className="mt-2">
                <p className="mb-2">
                  {userIdentifiedPhishing 
                    ? "You successfully recognized this targeted attack. Here's what made it suspicious:" 
                    : "This was a spear phishing email - more targeted than regular phishing. Here are the red flags:"}
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  {redFlags.map((flag, index) => (
                    <li key={index}>{flag}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-medium">
                  Spear phishing is particularly dangerous because it's personalized using information about you or your organization.
                </p>
              </AlertDescription>
            </div>
          </div>
        </Alert>
      )}
    </div>
  );
};

export default SpearPhishing;
