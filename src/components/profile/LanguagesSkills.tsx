
import { Card } from "@/components/ui/card";

interface LanguagesSkillsProps {
  userData: {
    languages: {
      [key: string]: number;
    };
  };
}

const LanguagesSkills = ({ userData }: LanguagesSkillsProps) => {
  const languageEntries = Object.entries(userData.languages).sort((a, b) => b[1] - a[1]);
  const totalUsage = Object.values(userData.languages).reduce((sum, value) => sum + value, 0);

  const skillCategories = [
    { name: "Fundamental", progress: 85, description: "Basic programming concepts" },
    { name: "Intermediate", progress: 70, description: "Data structures & algorithms" },
    { name: "Advanced", progress: 45, description: "Complex system design" }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Languages */}
      <Card className="bg-craft-panel/80 border-craft-border backdrop-blur-sm hover:border-craft-accent/30 transition-all duration-300">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-craft-text-primary mb-6">Languages Used</h3>
          
          <div className="space-y-4">
            {languageEntries.map(([language, usage]) => {
              const percentage = (usage / totalUsage) * 100;
              return (
                <div key={language} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-craft-text-primary font-medium">{language}</span>
                    <span className="text-craft-text-secondary text-sm">{percentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-craft-border/30 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-craft-accent to-craft-accent-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Skills */}
      <Card className="bg-craft-panel/80 border-craft-border backdrop-blur-sm hover:border-craft-accent/30 transition-all duration-300">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-craft-text-primary mb-6">Skill Levels</h3>
          
          <div className="space-y-6">
            {skillCategories.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-craft-text-primary font-medium">{skill.name}</span>
                    <p className="text-craft-text-secondary text-sm">{skill.description}</p>
                  </div>
                  <span className="text-craft-accent font-semibold">{skill.progress}%</span>
                </div>
                <div className="w-full bg-craft-border/30 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-craft-accent to-craft-accent-secondary h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LanguagesSkills;
