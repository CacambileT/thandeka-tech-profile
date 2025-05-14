
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
        <div className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-300 text-sm">
          Built with React, Tailwind CSS, and shadcn/ui components.
        </div>
      </div>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
};

export default Experience;
