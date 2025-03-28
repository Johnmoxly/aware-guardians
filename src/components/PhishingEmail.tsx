
import { useState } from "react";
import { AlertTriangle, CheckCircle, Mail, ExternalLink, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface PhishingEmailProps {
  sender: string;
  subject: string;
  content: string;
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const PhishingEmail = ({ sender, subject, content, redFlags, onComplete }: PhishingEmailProps) => {
  const [showFeedback, setShowFeedback] = useState(false);
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
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <ExternalLink className="h-4 w-4" />
              <span>Open Link</span>
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
              This is Phishing
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
                  ? "Good catch! This is indeed a phishing attempt." 
                  : "Watch out! You missed a phishing attempt."}
              </AlertTitle>
              <AlertDescription className="mt-2">
                <p className="mb-2">
                  {userIdentifiedPhishing 
                    ? "You successfully identified this as a phishing email. Here's what to look for:" 
                    : "This was a phishing email. Here are the red flags you should watch for:"}
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  {redFlags.map((flag, index) => (
                    <li key={index}>{flag}</li>
                  ))}
                </ul>
              </AlertDescription>
            </div>
          </div>
        </Alert>
      )}
    </div>
  );
};

export default PhishingEmail;
