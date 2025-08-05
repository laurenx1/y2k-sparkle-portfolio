import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star } from 'lucide-react';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'EcoTracker',
      description: 'A comprehensive sustainability tracking platform that helps users monitor their carbon footprint and environmental impact. Features real-time data visualization and personalized recommendations.',
      image: project1,
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'AWS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
      status: 'Completed'
    },
    {
      title: 'StarGaze',
      description: 'Mobile app that uses AR technology to help users identify constellations and celestial objects. Includes educational content and astronomy community features.',
      image: project2,
      technologies: ['React Native', 'ARKit', 'Firebase', 'Python', 'TensorFlow'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true,
      status: 'In Development'
    },
    {
      title: 'DevCollab',
      description: 'Collaborative coding platform designed for remote teams. Features real-time code sharing, integrated video calls, and project management tools.',
      image: project3,
      technologies: ['Vue.js', 'Socket.io', 'MongoDB', 'Docker', 'WebRTC'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false,
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-cosmic text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="font-aurora text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work building innovative solutions for real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group glass-morphism border-white/20 hover:border-white/40 cosmic-transition hover:scale-105 overflow-hidden ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover cosmic-transition group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 cosmic-transition"></div>
                
                {/* Project status badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-success/20 text-success' 
                      : 'bg-warning/20 text-warning'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      <Star className="h-3 w-3" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Title and description */}
                  <div>
                    <h3 className="font-cosmic text-xl font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Built with:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3 pt-2">
                    <Button
                      variant="neon"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all projects CTA */}
        <div className="text-center mt-12">
          <Button variant="aurora" size="lg" className="font-cosmic">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;