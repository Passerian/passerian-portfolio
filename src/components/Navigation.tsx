import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
// We no longer need Link or useLocation from react-router-dom
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  // Updated navItems to use anchor links (#) instead of paths (/)
  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  // This effect listens to the scroll position to update the active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.path.substring(1)));
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].path);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => activeSection === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="glass-card rounded-2xl px-8 py-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent"
            >
              LEP
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Replaced <Link> with <a> */}
                  <a
                    href={item.path}
                    className={`cursor-hover relative px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-neon-blue glow-blue'
                        : 'text-foreground hover:text-neon-cyan'
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 rounded-lg border border-neon-blue/50"
                      />
                    )}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden cursor-hover p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-4 right-4 z-40 md:hidden"
        >
          <div className="glass-card rounded-2xl p-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Replaced <Link> with <a> */}
                  <a
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`cursor-hover block px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-neon-blue bg-neon-blue/10 border border-neon-blue/30'
                        : 'text-foreground hover:text-neon-cyan hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;