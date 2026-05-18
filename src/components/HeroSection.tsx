
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import TerminalWidget from './TerminalWidget';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 lg:pt-16">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900/20"></div>
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-sky-400 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Mouse following glow */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-sky-400/10 to-violet-400/10 rounded-full blur-3xl pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-poppins font-bold leading-tight">
                <span className="text-foreground">Hi, I'm a</span>
                <br />
                <span className="gradient-text">Software Engineer specializing in AI</span>
              </h1>
              <div className="space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-open-sans">
                  <span className="text-sky-400">Software Engineer</span> | 
                  <span className="text-emerald-500"> AI Enthusiast</span> | 
                  <span className="text-yellow-400"> Full-Stack Developer</span> | 
                  <span className="text-violet-400"> DevOps Practitioner</span> | 
                  <span className="text-cyan-400"> CP Explorer</span>
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-open-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Building intelligent systems, scalable platforms, and empowering tech communities.
                </p>
              </div>
            </div>

            {/* Vigyan Vidushi Program Section */}
            <div className="bg-gradient-to-r from-violet-900/20 to-sky-900/20 rounded-lg p-3 sm:p-4 lg:p-6 border border-violet-500/20">
              <div className="flex flex-col sm:flex-row lg:flex-row gap-3 sm:gap-4 lg:gap-6 items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-violet-400 to-sky-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-base sm:text-lg lg:text-xl flex-shrink-0">
                  VV
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-base sm:text-lg lg:text-xl font-poppins font-semibold violet-accent mb-1 sm:mb-2">
                    Vigyan Vidushi Scholar - TIFR Mumbai
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    Selected among top 30 girls for the Computer Science Training Program at TIFR Mumbai. 
                    Expanded my network with IIT professors who taught us Game Theory, Coding Theory, and Cryptography. 
                    Collaborated on projects and group activities - a transformative learning experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-sky-400 to-violet-500 hover:from-sky-500 hover:to-violet-600 text-slate-900 font-medium px-6 sm:px-8"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 pb-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-sky-400">1272</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Codeforces Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-emerald-500">950+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold violet-accent">200+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Days Streak</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:justify-end lg:pl-8 xl:pl-12 items-center lg:items-end space-y-3 sm:space-y-4">
            <div className="text-lg sm:text-xl lg:text-2xl font-poppins font-bold gradient-text text-center lg:text-right">
              Driven by Purpose. Defined by Code.
            </div>
            <TerminalWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
