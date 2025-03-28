
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SecurityTipCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category?: string;
}

const SecurityTipCard = ({ 
  title, 
  description, 
  icon: Icon,
  category 
}: SecurityTipCardProps) => {
  return (
    <Card className="hover:shadow-md transition-all h-full border-l-4 border-l-primary">
      <CardHeader>
        <div className="flex justify-between items-start">
          <Icon className="h-8 w-8 text-primary mb-2" />
          {category && (
            <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
              {category}
            </span>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        {category && (
          <CardDescription className="text-sm">
            Security tip for {category.toLowerCase()} protection
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default SecurityTipCard;
