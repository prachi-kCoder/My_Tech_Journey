
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg sm:text-xl lg:text-2xl font-poppins font-bold gradient-text">
            Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
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
            <Link 
              to="/mentorship"
              className="violet-accent font-medium"
            >
              Mentorship Hub
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-sky-400 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button className="hidden sm:block text-sm lg:text-base bg-gradient-to-r from-sky-400 to-violet-500 hover:from-sky-500 hover:to-violet-600 text-slate-900 font-medium px-4 lg:px-6">
              Download Resume
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-sky-400 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-foreground hover:text-sky-400 transition-colors font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground hover:text-sky-400 transition-colors font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('cp')}
                className="text-left text-foreground hover:text-sky-400 transition-colors font-medium"
              >
                CP Stats
              </button>
              <Link 
                to="/mentorship"
                className="text-left violet-accent font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mentorship Hub
              </Link>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-sky-400 transition-colors font-medium"
              >
                Contact
              </button>
              <Button className="sm:hidden w-full bg-gradient-to-r from-sky-400 to-violet-500 hover:from-sky-500 hover:to-violet-600 text-slate-900 font-medium">
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
