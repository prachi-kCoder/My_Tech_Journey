
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const CareerGuidance = () => {
  const guidanceAreas = [
    {
      title: "Resume & Portfolio Building",
      description: "Create compelling resumes and portfolios that stand out to employers",
      topics: [
        "ATS-optimized resume writing",
        "Technical portfolio development", 
        "GitHub profile optimization",
        "LinkedIn professional branding"
      ],
      duration: "2-3 weeks"
    },
    {
      title: "Interview Preparation",
      description: "Master technical and behavioral interviews with confidence", 
      topics: [
        "Data structures & algorithms practice",
        "System design fundamentals",
        "Behavioral interview techniques",
        "Mock interview sessions"
      ],
      duration: "4-6 weeks"
    },
    {
      title: "Job Search Strategy",
      description: "Strategic approach to finding and applying for the right opportunities",
      topics: [
        "Industry research & targeting",
        "Networking strategies",
        "Application tracking systems",
        "Salary negotiation tactics"
      ],
      duration: "Ongoing"
    },
    {
      title: "Career Transition Support",
      description: "Navigate career changes and skill development effectively",
      topics: [
        "Skill gap analysis",
        "Learning path planning",
        "Industry transition guides",
        "Personal branding strategies"
      ],
      duration: "3-6 months"
    }
  ];

  const interviewTypes = [
    {
      type: "Technical Screening",
      duration: "30-45 mins",
      focus: "Basic programming, problem-solving",
      preparation: ["LeetCode Easy problems", "Language fundamentals", "Basic algorithms"]
    },
    {
      type: "Coding Interview",
      duration: "45-60 mins", 
      focus: "Data structures, algorithms, coding",
      preparation: ["LeetCode Medium/Hard", "Time complexity analysis", "Code optimization"]
    },
    {
      type: "System Design",
      duration: "45-60 mins",
      focus: "Architecture, scalability, trade-offs",
      preparation: ["System design patterns", "Scalability concepts", "Database design"]
    },
    {
      type: "Behavioral Interview",
      duration: "30-45 mins",
      focus: "Leadership, teamwork, culture fit",
      preparation: ["STAR method", "Leadership examples", "Company research"]
    }
  ];

  const careerLevels = [
    {
      level: "Entry Level (0-2 years)",
      focus: "Building foundational skills and gaining experience",
      goals: ["Master core technologies", "Build portfolio projects", "Gain internship/junior role"],
      salary: "$50k - $80k",
      skills: ["Programming fundamentals", "Version control", "Basic frameworks"]
    },
    {
      level: "Mid Level (2-5 years)", 
      focus: "Developing expertise and taking on more responsibility",
      goals: ["Lead small projects", "Mentor juniors", "Specialize in domain"],
      salary: "$80k - $130k",
      skills: ["Advanced frameworks", "System design", "Team collaboration"]
    },
    {
      level: "Senior Level (5+ years)",
      focus: "Technical leadership and strategic decision making",
      goals: ["Architect systems", "Lead teams", "Drive technical strategy"],
      salary: "$130k - $200k+",
      skills: ["System architecture", "Leadership", "Business acumen"]
    }
  ];

  const resources = [
    {
      category: "Resume Templates",
      items: [
        "Tech Resume Template (ATS-friendly)",
        "Portfolio Website Examples",
        "GitHub README Templates",
        "Cover Letter Samples"
      ]
    },
    {
      category: "Interview Practice",
      items: [
        "LeetCode Problem Lists by Company",
        "System Design Case Studies",
        "Behavioral Question Bank",
        "Mock Interview Platform"
      ]
    },
    {
      category: "Job Search Tools",
      items: [
        "Company Research Templates",
        "Application Tracking Sheets", 
        "Networking Email Templates",
        "Salary Negotiation Scripts"
      ]
    },
    {
      category: "Learning Resources",
      items: [
        "Industry Trend Reports",
        "Skill Assessment Tools",
        "Career Path Guides",
        "Certification Roadmaps"
      ]
    }
  ];

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
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Career Guidance & Interview Prep
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Comprehensive career guidance to help you land your dream tech job, 
              from resume building to salary negotiation.
            </p>
          </div>

          {/* Guidance Areas */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-8">Career Guidance Areas</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {guidanceAreas.map((area, index) => (
                <div key={index} className="neo-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-poppins font-semibold text-yellow-400">
                      {area.title}
                    </h3>
                    <span className="text-xs bg-violet-500/20 text-violet-400 px-2 py-1 rounded-full">
                      {area.duration}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {area.topics.map((topic, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Interview Types */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-8">Interview Preparation</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {interviewTypes.map((interview, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-2 text-sky-400">
                    {interview.type}
                  </h3>
                  
                  <div className="mb-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="text-violet-400">{interview.duration}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Focus: </span>
                      <span className="text-emerald-400">{interview.focus}</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Preparation:</p>
                    <ul className="space-y-1">
                      {interview.preparation.map((prep, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-sky-400 mr-2">•</span>
                          {prep}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Levels */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-8">Career Progression Path</h2>
            <div className="space-y-6">
              {careerLevels.map((level, index) => (
                <div key={index} className="neo-card p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="md:col-span-1">
                      <h3 className="text-lg font-poppins font-semibold text-violet-400 mb-2">
                        {level.level}
                      </h3>
                      <div className="text-sm space-y-1">
                        <div className="text-emerald-400 font-medium">{level.salary}</div>
                        <div className="text-muted-foreground">{level.focus}</div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-1">
                      <h4 className="font-semibold text-yellow-400 mb-2">Goals</h4>
                      <ul className="space-y-1">
                        {level.goals.map((goal, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-sky-400 mr-2">•</span>
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-sky-400 mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {level.skills.map((skill, idx) => (
                          <span key={idx} className="bg-sky-500/20 text-sky-400 px-2 py-1 rounded text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-8">Career Resources</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="text-lg font-poppins font-semibold mb-4 text-emerald-400">
                    {resource.category}
                  </h3>
                  <ul className="space-y-2">
                    {resource.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-emerald-400 mr-2">📄</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-poppins font-semibold mb-4 violet-accent">
                Ready to Accelerate Your Career?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get personalized career coaching and interview preparation to land your dream job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-medium">
                  Book Career Coaching
                </Button>
                <Button size="lg" variant="outline" className="border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-900">
                  Download Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;
