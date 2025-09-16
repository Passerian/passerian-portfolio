import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Grid Background */}
      <div className="grid-pattern absolute inset-0 opacity-10" />
      
      {/* Floating Particles - Reduced quantity */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `linear-gradient(45deg, hsl(var(--neon-blue)), hsl(var(--neon-cyan)))`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, -10, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/3 via-transparent to-neon-purple/3" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-neon-cyan/2 to-transparent" />
    </div>
  );
};

export default ParticleBackground;