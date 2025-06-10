import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const greetings = [
  'Hello!', // English
  'प्रणाम!', // Sanskrit
  'नमस्कार!', // Marathi
  'नमस्ते!', // Hindi
  'آداب', // Urdu
  'নমস্কার!', // Bengali
  'హలో!', // Telugu
  'வணக்கம்!', // Tamil
  'નમસ્તે!', // Gujarati
  'ನಮಸ್ಕಾರ!', // Kannada
  'ഹലോ!', // Malayalam
  'ਸਤ ਸ੍ਰੀ ਅਕਾਲ!', // Punjabi
  'Bonjour!', // French
  'Hallo!', // German
  'こんにちは!', // Japanese
  'Привет!' // Russian
];

const GreetingAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((state) => (state + 1) % greetings.length);
    }, 1600); // Changed from 2000ms to 1500ms for faster cycling

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }} // Faster transition (from 0.5s to 0.3s)
        className="inline-block"
      >
        {greetings[index]}
      </motion.span>
    </AnimatePresence>
  );
};

export default GreetingAnimation;