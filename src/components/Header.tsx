
import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col space-y-4">
              <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                <Link to="/">Home</Link>
              </Button>
              <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                <Link to="/scenarios">Scenarios</Link>
              </Button>
              <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                <Link to="/resources">Resources</Link>
              </Button>
              <Button variant="ghost" asChild onClick={() => setIsOpen(false)}>
                <Link to="/about">About</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
