
import { Button } from "@/components/ui/button";

const MentorshipSection = () => {
  const mentorshipStats = [
    { number: "100+", label: "Students Mentored", color: "text-sky-400" },
    { number: "50+", label: "Blog Articles", color: "text-emerald-500" },
    { number: "25+", label: "YouTube Videos", color: "text-yellow-400" },
    { number: "95%", label: "Success Rate", color: "text-cyan-400" }
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
    <section id="mentorship" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold mb-4">
            <span className="gradient-text">Mentorship & Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of developers through guidance, resources, and hands-on support
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {mentorshipStats.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="neo-card p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-poppins font-semibold text-foreground">
                  {resource.title}
                </h3>
                <span className="text-xs bg-sky-400 text-slate-900 px-2 py-1 rounded-full font-medium">
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
                <Button size="sm" variant="ghost" className="text-sky-400 hover:text-sky-300">
                  Read More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-8">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-poppins font-semibold mb-4 text-sky-400">
              🚀 Ready to Level Up Your Career?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join my mentorship program and get personalized guidance on competitive programming, 
              full-stack development, AI/ML projects, and career advancement strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-sky-400 hover:bg-sky-500 text-slate-900 font-medium">
                Book 1-on-1 Session
              </Button>
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
