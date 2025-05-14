
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PasswordStrength from "./pages/PasswordStrength";
import BruteForce from "./pages/BruteForce";
import PasswordSecurity from "./pages/PasswordSecurity";
import PasswordCracker from "./pages/PasswordCracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/password-strength" element={<PasswordStrength />} />
          <Route path="/brute-force" element={<BruteForce />} />
          <Route path="/password-security" element={<PasswordSecurity />} />
          <Route path="/password-cracker" element={<PasswordCracker />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
