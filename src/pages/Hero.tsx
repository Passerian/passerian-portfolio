import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import avatarImage from '@/assets/avatar.jpg';

const Hero = () => {
  // --- The typewriter logic is back ---
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "Lereiya Edwin Passerian";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        // --- THIS IS THE FIX ---
        // The cursor now disappears after typing is finished, so it doesn't "jump" forever.
        setShowCursor(false);
      }
    }, 150); // Typing speed

    // Cleanup function to prevent memory leaks
    return () => clearInterval(interval);
  }, []); // The empty dependency array ensures this runs only once

  return (
    <div id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <img
              src={avatarImage}
              alt="Lereiya Edwin Passerian"
              className="w-48 h-48 rounded-full avatar-pulse border-4 border-neon-blue/30"
            />
            {/* Animated rings around avatar */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-neon-cyan/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-neon-purple/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ width: '140%', height: '140%', top: '-20%', left: '-20%' }}
            />
          </div>
        </motion.div>

        {/* Typewriter Name is back */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* We need to set a minimum height to prevent the layout from shifting as the text types out */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-space-grotesk min-h-[80px] md:min-h-[100px]">
            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent italic font-extrabold tracking-wide">
              {displayText}
              {showCursor && <span className="border-r-2 border-neon-blue ml-1 not-italic">|</span>}
            </span>
          </h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: (fullName.length * 0.15) + 0.5 }} // Delay animation until after typing
            className="space-y-2"
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              Software Engineer | Full-Stack Developer
            </p>
            <div className="flex justify-center space-x-4 text-sm text-neon-cyan">
              <span className="animate-pulse">●</span>
              <span>Building the Future</span>
              <span className="animate-pulse">●</span>
              <span>One Line of Code at a Time</span>
              <span className="animate-pulse">●</span>
            </div>
          </motion.div>
        </motion.div>

        {/* The scroll indicator arrow is still gone, as requested */}
      </div>
    </div>
  );
};

export default Hero;