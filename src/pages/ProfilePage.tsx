
import { useState } from "react";
import Header from "@/components/Header";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProblemStats from "@/components/profile/ProblemStats";
import BadgesSection from "@/components/profile/BadgesSection";
import ContributionCalendar from "@/components/profile/ContributionCalendar";
import RecentActivityTabs from "@/components/profile/RecentActivityTabs";
import CommunityStats from "@/components/profile/CommunityStats";
import LanguagesSkills from "@/components/profile/LanguagesSkills";

const ProfilePage = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Mock user data - in real app this would come from API
  const userData = {
    username: "CodeMaster",
    handle: "@codemaster",
    avatar: "/placeholder.svg",
    rank: "~5,000,000",
    bio: "Passionate full-stack developer who loves solving complex problems",
    githubUrl: "https://github.com/codemaster",
    linkedinUrl: "https://linkedin.com/in/codemaster",
    totalProblems: 2565,
    solvedProblems: 847,
    activeAttempts: 23,
    easy: { solved: 234, total: 878 },
    medium: { solved: 456, total: 1849 },
    hard: { solved: 157, total: 838 },
    badges: {
      earned: 15,
      total: 32,
      locked: 17
    },
    streak: {
      current: 7,
      max: 23,
      activeDays: 156
    },
    community: {
      views: 12543,
      solutions: 89,
      discussions: 167,
      reputation: 2847
    },
    languages: {
      JavaScript: 35,
      Python: 28,
      Java: 20,
      "C++": 12,
      TypeScript: 5
    }
  };

  return (
    <div className="min-h-screen bg-craft-bg">
      <Header />
      
      <div className="container mx-auto px-6 py-8 space-y-8">
        <ProfileHeader 
          userData={userData}
          onEditProfile={() => setIsEditModalOpen(true)}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProblemStats userData={userData} />
          <BadgesSection userData={userData} />
        </div>
        
        <ContributionCalendar userData={userData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentActivityTabs />
          <CommunityStats userData={userData} />
        </div>
        
        <LanguagesSkills userData={userData} />
      </div>
    </div>
  );
};

export default ProfilePage;
