import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ConnectSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent! ✨",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: 'hover:text-primary'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:text-secondary'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:text-accent'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:alex@example.com',
      color: 'hover:text-success'
    }
  ];

  return (
    <section id="connect" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="font-heading text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat about tech? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-morphism border-white/20">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-white/20 focus:border-primary cosmic-transition"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-white/20 focus:border-primary cosmic-transition"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hi!"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-white/20 focus:border-primary cosmic-transition resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cosmic"
                  size="lg"
                  className="w-full font-heading"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Info */}
            <Card className="glass-morphism border-white/20">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Get in touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-foreground/80">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>San Francisco Bay Area, CA</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-foreground/80">
                    <Mail className="h-5 w-5 text-primary" />
                    <a 
                      href="mailto:alex@example.com"
                      className="hover:text-primary cosmic-transition"
                    >
                      alex@example.com
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    I'm always open to discussing new opportunities, collaborating on interesting projects, 
                    or just chatting about technology and innovation. Don't hesitate to reach out!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-morphism border-white/20">
              <CardContent className="p-8">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Find me online
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-4 bg-background/30 rounded-lg cosmic-transition hover:scale-105 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;