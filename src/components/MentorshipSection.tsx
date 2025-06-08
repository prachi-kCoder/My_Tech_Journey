
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const MentorshipSection = () => {
  const mentorshipStats = [
    { number: "100+", label: "Students Mentored", color: "text-sky-400" },
    { number: "50+", label: "Blog Articles", color: "text-emerald-500" },
    { number: "25+", label: "YouTube Videos", color: "text-yellow-400" },
    { number: "95%", label: "Success Rate", color: "violet-accent" }
  ];

  const resources = [
    {
      title: "DSA Mastery Guide",
      description: "Complete roadmap for mastering Data Structures and Algorithms with 200+ problems",
      type: "Guide",
      engagement: "5K+ reads"
    },
    {
      title: "Full-Stack Development Journey", 
      description: "End-to-end tutorial series for building production-ready applications",
      type: "Video Series",
      engagement: "10K+ views"
    },
    {
      title: "AI/ML Project Workshop",
      description: "Hands-on workshop covering real-world machine learning project implementation",
      type: "Workshop",
      engagement: "500+ participants"
    },
    {
      title: "Career Transition Stories",
      description: "Personal experiences and advice for transitioning into tech careers",
      type: "Blog Series", 
      engagement: "8K+ reads"
    }
  ];

  return (
    <section id="mentorship" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-4">
            <span className="gradient-text">Mentorship & Community</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of developers through guidance, resources, and hands-on support
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {mentorshipStats.map((stat, index) => (
            <div key={index} className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className={`text-2xl sm:text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="neo-card p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg sm:text-xl font-poppins font-semibold text-foreground">
                  {resource.title}
                </h3>
                <span className="text-xs bg-gradient-to-r from-sky-400 to-violet-500 text-slate-900 px-2 py-1 rounded-full font-medium">
                  {resource.type}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {resource.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-emerald-500 text-sm font-medium">
                  {resource.engagement}
                </span>
                <Button size="sm" variant="ghost" className="violet-accent">
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-8">
          <div className="glass-card p-6 sm:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 violet-accent">
              🚀 Ready to Level Up Your Career?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
              Join my mentorship program and get personalized guidance on competitive programming, 
              full-stack development, AI/ML projects, and career advancement strategies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/mentorship">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-sky-400 to-violet-500 hover:from-sky-500 hover:to-violet-600 text-slate-900 font-medium">
                  Explore Mentorship Hub
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-slate-900">
                Join Discord Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
