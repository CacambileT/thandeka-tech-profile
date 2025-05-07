
import Header from '@/components/Header';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Chatbot from '@/components/Chatbot';

const Experience = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <div className="pt-20">
        <ExperienceSection />
      </div>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
};

export default Experience;
