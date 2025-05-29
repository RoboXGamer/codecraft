
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ProblemCardProps {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string[];
  solved: boolean;
  acceptanceRate: number;
}

const difficultyColors = {
  Easy: 'bg-craft-success/20 text-craft-success border-craft-success/30',
  Medium: 'bg-craft-accent-secondary/20 text-craft-accent-secondary border-craft-accent-secondary/30',
  Hard: 'bg-craft-error/20 text-craft-error border-craft-error/30'
};

const ProblemCard = ({ id, title, difficulty, topics, solved, acceptanceRate }: ProblemCardProps) => {
  return (
    <Card className="bg-craft-panel border-craft-border hover:border-craft-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-craft-accent/10 group cursor-pointer">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            {solved && (
              <CheckCircle className="w-5 h-5 text-craft-success" />
            )}
            <div>
              <h3 className="text-craft-text-primary font-semibold group-hover:text-craft-accent transition-colors">
                {id}. {title}
              </h3>
            </div>
          </div>
          <Badge className={difficultyColors[difficulty]}>
            {difficulty}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {topics.slice(0, 3).map((topic) => (
            <Badge 
              key={topic} 
              variant="outline" 
              className="text-xs text-craft-text-secondary border-craft-border hover:border-craft-accent/50 hover:text-craft-accent transition-all"
            >
              {topic}
            </Badge>
          ))}
          {topics.length > 3 && (
            <Badge variant="outline" className="text-xs text-craft-text-secondary border-craft-border">
              +{topics.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-craft-text-secondary">
            Acceptance: <span className="text-craft-text-primary">{acceptanceRate}%</span>
          </span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-craft-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-craft-text-secondary group-hover:text-craft-accent transition-colors">
              Solve
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProblemCard;
