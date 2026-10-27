import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageLoader from "@/components/layout/PageLoader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import BackToTop from "@/components/layout/BackToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Ministries from "./pages/Ministries";
import Events from "./pages/Events";
import Convention from "./pages/Convention";
import Testimonies from "./pages/Testimonies";
import Branches from "./pages/Branches";
import Gallery from "./pages/Gallery";
import Give from "./pages/Give";
import Contact from "./pages/Contact";
import Livestream from "./pages/Livestream";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const LOADER_DURATION_MS = 2400;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading ? (
          <PageLoader />
        ) : (
          <BrowserRouter>
            <ScrollToTop />
            <BackToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/sermons" element={<Sermons />} />
              <Route path="/ministries" element={<Ministries />} />
              <Route path="/events" element={<Events />} />
              <Route path="/convention" element={<Convention />} />
              <Route path="/testimonies" element={<Testimonies />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/give" element={<Give />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/livestream" element={<Livestream />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
