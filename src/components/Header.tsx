
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-border bg-background py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold md:text-2xl">SecureAware</h1>
        </div>
        <nav className="hidden space-x-4 md:block">
          <Button variant="link" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="/scenarios">Scenarios</Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="/resources">Resources</Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="/about">About</Link>
          </Button>
        </nav>
        <Button variant="outline" className="md:hidden">Menu</Button>
      </div>
    </header>
  );
};

export default Header;
