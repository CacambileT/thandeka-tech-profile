
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-lg font-semibold">Thandeka Cacambile</p>
        <p className="text-sm text-gray-400">Network Support Technician & Cloud Computing Trainee</p>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <a 
            href="mailto:cacambilethandeka4@gmail.com" 
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
            <span>Email</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/thandeka-cacambile-11b791220/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-sm text-gray-500">
          © {currentYear} Thandeka Cacambile. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
