import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Bookmark, Share, Lightbulb } from "lucide-react";

interface ProblemDescriptionProps {
  problem: {
    id: number;
    title: string;
    difficulty: string;
    description: string;
    examples: Array<{
      input: string;
      output: string;
      explanation: string;
    }>;
    constraints: string[];
  };
}

const ProblemDescription = ({ problem }: ProblemDescriptionProps) => {
  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex items-center space-x-2">
        <Button
          size="sm"
          variant="ghost"
          className="text-craft-text-secondary hover:text-craft-accent"
        >
          <Heart className="w-4 h-4 mr-1" />
          Like
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="text-craft-text-secondary hover:text-craft-accent"
        >
          <Bookmark className="w-4 h-4 mr-1" />
          Save
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="text-craft-text-secondary hover:text-craft-accent"
        >
          <Share className="w-4 h-4 mr-1" />
          Share
        </Button>
      </div>

      <Tabs defaultValue="description" className="w-full">
        <TabsList className="bg-craft-bg border border-craft-border gap-2 max-sm:gap-0 w-full grid grid-cols-3">
          <TabsTrigger
            value="description"
            className="data-[state=active]:bg-craft-panel data-[state=active]:text-craft-text-primary"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="hints"
            className="data-[state=active]:bg-craft-panel data-[state=active]:text-craft-text-primary"
          >
            <Lightbulb className="w-4 h-4 mr-1" />
            Hints
          </TabsTrigger>
          <TabsTrigger
            value="discussion"
            className="data-[state=active]:bg-craft-panel data-[state=active]:text-craft-text-primary"
          >
            Discussion
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="space-y-6 mt-6">
          {/* Problem Statement */}
          <div>
            <p className="text-craft-text-primary leading-relaxed whitespace-pre-line">
              {problem.description}
            </p>
          </div>

          {/* Examples */}
          <div>
            <h3 className="text-craft-text-primary font-semibold mb-4">
              Examples
            </h3>
            <div className="space-y-4">
              {problem.examples.map((example, index) => (
                <Card
                  key={index}
                  className="bg-craft-bg border-craft-border p-4"
                >
                  <div className="space-y-2">
                    <div>
                      <span className="text-craft-text-secondary text-sm font-medium">
                        Input:{" "}
                      </span>
                      <code className="text-craft-accent font-mono text-sm">
                        {example.input}
                      </code>
                    </div>
                    <div>
                      <span className="text-craft-text-secondary text-sm font-medium">
                        Output:{" "}
                      </span>
                      <code className="text-craft-accent font-mono text-sm">
                        {example.output}
                      </code>
                    </div>
                    <div>
                      <span className="text-craft-text-secondary text-sm font-medium">
                        Explanation:{" "}
                      </span>
                      <span className="text-craft-text-primary text-sm">
                        {example.explanation}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Constraints */}
          <div>
            <h3 className="text-craft-text-primary font-semibold mb-4">
              Constraints
            </h3>
            <ul className="space-y-2">
              {problem.constraints.map((constraint, index) => (
                <li
                  key={index}
                  className="text-craft-text-secondary text-sm flex items-start"
                >
                  <span className="text-craft-accent mr-2">•</span>
                  <code className="font-mono">{constraint}</code>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="hints" className="mt-6">
          <div className="space-y-4">
            <Card className="bg-craft-bg border-craft-border p-4">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-5 h-5 text-craft-accent-secondary mt-0.5" />
                <div>
                  <h4 className="text-craft-text-primary font-medium mb-2">
                    Hint 1
                  </h4>
                  <p className="text-craft-text-secondary text-sm">
                    Think about using a hash map to store the numbers you've
                    seen so far.
                  </p>
                </div>
              </div>
            </Card>

            <Button
              variant="outline"
              className="border-craft-border text-craft-text-secondary hover:border-craft-accent hover:text-craft-accent"
            >
              Show Next Hint
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="discussion" className="mt-6">
          <div className="text-center py-8">
            <p className="text-craft-text-secondary">
              Discussion feature coming soon!
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProblemDescription;
