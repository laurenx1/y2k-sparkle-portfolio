import { Star, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div className="flex items-center justify-center space-x-2">
            <Star className="h-6 w-6 text-primary animate-cosmic-spin" />
            <span className="font-cosmic font-bold text-xl text-foreground">
              Alex Chen
            </span>
            <Star className="h-6 w-6 text-primary animate-cosmic-spin" />
          </div>

          {/* Tagline */}
          <p className="font-aurora text-muted-foreground max-w-md mx-auto">
            Building the future, one line of code at a time ✨
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-0.5 bg-primary/30"></div>
            <Star className="h-4 w-4 text-primary/50" />
            <div className="w-12 h-0.5 bg-primary/30"></div>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Alex Chen</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent animate-pulse" />
              <span>and lots of caffeine</span>
            </span>
          </div>

          {/* Tech stack credit */}
          <p className="text-xs text-muted-foreground/70">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;