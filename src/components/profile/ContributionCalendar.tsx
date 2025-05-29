
import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ContributionCalendarProps {
  userData: {
    streak: {
      current: number;
      max: number;
      activeDays: number;
    };
  };
}

const ContributionCalendar = ({ userData }: ContributionCalendarProps) => {
  // Generate mock data for 365 days
  const generateCalendarData = () => {
    const data = [];
    const today = new Date();
    
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      
      // Mock submission count (0-5 submissions per day)
      const submissions = Math.floor(Math.random() * 6);
      
      data.push({
        date: date.toISOString().split('T')[0],
        submissions,
        intensity: submissions === 0 ? 0 : Math.ceil(submissions / 2) // 0-3 intensity levels
      });
    }
    
    return data;
  };

  const calendarData = generateCalendarData();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getIntensityClass = (intensity: number) => {
    switch (intensity) {
      case 0: return 'bg-craft-border/30';
      case 1: return 'bg-craft-accent/30';
      case 2: return 'bg-craft-accent/60';
      case 3: return 'bg-craft-accent';
      default: return 'bg-craft-border/30';
    }
  };

  return (
    <Card className="bg-craft-panel/80 border-craft-border backdrop-blur-sm hover:border-craft-accent/30 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-craft-text-primary">Contribution Calendar</h3>
          <div className="flex items-center gap-4 text-sm text-craft-text-secondary">
            <span>Current streak: <span className="text-craft-accent font-semibold">{userData.streak.current} days</span></span>
            <span>Max streak: <span className="text-craft-accent font-semibold">{userData.streak.max} days</span></span>
          </div>
        </div>

        <div className="space-y-4">
          {/* Month labels */}
          <div className="flex justify-between text-xs text-craft-text-secondary px-2">
            {months.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-53 gap-1">
            {calendarData.map((day, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <div
                    className={`w-3 h-3 rounded-sm ${getIntensityClass(day.intensity)} hover:ring-1 hover:ring-craft-accent transition-all duration-200 cursor-pointer`}
                  />
                </HoverCardTrigger>
                <HoverCardContent className="bg-craft-panel border-craft-border">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-craft-text-primary">{day.date}</p>
                    <p className="text-xs text-craft-text-secondary">
                      {day.submissions} submissions
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between">
            <span className="text-xs text-craft-text-secondary">
              {userData.streak.activeDays} active days this year
            </span>
            <div className="flex items-center gap-1">
              <span className="text-xs text-craft-text-secondary mr-2">Less</span>
              <div className="w-3 h-3 rounded-sm bg-craft-border/30"></div>
              <div className="w-3 h-3 rounded-sm bg-craft-accent/30"></div>
              <div className="w-3 h-3 rounded-sm bg-craft-accent/60"></div>
              <div className="w-3 h-3 rounded-sm bg-craft-accent"></div>
              <span className="text-xs text-craft-text-secondary ml-2">More</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContributionCalendar;
