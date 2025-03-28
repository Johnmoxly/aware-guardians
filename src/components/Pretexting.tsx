
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Phone, User } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface PretextingProps {
  scenario: string;
  callerIdentity: string;
  conversationSteps: string[];
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const Pretexting: React.FC<PretextingProps> = ({
  scenario,
  callerIdentity,
  conversationSteps,
  redFlags,
  onComplete,
}) => {
  const [userResponse, setUserResponse] = useState<"share" | "refuse" | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleUserResponse = (response: "share" | "refuse") => {
    setUserResponse(response);
    setShowExplanation(true);
    onComplete(response === "refuse");
  };

  return (
    <div className="space-y-6">
      <Card className="border-2 border-muted">
        <CardHeader className="bg-muted/30">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg">Incoming Call</CardTitle>
          </div>
          <CardDescription>Caller: {callerIdentity}</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="rounded-lg bg-muted/20 p-4">
              <p className="font-medium mb-2">Scenario:</p>
              <p className="text-muted-foreground">{scenario}</p>
            </div>
            
            <div className="space-y-3">
              <p className="font-medium">Conversation:</p>
              {conversationSteps.map((step, index) => {
                const isCallerMessage = index % 2 === 0;
                return (
                  <div 
                    key={index} 
                    className={`flex ${isCallerMessage ? "justify-start" : "justify-end"}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-3 ${
                        isCallerMessage 
                          ? "bg-primary/10 text-left" 
                          : "bg-secondary/20 text-right"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {isCallerMessage ? (
                          <>
                            <User className="h-4 w-4" />
                            <span className="text-xs font-medium">
                              {callerIdentity}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-xs font-medium ml-auto">You</span>
                            <User className="h-4 w-4" />
                          </>
                        )}
                      </div>
                      <p>{step}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t bg-muted/20 p-4">
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="italic">How would you respond to this call?</p>
          </div>
        </CardFooter>
      </Card>

      {!showExplanation ? (
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <Button 
            variant="outline" 
            className="flex-1" 
            onClick={() => handleUserResponse("share")}
          >
            Share the requested information
          </Button>
          <Button 
            variant="default" 
            className="flex-1" 
            onClick={() => handleUserResponse("refuse")}
          >
            Refuse to share and end the call
          </Button>
        </div>
      ) : (
        <Alert variant={userResponse === "refuse" ? "default" : "destructive"}>
          <div className="flex items-center gap-2">
            {userResponse === "refuse" ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <AlertTitle>
              {userResponse === "refuse"
                ? "Correct! This is a pretexting attack."
                : "Be careful! This is a pretexting attack."}
            </AlertTitle>
          </div>
          <AlertDescription className="pt-2">
            <p className="mb-4">
              {userResponse === "refuse"
                ? "Great job identifying this social engineering technique. Here's why this call is suspicious:"
                : "This call shows several red flags that indicate it's a scam:"}
            </p>
            <ul className="ml-6 list-disc space-y-1">
              {redFlags.map((flag, index) => (
                <li key={index}>{flag}</li>
              ))}
            </ul>
            <div className="mt-4">
              <h4 className="font-medium">How to protect yourself:</h4>
              <ul className="ml-6 list-disc space-y-1 mt-2">
                <li>Verify the caller's identity through official channels</li>
                <li>Don't share sensitive information over the phone</li>
                <li>Ask what department they're from and call the company's official number</li>
                <li>Remember that legitimate organizations won't pressure you for immediate information</li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Pretexting;
