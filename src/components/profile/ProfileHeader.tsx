
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Edit, User, Github, Linkedin } from "lucide-react";

interface ProfileHeaderProps {
  userData: {
    username: string;
    handle: string;
    avatar: string;
    rank: string;
    bio?: string;
    githubUrl?: string;
    linkedinUrl?: string;
  };
  onEditProfile: () => void;
}

const ProfileHeader = ({ userData, onEditProfile }: ProfileHeaderProps) => {
  return (
    <Card className="bg-craft-panel/80 border-craft-border backdrop-blur-sm hover:border-craft-accent/30 transition-all duration-300 relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-craft-accent/5 to-craft-accent-secondary/5"></div>
      
      <div className="p-8 relative">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Avatar Section */}
          <div className="relative">
            <Avatar className="w-24 h-24 ring-2 ring-craft-accent/30 ring-offset-2 ring-offset-craft-panel">
              <AvatarImage src={userData.avatar} alt={userData.username} />
              <AvatarFallback className="bg-craft-accent text-craft-bg text-2xl font-bold">
                <User className="w-8 h-8" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-craft-accent rounded-full border-2 border-craft-panel"></div>
          </div>

          {/* User Info */}
          <div className="flex-1 space-y-3">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold text-craft-text-primary">{userData.username}</h1>
              <p className="text-craft-text-secondary">{userData.handle}</p>
            </div>
            
            {userData.bio && (
              <p className="text-craft-text-secondary max-w-2xl">{userData.bio}</p>
            )}
            
            <div className="flex flex-wrap items-center gap-4">
              <Badge className="bg-craft-accent/20 text-craft-accent border-craft-accent/30 px-3 py-1">
                Global Rank {userData.rank}
              </Badge>
              
              {/* Social Links */}
              <div className="flex items-center gap-2">
                {userData.githubUrl && (
                  <Button variant="ghost" size="icon" className="text-craft-text-secondary hover:text-craft-accent">
                    <Github className="w-4 h-4" />
                  </Button>
                )}
                {userData.linkedinUrl && (
                  <Button variant="ghost" size="icon" className="text-craft-text-secondary hover:text-craft-accent">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Edit Button */}
          <Button 
            onClick={onEditProfile}
            className="bg-craft-accent hover:bg-craft-accent/80 text-craft-bg border-0 shadow-lg hover:shadow-craft-accent/25"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProfileHeader;
