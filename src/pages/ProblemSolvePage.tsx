import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import ProblemDescription from "@/components/ProblemDescription";
import TestResults from "@/components/TestResults";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Send, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const ProblemSolvePage = () => {
  const { id } = useParams();
  const [code, setCode] = useState(`def twoSum(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: List[int]
    """
    # Your solution here
    pass`);

  const [language, setLanguage] = useState("python");
  const [testResults, setTestResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  // Mock problem data - in real app this would come from API
  const problem = {
    id: parseInt(id || "1"),
    title: "Two Sum",
    difficulty: "Easy",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
    ],
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    toast("Running code...");

    // Simulate API call
    setTimeout(() => {
      setTestResults({
        passed: 2,
        total: 3,
        cases: [
          {
            input: "[2,7,11,15], 9",
            expected: "[0,1]",
            actual: "[0,1]",
            passed: true,
            time: "1ms",
          },
          {
            input: "[3,2,4], 6",
            expected: "[1,2]",
            actual: "[1,2]",
            passed: true,
            time: "1ms",
          },
          {
            input: "[3,3], 6",
            expected: "[0,1]",
            actual: "Time Limit Exceeded",
            passed: false,
            time: ">1000ms",
          },
        ],
      });
      setIsRunning(false);
      toast("Code execution completed");
    }, 2000);
  };

  const handleSubmit = async () => {
    setIsRunning(true);
    toast("Submitting solution...");

    // Simulate submission
    setTimeout(() => {
      toast.success("Solution accepted! +15 XP");
      setIsRunning(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-craft-bg">
      <Header />
      <div className="flex h-[calc(100vh-80px)]">
        <ResizablePanelGroup direction="horizontal">
          {/* Left Panel - Problem Description */}
          <ResizablePanel>
            <div className="bg-craft-panel border-r border-craft-border overflow-y-auto [scrollbar-gutter:stable]">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <h1 className="text-xl font-bold text-craft-text-primary">
                      {problem.id}. {problem.title}
                    </h1>
                    <Badge className="bg-craft-success/20 text-craft-success border-craft-success/30">
                      {problem.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-craft-text-secondary hover:text-craft-accent"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-craft-text-secondary hover:text-craft-accent"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <ProblemDescription problem={problem} />
              </div>
            </div>
          </ResizablePanel>

          {/* Resize Handle */}
          <ResizableHandle />

          {/* Right Panel - Code Editor */}
          <ResizablePanel>
            <div className="flex flex-col h-full">
              {/* Editor Header */}
              <div className="bg-craft-panel border-b border-craft-border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="bg-craft-bg border border-craft-border rounded px-3 py-1 text-craft-text-primary focus:border-craft-accent"
                    >
                      <option value="python">Python</option>
                      <option value="javascript">JavaScript</option>
                      <option value="java">Java</option>
                      <option value="cpp">C++</option>
                    </select>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-craft-text-secondary hover:text-craft-accent"
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={handleRunCode}
                      disabled={isRunning}
                      variant="outline"
                      className="border-craft-border text-black hover:border-craft-bg"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Run
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={isRunning}
                      className="bg-craft-accent hover:bg-craft-accent/80 text-craft-bg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Submit
                    </Button>
                  </div>
                </div>
              </div>

              {/* Code Editor */}
              <div className="h-full">
                <CodeEditor
                  value={code}
                  onChange={setCode}
                  language={language}
                />
              </div>

              {/* Test Results */}
              {testResults && <TestResults results={testResults} />}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default ProblemSolvePage;
