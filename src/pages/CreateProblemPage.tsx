
import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import MarkdownEditor from "@/components/MarkdownEditor";
import TestCaseManager from "@/components/TestCaseManager";
import { Save, Eye, Send, X } from "lucide-react";

interface TestCase {
  id: string;
  input: string;
  expectedOutput: string;
}

const CreateProblemPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    inputFormat: "",
    outputFormat: "",
    constraints: "",
    sampleInput: "",
    sampleOutput: "",
    difficulty: "Easy" as "Easy" | "Medium" | "Hard",
    companyTag: "",
    sheet: ""
  });

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [testCases, setTestCases] = useState<TestCase[]>([]);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const availableTags = [
    "Array", "String", "Hash Table", "Dynamic Programming", "Math", "Sorting",
    "Greedy", "Database", "Binary Search", "Tree", "Depth-First Search",
    "Binary Tree", "Breadth-First Search", "Two Pointers", "Stack", "Graph"
  ];

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSubmit = (action: 'draft' | 'preview' | 'submit') => {
    console.log('Action:', action);
    console.log('Form Data:', formData);
    console.log('Tags:', selectedTags);
    console.log('Test Cases:', testCases);
    
    if (action === 'preview') {
      setIsPreviewMode(true);
    }
    // Here you would typically send the data to your backend
  };

  const isFormValid = formData.title && formData.description && formData.inputFormat && formData.outputFormat;

  if (isPreviewMode) {
    return (
      <div className="min-h-screen bg-craft-bg">
        <Header />
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-craft-text-primary">Problem Preview</h1>
            <Button
              onClick={() => setIsPreviewMode(false)}
              variant="outline"
              className="border-craft-border text-craft-text-secondary hover:border-craft-accent hover:text-craft-accent"
            >
              <X className="w-4 h-4 mr-2" />
              Exit Preview
            </Button>
          </div>

          <Card className="bg-craft-panel border-craft-border p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-craft-text-primary">{formData.title}</h2>
                <Badge className={
                  formData.difficulty === 'Easy' ? 'bg-craft-success/20 text-craft-success border-craft-success/30' :
                  formData.difficulty === 'Medium' ? 'bg-craft-accent-secondary/20 text-craft-accent-secondary border-craft-accent-secondary/30' :
                  'bg-craft-error/20 text-craft-error border-craft-error/30'
                }>
                  {formData.difficulty}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedTags.map(tag => (
                  <Badge key={tag} variant="outline" className="border-craft-border text-craft-text-secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-craft-text-primary mb-3">Description</h3>
                <div className="text-craft-text-secondary" dangerouslySetInnerHTML={{ 
                  __html: formData.description.replace(/\n/g, '<br>') 
                }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-craft-text-primary mb-3">Input Format</h3>
                  <p className="text-craft-text-secondary">{formData.inputFormat}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-craft-text-primary mb-3">Output Format</h3>
                  <p className="text-craft-text-secondary">{formData.outputFormat}</p>
                </div>
              </div>

              {formData.constraints && (
                <div>
                  <h3 className="text-lg font-semibold text-craft-text-primary mb-3">Constraints</h3>
                  <p className="text-craft-text-secondary">{formData.constraints}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-craft-text-primary mb-3">Sample Input</h3>
                  <pre className="bg-craft-bg border border-craft-border rounded p-3 text-craft-text-primary font-mono text-sm">
                    {formData.sampleInput}
                  </pre>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-craft-text-primary mb-3">Sample Output</h3>
                  <pre className="bg-craft-bg border border-craft-border rounded p-3 text-craft-text-primary font-mono text-sm">
                    {formData.sampleOutput}
                  </pre>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-craft-bg">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-craft-text-primary mb-2">Create Problem</h1>
          <p className="text-craft-text-secondary">Design a new coding challenge for the community</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card className="bg-craft-panel border-craft-border p-6">
              <h2 className="text-xl font-semibold text-craft-text-primary mb-4">Basic Information</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-craft-text-primary">Problem Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter problem title..."
                    className="bg-craft-bg border-craft-border text-craft-text-primary placeholder:text-craft-text-secondary focus:border-craft-accent"
                  />
                </div>

                <MarkdownEditor
                  label="Problem Description *"
                  value={formData.description}
                  onChange={(value) => setFormData(prev => ({ ...prev, description: value }))}
                  placeholder="Describe the problem in detail. You can use markdown formatting..."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="inputFormat" className="text-craft-text-primary">Input Format *</Label>
                    <Textarea
                      id="inputFormat"
                      value={formData.inputFormat}
                      onChange={(e) => setFormData(prev => ({ ...prev, inputFormat: e.target.value }))}
                      placeholder="Describe the input format..."
                      className="bg-craft-bg border-craft-border text-craft-text-primary placeholder:text-craft-text-secondary focus:border-craft-accent"
                    />
                  </div>
                  <div>
                    <Label htmlFor="outputFormat" className="text-craft-text-primary">Output Format *</Label>
                    <Textarea
                      id="outputFormat"
                      value={formData.outputFormat}
                      onChange={(e) => setFormData(prev => ({ ...prev, outputFormat: e.target.value }))}
                      placeholder="Describe the output format..."
                      className="bg-craft-bg border-craft-border text-craft-text-primary placeholder:text-craft-text-secondary focus:border-craft-accent"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="constraints" className="text-craft-text-primary">Constraints</Label>
                  <Textarea
                    id="constraints"
                    value={formData.constraints}
                    onChange={(e) => setFormData(prev => ({ ...prev, constraints: e.target.value }))}
                    placeholder="List any constraints (e.g., 1 ≤ n ≤ 10^5)..."
                    className="bg-craft-bg border-craft-border text-craft-text-primary placeholder:text-craft-text-secondary focus:border-craft-accent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sampleInput" className="text-craft-text-primary">Sample Input</Label>
                    <Textarea
                      id="sampleInput"
                      value={formData.sampleInput}
                      onChange={(e) => setFormData(prev => ({ ...prev, sampleInput: e.target.value }))}
                      placeholder="Provide sample input..."
                      className="bg-craft-bg border-craft-border text-craft-text-primary placeholder:text-craft-text-secondary focus:border-craft-accent font-mono"
                    />
                  </div>
                  <div>
                    <Label htmlFor="sampleOutput" className="text-craft-text-primary">Sample Output</Label>
                    <Textarea
                      id="sampleOutput"
                      value={formData.sampleOutput}
                      onChange={(e) => setFormData(prev => ({ ...prev, sampleOutput: e.target.value }))}
                      placeholder="Provide expected output..."
                      className="bg-craft-bg border-craft-border text-craft-text-primary placeholder:text-craft-text-secondary focus:border-craft-accent font-mono"
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Test Cases */}
            <Card className="bg-craft-panel border-craft-border p-6">
              <TestCaseManager testCases={testCases} onChange={setTestCases} />
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Metadata */}
            <Card className="bg-craft-panel border-craft-border p-6">
              <h3 className="text-lg font-semibold text-craft-text-primary mb-4">Metadata</h3>
              
              <div className="space-y-4">
                <div>
                  <Label className="text-craft-text-primary">Difficulty Level</Label>
                  <div className="flex space-x-2 mt-2">
                    {(['Easy', 'Medium', 'Hard'] as const).map((level) => (
                      <Button
                        key={level}
                        type="button"
                        variant={formData.difficulty === level ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFormData(prev => ({ ...prev, difficulty: level }))}
                        className={formData.difficulty === level 
                          ? "bg-craft-accent hover:bg-craft-accent/80 text-craft-bg" 
                          : "border-craft-border text-craft-text-secondary hover:border-craft-accent hover:text-craft-accent"
                        }
                      >
                        {level}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="companyTag" className="text-craft-text-primary">Company Tag</Label>
                  <Input
                    id="companyTag"
                    value={formData.companyTag}
                    onChange={(e) => setFormData(prev => ({ ...prev, companyTag: e.target.value }))}
                    placeholder="e.g., Google, Facebook..."
                    className="bg-craft-bg border-craft-border text-craft-text-primary placeholder:text-craft-text-secondary focus:border-craft-accent"
                  />
                </div>

                <div>
                  <Label htmlFor="sheet" className="text-craft-text-primary">Add to Sheet</Label>
                  <Input
                    id="sheet"
                    value={formData.sheet}
                    onChange={(e) => setFormData(prev => ({ ...prev, sheet: e.target.value }))}
                    placeholder="Sheet name (optional)"
                    className="bg-craft-bg border-craft-border text-craft-text-primary placeholder:text-craft-text-secondary focus:border-craft-accent"
                  />
                </div>
              </div>
            </Card>

            {/* Tags */}
            <Card className="bg-craft-panel border-craft-border p-6">
              <h3 className="text-lg font-semibold text-craft-text-primary mb-4">Tags</h3>
              
              <div className="flex flex-wrap gap-2">
                {availableTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className={`cursor-pointer transition-all ${
                      selectedTags.includes(tag)
                        ? "bg-craft-accent text-craft-bg hover:bg-craft-accent/80"
                        : "border-craft-border text-craft-text-secondary hover:border-craft-accent hover:text-craft-accent"
                    }`}
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Actions */}
            <Card className="bg-craft-panel border-craft-border p-6">
              <h3 className="text-lg font-semibold text-craft-text-primary mb-4">Actions</h3>
              
              <div className="space-y-3">
                <Button
                  onClick={() => handleSubmit('draft')}
                  variant="outline"
                  className="w-full border-craft-border text-craft-text-secondary hover:border-craft-accent hover:text-craft-accent"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>
                
                <Button
                  onClick={() => handleSubmit('preview')}
                  variant="outline"
                  className="w-full border-craft-border text-craft-text-secondary hover:border-craft-accent hover:text-craft-accent"
                  disabled={!isFormValid}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                
                <Button
                  onClick={() => handleSubmit('submit')}
                  className="w-full bg-craft-accent hover:bg-craft-accent/80 text-craft-bg"
                  disabled={!isFormValid}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Problem
                </Button>
              </div>

              {!isFormValid && (
                <p className="text-craft-error text-sm mt-2">
                  Please fill in all required fields before submitting.
                </p>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProblemPage;
