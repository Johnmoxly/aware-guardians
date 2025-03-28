
import { useState } from "react";
import { AlertTriangle, CheckCircle, CreditCard, DollarSign, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PaymentFraudProps {
  merchantName: string;
  totalAmount: string;
  paymentDetails: {
    description: string;
    originalPrice: string;
    discountedPrice: string;
  };
  redFlags: string[];
  onComplete: (success: boolean) => void;
}

const PaymentFraud = ({ 
  merchantName, 
  totalAmount, 
  paymentDetails, 
  redFlags, 
  onComplete 
}: PaymentFraudProps) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [userIdentifiedFraud, setUserIdentifiedFraud] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const handleFraudIdentification = (isFraud: boolean) => {
    setUserIdentifiedFraud(isFraud);
    setShowFeedback(true);
    onComplete(isFraud);
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-primary" />
              <CardTitle>{merchantName}</CardTitle>
            </div>
            <Badge variant="outline" className="bg-green-100 text-green-800">
              Special Offer
            </Badge>
          </div>
          <CardDescription>Complete your payment to claim your {paymentDetails.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>{paymentDetails.description}</span>
                  <span className="line-through text-muted-foreground">{paymentDetails.originalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Limited Time Offer</span>
                  <span className="font-medium text-green-600">{paymentDetails.discountedPrice}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                  </div>
                </div>
                <p className="text-xs text-red-600 mt-1">⚠️ Limited availability! Offer expires in 5 minutes.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Payment Information</h3>
              
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input 
                    id="card-number" 
                    placeholder="1234 5678 9012 3456" 
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input 
                      id="expiry" 
                      placeholder="MM/YY" 
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="security-code">Security Code</Label>
                    <Input 
                      id="security-code" 
                      placeholder="CVV" 
                      value={securityCode}
                      onChange={(e) => setSecurityCode(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div className="flex items-center text-xs text-muted-foreground">
            <Lock className="h-4 w-4 mr-1" />
            <span>Secure Payment</span>
          </div>
          <div className="space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleFraudIdentification(true)}
              disabled={showFeedback}
            >
              <AlertTriangle className="mr-2 h-4 w-4 text-warning" />
              Report as Fraud
            </Button>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => handleFraudIdentification(false)}
              disabled={showFeedback}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Complete Payment
            </Button>
          </div>
        </CardFooter>
      </Card>

      {showFeedback && (
        <Alert variant={userIdentifiedFraud ? "default" : "destructive"} className="w-full max-w-3xl mx-auto">
          <div className="flex items-start gap-2">
            {userIdentifiedFraud ? (
              <ShieldCheck className="h-5 w-5 text-secondary mt-0.5" />
            ) : (
              <AlertTriangle className="h-5 w-5 mt-0.5" />
            )}
            <div>
              <AlertTitle>
                {userIdentifiedFraud 
                  ? "Great job! You identified a payment fraud attempt." 
                  : "Warning! You missed a payment fraud attempt."}
              </AlertTitle>
              <AlertDescription className="mt-2">
                <p className="mb-2">
                  {userIdentifiedFraud 
                    ? "You successfully identified this payment fraud. Here's what to look for:" 
                    : "This was a fraudulent payment page. Here are the red flags you should have noticed:"}
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  {redFlags.map((flag, index) => (
                    <li key={index}>{flag}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-medium">
                  Never rush into making payments, especially when there's pressure with limited-time offers or countdown timers.
                </p>
              </AlertDescription>
            </div>
          </div>
        </Alert>
      )}
    </div>
  );
};

export default PaymentFraud;
