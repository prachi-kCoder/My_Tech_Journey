
const CompetitiveProgramming = () => {
  const stats = [
    {
      platform: "Codeforces",
      rating: "1534",
      rank: "Specialist",
      solved: "800+",
      color: "text-sky-400"
    },
    {
      platform: "LeetCode", 
      rating: "1850",
      rank: "Knight", 
      solved: "500+",
      color: "text-yellow-400"
    },
    {
      platform: "CodeChef",
      rating: "1680",
      rank: "4 Star",
      solved: "300+", 
      color: "text-emerald-500"
    },
    {
      platform: "AtCoder",
      rating: "1200",
      rank: "Brown",
      solved: "150+",
      color: "text-cyan-400"
    }
  ];

  const achievements = [
    "🏆 ACM-ICPC Regionals Finalist",
    "🥈 Google Code Jam Round 2",
    "🥉 Facebook Hacker Cup Round 1",
    "⭐ 200+ days streak on LeetCode",
    "📈 Top 5% global ranking on Codeforces",
    "🎯 Solved 1500+ algorithmic problems"
  ];

  return (
    <section id="cp" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold mb-4">
            <span className="gradient-text">Competitive Programming</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Problem-solving expertise demonstrated through consistent performance across multiple platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
              <h3 className={`text-2xl font-poppins font-bold mb-2 ${stat.color}`}>
                {stat.platform}
              </h3>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">{stat.rating}</div>
                <div className="text-sm text-muted-foreground">{stat.rank}</div>
                <div className="text-lg font-semibold text-emerald-500">{stat.solved}</div>
                <div className="text-xs text-muted-foreground">Problems Solved</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="neo-card p-8">
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-sky-400">
              🏆 Key Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="neo-card p-8">
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-emerald-500">
              📊 Problem Categories Mastered
            </h3>
            <div className="space-y-4">
              {[
                { category: "Dynamic Programming", level: "95%" },
                { category: "Graph Theory", level: "90%" },
                { category: "Data Structures", level: "95%" },
                { category: "Number Theory", level: "85%" },
                { category: "Greedy Algorithms", level: "90%" },
                { category: "Tree Algorithms", level: "88%" }
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.category}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-sky-400 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
