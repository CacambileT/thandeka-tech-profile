
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Toggle } from './ui/toggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

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

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-gray-900/95 shadow-md py-3' : 'bg-transparent dark:bg-transparent py-5'
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-brand-dark dark:text-white">
          TC<span className="text-brand-red">.</span>
        </a>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link dark:text-white dark:hover:text-brand-red">
                {item.name}
              </a>
            ))}
          </nav>
        )}

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          <Toggle
            pressed={isDarkMode}
            onPressedChange={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </Toggle>

          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={toggleMenu} 
              className="md:hidden text-brand-dark dark:text-white hover:text-brand-red"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40 pt-20">
          <nav className="flex flex-col items-center gap-8 p-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="nav-link text-xl dark:text-white"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
