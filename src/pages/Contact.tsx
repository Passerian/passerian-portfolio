import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Let's Build Something Amazing Together</p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-12 rounded-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neon-cyan mb-8">Let's Connect</h2>
              <p className="text-muted-foreground text-xl leading-relaxed mb-12">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about technology and development.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.a
                  href="mailto:epasserian@gmail.com"
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-neon-blue/10 to-neon-cyan/5 border border-neon-blue/30 cursor-hover hover:border-neon-blue transition-all duration-300"
                >
                  <div className="p-4 rounded-full bg-neon-blue/20 border border-neon-blue/40">
                    <Mail className="text-neon-blue" size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-neon-blue text-xl mb-2">Email</h3>
                    <p className="text-muted-foreground">epasserian@gmail.com</p>
                  </div>
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-neon-cyan/10 to-neon-purple/5 border border-neon-cyan/30 cursor-hover"
                >
                  <div className="p-4 rounded-full bg-neon-cyan/20 border border-neon-cyan/40">
                    <MessageCircle className="text-neon-cyan" size={32} />
                  </div>
                  <div>
                    <h3 className="font-bold text-neon-cyan text-xl mb-2">Response Time</h3>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;