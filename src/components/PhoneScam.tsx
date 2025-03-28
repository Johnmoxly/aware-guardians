
import { useState } from "react";
import { AlertTriangle, CheckCircle, Phone, User, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface PhoneScamProps {
  callerName: string;
  phoneNumber: string;
  callScript: string[];
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const PhoneScam = ({ callerName, phoneNumber, callScript, redFlags, onComplete }: PhoneScamProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userIdentifiedScam, setUserIdentifiedScam] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  const handleScamIdentification = (isScam: boolean) => {
    setUserIdentifiedScam(isScam);
    setShowFeedback(true);
    setCallEnded(true);
    onComplete(isScam);
  };

  const handleNextLine = () => {
    if (currentLine < callScript.length - 1) {
      setCurrentLine(currentLine + 1);
    } else {
      setCallEnded(true);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="border-b bg-muted/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-primary/10 p-2">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">{callerName}</CardTitle>
                <p className="text-sm text-muted-foreground">{phoneNumber}</p>
              </div>
            </div>
            <Badge variant="outline" className={callEnded ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}>
              {callEnded ? "Call Ended" : "Ongoing Call"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex flex-col space-y-4">
              {callScript.slice(0, currentLine + 1).map((line, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${index % 2 === 0 ? "bg-muted" : "bg-primary text-primary-foreground"}`}>
                    <div className="flex items-center gap-2 mb-1">
                      {index % 2 === 0 ? (
                        <>
                          <User className="h-4 w-4" />
                          <span className="text-xs font-medium">{callerName}</span>
                        </>
                      ) : (
                        <>
                          <User className="h-4 w-4" />
                          <span className="text-xs font-medium">You</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm">{line}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          {!callEnded ? (
            <>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleScamIdentification(true)}
              >
                <XCircle className="mr-2 h-4 w-4 text-destructive" />
                Hang Up (It's a Scam)
              </Button>
              {currentLine < callScript.length - 1 ? (
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={handleNextLine}
                >
                  Continue Call
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleScamIdentification(false)}
                >
                  Provide Information
                </Button>
              )}
            </>
          ) : (
            <Badge className="w-full justify-center py-2 text-center bg-muted">
              Call has ended
            </Badge>
          )}
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
                  ? "Good decision! That was a phone scam." 
                  : "Watch out! You missed a phone scam."}
              </AlertTitle>
              <AlertDescription className="mt-2">
                <p className="mb-2">
                  {userIdentifiedScam 
                    ? "You successfully identified this as a scam call. Here's what to look for:" 
                    : "This was a scam call. Here are the red flags you should have noticed:"}
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

export default PhoneScam;
