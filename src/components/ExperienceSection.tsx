import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'TechStart Inc.',
      position: 'Software Engineering Intern',
      location: 'San Francisco, CA',
      duration: 'June 2024 - Present',
      description: [
        'Developed responsive web applications using React and TypeScript',
        'Collaborated with cross-functional teams to deliver user-centered features',
        'Optimized application performance, reducing load times by 40%',
        'Implemented automated testing suites with Jest and React Testing Library'
      ],
      logo: '🚀',
      current: true
    },
    {
      company: 'University Research Lab',
      position: 'Research Assistant',
      location: 'Berkeley, CA',
      duration: 'Jan 2024 - May 2024',
      description: [
        'Conducted research on sustainable computing and green software practices',
        'Developed data analysis tools using Python and machine learning libraries',
        'Co-authored research paper on energy-efficient algorithms',
        'Presented findings at the ACM Student Research Competition'
      ],
      logo: '🔬',
      current: false
    },
    {
      company: 'Code for Good',
      position: 'Volunteer Developer',
      location: 'Remote',
      duration: 'Sep 2023 - Dec 2023',
      description: [
        'Built web platform for local nonprofit organization',
        'Managed project timeline and coordinated with 5-person development team',
        'Implemented accessibility features following WCAG 2.1 guidelines',
        'Delivered project 2 weeks ahead of schedule'
      ],
      logo: '💚',
      current: false
    },
    {
      company: 'Campus Innovation Challenge',
      position: 'Team Lead & Full-Stack Developer',
      location: 'Berkeley, CA',
      duration: 'Mar 2023',
      description: [
        'Led team of 4 to develop sustainability tracking mobile app',
        'Built REST API with Node.js and MongoDB',
        'Designed and implemented React Native frontend',
        'Won "Best Sustainability Impact" award'
      ],
      logo: '🏆',
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cosmic text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="font-aurora text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in tech, from research labs to startup environments
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                  {exp.current && (
                    <div className="w-full h-full bg-primary rounded-full animate-pulse-glow"></div>
                  )}
                </div>

                {/* Content card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 ml-12 md:ml-0' : 'md:pl-8 ml-12 md:ml-0'}`}>
                  <Card className="glass-morphism border-white/20 hover:border-white/40 cosmic-transition hover:scale-105">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{exp.logo}</span>
                          <div>
                            <h3 className="font-cosmic font-semibold text-foreground">
                              {exp.position}
                            </h3>
                            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                              <Building className="h-4 w-4" />
                              <span>{exp.company}</span>
                            </div>
                          </div>
                        </div>
                        {exp.current && (
                          <span className="px-2 py-1 bg-success/20 text-success text-xs rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-foreground/80 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;