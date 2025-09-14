
const CompetitiveProgramming = () => {
  const stats = [
    {
      platform: "LeetCode",
      rating: "Top 15%",
      rank: "750+ Solved",
      solved: "750+",
      color: "text-yellow-400",
      url: "https://leetcode.com/u/PrachiKumari/"
    },
    {
      platform: "CodeChef",
      rating: "1431",
      rank: "2 Star",
      solved: "40+ Contests", 
      color: "text-emerald-500",
      url: "https://www.codechef.com/users/buffy_vine_36"
    },
    {
      platform: "Codeforces",
      rating: "950",
      rank: "Newbie",
      solved: "100+",
      color: "text-sky-400",
      url: "https://codeforces.com/profile/PrachiKCoder"
    },
    {
      platform: "GeeksforGeeks",
      rating: "200+ Solved",
      rank: "Consistent",
      solved: "200+",
      color: "text-cyan-400",
      url: "https://www.geeksforgeeks.org/user/visionso0lp/"
    }
  ];

  const achievements = [
    "🎓 Vigyan Vidushi Scholar - Excellence in STEM",
    "🏆 Top 30 Girls Selected for TIFR Mumbai CS Training Program",
    "⭐ LeetCode 200+ Days Streak - Consistent Problem Solving",
    "🔥 GeeksforGeeks 200+ Days Streak - Daily Practice",
    "💪 40+ CodeChef Contests Participated - Competitive Spirit",
    "👑 ICPC Algo Queen Participant - Algorithmic Excellence"
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
            <a 
              key={index} 
              href={stat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 block group"
            >
              <h3 className={`text-2xl font-poppins font-bold mb-2 ${stat.color} group-hover:underline`}>
                {stat.platform}
              </h3>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">{stat.rating}</div>
                <div className="text-sm text-muted-foreground">{stat.rank}</div>
                <div className="text-lg font-semibold text-emerald-500">{stat.solved}</div>
                <div className="text-xs text-muted-foreground">
                  {stat.platform === "CodeChef" ? "Contests" : "Problems Solved"}
                </div>
              </div>
            </a>
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
            <div className="mb-6">
              <a 
                href="https://cses.fi/user/338585" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors group"
              >
                <span className="font-semibold">CSES Problem Set Progress</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            <div className="space-y-4">
              {[
                { category: "Dynamic Programming", level: "85%" },
                { category: "Graph Theory", level: "80%" },
                { category: "Data Structures", level: "88%" },
                { category: "Sorting & Searching", level: "90%" },
                { category: "Greedy Algorithms", level: "82%" },
                { category: "Tree Algorithms", level: "78%" },
                { category: "String Algorithms", level: "75%" },
                { category: "Mathematics", level: "70%" }
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
