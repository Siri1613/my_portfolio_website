import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Code2 } from 'lucide-react';
import { navItems } from '../data/portfolioData';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:shadow-teal-500/50 transition-all duration-300">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className={`font-bold text-sm tracking-tight transition-colors ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
              KR<span className="text-teal-500">.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = active === id;
              return (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-teal-500'
                      : scrolled
                      ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-teal-500"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                scrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
                  : 'hover:bg-white/10 text-white/80'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                scrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
                  : 'hover:bg-white/10 text-white/80'
              }`}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800"
          >
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navItems.map(({ label, href }) => {
                const id = href.replace('#', '');
                return (
                  <button
                    key={href}
                    onClick={() => handleNav(href)}
                    className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      active === id
                        ? 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
