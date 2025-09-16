import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Explore My Development Journey</p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            animate={{ boxShadow: ['0 0 60px hsl(var(--neon-blue) / 0.3)', '0 0 80px hsl(var(--neon-cyan) / 0.4)', '0 0 100px hsl(var(--neon-purple) / 0.3)', '0 0 80px hsl(var(--neon-cyan) / 0.4)', '0 0 60px hsl(var(--neon-blue) / 0.3)'] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 rounded-3xl blur-xl"
          />
          <div className="glass-card p-12 rounded-3xl relative z-10 border-2 border-neon-blue/30">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-6">GitHub Portfolio</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                You can explore my projects directly via my <span className="text-neon-blue font-semibold">GitHub account</span>.
                Each repository showcases different aspects of my development skills,
                from full-stack applications to experimental projects and learning exercises.
              </p>
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center">
                <a href="https://github.com/Passerian" target="_blank" rel="noopener noreferrer" className="group cursor-hover">
                  <div className="relative">
                    <motion.div
                      animate={{ boxShadow: ['0 0 30px hsl(var(--neon-blue) / 0.6)', '0 0 50px hsl(var(--neon-cyan) / 0.8)', '0 0 30px hsl(var(--neon-blue) / 0.6)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-cyan opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    />
                    <div className="relative px-12 py-6 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-bold text-xl border-2 border-transparent group-hover:border-white/20 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <Github size={32} />
                        <span>Visit GitHub</span>
                        <ExternalLink size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;