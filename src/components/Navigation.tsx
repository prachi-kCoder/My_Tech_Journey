
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other page, navigate to home with hash
      navigate(`/#${sectionId}`);
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-base sm:text-lg lg:text-xl font-poppins font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            From Curiosity to Code
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button 
              onClick={() => navigateToSection('home')}
              className="text-foreground hover:text-sky-400 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => navigateToSection('skills')}
              className="text-foreground hover:text-sky-400 transition-colors font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => navigateToSection('projects')}
              className="text-foreground hover:text-sky-400 transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => navigateToSection('cp')}
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
              onClick={() => navigateToSection('contact')}
              className="text-foreground hover:text-sky-400 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Button 
              className="hidden sm:block text-sm lg:text-base bg-gradient-to-r from-sky-400 to-violet-500 hover:from-sky-500 hover:to-violet-600 text-slate-900 font-medium px-4 lg:px-6"
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=13fs8UcnEQ5K6HKmOXnebs91sV2EpojKE', '_blank')}
            >
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
                onClick={() => navigateToSection('home')}
                className="text-left text-foreground hover:text-sky-400 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => navigateToSection('skills')}
                className="text-left text-foreground hover:text-sky-400 transition-colors font-medium"
              >
                Skills
              </button>
              <button 
                onClick={() => navigateToSection('projects')}
                className="text-left text-foreground hover:text-sky-400 transition-colors font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => navigateToSection('cp')}
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
                onClick={() => navigateToSection('contact')}
                className="text-left text-foreground hover:text-sky-400 transition-colors font-medium"
              >
                Contact
              </button>
              <Button 
                className="sm:hidden w-full bg-gradient-to-r from-sky-400 to-violet-500 hover:from-sky-500 hover:to-violet-600 text-slate-900 font-medium"
                onClick={() => window.open('https://drive.google.com/uc?export=download&id=13fs8UcnEQ5K6HKmOXnebs91sV2EpojKE', '_blank')}
              >
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
