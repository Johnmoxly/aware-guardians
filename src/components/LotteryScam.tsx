
import { useState } from "react";
import { Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface LotteryScamProps {
  prizeName: string;
  prizeAmount: string;
  deadline: string;
  contactPerson: string;
  contactEmail: string;
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const LotteryScam = ({ 
  prizeName, 
  prizeAmount, 
  deadline, 
  contactPerson, 
  contactEmail, 
  redFlags, 
  onComplete 
}: LotteryScamProps) => {
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
        <CardHeader className="border-b bg-yellow-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <CardTitle className="text-lg text-yellow-800">{prizeName}</CardTitle>
            </div>
            <CardDescription className="text-yellow-700">Prize Notification</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">CONGRATULATIONS!</h2>
            <p className="text-lg mb-4">You have been selected as a winner of:</p>
            <p className="text-3xl font-bold text-green-600 mb-4">{prizeAmount}</p>
            <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 mb-4">
              <p className="font-semibold">Time is limited!</p>
              <p>You must claim your prize before: <span className="font-bold">{deadline}</span></p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">How to claim your prize:</h3>
            <p className="mb-2">
              Contact our prize coordinator immediately:
            </p>
            <p className="font-bold mb-1">{contactPerson}</p>
            <p className="text-blue-600 underline mb-4">{contactEmail}</p>
            <p className="text-sm">
              To process your payment, you will need to provide your full name, address, phone number, and pay a small processing fee of $49.99 for tax clearance.
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
              Claim Prize Now
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
                  ? "Excellent! This is definitely a scam." 
                  : "Be careful! This is a common lottery scam."}
              </AlertTitle>
              <AlertDescription className="mt-2">
                <p className="mb-2">
                  {userIdentifiedScam 
                    ? "You correctly identified this as a lottery or sweepstakes scam. Here's what to look for:" 
                    : "This is a classic lottery scam. Here are the red flags to watch for:"}
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

export default LotteryScam;
