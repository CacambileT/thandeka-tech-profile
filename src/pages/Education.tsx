
import Header from '@/components/Header';
import EducationSection from '@/components/EducationSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Chatbot from '@/components/Chatbot';

const Education = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <div className="pt-20">
        <EducationSection />
      </div>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
};

export default Education;
