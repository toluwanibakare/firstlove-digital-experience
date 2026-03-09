import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Testimonies from "./pages/Testimonies";
import Branches from "./pages/Branches";
import Gallery from "./pages/Gallery";
import Give from "./pages/Give";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
