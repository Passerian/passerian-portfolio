import { motion } from 'framer-motion';
import avatarImage from '@/assets/avatar.jpg';

const About = () => {
  return (
    <div id="about" className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl">
                <img
                  src={avatarImage}
                  alt="Lereiya Edwin Passerian"
                  className="w-64 h-64 rounded-2xl avatar-pulse"
                />
              </div>
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan opacity-80"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink opacity-60"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-neon-cyan mb-6">
                Who Am I?
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>I am a <span className="text-neon-blue font-semibold">passionate Software Engineer</span> with a strong focus on full-stack development. I enjoy building modern, efficient, and user-friendly applications that solve real-world problems.</p>
                <p>With hands-on experience from my <span className="text-neon-cyan font-semibold">industry attachment</span>, I'm committed to continuous learning and creating impactful solutions in the tech space.</p>
                <p>My journey in technology is driven by curiosity and a desire to push boundaries. I believe in the power of <span className="text-neon-purple font-semibold">clean code</span>, <span className="text-neon-pink font-semibold">innovative design</span>, and <span className="text-neon-blue font-semibold">seamless user experiences</span>.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-xl bg-gradient-to-br from-neon-blue/10 to-neon-cyan/5 border border-neon-blue/20">
                  <div className="text-2xl font-bold text-neon-blue">2+</div>
                  <div className="text-sm text-muted-foreground">Years Coding</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-xl bg-gradient-to-br from-neon-purple/10 to-neon-pink/5 border border-neon-purple/20">
                  <div className="text-2xl font-bold text-neon-purple">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="text-center p-4 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-neon-blue/5 border border-neon-cyan/20 col-span-2 md:col-span-1">
                  <div className="text-2xl font-bold text-neon-cyan">13</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;