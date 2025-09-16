import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import Footer from "@/components/Footer";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import { motion, useScroll, useTransform } from "framer-motion";

const queryClient = new QueryClient();

const App = () => {
  const { scrollYProgress } = useScroll();

  // Animate the line's vertical scale based on scroll progress.
  // It starts drawing almost immediately and finishes at the very end of the page.
  const scaleY = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
          <CustomCursor />
          <ParticleBackground />
          <Navigation />

          {/* Container for the page content and the line */}
          <div className="relative">
            {/* 
              This is the container for the line.
              - It starts 85% down the initial screen height (vh), which is below your hero text.
              - It extends all the way to the bottom of the page (bottom-0).
            */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[85vh] bottom-0 w-1 z-0">
              {/* 
                This is the visible, glowing line itself.
                - We animate its `scaleY` property from 0 to 1 based on scroll progress.
                - `origin-top` ensures it grows downwards from its starting point.
              */}
              <motion.div
                className="w-full h-full bg-gradient-to-b from-neon-blue to-neon-cyan origin-top"
                style={{ scaleY }}
              />
            </div>

            {/* All your page content sits on top of the line */}
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
              <Footer />
            </main>
          </div>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;