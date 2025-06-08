
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const WebDevelopmentRoadmap = () => {
  const tracks = [
    {
      title: "Frontend Development",
      duration: "4-6 months",
      phases: [
        {
          name: "Fundamentals",
          weeks: "4-6 weeks",
          topics: ["HTML5 & Semantic Web", "CSS3 & Flexbox/Grid", "JavaScript ES6+", "DOM Manipulation", "Responsive Design"]
        },
        {
          name: "Modern Frontend",
          weeks: "6-8 weeks", 
          topics: ["React.js Fundamentals", "Component Architecture", "State Management", "React Hooks", "React Router"]
        },
        {
          name: "Advanced Frontend",
          weeks: "4-6 weeks",
          topics: ["TypeScript", "Next.js", "State Management (Redux/Zustand)", "Testing (Jest/React Testing Library)", "Performance Optimization"]
        }
      ]
    },
    {
      title: "Backend Development",
      duration: "4-6 months",
      phases: [
        {
          name: "Server Fundamentals",
          weeks: "4-6 weeks",
          topics: ["Node.js Basics", "Express.js Framework", "REST API Design", "HTTP & Web Protocols", "JSON & API Documentation"]
        },
        {
          name: "Database & Authentication",
          weeks: "4-6 weeks",
          topics: ["SQL & PostgreSQL", "MongoDB & Mongoose", "JWT Authentication", "OAuth2 & Social Login", "Data Modeling"]
        },
        {
          name: "Advanced Backend",
          weeks: "4-6 weeks",
          topics: ["GraphQL", "Microservices Architecture", "Redis & Caching", "WebSockets", "Performance & Scaling"]
        }
      ]
    }
  ];

  const fullStackProjects = [
    {
      name: "Personal Portfolio",
      difficulty: "Beginner",
      tech: "HTML, CSS, JavaScript",
      features: ["Responsive design", "Contact form", "Portfolio showcase"]
    },
    {
      name: "Task Management App",
      difficulty: "Intermediate", 
      tech: "React, Node.js, MongoDB",
      features: ["CRUD operations", "User authentication", "Real-time updates"]
    },
    {
      name: "E-commerce Platform",
      difficulty: "Advanced",
      tech: "Next.js, PostgreSQL, Stripe",
      features: ["Payment integration", "Admin dashboard", "Order management"]
    },
    {
      name: "Social Media App",
      difficulty: "Expert",
      tech: "MERN Stack, Socket.io, AWS",
      features: ["Real-time chat", "File uploads", "Social features"]
    }
  ];

  const techStack = {
    frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Postman", "VS Code"]
  };

  return (
    <div className="min-h-screen bg-slate-900 text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-12">
            <Link to="/mentorship" className="violet-accent hover:underline mb-4 inline-block">
              ← Back to Mentorship Hub
            </Link>
            <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Full-Stack Development Roadmap
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Master modern web development from frontend to backend, 
              building production-ready applications with industry best practices.
            </p>
          </div>

          {/* Learning Tracks */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-8">Learning Tracks</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {tracks.map((track, index) => (
                <div key={index} className="neo-card p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-poppins font-semibold text-emerald-500 mb-2">
                      {track.title}
                    </h3>
                    <p className="text-sm text-violet-400">Duration: {track.duration}</p>
                  </div>

                  <div className="space-y-6">
                    {track.phases.map((phase, phaseIndex) => (
                      <div key={phaseIndex} className="border-l-2 border-sky-400 pl-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-sky-400">{phase.name}</h4>
                          <span className="text-xs text-muted-foreground">{phase.weeks}</span>
                        </div>
                        <ul className="space-y-1">
                          {phase.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-emerald-500 mr-2">•</span>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-8">Project-Based Learning</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fullStackProjects.map((project, index) => (
                <div key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    project.difficulty === 'Beginner' ? 'bg-emerald-500/20 text-emerald-400' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    project.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {project.difficulty}
                  </div>
                  
                  <h3 className="text-lg font-poppins font-semibold mb-2 text-foreground">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm text-violet-400 mb-3 font-medium">
                    {project.tech}
                  </p>
                  
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-sky-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-8">Complete Tech Stack</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-6">
                <h3 className="text-lg font-poppins font-semibold mb-4 text-emerald-500">
                  Frontend Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.map((tech, index) => (
                    <span key={index} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-poppins font-semibold mb-4 text-sky-400">
                  Backend Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.map((tech, index) => (
                    <span key={index} className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-lg font-poppins font-semibold mb-4 text-violet-400">
                  Tools & Deployment
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.tools.map((tech, index) => (
                    <span key={index} className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-poppins font-semibold mb-4 violet-accent">
                Ready to Build Amazing Web Applications?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get hands-on guidance and build real projects with personalized mentorship.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-500 hover:to-green-600 text-slate-900 font-medium">
                Start Web Development Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentRoadmap;
