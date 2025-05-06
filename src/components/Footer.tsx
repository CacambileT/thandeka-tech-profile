
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-lg">Thandeka Cacambile</p>
        <p className="text-sm text-gray-400">Network Support Technician & Cloud Computing Trainee</p>
        <div className="mt-6 flex justify-center space-x-6">
          <a 
            href="mailto:cacambilethandeka4@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            Email
          </a>
          <a 
            href="https://www.linkedin.com/in/thandeka-cacambile-11b791220" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          © {currentYear} Thandeka Cacambile. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
