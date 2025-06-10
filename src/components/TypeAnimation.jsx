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
      <h1 className="text-sm sm:text-4xl md:text-lg  font-bold sm:w-52">
        {/* <span className="block text-gray-800 dark:text-gray-200">
          Hi, I'm Amogh
        </span> */}
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
      {/* <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="h-0 w-10 sm:w-52 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full"
      /> */}
    </motion.div>
  );
}
