import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  liveLink, 
  githubLink, 
  features 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group relative h-full rounded-2xl overflow-hidden dark:bg-black/10 border border-gray-200/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image Container with Glow Effect */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 ">
          <div className="flex gap-6">
            {githubLink && (
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="w-5 h-5 text-white" />
              </motion.a>
            )}
            {liveLink && (
              <motion.a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-tech-blue to-tech-purple text-white rounded-full flex items-center gap-2 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo <FiArrowRight className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex flex-col h-full">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 text-tech-blue dark:text-tech-purple font-medium"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                +{tags.length - 3}
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-tech-blue dark:group-hover:text-tech-purple transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {description}
          </p>
          
          {features && features.length > 0 && (
            <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Key Features
              </h4>
              <ul className="space-y-2">
                {features.slice(0, 2).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-tech-blue dark:text-tech-purple mr-2">•</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
                {features.length > 2 && (
                  <li className="text-xs text-tech-blue dark:text-tech-purple">
                    +{features.length - 2} more features
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-r from-tech-purple/20 to-tech-blue/20 rounded-full filter blur-3xl" />
      </div>
    </motion.div>
  );
}