
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Lock, File, DollarSign, Clock } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

interface RansomwareSimulationProps {
  ransonAmaunt: string;
  timeLimit: string;
  redFlags: string[];
  preventionTips: string[];
  onComplete: (success: boolean) => void;
}

const RansomwareSimulation: React.FC<RansomwareSimulationProps> = ({
  ransonAmaunt,
  timeLimit,
  redFlags,
  preventionTips,
  onComplete,
}) => {
  const [stage, setStage] = useState<"intro" | "infected" | "locked" | "decision" | "education">("intro");
  const [progress, setProgress] = useState(0);
  const [userResponse, setUserResponse] = useState<"pay" | "notpay" | null>(null);
  
  useEffect(() => {
    if (stage === "infected") {
      const timer = setTimeout(() => {
        setProgress(33);
        setTimeout(() => {
          setProgress(66);
          setTimeout(() => {
            setProgress(100);
            setStage("locked");
          }, 1500);
        }, 1500);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleStart = () => {
    setStage("infected");
  };

  const handleUserResponse = (response: "pay" | "notpay") => {
    setUserResponse(response);
    setStage("education");
    onComplete(response === "notpay");
  };

  return (
    <div className="space-y-6">
      {stage === "intro" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              Ransomware Attack Simulation
            </CardTitle>
            <CardDescription>
              Experience how a ransomware attack unfolds and learn how to respond properly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This simulation will demonstrate the stages of a ransomware attack. You'll see how files get encrypted and how attackers demand payment. This is for educational purposes only.
            </p>
            <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-800">Important Note</p>
                  <p className="text-sm text-amber-700">
                    This is just a simulation. No actual files will be harmed or encrypted. The purpose is to help you recognize and respond appropriately to ransomware threats.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleStart} className="w-full">
              Start Simulation
            </Button>
          </CardFooter>
        </Card>
      )}

      {stage === "infected" && (
        <Card className="border-2 border-muted">
          <CardHeader className="bg-muted/30">
            <CardTitle>File Explorer</CardTitle>
            <CardDescription>Your computer files</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {["Documents", "Photos", "Work Files", "Videos", "Backups", "Personal"].map((folder, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <div className="h-16 w-16 rounded-lg border-2 border-muted bg-muted/20 p-3 flex items-center justify-center">
                      <File className={`h-8 w-8 ${progress > 33 && index < 2 ? "text-red-500" : "text-primary/70"}`} />
                    </div>
                    <span className="text-xs">{folder}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-1">
                  <span>Unknown Process Running...</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="mt-2 text-xs text-muted-foreground">
                  {progress < 33 && "Scanning files..."}
                  {progress >= 33 && progress < 66 && "Encrypting personal files..."}
                  {progress >= 66 && progress < 100 && "Encrypting system files..."}
                  {progress === 100 && "Encryption complete!"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {stage === "locked" && (
        <Card className="border-2 border-red-500 bg-red-50">
          <CardHeader className="bg-red-100">
            <div className="flex justify-center mb-4">
              <Lock className="h-16 w-16 text-red-600" />
            </div>
            <CardTitle className="text-center text-red-800">YOUR FILES HAVE BEEN ENCRYPTED!</CardTitle>
            <CardDescription className="text-center text-red-700">
              Pay the ransom to recover your data
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4 text-center">
              <p className="font-bold text-red-800">
                All your documents, photos, videos, and other important files have been encrypted with military-grade encryption.
              </p>
              
              <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col items-center">
                  <DollarSign className="h-8 w-8 text-red-600" />
                  <p className="text-lg font-bold text-red-800">{ransonAmaunt}</p>
                  <p className="text-sm text-red-700">Ransom Amount</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <Clock className="h-8 w-8 text-red-600" />
                  <p className="text-lg font-bold text-red-800">{timeLimit}</p>
                  <p className="text-sm text-red-700">Time Remaining</p>
                </div>
              </div>
              
              <div className="rounded-lg bg-red-200 p-4 text-left">
                <p className="text-red-800">
                  To recover your files, you must pay in Bitcoin. After payment, we will provide a decryption tool.
                  If you don't pay within the time limit, the price will double. If you don't pay within 7 days, 
                  your files will be permanently deleted.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button 
              onClick={() => setStage("decision")} 
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              Continue Simulation
            </Button>
          </CardFooter>
        </Card>
      )}

      {stage === "decision" && (
        <Card className="border-2 border-muted">
          <CardHeader>
            <CardTitle>How Would You Respond?</CardTitle>
            <CardDescription>
              You've been hit by ransomware. What would you do in this situation?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Your files are encrypted and the attackers are demanding {ransonAmaunt} in Bitcoin. 
                You have {timeLimit} to pay or they claim the price will double. What action would you take?
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button 
              variant="outline" 
              onClick={() => handleUserResponse("pay")}
              className="w-full"
            >
              Pay the ransom to recover my files
            </Button>
            <Button 
              onClick={() => handleUserResponse("notpay")}
              className="w-full"
            >
              Do not pay the ransom
            </Button>
          </CardFooter>
        </Card>
      )}

      {stage === "education" && (
        <Alert variant={userResponse === "notpay" ? "default" : "destructive"}>
          <div className="flex items-center gap-2">
            {userResponse === "notpay" ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <AlertTitle>
              {userResponse === "notpay"
                ? "Correct! Experts recommend not paying the ransom."
                : "Caution! Paying the ransom is generally not recommended."}
            </AlertTitle>
          </div>
          <AlertDescription className="pt-2">
            <p className="mb-4">
              {userResponse === "notpay"
                ? "You made the right choice. Here's why paying the ransom is not recommended:"
                : "Paying the ransom is generally discouraged for these reasons:"}
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>There's no guarantee you'll get your files back after paying</li>
              <li>Paying encourages criminals and funds future attacks</li>
              <li>You may become a repeat target if you pay once</li>
              <li>Some decryption tools provided by attackers don't work properly</li>
              <li>Paying may violate sanctions if the attackers are in certain countries</li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium">Warning signs of ransomware:</h4>
              <ul className="ml-6 list-disc space-y-1 mt-2">
                {redFlags.map((flag, index) => (
                  <li key={index}>{flag}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium">How to prevent ransomware attacks:</h4>
              <ul className="ml-6 list-disc space-y-1 mt-2">
                {preventionTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default RansomwareSimulation;
