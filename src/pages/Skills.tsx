import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'React', icon: '⚛️', category: 'Frontend', color: 'neon-blue' },
    { name: 'Next.js', icon: '▲', category: 'Frontend', color: 'neon-cyan' },
    { name: 'TailwindCSS', icon: '🎨', category: 'Frontend', color: 'neon-purple' },
    { name: 'Node.js', icon: '🟢', category: 'Backend', color: 'neon-blue' },
    { name: 'Express.js', icon: '🚀', category: 'Backend', color: 'neon-cyan' },
    { name: 'Python', icon: '🐍', category: 'Backend', color: 'neon-purple' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database', color: 'neon-blue' },
    { name: 'MySQL', icon: '🗄️', category: 'Database', color: 'neon-cyan' },
    { name: 'Git', icon: '🌿', category: 'DevOps', color: 'neon-purple' },
    { name: 'GitHub', icon: '🐙', category: 'DevOps', color: 'neon-blue' },
    { name: 'Docker', icon: '🐳', category: 'DevOps', color: 'neon-cyan' },
    { name: 'REST APIs', icon: '🔗', category: 'Backend', color: 'neon-purple' },
    { name: 'Vercel', icon: '▼', category: 'DevOps', color: 'neon-blue' },
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'DevOps'];
  const categoryColors = { Frontend: 'neon-blue', Backend: 'neon-cyan', Database: 'neon-purple', DevOps: 'neon-pink' };

  return (
    <div id="skills" className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Full-Stack Development Expertise</p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
              className="group cursor-hover"
            >
              <div className={`glass-card p-6 rounded-2xl border-2 border-transparent hover:border-${skill.color}/50 transition-all duration-300 h-full`}>
                <div className="text-4xl mb-4 text-center">
                  <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="inline-block">{skill.icon}</motion.div>
                </div>
                <h3 className={`text-xl font-bold text-center mb-2 text-${skill.color} group-hover:glow-blue transition-all duration-300`}>{skill.name}</h3>
                <div className="flex justify-center">
                  <span className={`px-3 py-1 text-xs rounded-full bg-${skill.color}/10 text-${skill.color} border border-${skill.color}/20`}>{skill.category}</span>
                </div>
                <motion.div initial={{ width: 0 }} whileHover={{ width: "100%" }} className={`h-1 bg-gradient-to-r from-${skill.color} to-${skill.color}/50 rounded-full mt-4 transition-all duration-500`} />
                <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${skill.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;