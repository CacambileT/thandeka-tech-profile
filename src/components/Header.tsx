
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-md py-3' : 'bg-transparent py-5'
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-brand-dark">
          TC<span className="text-brand-red">.</span>
        </a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-brand-dark hover:text-brand-red"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Download Resume Button (Desktop) */}
        {!isMobile && (
          <Button className="bg-brand-red hover:bg-brand-red/90 text-white">
            Download CV
          </Button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20">
          <nav className="flex flex-col items-center gap-8 p-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="nav-link text-xl"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
            <Button 
              className="mt-4 bg-brand-red hover:bg-brand-red/90 text-white w-full"
              onClick={toggleMenu}
            >
              Download CV
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
