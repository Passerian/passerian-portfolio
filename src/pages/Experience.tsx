import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Animate only once
      }
    }, { threshold: 0.3 });

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }
    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      id: 1, title: 'Software Development Intern', company: 'Copy Cat Group', type: 'Internship & Attachment',
      location: 'Kenya', duration: '2025', description: 'Gained hands-on experience in full-stack development, working on real-world projects and collaborating with experienced developers.',
      achievements: [
        'Developed and maintained web applications using modern frameworks',
        'Collaborated with cross-functional teams on project delivery',
        'Implemented responsive designs and user-friendly interfaces',
        'Gained practical experience in software development lifecycle'
      ],
      skills: ['Postgres', 'Node.js', 'Javascript', 'HTML', 'CSS', 'Git'],
      color: 'neon-blue', icon: Briefcase
    }
  ];

  return (
    <div id="experience" className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Professional Journey & Growth</p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        {/* --- REMOVED: Old timeline line --- */}
        <div ref={timelineRef} className="relative">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex flex-col items-center mb-16">
              {/* Timeline Node - Now centered above the card */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                className={`w-8 h-8 rounded-full bg-gradient-to-r from-${exp.color} to-neon-cyan border-4 border-background shadow-lg mb-4`}
              >
                <motion.div
                  animate={{ boxShadow: [`0 0 20px hsl(var(--${exp.color}) / 0.5)`, `0 0 40px hsl(var(--${exp.color}) / 0.8)`, `0 0 20px hsl(var(--${exp.color}) / 0.5)`] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-full h-full rounded-full"
                />
              </motion.div>

              {/* Experience Card - Now centered */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-8 rounded-2xl cursor-hover w-full max-w-2xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <exp.icon className={`text-${exp.color}`} size={24} />
                      <h2 className={`text-2xl font-bold text-${exp.color}`}>{exp.title}</h2>
                    </div>
                    <h3 className="text-xl text-foreground font-semibold">{exp.company}</h3>
                    <p className="text-neon-cyan font-medium">{exp.type}</p>
                  </div>
                  <div className="text-right space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground"><Calendar size={16} /><span>{exp.duration}</span></div>
                    <div className="flex items-center gap-2 text-muted-foreground"><MapPin size={16} /><span>{exp.location}</span></div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4"><Award className="text-neon-purple" size={20} /><h4 className="text-lg font-semibold text-neon-purple">Key Achievements</h4></div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neon-cyan mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className={`px-3 py-1 text-sm rounded-full bg-${exp.color}/10 text-${exp.color} border border-${exp.color}/30 cursor-hover`}>{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;