
import { useState } from "react";
import { HelpCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface TechConfusionScamProps {
  serviceName: string;
  problem: string;
  supportNumber: string;
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const TechConfusionScam = ({ serviceName, problem, supportNumber, redFlags, onComplete }: TechConfusionScamProps) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [userIdentifiedScam, setUserIdentifiedScam] = useState(false);

  const handleScamIdentification = (isScam: boolean) => {
    setUserIdentifiedScam(isScam);
    setShowFeedback(true);
    onComplete(isScam);
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="border-b bg-muted/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
              <CardTitle className="text-lg">Computer Help Service</CardTitle>
            </div>
            <CardDescription>Tech Support</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="bg-red-100 border border-red-300 rounded-md p-4 mb-6 text-center">
            <h3 className="text-red-700 font-bold text-xl mb-2">WARNING</h3>
            <p className="text-red-700 font-semibold">
              {problem}
            </p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="font-semibold mb-2">What to do:</h3>
            <p className="mb-4">
              Please call our {serviceName} technicians immediately at:
            </p>
            <p className="text-xl font-bold text-center mb-4">{supportNumber}</p>
            <p className="text-sm text-muted-foreground">
              Our technicians will help you solve this problem. You may need to give them remote access to your computer so they can fix it for you.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-4">
          <div className="space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleScamIdentification(false)}
              disabled={showFeedback}
            >
              Call Support Now
            </Button>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => handleScamIdentification(true)}
              disabled={showFeedback}
            >
              This is a Scam
            </Button>
          </div>
        </CardFooter>
      </Card>

      {showFeedback && (
        <Alert variant={userIdentifiedScam ? "default" : "destructive"} className="w-full max-w-3xl mx-auto">
          <div className="flex items-start gap-2">
            {userIdentifiedScam ? (
              <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
            ) : (
              <AlertTriangle className="h-5 w-5 mt-0.5" />
            )}
            <div>
              <AlertTitle>
                {userIdentifiedScam 
                  ? "Good job! This is indeed a scam." 
                  : "Be careful! This is a scam targeting less tech-savvy users."}
              </AlertTitle>
              <AlertDescription className="mt-2">
                <p className="mb-2">
                  {userIdentifiedScam 
                    ? "You correctly identified this as a tech support scam. Here's what to look for:" 
                    : "This type of popup is a common scam. Here are the red flags to watch for:"}
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

export default TechConfusionScam;
