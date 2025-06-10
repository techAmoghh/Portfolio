import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Import skill icons - make sure to add these images to your project
import reactIcon from '../assets/skills/react.png';
import nodeIcon from '../assets/skills/nodejs.png';
import expressIcon from '../assets/skills/express.png';
import mongoIcon from '../assets/skills/mongodb.png';
import awsIcon from '../assets/skills/aws.png';
import gitIcon from '../assets/skills/git.png';
import tailwindIcon from '../assets/skills/tailwind.png';
import restIcon from '../assets/skills/api.png';
import cIcon from '../assets/skills/c.png';
import cppIcon from '../assets/skills/cpp.png';
import pythonIcon from '../assets/skills/python.png';
import htmlIcon from '../assets/skills/html.png';
import cssIcon from '../assets/skills/css.png';
import jsIcon from '../assets/skills/javascript.png';
import mysqlIcon from '../assets/skills/mysql.png';
import bootstrapIcon from '../assets/skills/bootstrap.png';

const skills = [
  { name: 'React', icon: reactIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Express', icon: expressIcon },
  { name: 'MongoDB', icon: mongoIcon },
  { name: 'AWS', icon: awsIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'REST APIs', icon: restIcon },
  { name: 'C', icon: cIcon },
  { name: 'C++', icon: cppIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
];

export default function SkillsCloud() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 0.5
      }
    }
  };

  const hoverAnimation = {
    scale: 1.05,
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  };

  const tapAnimation = {
    scale: 0.98
  };

  return (
    <div className="w-full px-4 py-8 max-w-6xl mx-auto">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={`grid ${
          isMobile 
            ? 'grid-cols-3' 
            : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8'
        } gap-4 sm:gap-5`}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            className="skill-card group relative bg-white text-black dark:text-white dark:bg-black/0 rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100 dark:border-gray-700/50 overflow-hidden"
            whileHover={hoverAnimation}
            whileTap={tapAnimation}
          >
            <div className="flex flex-col items-center">
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvZGUiPjxwb2x5Z29uIHBvaW50cz0iMTYgMTggMjIgMTIgMTYgNiIvPjxwb2x5Z29uIHBvaW50cz0iOCA2IDIgMTIgOCAxOCIvPjwvc3ZnPg==';
                  }}
                />
              </motion.div>
              
              <motion.h3 
                className="font-medium text-gray-800 dark:text-white text-center text-xs sm:text-sm"
                whileHover={{ color: '#6366f1' }} // tech-purple color on hover
              >
                {skill.name}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}