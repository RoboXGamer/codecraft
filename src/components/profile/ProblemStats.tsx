
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProblemStatsProps {
  userData: {
    totalProblems: number;
    solvedProblems: number;
    activeAttempts: number;
    easy: { solved: number; total: number };
    medium: { solved: number; total: number };
    hard: { solved: number; total: number };
  };
}

const ProblemStats = ({ userData }: ProblemStatsProps) => {
  const overallProgress = (userData.solvedProblems / userData.totalProblems) * 100;
  const easyProgress = (userData.easy.solved / userData.easy.total) * 100;
  const mediumProgress = (userData.medium.solved / userData.medium.total) * 100;
  const hardProgress = (userData.hard.solved / userData.hard.total) * 100;

  return (
    <Card className="bg-craft-panel/80 border-craft-border backdrop-blur-sm hover:border-craft-accent/30 transition-all duration-300 group">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-craft-text-primary mb-6">Problem Stats</h3>
        
        {/* Circular Progress Ring */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative w-32 h-32">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-craft-border"
              />
              {/* Progress circle */}
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - overallProgress / 100)}`}
                className="text-craft-accent transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-craft-text-primary">{userData.solvedProblems}</span>
              <span className="text-sm text-craft-text-secondary">solved</span>
            </div>
          </div>
        </div>

        {/* Active Attempts */}
        <div className="text-center mb-6">
          <p className="text-craft-text-secondary">
            <span className="text-craft-accent font-semibold">{userData.activeAttempts}</span> active attempts
          </p>
        </div>

        {/* Difficulty Breakdown */}
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-craft-text-secondary">Easy</span>
              <span className="text-sm text-craft-text-primary font-medium">
                {userData.easy.solved}/{userData.easy.total}
              </span>
            </div>
            <Progress value={easyProgress} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-craft-text-secondary">Medium</span>
              <span className="text-sm text-craft-text-primary font-medium">
                {userData.medium.solved}/{userData.medium.total}
              </span>
            </div>
            <Progress value={mediumProgress} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-craft-text-secondary">Hard</span>
              <span className="text-sm text-craft-text-primary font-medium">
                {userData.hard.solved}/{userData.hard.total}
              </span>
            </div>
            <Progress value={hardProgress} className="h-2" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProblemStats;
