
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Trophy, Star } from "lucide-react";

interface BadgesSectionProps {
  userData: {
    badges: {
      earned: number;
      total: number;
      locked: number;
    };
  };
}

const BadgesSection = ({ userData }: BadgesSectionProps) => {
  const earnedBadges = [
    { id: 1, name: "First Solve", description: "Solved your first problem", earned: true },
    { id: 2, name: "Streak Master", description: "Maintained a 7-day streak", earned: true },
    { id: 3, name: "Easy Explorer", description: "Solved 100 easy problems", earned: true },
    { id: 4, name: "Problem Hunter", description: "Solved 500 problems total", earned: true },
    { id: 5, name: "Daily Coder", description: "Coded for 30 consecutive days", earned: true },
  ];

  const lockedBadges = [
    { id: 6, name: "May Challenge", description: "Complete the May Challenge", earned: false },
    { id: 7, name: "Hard Conqueror", description: "Solve 100 hard problems", earned: false },
    { id: 8, name: "Algorithm Master", description: "Master all algorithm categories", earned: false },
  ];

  return (
    <Card className="bg-craft-panel/80 border-craft-border backdrop-blur-sm hover:border-craft-accent/30 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-craft-text-primary">Badges</h3>
          <Badge className="bg-craft-accent/20 text-craft-accent border-craft-accent/30">
            {userData.badges.earned}/{userData.badges.total}
          </Badge>
        </div>

        <div className="space-y-6">
          {/* Earned Badges */}
          <div>
            <h4 className="text-sm font-medium text-craft-text-secondary mb-3">Earned</h4>
            <div className="grid grid-cols-3 gap-3">
              {earnedBadges.map((badge) => (
                <HoverCard key={badge.id}>
                  <HoverCardTrigger>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-craft-accent/10 border border-craft-accent/20 hover:border-craft-accent/40 transition-all duration-200 cursor-pointer">
                      <Trophy className="w-6 h-6 text-craft-accent mb-2" />
                      <span className="text-xs text-craft-text-primary font-medium text-center">
                        {badge.name}
                      </span>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-craft-panel border-craft-border">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-craft-text-primary">{badge.name}</h4>
                      <p className="text-sm text-craft-text-secondary">{badge.description}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>

          {/* Locked Badges */}
          <div>
            <h4 className="text-sm font-medium text-craft-text-secondary mb-3">Locked</h4>
            <div className="grid grid-cols-3 gap-3">
              {lockedBadges.map((badge) => (
                <HoverCard key={badge.id}>
                  <HoverCardTrigger>
                    <div className="flex flex-col items-center p-3 rounded-lg bg-craft-bg/50 border border-craft-border hover:border-craft-accent/20 transition-all duration-200 cursor-pointer opacity-60">
                      <Star className="w-6 h-6 text-craft-text-secondary mb-2" />
                      <span className="text-xs text-craft-text-secondary font-medium text-center">
                        {badge.name}
                      </span>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-craft-panel border-craft-border">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-craft-text-primary">{badge.name}</h4>
                      <p className="text-sm text-craft-text-secondary">{badge.description}</p>
                      <Badge className="bg-craft-border text-craft-text-secondary">Locked</Badge>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BadgesSection;
