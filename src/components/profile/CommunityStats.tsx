
import { Card } from "@/components/ui/card";
import { Eye, FileText, MessageSquare, Star } from "lucide-react";

interface CommunityStatsProps {
  userData: {
    community: {
      views: number;
      solutions: number;
      discussions: number;
      reputation: number;
    };
  };
}

const CommunityStats = ({ userData }: CommunityStatsProps) => {
  const stats = [
    {
      icon: Eye,
      label: "Views",
      value: userData.community.views.toLocaleString(),
      color: "text-blue-400"
    },
    {
      icon: FileText,
      label: "Solutions",
      value: userData.community.solutions.toString(),
      color: "text-green-400"
    },
    {
      icon: MessageSquare,
      label: "Discussions",
      value: userData.community.discussions.toString(),
      color: "text-purple-400"
    },
    {
      icon: Star,
      label: "Reputation",
      value: userData.community.reputation.toLocaleString(),
      color: "text-craft-accent"
    }
  ];

  return (
    <Card className="bg-craft-panel/80 border-craft-border backdrop-blur-sm hover:border-craft-accent/30 transition-all duration-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-craft-text-primary mb-6">Community Stats</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-craft-bg/30 border border-craft-border hover:border-craft-accent/30 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-craft-bg/50 ${stat.color} group-hover:animate-pulse`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-craft-text-secondary">{stat.label}</p>
                  <p className="text-xl font-bold text-craft-text-primary">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Last Week Activity Indicator */}
        <div className="mt-6 p-4 rounded-lg bg-craft-accent/10 border border-craft-accent/20">
          <div className="flex items-center justify-between">
            <span className="text-sm text-craft-text-secondary">Last week's activity</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-craft-accent rounded-full animate-pulse"></div>
              <span className="text-sm text-craft-accent font-medium">+12% increase</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CommunityStats;
