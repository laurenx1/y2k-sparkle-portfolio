import { Card, CardContent } from '@/components/ui/card';
import { Code, Lightbulb, Target, Zap } from 'lucide-react';
import avatar from '@/assets/avatar.jpg';

const AboutSection = () => {
  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable solutions with modern best practices'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Exploring emerging technologies to solve real-world problems'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Building products that make a meaningful difference in people\'s lives'
    },
    {
      icon: Zap,
      title: 'Sustainability',
      description: 'Creating technology solutions that support environmental goals'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="font-heading text-lg text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between innovative technology and sustainable impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden primary-shadow animate-float">
                <img
                  src={avatar}
                  alt="Lauren Pryor"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse-glow delay-300"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Hi! I'm Lauren, a Computer Science student with big dreams.
              </h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Currently pursuing my degree in Computer Science while diving deep into the world of 
                  software engineering and entrepreneurship. I'm passionate about creating technology 
                  that doesn't just work well, but makes a positive impact on our world.
                </p>
                <p>
                  My interests span across full-stack development, sustainable tech solutions, and 
                  user-centered design. I believe the best products come from understanding both the 
                  technical possibilities and the human needs they serve.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, reading about 
                  emerging technologies, or brainstorming the next big idea that could change how 
                  we interact with technology.
                </p>
              </div>
            </div>

            {/* Skills/Technologies */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                Technologies I love working with:
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'Figma'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground smooth-transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-20">
          <h3 className="font-heading text-2xl font-semibold text-center text-foreground mb-12">
            What drives me
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="glass-clean border-white/20 hover:border-white/40 smooth-transition hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-foreground/70">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;