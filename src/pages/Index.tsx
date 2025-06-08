
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import CompetitiveProgramming from '../components/CompetitiveProgramming';
import MentorshipSection from '../components/MentorshipSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-foreground">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <CompetitiveProgramming />
      <MentorshipSection />
      <ContactSection />
    </div>
  );
};

export default Index;
