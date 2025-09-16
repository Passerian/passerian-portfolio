import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-card p-12 rounded-3xl text-center max-w-md mx-auto">
        <div className="mb-8">
          <AlertCircle className="w-20 h-20 text-neon-blue mx-auto mb-4" />
          <h1 className="text-6xl font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent mb-4">
            404
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Oops! This page seems to have vanished into the digital void.
          </p>
        </div>
        
        <Button
          asChild
          className="cursor-hover bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-purple text-background font-semibold px-8 py-3 rounded-xl transition-all duration-300"
        >
          <a href="/" className="flex items-center gap-2">
            <Home size={20} />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
