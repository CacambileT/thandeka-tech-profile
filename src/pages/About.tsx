
import Image from 'next/image';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import Chatbot from '@/components/Chatbot';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <div className="pt-20 flex flex-col items-center px-4">
        <div className="mb-10">
          <Image
            src="/images/About me.jpg" // make sure this matches the file you placed in `public/images`
            alt="Portrait"
            width={400}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
        <AboutSection />
      </div>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
};

export default About;
