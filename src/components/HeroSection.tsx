
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
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
          className="absolute w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-poppins font-bold leading-tight">
                <span className="text-foreground">Hi, I'm</span>
                <br />
                <span className="gradient-text">AI Engineer</span>
              </h1>
              <p className="text-xl text-muted-foreground font-open-sans leading-relaxed">
                Software Engineer passionate about <span className="text-sky-400">AI</span>, 
                <span className="text-emerald-500"> Competitive Programming</span>, 
                <span className="text-yellow-400"> Full-Stack Development</span>, and 
                <span className="text-cyan-400"> Mentoring</span> the next generation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-sky-400 hover:bg-sky-500 text-slate-900 font-medium px-8">
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 px-8">
                Get Mentorship
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-sky-400">1500+</div>
                <div className="text-sm text-muted-foreground">Codeforces Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-500">50+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-muted-foreground">Students Mentored</div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <TerminalWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
