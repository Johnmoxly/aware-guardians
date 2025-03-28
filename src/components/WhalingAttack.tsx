
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle, UserRound, BadgeDollarSign } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface WhalingAttackProps {
  sender: string;
  senderTitle: string;
  recipient: string;
  recipientTitle: string;
  subject: string;
  content: string;
  urgency: "low" | "medium" | "high";
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const WhalingAttack: React.FC<WhalingAttackProps> = ({
  sender,
  senderTitle,
  recipient,
  recipientTitle,
  subject,
  content,
  urgency,
  redFlags,
  onComplete,
}) => {
  const [userResponse, setUserResponse] = useState<"comply" | "verify" | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleUserResponse = (response: "comply" | "verify") => {
    setUserResponse(response);
    setShowExplanation(true);
    onComplete(response === "verify");
  };

  const urgencyColor = {
    low: "bg-green-100 text-green-800 hover:bg-green-200",
    medium: "bg-amber-100 text-amber-800 hover:bg-amber-200",
    high: "bg-red-100 text-red-800 hover:bg-red-200",
  };

  const urgencyLabel = {
    low: "Low Priority",
    medium: "Time Sensitive",
    high: "URGENT ACTION REQUIRED",
  };

  return (
    <div className="space-y-6">
      <Card className="border-2 border-muted">
        <CardHeader className="bg-muted/30">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <UserRound className="h-6 w-6 text-primary" />
              <BadgeDollarSign className="h-4 w-4 text-primary absolute ml-4 mt-4" />
            </div>
            <Badge className={urgencyColor[urgency]}>
              {urgencyLabel[urgency]}
            </Badge>
          </div>
          <CardTitle className="text-xl mt-4">Executive Communication</CardTitle>
          <CardDescription className="text-sm">
            An email sent to high-level executives
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium">From:</p>
                    <p className="text-sm">{sender}</p>
                    <p className="text-xs text-muted-foreground">{senderTitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">To:</p>
                    <p className="text-sm">{recipient}</p>
                    <p className="text-xs text-muted-foreground">{recipientTitle}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Subject:</p>
                  <p className="text-sm">{subject}</p>
                </div>
              </div>
              <div className="mt-4 border-t pt-4">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t bg-muted/20 p-4">
          <div className="w-full space-y-2 text-sm text-muted-foreground">
            <p className="italic">How would you respond to this email?</p>
          </div>
        </CardFooter>
      </Card>

      {!showExplanation ? (
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <Button 
            variant="outline" 
            className="flex-1" 
            onClick={() => handleUserResponse("comply")}
          >
            Comply with the request
          </Button>
          <Button 
            variant="default" 
            className="flex-1" 
            onClick={() => handleUserResponse("verify")}
          >
            Verify through another channel
          </Button>
        </div>
      ) : (
        <Alert variant={userResponse === "verify" ? "default" : "destructive"}>
          <div className="flex items-center gap-2">
            {userResponse === "verify" ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <AlertTitle>
              {userResponse === "verify"
                ? "Correct! This is a whaling attack."
                : "Be careful! This is a whaling attack."}
            </AlertTitle>
          </div>
          <AlertDescription className="pt-2">
            <p className="mb-4">
              {userResponse === "verify"
                ? "Great job identifying this targeted executive phishing attempt! Here's why this email is suspicious:"
                : "This email shows several red flags that indicate it's a targeted attack against executives:"}
            </p>
            <ul className="ml-6 list-disc space-y-1">
              {redFlags.map((flag, index) => (
                <li key={index}>{flag}</li>
              ))}
            </ul>
            <div className="mt-4">
              <h4 className="font-medium">How executives can protect themselves:</h4>
              <ul className="ml-6 list-disc space-y-1 mt-2">
                <li>Always verify unusual requests through a different communication channel</li>
                <li>Be especially cautious of urgent financial requests</li>
                <li>Implement multi-person approval processes for large financial transactions</li>
                <li>Check the actual email address, not just the display name</li>
                <li>Seek confirmation from other executives when receiving unusual directives</li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default WhalingAttack;
