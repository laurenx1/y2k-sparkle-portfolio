import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Meta',
      position: 'Software Engineering / GenAI Intern',
      location: 'NYC',
      duration: 'May 2025 - Present',
      description: [
        'Developed agentic internal tooling for oncall ENGs',
        'Collaborated with cross-functional teams to deliver user-centered features',
        'Created the first AI agent for on-call ads experience teams using SEV guidebooks',
        'Worked primarily in Hack and React'
      ],
      logo: '🚀',
      current: true
    },
    {
      company: 'California Institute of Technology (Caltech)',
      position: 'Researcher',
      location: 'Pasadena, CA',
      duration: 'Jan 2025 - Present',
      description: [
        'Engineered robust backend and data pipelines for LLM',
        'Developed data analysis tools using Python and machine learning libraries',
        'enabling real-time bias, misinformation, and polarization analysis across 15 digital news sources',
        'Supplements the research Professor R. Michael Alvarez for the Caltech/MIT Voting Technology Project'
      ],
      logo: '🔬',
      current: true
    },
    {
      company: 'Meta',
      position: 'Meta University SWE Intern',
      location: 'Menlo Park, CA',
      duration: 'Jun 2024 - Aug 2024',
      description: [
        '•Completed intensive Web and Full Stack Development training through CodePath x Meta, mastering React, Node.js, and RESTful API design through hands-on projects',
        '•Developed PULSE, a news web app featuring PULSECHECK for personalized searches using LLaMA3',
        'Designed and implemented React Native frontend',
        ' AI-generated content detection with RoBERTa (OpenAI), and custom-tuned Google BERT for political bias analysis'
      ],
      logo: '🏆',
      current: false
    },
    {
      company: 'Music and Auditory Research Lab (MARL) @ NYU',
      position: 'Research Intern',
      location: 'NYC',
      duration: 'Jun 2023 - Aug 2023',
      description: [
        '•Developed PyTorch models to correlate audio-visual data from 100+ hours of EPIC KITCHENS first-person recordings, leveraging XMem, CLIP, and GPT-4, to enhance spatial audio understanding for AR/VR applications',
        'Developed Epic Kitchens United python package, streamlining data input for audio-visual correlation models and improving processing efficiency by 99.4%.',
        '•Engineered code and Python package that enables training of computational models for spatial sound scene description, advancing AR/VR technology, spatial audio, and music information retrieval (NSF award #1955357)',
        'Delivered project 3 weeks ahead of schedule'
      ],
      logo: '🎸',
      current: false
    },
  ];

  return (
    <section id="experience" className="py-20 dark-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="font-heading text-lg text-white/80 max-w-2xl mx-auto">
            My journey in tech, from research labs to startup environments
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/40"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white z-10">
                  {exp.current && (
                    <div className="w-full h-full bg-primary rounded-full animate-pulse-glow"></div>
                  )}
                </div>

                {/* Content card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 ml-12 md:ml-0' : 'md:pl-8 ml-12 md:ml-0'}`}>
                  <Card className="glass-dark border-white/10 hover:border-white/20 smooth-transition hover:scale-105">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{exp.logo}</span>
                          <div>
                            <h3 className="font-heading font-semibold text-white">
                              {exp.position}
                            </h3>
                            <div className="flex items-center space-x-2 text-white/70 text-sm">
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
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-white/70">
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
                          <li key={i} className="text-white/90 text-sm flex items-start">
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