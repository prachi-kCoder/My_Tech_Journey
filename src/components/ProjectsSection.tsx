
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "Ai-Curewell",
      description: "Unleash your health potential with our app! Enter your symptoms for smart disease predictions using advanced machine learning. Get tailored advice, precautions, and medications, plus easily find nearby hospitals and book appointments.",
      tags: ["AI", "Machine Learning", "Healthcare", "React"],
      category: "AI",
      impact: "Smart health predictions & hospital booking",
      link: "https://ai-curewell-clientside.onrender.com/"
    },
    {
      title: "Crop-Companion",
      description: "Real-time disease detection and plant recommendation system based on soil and climate conditions. Helps farmers stay aware of new techniques and technologies to increase crop yield with AI-powered insights.",
      tags: ["AI", "Machine Learning", "Agriculture", "React"],
      category: "AI", 
      impact: "Empowering farmers with real-time insights",
      link: "#"
    },
    {
      title: "OCEARA",
      description: "AI-Driven Unified Data Platform for Oceanographic, Fisheries, and Molecular Biodiversity Insights. Designed as a cloud-ready, modular system with automated pipelines to ingest and standardize high-volume, heterogeneous datasets—including oceanographic sensor data, eDNA, and otolith morphology.",
      tags: ["Python", "AI", "Data Science", "Cloud"],
      category: "AI",
      impact: "Unified oceanographic data analysis",
      link: "https://github.com/prachi-kCoder/SIH-2025-OCEANIC-DATA-SYNC-/tree/main"
    },
    {
      title: "Nexus.ai",
      description: "Real-time AI Trend Tracking: Stay updated with curated AI news and trends from across the globe. AI Startup Spotlights and personalized recommendations. AIStreamX adapts to your interests, providing tailored content and suggestions to keep you informed and ahead of the curve.",
      tags: ["Next.js", "AI", "Real-time", "News API"],
      category: "AI",
      impact: "Real-time AI trend insights",
      link: "https://ai-stream-x.vercel.app/"
    },
    {
      title: "EcoExchange",
      description: "EcoExchange tackles the urgent global challenge of waste mismanagement and unsustainable consumption. This platform reimagines the lifecycle of everyday goods—empowering users to resell, repair, upcycle, or donate items with the support of AI-powered recommendations, pricing, and matchmaking.",
      tags: ["MERN", "AI", "Sustainability", "React"],
      category: "Full-Stack",
      impact: "Circular economy platform",
      link: "https://github.com/prachi-kCoder/EcoExchange"
    },
    {
      title: "AgriIntel",
      description: "Full stack project to empower farmers for disease prediction and crop prediction and enhance the crop yield through intelligent agricultural insights.",
      tags: ["React", "Node.js", "AI", "Agriculture"],
      category: "Full-Stack",
      impact: "Empowering farmers with AI",
      link: "https://agribuzzz.onrender.com/"
    },
    {
      title: "MindBloom",
      description: "MindBloom is an innovative project designed to support neurodiverse children—especially those navigating ADHD, ASD (Autism Spectrum Disorder), and dyslexia. Through intelligent audio support, interactive learning games, and diagnostic assistance, MindBloom ensures no child is left behind.",
      tags: ["React", "AI", "Accessibility", "Education"],
      category: "Social Impact",
      impact: "Supporting neurodiverse children",
      link: "https://mind-bloom-app-git-main-prachi-kumaris-projects-194ed928.vercel.app/"
    },
    {
      title: "Smart City Traffic Optimization",
      description: "IoT and AI-based solution for reducing traffic congestion and improving urban mobility.",
      tags: ["IoT", "Python", "TensorFlow", "Data Analytics"],
      category: "Social Impact",
      impact: "30% reduction in traffic delays",
      link: "#"
    },
    {
      title: "Competitive Programming Trainer",
      description: "Platform for algorithmic problem solving with automated testing and performance analytics.",
      tags: ["React", "Express", "PostgreSQL", "Docker"],
      category: "Full-Stack",
      impact: "1000+ problems solved",
      link: "#"
    }
  ];

  const categories = ['All', 'AI', 'Full-Stack', 'Social Impact'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing AI innovation, full-stack development, and social impact
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`${
                  activeFilter === category 
                    ? 'bg-sky-400 text-slate-900' 
                    : 'border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="neo-card p-6 hover:scale-105 transition-all duration-300 group">
              <div className="mb-4">
                <h3 className="text-xl font-poppins font-semibold mb-2 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex}
                    variant="secondary"
                    className="bg-slate-700 text-foreground text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-emerald-500 font-medium">Impact: </span>
                  <span className="text-muted-foreground">{project.impact}</span>
                </div>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="text-sky-400 hover:text-sky-300"
                  onClick={() => project.link !== "#" && window.open(project.link, '_blank')}
                >
                  View →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900"
            onClick={() => window.open('https://github.com/prachi-kCoder?tab=repositories', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
