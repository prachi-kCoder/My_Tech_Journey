
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const MentorshipHub = () => {
  const roadmaps = [
    {
      title: "Data Structures & Algorithms",
      description: "Master DSA from basics to advanced competitive programming",
      path: "/mentorship/dsa-roadmap",
      color: "from-sky-400 to-cyan-500",
      duration: "3-6 months",
      level: "Beginner to Expert"
    },
    {
      title: "Web Development",
      description: "Full-stack development roadmap with modern technologies",
      path: "/mentorship/web-development",
      color: "from-emerald-400 to-green-500",
      duration: "4-8 months",
      level: "Beginner to Advanced"
    },
    {
      title: "AI & Machine Learning",
      description: "Comprehensive guide to AI/ML with hands-on projects",
      path: "/mentorship/ai-ml",
      color: "from-violet-400 to-purple-500",
      duration: "6-12 months",
      level: "Intermediate to Expert"
    },
    {
      title: "Career Guidance",
      description: "Interview preparation, resume building, and career advice",
      path: "/mentorship/career-guidance",
      color: "from-yellow-400 to-orange-500",
      duration: "Ongoing",
      level: "All Levels"
    }
  ];

  const mentorshipFeatures = [
    {
      title: "1-on-1 Sessions",
      description: "Personalized guidance tailored to your learning pace and goals",
      icon: "👨‍🏫"
    },
    {
      title: "Project Reviews",
      description: "Code reviews and project feedback to accelerate your learning",
      icon: "📝"
    },
    {
      title: "Career Coaching",
      description: "Interview prep, resume building, and industry insights",
      icon: "🎯"
    },
    {
      title: "Community Access",
      description: "Join our Discord community of learners and mentors",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-foreground">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6">
              <span className="gradient-text">Mentorship Hub</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your gateway to mastering technology through structured learning paths, 
              personalized guidance, and a supportive community of learners.
            </p>
          </div>

          {/* Learning Roadmaps */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-center mb-8">
              Choose Your Learning Path
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roadmaps.map((roadmap, index) => (
                <Link key={index} to={roadmap.path}>
                  <div className="neo-card p-6 h-full hover:scale-105 transition-all duration-300 group">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${roadmap.color} mb-4 group-hover:scale-110 transition-transform`}></div>
                    <h3 className="text-xl font-poppins font-semibold mb-3 text-foreground">
                      {roadmap.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {roadmap.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="text-sky-400">{roadmap.duration}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Level:</span>
                        <span className="violet-accent">{roadmap.level}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mentorship Features */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-center mb-8">
              What You Get
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentorshipFeatures.map((feature, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-poppins font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-poppins font-semibold mb-4 violet-accent">
                Ready to Start Your Journey?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join hundreds of students who have successfully transformed their careers 
                through our mentorship program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-sky-400 to-violet-500 hover:from-sky-500 hover:to-violet-600 text-slate-900 font-medium">
                  Book 1-on-1 Session
                </Button>
                <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-slate-900">
                  Join Discord Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorshipHub;
