
const CompetitiveProgramming = () => {
  const stats = [
    {
      platform: "LeetCode",
      rating: "1709",
      rank: "750+ Solved",
      solved: "750+",
      color: "text-yellow-400",
      url: "https://leetcode.com/u/PrachiKumari/"
    },
    {
      platform: "CodeChef",
      rating: "1498",
      rank: "2 Star",
      solved: "40+ Contests", 
      color: "text-emerald-500",
      url: "https://www.codechef.com/users/buffy_vine_36"
    },
    {
      platform: "Codeforces",
      rating: "1076",
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
              📊 Problem Sheets Mastered
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
              <a 
                href="https://github.com/prachi-kCoder/STRIVER-SDE-SHEET"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-sky-400 group-hover:text-sky-300">Striver SDE Sheet</span>
                  <span className="text-xs text-muted-foreground">Complete Solutions</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Complete solutions with detailed explanations</p>
              </a>
              
              <div className="p-4 bg-slate-700/50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-emerald-500">Neetcode 150</span>
                  <span className="text-xs text-muted-foreground">In Progress</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Essential coding interview problems</p>
              </div>
              
              <div className="p-4 bg-slate-700/50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-yellow-400">Blind75</span>
                  <span className="text-xs text-muted-foreground">Completed</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Must-know problems for interviews</p>
              </div>
              
              <div className="p-4 bg-slate-700/50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-orange-400">TLE-Eliminators CP Sheets</span>
                  <span className="text-xs text-muted-foreground">Upto 1600 Rating</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Helped build strong logic and algorithmic understanding</p>
              </div>
              
              <a 
                href="https://github.com/prachi-kCoder/CSES-BYTES"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-violet-400 group-hover:text-violet-300">CSES Problem Set</span>
                  <span className="text-xs text-muted-foreground">Solutions Available</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Competitive programming problem set</p>
              </a>
              
              <a 
                href="https://github.com/prachi-kCoder/AlgorithmicFoundations"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-cyan-400 group-hover:text-cyan-300">AlgorithmicFoundations</span>
                  <span className="text-xs text-muted-foreground">Own Curated Sheet</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Curated sheet covering all DSA variations</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
