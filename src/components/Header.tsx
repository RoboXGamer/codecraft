
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-craft-panel border-b border-craft-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-craft-accent to-craft-accent-secondary rounded-lg flex items-center justify-center">
              <span className="text-craft-bg font-bold text-sm">CC</span>
            </div>
            <h1 className="text-xl font-bold text-craft-text-primary">CodeCraft</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Button variant="ghost" className="text-craft-text-secondary hover:text-craft-accent hover:bg-craft-accent/10 transition-all duration-200">
              Problems
            </Button>
            <Button variant="ghost" className="text-craft-text-secondary hover:text-craft-accent hover:bg-craft-accent/10 transition-all duration-200">
              Contest
            </Button>
            <Button variant="ghost" className="text-craft-text-secondary hover:text-craft-accent hover:bg-craft-accent/10 transition-all duration-200">
              Interview
            </Button>
            <Button variant="ghost" className="text-craft-text-secondary hover:text-craft-accent hover:bg-craft-accent/10 transition-all duration-200">
              Sheets
            </Button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-craft-bg rounded-lg px-3 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-craft-accent rounded-full animate-glow-pulse"></div>
              <span className="text-craft-text-secondary text-sm">Streak:</span>
              <span className="text-craft-accent font-semibold">7</span>
            </div>
            <div className="w-px h-4 bg-craft-border"></div>
            <div className="flex items-center space-x-2">
              <span className="text-craft-text-secondary text-sm">XP:</span>
              <span className="text-craft-accent-secondary font-semibold">1,247</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:bg-craft-bg rounded-lg px-2 py-1 transition-colors">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-gradient-to-br from-craft-accent to-craft-accent-secondary text-craft-bg font-semibold text-sm">
                U
              </AvatarFallback>
            </Avatar>
            <ChevronDown className="w-4 h-4 text-craft-text-secondary" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
