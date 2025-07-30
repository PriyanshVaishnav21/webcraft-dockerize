import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Rocket, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-6 md:p-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg shadow-glow-primary"></div>
            <span className="text-xl font-bold text-white">WebCraft</span>
          </div>
          <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
            Get Started
          </Button>
        </nav>

        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              ✨ Modern Web Development
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Build the
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"> Future </span>
              of Web
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Create stunning, modern web applications with cutting-edge technology. 
              Fast, beautiful, and built for tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow-primary">
                <Rocket className="mr-2 h-5 w-5" />
                Start Building
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
                <Globe className="mr-2 h-5 w-5" />
                Explore Demos
              </Button>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-glow-accent">
                <Sparkles className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Beautiful Design</h3>
                <p className="text-white/70 text-sm">Stunning UI components with modern aesthetics</p>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-glow-accent">
                <Zap className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-white/70 text-sm">Optimized performance for the best user experience</p>
              </Card>
              
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-glow-accent">
                <Globe className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Global Ready</h3>
                <p className="text-white/70 text-sm">Built for worldwide deployment and scaling</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-6 md:p-8 text-center">
          <p className="text-white/60 text-sm">© 2024 WebCraft. Built with modern web technologies.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
