
import { useState } from "react";
import { AlertTriangle, CheckCircle, AlertCircle, X, ArrowRight, Laptop, ShieldAlert, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

interface TechSupportScamProps {
  alertTitle: string;
  alertMessage: string;
  supportNumber: string;
  technicalDetails: string[];
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const TechSupportScam = ({ 
  alertTitle, 
  alertMessage, 
  supportNumber, 
  technicalDetails,
  redFlags, 
  onComplete 
}: TechSupportScamProps) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [userIdentifiedScam, setUserIdentifiedScam] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanning, setScanning] = useState(false);

  const handleScamIdentification = (isScam: boolean) => {
    setUserIdentifiedScam(isScam);
    setShowFeedback(true);
    onComplete(isScam);
  };

  const startScan = () => {
    setScanning(true);
    let progress = 0;
    
    const interval = setInterval(() => {
      progress += 5;
      setScanProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setScanning(false);
      }
    }, 150);
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto border-red-300">
        <CardHeader className="bg-red-100 border-b border-red-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-6 w-6 text-red-600" />
              <CardTitle className="text-red-800">{alertTitle}</CardTitle>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription className="text-red-700 font-medium">
            {alertMessage}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Critical Security Warning</AlertTitle>
              <AlertDescription>
                Your device has been infected with 3 viruses. Immediate action required to prevent data loss and identity theft.
              </AlertDescription>
            </Alert>
            
            <div className="border rounded-lg p-4 bg-muted/50">
              <h3 className="text-sm font-medium mb-2">Technical Details:</h3>
              <ul className="text-xs space-y-1 font-mono">
                {technicalDetails.map((detail, index) => (
                  <li key={index} className="border-b pb-1 last:border-b-0 last:pb-0">{detail}</li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-lg border p-4 mt-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium">System Scan</span>
                {scanning ? (
                  <span className="text-xs text-red-600">Scanning...</span>
                ) : (
                  <span className="text-xs">{scanProgress === 100 ? "Scan Complete" : "Not Started"}</span>
                )}
              </div>
              <Progress value={scanProgress} className="h-2" />
              {scanProgress === 100 && (
                <p className="mt-2 text-sm text-red-600 font-medium">
                  Scan detected 3 severe security threats! Call our support team immediately.
                </p>
              )}
            </div>
            
            <div className="rounded-lg border border-red-300 p-4 bg-red-50">
              <div className="flex items-center gap-2 mb-2">
                <Laptop className="h-5 w-5 text-red-600" />
                <h3 className="font-medium text-red-800">Call Technical Support Now</h3>
              </div>
              <p className="text-sm text-red-700 mb-3">
                Our certified technicians are available 24/7 to help resolve this issue.
              </p>
              <div className="flex justify-center">
                <Button 
                  disabled={showFeedback}
                  className="bg-green-600 hover:bg-green-700 gap-2 text-white"
                >
                  <Phone className="h-4 w-4" /> 
                  Call {supportNumber}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={startScan}
            disabled={scanning || scanProgress === 100 || showFeedback}
          >
            Run Scan
          </Button>
          <div className="space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleScamIdentification(false)}
              disabled={showFeedback}
            >
              Follow Instructions
            </Button>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => handleScamIdentification(true)}
              disabled={showFeedback}
            >
              <AlertTriangle className="mr-2 h-4 w-4" />
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
                  ? "Well done! You identified a tech support scam." 
                  : "Warning! You missed a common tech support scam."}
              </AlertTitle>
              <AlertDescription className="mt-2">
                <p className="mb-2">
                  {userIdentifiedScam 
                    ? "You successfully identified this as a fake security alert. Here's what to look for:" 
                    : "This was a tech support scam. Here are the red flags you should have noticed:"}
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  {redFlags.map((flag, index) => (
                    <li key={index}>{flag}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-medium">
                  Legitimate tech companies like Microsoft, Apple, or Google will never display pop-up alerts with phone numbers or scan your computer without your permission.
                </p>
              </AlertDescription>
            </div>
          </div>
        </Alert>
      )}
    </div>
  );
};

export default TechSupportScam;
