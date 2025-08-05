import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import cosmicHero from '@/assets/cosmic-hero.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${cosmicHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main heading */}
          <div>
            <h1 className="font-cosmic text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              Hey, I'm{' '}
              <span className="stars-gradient bg-clip-text text-transparent">
                Alex Chen
              </span>
            </h1>
            <p className="font-aurora text-lg sm:text-xl lg:text-2xl text-muted-foreground">
              Computer Science Student • Software Engineer • Entrepreneur
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative tech solutions that create positive impact. 
            Currently exploring the intersection of sustainability, design, and cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cosmic" 
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="font-cosmic"
            >
              View My Work
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => scrollToSection('about')}
              className="font-cosmic"
            >
              Learn About Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary cosmic-transition hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary cosmic-transition hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="text-foreground/60 hover:text-primary cosmic-transition hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground/60 hover:text-primary cosmic-transition"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;