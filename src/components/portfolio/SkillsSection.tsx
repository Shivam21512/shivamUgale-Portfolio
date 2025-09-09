import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Server, 
  Smartphone, 
  Cloud, 
  Globe, 
  GitBranch,
  Palette,
  Zap,
  Shield
} from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["Html","CSS","Javascript","React.js", "TailwindCSS"],
      color: "text-blue-500",
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs"],
      color: "text-green-500",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB"],
      color: "text-purple-500",
    },
   
   
    {
      title: "Tools",
      icon: GitBranch,
      skills: ["Git", "VS Code", "Figma", "Postman", "GitHub"],
      color: "text-cyan-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-primary font-semibold">My Skills</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Technologies I Work With
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm passionate about learning new technologies and staying up-to-date with the latest trends in web development.
              </p>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={cardVariants}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:border-primary/20 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-secondary ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground ml-3">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        delay: 0.3 + (index * 0.1) + (skillIndex * 0.05),
                        duration: 0.4 
                      }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground group-hover:text-card-foreground transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Also experienced with
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "OpenAI APIs", "Razorpay", "Clerk", "Socket.io","Clean Architecture"
              ].map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;