import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Text Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-primary font-semibold">About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Passionate Developer & Problem Solver
              </h2>
            </motion.div>
            
            <motion.div
              className="space-y-4 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p>
                I’m a final-year Computer Engineering student passionate about building modern, responsive web applications using the MERN stack. My core skills include React.js, Node.js, Express.js, MongoDB, Tailwind CSS, and JavaScript. I focus on writing clean, maintainable code and enjoy working across both frontend and backend. I’m actively seeking full-stack or frontend developer roles where I can learn, grow, and contribute to real-world solutions.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-primary">30+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </motion.div>
          </div>
          
          {/* Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
              <img
                src="/profilePhoto.jpg"
                alt="Shivam Ugale - Full Stack Developer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-10 transition-opacity duration-300" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
