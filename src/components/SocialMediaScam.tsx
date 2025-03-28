
import { useState } from "react";
import { AlertTriangle, CheckCircle, Users, ThumbsUp, Heart, Send, MessageSquare, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface SocialMediaScamProps {
  profileName: string;
  username: string;
  postContent: string;
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const SocialMediaScam = ({ profileName, username, postContent, redFlags, onComplete }: SocialMediaScamProps) => {
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
        <CardHeader className="border-b">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary/10">{profileName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg">{profileName}</CardTitle>
                <Badge variant="outline" className="text-xs">Verified</Badge>
              </div>
              <p className="text-sm text-muted-foreground">@{username}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: postContent }} />
          
          <div className="mt-4 flex items-center justify-between border-t border-b py-2">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span className="text-xs">3.2K</span>
              </button>
              <button className="flex items-center space-x-1">
                <MessageSquare className="h-4 w-4" />
                <span className="text-xs">482</span>
              </button>
              <button className="flex items-center space-x-1">
                <Share className="h-4 w-4" />
                <span className="text-xs">256</span>
              </button>
            </div>
            <span className="text-xs text-muted-foreground">Posted 2 hours ago</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>Like</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Send className="h-4 w-4" />
              <span>Message</span>
            </Button>
          </div>
          <div className="space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleScamIdentification(false)}
              disabled={showFeedback}
            >
              Seems Legitimate
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
                  ? "Good catch! This is indeed a social media scam." 
                  : "Watch out! You missed a social media scam."}
              </AlertTitle>
              <AlertDescription className="mt-2">
                <p className="mb-2">
                  {userIdentifiedScam 
                    ? "You successfully identified this as a scam. Here's what to look for:" 
                    : "This was a scam. Here are the red flags you should watch for:"}
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

export default SocialMediaScam;
