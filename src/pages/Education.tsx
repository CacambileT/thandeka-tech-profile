
import Header from '@/components/Header';
import EducationSection from '@/components/EducationSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { useEffect } from 'react';

const Education = () => {
  useEffect(() => {
    // Check for saved theme preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <div className="pt-20">
        <EducationSection />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Education;
