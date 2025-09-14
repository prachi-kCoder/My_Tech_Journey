
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      color: "text-sky-400",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Computer Vision", "Deep Learning", "FastAPI", "Flask"]
    },
    {
      title: "Full-Stack Development", 
      color: "text-emerald-500",
      skills: ["React", "Node.js", "Express", "MongoDB", "PostgreSQL", "TypeScript", "Next.js", "GraphQL"]
    },
    {
      title: "Competitive Programming",
      color: "text-yellow-400", 
      skills: ["C++", "Data Structures", "Algorithms", "Dynamic Programming", "Graph Theory", "Number Theory"]
    },
    {
      title: "DevOps & Cloud",
      color: "text-cyan-400",
      skills: ["Docker", "AWS", "GCP", "Kubernetes", "CI/CD", "Linux", "Git", "Terraform"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across multiple domains with hands-on experience in real-world projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-8 hover:scale-105 transition-transform duration-300">
              <h3 className={`text-2xl font-poppins font-semibold mb-6 ${category.color}`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-slate-700 text-foreground hover:bg-slate-600 hover:scale-110 transition-all duration-200 px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-sky-400">
              Current Focus Areas
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🤖</div>
                <h4 className="font-semibold text-emerald-500">AI Research</h4>
                <p className="text-sm text-muted-foreground">Working on cutting-edge AI solutions for real-world problems</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <h4 className="font-semibold text-yellow-400">Competitive Programming</h4>
                <p className="text-sm text-muted-foreground">Continuously improving problem-solving skills and ratings</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">👨‍🏫</div>
                <h4 className="font-semibold text-cyan-400">Mentorship</h4>
                <p className="text-sm text-muted-foreground">Helping students excel in programming and career development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
