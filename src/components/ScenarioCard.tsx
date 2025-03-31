
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ScenarioCardProps {
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  icon: LucideIcon;
  onClick: () => void;
  category?: string;
}

const ScenarioCard = ({ 
  title, 
  description, 
  difficulty, 
  icon: Icon, 
  onClick,
  category 
}: ScenarioCardProps) => {
  const difficultyColor = {
    easy: "bg-green-100 text-green-800 hover:bg-green-200",
    medium: "bg-amber-100 text-amber-800 hover:bg-amber-200",
    hard: "bg-red-100 text-red-800 hover:bg-red-200",
  };

  const difficultyLabel = {
    easy: "Beginner",
    medium: "Intermediate",
    hard: "Advanced",
  };

  return (
    <Card className="hover-card">
      <CardHeader>
        <div className="flex justify-between">
          <Icon className="h-8 w-8 text-primary" />
          <div className="flex gap-2">
            {category && (
              <Badge variant="outline" className="capitalize">
                {category}
              </Badge>
            )}
            <Badge className={difficultyColor[difficulty]}>
              {difficultyLabel[difficulty]}
            </Badge>
          </div>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Learn to identify and protect yourself from this common social engineering tactic.
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={onClick} className="w-full">Start Scenario</Button>
      </CardFooter>
    </Card>
  );
};

export default ScenarioCard;
