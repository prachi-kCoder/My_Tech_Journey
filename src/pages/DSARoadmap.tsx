
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const DSARoadmap = () => {
  const phases = [
    {
      phase: "Phase 1: Foundations",
      duration: "4-6 weeks",
      topics: [
        "Time & Space Complexity Analysis",
        "Basic Mathematics for Programming",
        "Arrays and Strings",
        "Basic Sorting Algorithms",
        "Linear Search & Binary Search"
      ],
      resources: [
        "Introduction to Algorithms (CLRS) - Chapters 1-3",
        "LeetCode Easy Problems (50 problems)",
        "GeeksforGeeks Basic Array Problems"
      ],
      projects: ["Build a sorting visualizer", "Implement basic calculator"]
    },
    {
      phase: "Phase 2: Core Data Structures",
      duration: "6-8 weeks",
      topics: [
        "Linked Lists (Singly, Doubly, Circular)",
        "Stacks and Queues",
        "Trees (Binary Trees, BST)",
        "Heaps and Priority Queues",
        "Hash Tables"
      ],
      resources: [
        "Data Structures and Algorithms in Java - Goodrich",
        "LeetCode Medium Problems (100 problems)",
        "HackerRank Data Structures Track"
      ],
      projects: ["Build an expression evaluator", "Create a simple database using hash tables"]
    },
    {
      phase: "Phase 3: Advanced Structures",
      duration: "6-8 weeks",
      topics: [
        "Graphs (BFS, DFS, Shortest Path)",
        "Tries and Segment Trees",
        "Disjoint Set Union (DSU)",
        "Advanced Tree Algorithms",
        "String Algorithms (KMP, Rabin-Karp)"
      ],
      resources: [
        "Competitive Programming 3 - Steven Halim",
        "LeetCode Hard Problems (50 problems)",
        "Codeforces Div2 A-C Problems"
      ],
      projects: ["Social network analyzer", "Text search engine"]
    },
    {
      phase: "Phase 4: Competitive Programming",
      duration: "8-12 weeks",
      topics: [
        "Dynamic Programming Patterns",
        "Greedy Algorithms",
        "Number Theory & Combinatorics",
        "Game Theory Basics",
        "Advanced Graph Algorithms"
      ],
      resources: [
        "USACO Guide (Gold/Platinum)",
        "AtCoder Educational DP Contest",
        "Codeforces Div1 Problems"
      ],
      projects: ["Participate in weekly contests", "Build competitive programming platform"]
    }
  ];

  const contestPlatforms = [
    { name: "Codeforces", target: "1400+ rating", frequency: "2-3 contests/week" },
    { name: "AtCoder", target: "1000+ rating", frequency: "Weekly contests" },
    { name: "LeetCode", target: "1800+ rating", frequency: "Daily practice" },
    { name: "CodeChef", target: "1800+ rating", frequency: "Monthly contests" }
  ];

  const books = [
    "Introduction to Algorithms (CLRS)",
    "Competitive Programming 3 by Steven Halim",
    "Algorithm Design by Kleinberg & Tardos",
    "The Algorithm Design Manual by Skiena",
    "Programming Pearls by Jon Bentley"
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
              <span className="bg-gradient-to-r from-sky-400 to-cyan-500 bg-clip-text text-transparent">
                DSA Mastery Roadmap
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A comprehensive guide to master Data Structures and Algorithms, 
              from complete beginner to competitive programming expert.
            </p>
          </div>

          {/* Learning Phases */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-8">Learning Phases</h2>
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div key={index} className="neo-card p-6">
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-poppins font-semibold text-sky-400">
                        {phase.phase}
                      </h3>
                      <span className="text-sm text-violet-400 font-medium">
                        Duration: {phase.duration}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-emerald-500 mb-3">Core Topics</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {phase.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-sky-400 mr-2">•</span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-yellow-400 mb-3">Resources</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {phase.resources.map((resource, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-sky-400 mr-2">•</span>
                            {resource}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-violet-400 mb-3">Projects</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {phase.projects.map((project, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-sky-400 mr-2">•</span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contest Platforms */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-6">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-emerald-500">
                Contest Platforms & Targets
              </h3>
              <div className="space-y-4">
                {contestPlatforms.map((platform, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-foreground">{platform.name}</div>
                      <div className="text-sm text-muted-foreground">{platform.frequency}</div>
                    </div>
                    <div className="text-sky-400 font-medium">{platform.target}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-violet-400">
                Essential Books
              </h3>
              <ul className="space-y-3">
                {books.map((book, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <span className="text-sky-400 mr-2">📖</span>
                    <span className="text-muted-foreground">{book}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-poppins font-semibold mb-4 violet-accent">
                Start Your DSA Journey Today
              </h3>
              <p className="text-muted-foreground mb-6">
                Get personalized guidance and track your progress with 1-on-1 mentorship sessions.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-500 hover:to-cyan-600 text-slate-900 font-medium">
                Book DSA Mentorship Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSARoadmap;
