import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

// In DarkModeToggle.jsx
const DarkModeToggle = ({ onThemeChange }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
        onThemeChange?.(true);
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
        onThemeChange?.(false);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
      onThemeChange?.(false);
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setDarkMode(true);
      onThemeChange?.(true);
    }
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      className={`relative p-2 sm:p-2.5 rounded-full bg-cream dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-black/10 transition-colors duration-300
                 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-transparent
                 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ 
        scale: 0.9,
        outline: 'none',
        boxShadow: 'none'
      }}
      aria-label="Toggle dark mode"
      style={{
        WebkitTapHighlightColor: 'transparent',
        outline: 'none !important',
        boxShadow: 'none !important',
      }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: darkMode ? 360 : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-5 h-5 sm:w-6 sm:h-6"
      >
        {darkMode ? (
          <MoonIcon className="text-tech-purple" />
        ) : (
          <SunIcon className="text-tech-blue" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
