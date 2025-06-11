import { motion } from 'framer-motion';
import { TypeAnimation as Type } from 'react-type-animation';

export default function TypeAnimation({ greetings }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-0"
    >
      <h1 className="text-sm sm:text-sm md:text-lg  font-bold sm:w-52">
        
        <span className=" text-gray-600 dark:text-gray-300">
          <Type
            sequence={[
              'Full Stack Developer',
              2000,
              'IT Student',
              2000,
              'Software Engineer',
              2000,
              'Code Artistry',
              2000,
              'Node Ninja',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </span>
      </h1>
      
    </motion.div>
  );
}
