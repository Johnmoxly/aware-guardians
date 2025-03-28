
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle, FileDown, Usb } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface BaitingAttackProps {
  scenarioTitle: string;
  scenarioDescription: string;
  baitType: "usb" | "download" | "giveaway";
  baitDetails: string;
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const BaitingAttack: React.FC<BaitingAttackProps> = ({
  scenarioTitle,
  scenarioDescription,
  baitType,
  baitDetails,
  redFlags,
  onComplete,
}) => {
  const [userResponse, setUserResponse] = useState<"accept" | "decline" | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleUserResponse = (response: "accept" | "decline") => {
    setUserResponse(response);
    setShowExplanation(true);
    onComplete(response === "decline");
  };

  const renderBaitIcon = () => {
    switch (baitType) {
      case "usb":
        return <Usb className="h-10 w-10 text-primary" />;
      case "download":
        return <FileDown className="h-10 w-10 text-primary" />;
      case "giveaway":
        return <Badge className="h-10 w-10 text-primary">FREE</Badge>;
      default:
        return <Usb className="h-10 w-10 text-primary" />;
    }
  };

  const getBaitTypeLabel = () => {
    switch (baitType) {
      case "usb":
        return "Physical USB Device";
      case "download":
        return "Free Download";
      case "giveaway":
        return "Special Offer";
      default:
        return "Baiting Attack";
    }
  };

  return (
    <div className="space-y-6">
      <Card className="border-2 border-muted">
        <CardHeader className="bg-muted/30">
          <div className="flex justify-between items-center">
            {renderBaitIcon()}
            <Badge variant="outline" className="ml-auto">
              {getBaitTypeLabel()}
            </Badge>
          </div>
          <CardTitle className="text-xl mt-4">{scenarioTitle}</CardTitle>
          <CardDescription>{scenarioDescription}</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="rounded-lg bg-muted/20 p-4">
              <p className="whitespace-pre-line">{baitDetails}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t bg-muted/20 p-4">
          <div className="w-full space-y-2 text-sm text-muted-foreground">
            <p className="italic">How would you respond to this situation?</p>
          </div>
        </CardFooter>
      </Card>

      {!showExplanation ? (
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <Button 
            variant="outline" 
            className="flex-1" 
            onClick={() => handleUserResponse("accept")}
          >
            {baitType === "usb" ? "Use the USB device" : 
             baitType === "download" ? "Download the file" : 
             "Accept the offer"}
          </Button>
          <Button 
            variant="default" 
            className="flex-1" 
            onClick={() => handleUserResponse("decline")}
          >
            {baitType === "usb" ? "Refuse the USB device" : 
             baitType === "download" ? "Decline the download" : 
             "Ignore the offer"}
          </Button>
        </div>
      ) : (
        <Alert variant={userResponse === "decline" ? "default" : "destructive"}>
          <div className="flex items-center gap-2">
            {userResponse === "decline" ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <AlertTitle>
              {userResponse === "decline"
                ? "Correct! This is a baiting attack."
                : "Be careful! This is a baiting attack."}
            </AlertTitle>
          </div>
          <AlertDescription className="pt-2">
            <p className="mb-4">
              {userResponse === "decline"
                ? "Great job identifying this baiting attempt! Here's why this is suspicious:"
                : "This situation shows several red flags that indicate it's a baiting attack:"}
            </p>
            <ul className="ml-6 list-disc space-y-1">
              {redFlags.map((flag, index) => (
                <li key={index}>{flag}</li>
              ))}
            </ul>
            <div className="mt-4">
              <h4 className="font-medium">How to stay safe:</h4>
              <ul className="ml-6 list-disc space-y-1 mt-2">
                <li>Never use unknown USB devices or download suspicious files</li>
                <li>Be skeptical of offers that seem too good to be true</li>
                <li>Verify the source of any free offer or device</li>
                <li>Keep your antivirus software updated</li>
                <li>Use only trusted download sources</li>
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default BaitingAttack;
