
import { useState } from "react";
import { Info, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface HealthProductScamProps {
  productName: string;
  medicalClaims: string[];
  specialOffer: string;
  testimonial: {
    name: string;
    age: string;
    quote: string;
  };
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const HealthProductScam = ({ 
  productName, 
  medicalClaims, 
  specialOffer, 
  testimonial, 
  redFlags, 
  onComplete 
}: HealthProductScamProps) => {
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
        <CardHeader className="border-b bg-blue-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-lg text-blue-800">{productName}</CardTitle>
            </div>
            <CardDescription className="text-blue-700">Health Breakthrough</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">Revolutionary Health Discovery</h2>
            <div className="bg-blue-50 p-4 rounded-md border border-blue-200 mb-4">
              <h3 className="font-semibold mb-2">Medical Breakthrough Benefits:</h3>
              <ul className="text-left list-disc pl-6 space-y-1">
                {medicalClaims.map((claim, index) => (
                  <li key={index}>{claim}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200 mb-4">
            <p className="font-bold text-center text-lg">LIMITED TIME OFFER!</p>
            <p className="text-center">{specialOffer}</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <h3 className="font-semibold mb-2">Real Customer Testimonial:</h3>
            <blockquote className="italic border-l-4 border-blue-300 pl-4">
              "{testimonial.quote}"
            </blockquote>
            <p className="text-right mt-2">- {testimonial.name}, {testimonial.age}</p>
          </div>
          
          <p className="text-xs text-gray-500">
            *These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-4">
          <div className="space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleScamIdentification(false)}
              disabled={showFeedback}
            >
              Order Now
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
                  ? "Well done! This is a health product scam." 
                  : "Be careful! This is a misleading health product advertisement."}
              </AlertTitle>
              <AlertDescription className="mt-2">
                <p className="mb-2">
                  {userIdentifiedScam 
                    ? "You correctly identified this as a health product scam. Here's what to watch for:" 
                    : "This type of advertisement contains misleading health claims. Here are the red flags:"}
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

export default HealthProductScam;
