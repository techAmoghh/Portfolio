import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const menuItems = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'work' },
  { name: 'Contact', to: 'contact' },
];

export default function MobileMenu({ isOpen, onClose }) {
  const handleClick = (e) => {
    // Close the menu
    onClose();
    
    // Get the target element
    const target = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(target);
    
    if (targetElement) {
      // Temporarily enable smooth scrolling
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Scroll to the target
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Reset to instant scrolling after a short delay
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'auto';
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-sm z-40 lg:hidden">
          <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl z-50 p-4">
            <div className="flex justify-end mb-8">
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.to}
                  href={`#${item.to}`}
                  onClick={handleClick}
                  className="px-4 py-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-purple transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
