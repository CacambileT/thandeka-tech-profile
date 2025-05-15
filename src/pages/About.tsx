
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import Chatbot from '@/components/Chatbot';

const About = () => {
  return (
       <div className="pt-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-12">
          <div className="md:w-1/2 lg:w-2/5 mb-8 md:mb-0 flex justify-center md:justify-end">
            <img
              src="/lovable-uploads/About me.jpg"
              alt="Portrait"
              width={400}
              height={500}
              className="rounded-2xl shadow-lg object-cover max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 lg:w-3/5">
            <AboutSection />
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
};

export default About;
