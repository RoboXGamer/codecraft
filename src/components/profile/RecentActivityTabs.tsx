
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const RecentActivityTabs = () => {
  const [activeTab, setActiveTab] = useState('recent');

  const tabs = [
    { id: 'recent', label: 'Recent AC' },
    { id: 'list', label: 'List' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'discuss', label: 'Discuss' }
  ];

  const recentActivities = [
    {
      id: 1,
      title: "Two Sum",
      date: "2 hours ago",
      status: "Success",
      timeTaken: "15:32",
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Longest Substring Without Repeating Characters",
      date: "1 day ago",
      status: "Success",
      timeTaken: "28:45",
      difficulty: "Medium"
    },
    {
      id: 3,
      title: "Median of Two Sorted Arrays",
      date: "2 days ago",
      status: "Failed",
      timeTaken: "45:12",
      difficulty: "Hard"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Failed': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Partial': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-craft-accent/20 text-craft-accent border-craft-accent/30';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Hard': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-craft-accent/20 text-craft-accent border-craft-accent/30';
    }
  };

  return (
    <Card className="bg-craft-panel/80 border-craft-border backdrop-blur-sm hover:border-craft-accent/30 transition-all duration-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-craft-text-primary mb-6">Recent Activity</h3>
        
        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-craft-bg/50 p-1 rounded-lg">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className={
                activeTab === tab.id
                  ? "bg-craft-accent text-craft-bg"
                  : "text-craft-text-secondary hover:text-craft-accent hover:bg-craft-accent/10"
              }
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-3">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="p-4 rounded-lg bg-craft-bg/30 border border-craft-border hover:border-craft-accent/30 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-craft-text-primary hover:text-craft-accent cursor-pointer transition-colors">
                  {activity.title}
                </h4>
                <div className="flex items-center gap-2">
                  <Badge className={getDifficultyColor(activity.difficulty)}>
                    {activity.difficulty}
                  </Badge>
                  <Badge className={getStatusColor(activity.status)}>
                    {activity.status}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-craft-text-secondary">
                <span>{activity.date}</span>
                <span>Time: {activity.timeTaken}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default RecentActivityTabs;
