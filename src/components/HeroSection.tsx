import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import cosmicHero from '@/assets/ab_3.png';

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
      <div className="absolute inset-0"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main heading */}
          <div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
  Hey, I'm{' '}
  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
    Lauren
  </span>
</h1>
            <p className="font-heading text-lg sm:text-xl lg:text-2xl text-primary">
              Computer Science Student • Software Engineer • Entrepreneur
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative tech solutions that create positive impact. 
            Currently exploring the intersection of sustainability, design, and cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="gradient" 
              size="xl"
              onClick={() => scrollToSection('projects')}
              className="font-heading"
            >
              View My Work
            </Button>
            <Button 
              variant="clean" 
              size="xl"
              onClick={() => scrollToSection('about')}
              className="font-heading"
            >
              Learn About Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/laurenx1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary smooth-transition hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/laurenpryor1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary smooth-transition hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:lpryor@caltech.edu"
              className="text-white/60 hover:text-primary smooth-transition hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-6 left-1/2 transform -translate-x-1/2 animate-float justify-center">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground/60 hover:text-primary smooth-transition"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;