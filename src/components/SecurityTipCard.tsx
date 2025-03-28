
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SecurityTipCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const SecurityTipCard = ({ title, description, icon: Icon }: SecurityTipCardProps) => {
  return (
    <Card className="hover-card h-full">
      <CardHeader>
        <Icon className="h-8 w-8 text-primary mb-2" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default SecurityTipCard;
