import Header from "@/components/Header";
import ProblemCard from "@/components/ProblemCard";
import FilterBar from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const ProblemsPage = () => {
  const problems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy" as const,
      topics: ["Array", "Hash Table"],
      solved: true,
      acceptanceRate: 49.2,
    },
    {
      id: 2,
      title: "Add Two Numbers",
      difficulty: "Medium" as const,
      topics: ["Linked List", "Math", "Recursion"],
      solved: false,
      acceptanceRate: 37.8,
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium" as const,
      topics: ["Hash Table", "String", "Sliding Window"],
      solved: true,
      acceptanceRate: 33.1,
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard" as const,
      topics: ["Array", "Binary Search", "Divide and Conquer"],
      solved: false,
      acceptanceRate: 35.4,
    },
    // Add more problems here
  ];

  return (
    <div className="min-h-screen bg-craft-bg">
      <Header />

      <div className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-craft-text-primary mb-2">
              Problems
            </h1>
            <p className="text-craft-text-secondary">
              Sharpen your coding skills with our curated problems
            </p>
          </div>
          <Link to="/problems/create">
            <Button className="bg-craft-accent hover:bg-craft-accent/80 text-craft-bg">
              <Plus className="w-4 h-4 mr-2" />
              Create Problem
            </Button>
          </Link>
        </div>

        {/* Filter Bar */}
        <FilterBar />

        {/* Problems List */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-craft-text-primary">
              All Problems
            </h2>
            <div className="flex items-center space-x-2 text-sm text-craft-text-secondary">
              <span>Showing 1-20 of 2,847 problems</span>
            </div>
          </div>

          <div className="grid gap-4">
            {problems.map((problem) => (
              <ProblemCard key={problem.id} {...problem} />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-craft-border text-craft-text-secondary hover:border-craft-accent hover:text-craft-accent transition-all duration-200"
          >
            Load More Problems
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProblemsPage;
