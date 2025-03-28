
import { useState } from "react";
import { AlertTriangle, ExternalLink, Eye, EyeOff, Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

interface SuspiciousLinkProps {
  displayUrl: string;
  actualUrl: string;
  explanation: string;
  isSafe: boolean;
  onComplete: (success: boolean) => void;
}

const SuspiciousLink = ({ displayUrl, actualUrl, explanation, isSafe, onComplete }: SuspiciousLinkProps) => {
  const [revealed, setRevealed] = useState(false);
  const [userDecision, setUserDecision] = useState<boolean | null>(null);

  const handleReveal = () => {
    setRevealed(!revealed);
  };

  const handleDecision = (safe: boolean) => {
    setUserDecision(safe);
    onComplete(safe === isSafe);
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Examine this Link
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <p className="mb-2 text-sm text-muted-foreground">Link appears as:</p>
              <div className="flex items-center justify-between rounded-md bg-muted p-3">
                <span className="font-medium text-primary">{displayUrl}</span>
                <Button variant="ghost" size="sm" onClick={handleReveal}>
                  {revealed ? (
                    <>
                      <EyeOff className="mr-2 h-4 w-4" />
                      Hide
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-4 w-4" />
                      Reveal
                    </>
                  )}
                </Button>
              </div>
              
              {revealed && (
                <div className="mt-4">
                  <p className="mb-2 text-sm text-muted-foreground">Actual destination:</p>
                  <div className="rounded-md bg-muted/50 p-3">
                    <span className={isSafe ? "text-green-600" : "text-red-600"}>
                      {actualUrl}
                    </span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Would you click this link?</p>
                <p className="text-xs text-muted-foreground">Analyze the URL carefully before making your decision.</p>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant={userDecision === false ? "secondary" : "outline"} 
                  size="sm"
                  onClick={() => handleDecision(false)}
                  disabled={userDecision !== null}
                >
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Unsafe
                </Button>
                <Button 
                  variant={userDecision === true ? "secondary" : "outline"} 
                  size="sm"
                  onClick={() => handleDecision(true)}
                  disabled={userDecision !== null}
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Safe
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {userDecision !== null && (
            <Badge 
              variant="outline" 
              className={`w-full justify-center py-2 text-center ${
                userDecision === isSafe 
                  ? "bg-green-100 text-green-800" 
                  : "bg-red-100 text-red-800"
              }`}
            >
              {userDecision === isSafe 
                ? "Correct Assessment!" 
                : "Incorrect Assessment!"}
            </Badge>
          )}
        </CardFooter>
      </Card>
      
      {userDecision !== null && (
        <Alert 
          variant={userDecision === isSafe ? "default" : "destructive"}
          className="w-full max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2">
            {userDecision === isSafe ? (
              <Lock className="h-5 w-5" />
            ) : (
              <Unlock className="h-5 w-5" />
            )}
            <div>
              <AlertTitle>
                {userDecision === isSafe 
                  ? "Good job identifying this link correctly!" 
                  : "Be careful! Your assessment was incorrect."}
              </AlertTitle>
              <AlertDescription className="mt-2">
                {explanation}
              </AlertDescription>
            </div>
          </div>
        </Alert>
      )}
    </div>
  );
};

export default SuspiciousLink;
