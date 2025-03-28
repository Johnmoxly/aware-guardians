
import { useState } from "react";
import { Shield, Menu, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotifications] = useState(true);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b border-border bg-background py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-bold md:text-2xl">SecureAware</h1>
        </div>
        <nav className="hidden space-x-4 md:block">
          <Button 
            variant={isActive("/") ? "default" : "link"} 
            asChild
          >
            <Link to="/">Home</Link>
          </Button>
          <Button 
            variant={isActive("/scenarios") ? "default" : "link"} 
            asChild
          >
            <Link to="/scenarios">Scenarios</Link>
          </Button>
          <Button 
            variant={isActive("/resources") ? "default" : "link"} 
            asChild
          >
            <Link to="/resources">Resources</Link>
          </Button>
          <Button 
            variant={isActive("/about") ? "default" : "link"} 
            asChild
          >
            <Link to="/about">About</Link>
          </Button>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            {hasNotifications && (
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center">
                <span className="sr-only">New notifications</span>
              </Badge>
            )}
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="border-b pb-4 mb-4">
                <SheetTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span>SecureAware</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                <Button 
                  variant={isActive("/") ? "default" : "ghost"} 
                  asChild 
                  onClick={() => setIsOpen(false)}
                  className="justify-start"
                >
                  <Link to="/">Home</Link>
                </Button>
                <Button 
                  variant={isActive("/scenarios") ? "default" : "ghost"} 
                  asChild 
                  onClick={() => setIsOpen(false)}
                  className="justify-start"
                >
                  <Link to="/scenarios">Scenarios</Link>
                </Button>
                <Button 
                  variant={isActive("/resources") ? "default" : "ghost"} 
                  asChild 
                  onClick={() => setIsOpen(false)}
                  className="justify-start"
                >
                  <Link to="/resources">Resources</Link>
                </Button>
                <Button 
                  variant={isActive("/about") ? "default" : "ghost"} 
                  asChild 
                  onClick={() => setIsOpen(false)}
                  className="justify-start"
                >
                  <Link to="/about">About</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
