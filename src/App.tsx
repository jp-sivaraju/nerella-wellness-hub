
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PatientRegistration from "./pages/PatientRegistration";
import ServicesShowcase from "./pages/ServicesShowcase";
import AboutShowcase from "./pages/AboutShowcase";
import ContactShowcase from "./pages/ContactShowcase";
import TestimonialsShowcase from "./pages/TestimonialsShowcase";
import BlogShowcase from "./pages/BlogShowcase";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patient-registration" element={<PatientRegistration />} />
          <Route path="/services" element={<ServicesShowcase />} />
          <Route path="/about" element={<AboutShowcase />} />
          <Route path="/contact" element={<ContactShowcase />} />
          <Route path="/testimonials" element={<TestimonialsShowcase />} />
          <Route path="/blog" element={<BlogShowcase />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
