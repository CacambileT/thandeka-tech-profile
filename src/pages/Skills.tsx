
import Header from '@/components/Header';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Chatbot from '@/components/Chatbot';

const Skills = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <div className="pt-20">
        <SkillsSection />
      </div>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
};

export default Skills;
