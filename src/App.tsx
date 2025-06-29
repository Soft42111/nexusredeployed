import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import ScrollToBottomButton from "@/components/ui/ScrollToBottomButton";
import ScrollButtons from "@/components/ui/ScrollButtons"; // ✅ New combined button

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* ✅ Scroll-to-top and bottom buttons */}
          <ScrollToTopButton />
          <ScrollToBottomButton />
          <ScrollButtons /> {/* ✅ Added this ONLY */}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}