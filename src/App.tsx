import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProblemsPage from "./pages/ProblemsPage";
import SheetsPage from "./pages/SheetsPage";
import ContestsPage from "./pages/ContestsPage";
import InterviewPage from "./pages/InterviewPage";
import ProblemSolvePage from "./pages/ProblemSolvePage";
import CreateProblemPage from "./pages/CreateProblemPage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Index from "./pages/Index";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/problems/create" element={<CreateProblemPage />} />
          <Route path="/sheets" element={<SheetsPage />} />
          <Route path="/contests" element={<ContestsPage />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/problem/:id" element={<ProblemSolvePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
