
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-brand-red/5"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-brand-gold/5"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-brand-dark">
              Thandeka <span className="text-brand-red">Cacambile</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-600">
              ICT Graduate | Network Support Technician | Cloud Computing Trainee
            </h2>
            <p className="text-gray-700 mb-8 max-w-lg">
              A motivated and tech-savvy individual with expertise in networking, 
              IT support, and cloud computing solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                className="border-brand-red text-brand-red hover:bg-brand-red/5"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/lovable-uploads/bd7bc79d-64f7-431a-ae5a-5d3657023f13.png"
                  alt="Thandeka Cacambile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-0 right-0 mx-auto w-3/4 bg-white rounded-lg p-3 shadow-lg text-center">
                <p className="font-medium">Cape Town, South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
