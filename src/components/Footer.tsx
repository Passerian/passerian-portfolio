import { motion } from 'framer-motion';
import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      // --- CHANGE IS HERE ---
      className="relative z-10 mt-20 py-12 px-6 border-t border-white/10"
    >
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Logo/Name */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent cursor-hover"
            >
              Lereiya Edwin Passerian
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Passerian"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-hover group"
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-cyan/10 border border-neon-blue/30 group-hover:border-neon-blue transition-all duration-300">
                  <Github className="text-neon-blue group-hover:text-white transition-colors duration-300" size={24} />
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:epasserian@gmail.com"
                className="cursor-hover group"
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/10 border border-neon-cyan/30 group-hover:border-neon-cyan transition-all duration-300">
                  <Mail className="text-neon-cyan group-hover:text-white transition-colors duration-300" size={24} />
                </div>
              </motion.a>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.5 }}
            className="my-8 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"
          />

          {/* Copyright */}
          <div className="text-center space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground flex items-center justify-center gap-2"
            >
              © {currentYear} Lereiya Edwin Passerian. Built with
              <Heart className="text-neon-pink animate-pulse" size={16} />
              and lots of ☕
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center gap-4 text-sm text-neon-cyan"
            >
              <span className="animate-pulse">●</span>
              <span>React</span>
              <span>●</span>
              <span>TypeScript</span>
              <span>●</span>
              <span>Tailwind CSS</span>
              <span>●</span>
              <span>Framer Motion</span>
              <span className="animate-pulse">●</span>
            </motion.div>
          </div>

          {/* Floating Particles are decorative and won't affect clicks */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-neon-blue/30"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  delay: i * 1.5,
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: '20%',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;