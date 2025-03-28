
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle, MessageSquare, Smartphone } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface SmishingProps {
  senderNumber: string;
  messageContent: string;
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const Smishing: React.FC<SmishingProps> = ({
  senderNumber,
  messageContent,
  redFlags,
  onComplete,
}) => {
  const [userResponse, setUserResponse] = useState<"legitimate" | "scam" | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleUserResponse = (response: "legitimate" | "scam") => {
    setUserResponse(response);
    setShowExplanation(true);
    onComplete(response === "scam");
  };

  return (
    <div className="space-y-6">
      <Card className="border-2 border-muted">
        <CardHeader className="bg-muted/30">
          <div className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg">Text Message</CardTitle>
          </div>
          <CardDescription>From: {senderNumber}</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex">
            <div className="max-w-[85%] rounded-lg bg-primary/10 p-4 text-left">
              <p className="whitespace-pre-line">{messageContent}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t bg-muted/20 p-4">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="italic">Is this a legitimate message or a potential scam?</p>
          </div>
        </CardFooter>
      </Card>

      {!showExplanation ? (
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <Button 
            variant="outline" 
            className="flex-1" 
            onClick={() => handleUserResponse("legitimate")}
          >
            It looks legitimate
          </Button>
          <Button 
            variant="default" 
            className="flex-1" 
            onClick={() => handleUserResponse("scam")}
          >
            This is suspicious
          </Button>
        </div>
      ) : (
        <Alert variant={userResponse === "scam" ? "default" : "destructive"}>
          <div className="flex items-center gap-2">
            {userResponse === "scam" ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <AlertTitle>
              {userResponse === "scam"
                ? "Correct! This is a smishing attempt."
                : "Be careful! This is actually a smishing attempt."}
            </AlertTitle>
          </div>
          <AlertDescription className="pt-2">
            <p className="mb-4">
              {userResponse === "scam"
                ? "Great job spotting this SMS phishing attempt! Here's why this message is suspicious:"
                : "This message shows several red flags that indicate it's a scam:"}
            </p>
            <ul className="ml-6 list-disc space-y-1">
              {redFlags.map((flag, index) => (
                <li key={index}>{flag}</li>
              ))}
            </ul>
            <div className="mt-4">
              <h4 className="font-medium">How to stay safe:</h4>
              <ul className="ml-6 list-disc space-y-1 mt-2">
                <li>Never click links in unexpected text messages</li>
                <li>Don't reply to suspicious numbers</li>
                <li>Contact companies directly through their official website if you receive alerts</li>
                <li>Report suspicious messages to your mobile carrier</li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Smishing;
