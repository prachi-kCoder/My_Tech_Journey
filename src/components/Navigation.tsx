
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-poppins font-bold gradient-text">
            Portfolio
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-sky-400 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-sky-400 transition-colors font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-sky-400 transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('cp')}
              className="text-foreground hover:text-sky-400 transition-colors font-medium"
            >
              CP Stats
            </button>
            <button 
              onClick={() => scrollToSection('mentorship')}
              className="text-foreground hover:text-sky-400 transition-colors font-medium"
            >
              Mentorship
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-sky-400 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          <Button className="bg-sky-400 hover:bg-sky-500 text-slate-900 font-medium">
            Download Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
