
import React from "react";
import PhishingEmail from "./PhishingEmail";

interface CIBCPhishingProps {
  onComplete: (success: boolean) => void;
}

const CIBCPhishing: React.FC<CIBCPhishingProps> = ({ onComplete }) => {
  const cibcEmailContent = `
    <div style="font-family: Arial, sans-serif;">
      <div style="text-align: center; margin-bottom: 15px;">
        <img src="https://www.cibc.com/content/dam/global-assets/logos/cibc-logo.svg" alt="CIBC Logo" style="height: 50px;" />
      </div>
      
      <p style="margin-bottom: 15px;">Dear Valued Customer,</p>
      
      <p style="margin-bottom: 15px;">We have detected unusual activity on your CIBC account. To ensure the security of your account, we require you to verify your identity and update your information.</p>
      
      <p style="margin-bottom: 15px;"><strong>This is urgent:</strong> If you do not verify your information within 24 hours, your account access will be temporarily suspended for security reasons.</p>
      
      <div style="background-color: #f7f7f7; border: 1px solid #ddd; padding: 15px; margin: 20px 0; border-radius: 4px;">
        <p style="margin: 0; color: #555;">Please click the link below to verify your identity:</p>
        <p style="margin: 10px 0 0; text-align: center;">
          <a href="#" style="background-color: #FF0000; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold;">Verify My Account</a>
        </p>
      </div>
      
      <p style="margin-bottom: 15px;">Thank you for your prompt attention to this matter.</p>
      
      <p style="margin-bottom: 15px;">Sincerely,<br>CIBC Security Team</p>
      
      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
      
      <p style="font-size: 11px; color: #777;">This email is automatically generated, please do not reply. For assistance, please contact CIBC customer support at the number on the back of your card.</p>
    </div>
  `;

  const redFlags = [
    "The sender's email address doesn't match the official CIBC domain (@cibc.com)",
    "Creates a false sense of urgency with threats of account suspension",
    "Generic greeting ('Dear Valued Customer') rather than addressing you by name",
    "Contains subtle spelling or grammatical errors",
    "The URL in the email doesn't lead to the official CIBC website (cibc.com)",
    "Requests sensitive information like card numbers and passwords which legitimate banks never do via email",
    "The login page URL doesn't show 'https://' or a padlock icon in the browser",
    "The page lacks proper security features of the real CIBC website"
  ];

  return (
    <PhishingEmail
      sender="security-alert@cibc-account-verify.com"
      subject="URGENT: Action Required - Verify Your CIBC Account"
      content={cibcEmailContent}
      redFlags={redFlags}
      bankSimulation={true}
      onComplete={onComplete}
    />
  );
};

export default CIBCPhishing;
