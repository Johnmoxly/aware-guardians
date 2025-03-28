
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">SecureAware</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Protecting users from social engineering attacks through education and awareness.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SecureAware. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
