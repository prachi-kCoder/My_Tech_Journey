
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MentorshipHub from "./pages/MentorshipHub";
import DSARoadmap from "./pages/DSARoadmap";
import WebDevelopmentRoadmap from "./pages/WebDevelopmentRoadmap";
import AIMLRoadmap from "./pages/AIMLRoadmap";
import CareerGuidance from "./pages/CareerGuidance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mentorship" element={<MentorshipHub />} />
          <Route path="/mentorship/dsa-roadmap" element={<DSARoadmap />} />
          <Route path="/mentorship/web-development" element={<WebDevelopmentRoadmap />} />
          <Route path="/mentorship/ai-ml" element={<AIMLRoadmap />} />
          <Route path="/mentorship/career-guidance" element={<CareerGuidance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
