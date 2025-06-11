// Add this import at the top with other imports
import StarfieldBackground from './components/Starfield';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import DarkModeToggle from './components/DarkModeToggle';
import GreetingAnimation from './components/GreetingAnimation';
import TypeAnimation from './components/TypeAnimation';
import ProjectCard from './components/ProjectCard';

import TaskNest from './assets/projects/TaskNest.png';
import MobileMenu from './components/MobileMenu';
import SkillsCloud from './components/SkillsCloud';
import LoadingScreen from './components/LoadingScreen';
import ERP from './assets/projects/ERP.png';
import ToDo from './assets/projects/ToDo.png';
import Eshop from './assets/projects/Eshop.png';
import linkedin from './assets/contact/linkedin.png';
import github from './assets/contact/github.png';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          document.documentElement.style.scrollBehavior = 'smooth';
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'auto';
          }, 1000);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll, true);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll, true);
      document.documentElement.style.scrollBehavior = ''; 
    };
  }, []);

  const menuItems = [
    { to: 'about', name: 'About' },
    { to: 'skills', name: 'Skills' },
    { to: 'work', name: 'Work' },
    { to: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'ERP System',
      description: 'A full-stack ERP system with real-time inventory, payment processing, and admin dashboard.',
      image: ERP,
      tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaborative task management system with team features and analytics.',
      image: TaskNest,
      tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js'],
      link: '#'
    },
    {
      title: 'To-Do-List',
      description: 'A simple To-Do-List application built with React.',
      image: ToDo,
      tags: ['React', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
      image: Eshop,
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
  ];

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen font-poppins">
       {isDarkMode && <StarfieldBackground />}
     
       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  activeSection === 'home' 
    ? 'bg-transparent backdrop-blur-none' 
    : 'bg-cream/80 dark:bg-dark-bg/80 backdrop-blur-md'
} px-3 sm:px-6`}>
  <div className="container mx-auto">
    <div className="flex items-center justify-between h-16">
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={300}
        offset={-70}
        className="text-lg sm:text-base md:text-lg lg:text-xl font-bold text-tech-blue dark:text-tech-purple cursor-pointer"
      >
        <TypeAnimation />
      </Link>

      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={300}
          offset={-70}
          className={`${
            activeSection === 'home'
              ? 'text-tech-blue dark:text-tech-purple'
              : 'text-gray-600 dark:text-gray-300'
          } text-sm sm:text-base hover:text-tech-blue dark:hover:text-tech-purple transition-colors duration-300 cursor-pointer`}
        >
          Home
        </Link>
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={300}
            offset={-70}
            className={`${
              activeSection === item.to
                ? 'text-tech-blue dark:text-tech-purple'
                : 'text-gray-600 dark:text-gray-300'
            } text-sm sm:text-base hover:text-tech-blue dark:hover:text-tech-purple transition-colors duration-300 cursor-pointer`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <DarkModeToggle onThemeChange={setIsDarkMode} />
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 text-gray-600 dark:text-gray-300 hover:text-tech-blue dark:hover:text-tech-purple md:hidden"
          aria-label="Open menu"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <main className="container mx-auto px-3 sm:px-6 lg:px-8 xl:px-0 xl:max-w-6xl pt-16 sm:pt-20">
        <section id='home' className="min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex items-center justify-center py-6 sm:py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-4xl text-center px-2 sm:px-0"
          >
            <div className="space-y-3 sm:space-y-6">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold dark:text-tech-purple text-tech-blue">
                <GreetingAnimation /> 
              </h1>
              <h1 className="text-gray-600 dark:text-gray-400 text-xl sm:text-3xl md:text-4xl font-medium">
                I'm Amogh Hambarde
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto"
                >
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={300}
                    offset={-70}
                    className="w-full sm:w-auto min-w-[140px] sm:min-w-[160px] border-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white dark:border-tech-purple dark:text-tech-purple dark:hover:bg-tech-purple dark:hover:text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 cursor-pointer text-sm sm:text-base font-medium flex items-center justify-center gap-2"
                  >
                    <span>Get in touch</span>
                    <span className="text-lg sm:text-xl">👋</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-8 sm:py-16 relative">
  <div className="absolute inset-0 -z-10"></div>
  
  <div className="max-w-6xl mx-auto px-3 sm:px-6">
    <div className="text-center mb-8 sm:mb-14">
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        About <span className="text-tech-blue dark:text-tech-purple">Me</span>
      </h2>
     
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      {/* Column 1 */}
      <div className="flex flex-col h-full">
        {/* Personal Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800/20  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-7  h-full"
        >
          <div className="flex items-center mb-5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-tech-blue/10 dark:bg-tech-purple/20 flex items-center justify-center mr-3 shrink-0">
              <span className="text-tech-blue dark:text-tech-purple text-xl">👋</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Personal Information</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Name</p>
              <p className="text-sm font-medium text-gray-800 dark:text-white">Amogh Hambarde</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">Location</p>
              <p className="text-sm font-medium text-gray-800 dark:text-white">Maharashtra, India</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            IT student specializing in full-stack web development with expertise in modern web technologies. 
            Passionate about creating responsive, user-friendly interfaces and scalable web applications.
          </p>
        </motion.div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col h-full">
        {/* Soft Skills Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800/20  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-7  h-full"
        >
          <div className="flex items-center mb-5">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-tech-blue/10 dark:bg-tech-purple/20 flex items-center justify-center mr-3 shrink-0">
              <span className="text-tech-blue dark:text-tech-purple text-xl">🌟</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Soft Skills</h3>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
  {[
    { name: 'Communication', icon: '💬', level: 6 },
    { name: 'Teamwork', icon: '🤝', level: 8 },
    { name: 'Adaptability', icon: '🔄', level: 7 },
    { name: 'Creativity', icon: '🎨', level: 9 }
  ].map((skill, index) => (
    <div key={index} className="bg-gray-50/80 dark:bg-dark-bg/20 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md">
      <div className="flex items-center justify-between mb-1 sm:mb-1.5">
        <div className="flex items-center min-w-0">
          <span className="text-sm sm:text-base mr-1 sm:mr-1.5" role="img" aria-label={skill.name}>
            {skill.icon}
          </span>
          <span className="text-[8px] sm:text-xs font-medium text-gray-700 dark:text-gray-300 truncate">
            {skill.name}
          </span>
        </div>
        <span className="text-[8px] sm:text-xs font-medium text-tech-blue dark:text-tech-purple whitespace-nowrap ml-1">
          {skill.level}/10
        </span>
      </div>
      <div className="w-full bg-gray-200/80 dark:bg-gray-700/50 rounded-full h-1 sm:h-1.5 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-tech-blue to-tech-purple rounded-full" 
          style={{ width: `${skill.level * 10}%` }}
        ></div>
      </div>
    </div>
  ))}
</div>
        </motion.div>
      </div>
    </div>

    {/* Second Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
      {/* Education Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white dark:bg-gray-800/20  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-7   "
      >
        <div className="flex items-center mb-5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-tech-blue/10 dark:bg-tech-purple/20 flex items-center justify-center mr-3 shrink-0">
            <span className="text-tech-blue dark:text-tech-purple text-xl">🎓</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Education</h3>
        </div>
        <div className="space-y-5">
          {[
            {
              degree: "B.Tech in Information Technology",
              institution: "MGM's COE Nanded",
              period: "2021 - 2025",
              grade: "CGPA: 6.5"
            },
            {
              degree: "HSC - Science",
              institution: "Cambridge Junior College",
              period: "2019 - 2021",
              grade: "86.67%"
            }
          ].map((edu, index) => (
            <div key={index} className="relative pl-6 border-l-2 border-tech-blue/20 dark:border-tech-purple/20">
              <div className="absolute w-3 h-3 rounded-full bg-tech-blue dark:bg-tech-purple -left-[7px] top-1 border-2 border-white dark:border-gray-800"></div>
              <h4 className="text-sm font-medium text-gray-800 dark:text-white">{edu.institution}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{edu.degree}</p>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500">{edu.period}</span>
                <span className="text-xs sm:pl-4 pl-2 font-medium text-tech-blue dark:text-tech-purple">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Achievements Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white dark:bg-gray-800/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-7 "
      >
        <div className="flex items-center mb-5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-tech-blue/10 dark:bg-tech-purple/20 flex items-center justify-center mr-3 shrink-0">
            <span className="text-tech-blue dark:text-tech-purple text-xl">🏆</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Achievements & Certifications</h3>
        </div>
        <ul className="space-y-3">
          {[
            'Finalist in Web Buster & Bug Munch at MGM COE',
            'HTML5 Certification - Infosys Springboard',
            'Web Design Certification - ISO',
            'C & C++ Programming Certification - ISO'
          ].map((item, index) => (
            <li key={index} className="flex items-start group">
              <span className="text-tech-blue dark:text-tech-purple mr-2.5 mt-0.5">•</span>
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-tech-blue dark:group-hover:text-tech-purple transition-colors">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
    {/* Third Row - Experience */}
    <div className="mt-6 sm:mt-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800/20 rounded-2xl sm:pb-16 shadow-lg hover:shadow-xl transition-all duration-300 sm:px-40 p-6 sm:p-7"
      >
        <div className="flex items-center mb-5">
          <div className="w-10 h-10 sm:w-11 sm:h-11 sm:ml-[290px] rounded-full bg-tech-blue/10 dark:bg-tech-purple/20 flex items-center justify-center mr-3 shrink-0">
            <span className="text-tech-blue dark:text-tech-purple text-xl">💼</span>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">Experience</h3>
        </div>
        
        {/* Desktop View */}
        <div className="relative w-full max-w-4xl">
          <div className="hidden lg:grid grid-cols-4 gap-10  text-left">
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Company</p>
              <p className="text-sm font-medium text-gray-800 dark:text-white">WebHub Technology</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</p>
              <p className="text-sm font-medium">Web Developer Intern</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</p>
              <p className="text-sm font-medium">March 2025 - Present</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</p>
              <div className="flex items-center">
                <svg className="w-3.5 h-3.5 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium">Pune, India</span>
              </div>
            </div>
          </div>
          
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col ">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Web Developer Intern</h4>
            <p className="text-sm font-medium mt-1">@ WebHub Technology</p>
            <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Pune, Maharashtra, India</p>
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2">March 2025 - Present</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

        <section id="skills" className="py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
              Tech <span className="text-tech-blue dark:text-tech-purple">Stack</span>
            </h2>
            <SkillsCloud />
          </div>
        </section>

        <section id="work" className="py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
              Featured <span className="text-tech-blue dark:text-tech-purple">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-2 lg:px-40">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="pt-60 sm:pt-36">
          <div className="max-w-7xl mx-auto px-3 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
              Let's <span className="text-tech-blue dark:text-tech-purple">Connect</span>
            </h2>
            <div className="relative max-w-2xl mx-auto transform hover:scale-[1.01] transition-transform duration-300 dark:bg-gray-800/20 rounded-2xl overflow-hidden shadow-lg">
              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-tech-blue dark:border-tech-purple rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-tech-blue dark:border-tech-purple rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-tech-blue dark:border-tech-purple rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-tech-blue dark:border-tech-purple rounded-br-2xl"></div>
              
              <div className="p-5 sm:p-6 md:p-8">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 text-center sm:text-left">
                  I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out through any of these platforms!
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <motion.a 
                    href="mailto:amoghhambarde123@gmail.com" 
                    className="group flex items-center gap-3 hover:text-tech-blue dark:hover:text-tech-purple transition-colors duration-300 text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-tech-blue/10 dark:bg-tech-purple/10 rounded-full group-hover:bg-tech-blue/20 dark:group-hover:bg-tech-purple/20 transition-colors duration-300">
                      📧
                    </span>
                    <span className="truncate">amoghhambarde123@gmail.com</span>
                  </motion.a>
                  
                  <motion.a 
                    href="tel:+918149005122" 
                    className="group flex items-center gap-3 hover:text-tech-blue dark:hover:text-tech-purple transition-colors duration-300 text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-tech-blue/10 dark:bg-tech-purple/10 rounded-full group-hover:bg-tech-blue/20 dark:group-hover:bg-tech-purple/20 transition-colors duration-300">
                      📱
                    </span>
                    <span>(+91) 8149005122</span>
                  </motion.a>
                  
                  <motion.a 
                    href="https://www.linkedin.com/in/amogh-hambarde-b90017308" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 hover:text-tech-blue dark:hover:text-tech-purple transition-colors duration-300 text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-tech-blue/10 dark:bg-tech-purple/10 rounded-full group-hover:bg-tech-blue/20 dark:group-hover:bg-tech-purple/20 transition-colors duration-300">
                      <img src={linkedin} alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <span>LinkedIn</span>
                    <motion.span 
                      className="hidden sm:inline-flex text-xs bg-tech-blue/10 dark:bg-tech-purple/10 px-2 py-1 rounded-full ml-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Connect
                    </motion.span>
                  </motion.a>
                  
                  <motion.a 
                    href="https://github.com/techAmoghh" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 hover:text-tech-blue dark:hover:text-tech-purple transition-colors duration-300 text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-tech-blue/10 dark:bg-tech-purple/10 rounded-full group-hover:bg-tech-blue/20 dark:group-hover:bg-tech-purple/20 transition-colors duration-300">
                      <img src={github} alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <span>GitHub</span>
                    <motion.span 
                      className="hidden sm:inline-flex text-xs bg-tech-blue/10 dark:bg-tech-purple/10 px-2 py-1 rounded-full ml-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Follow
                    </motion.span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
