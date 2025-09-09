import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero text-hero-text relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-lg md:text-xl text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Shivam Ugale
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 bg-gradient-primary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full-Stack Developer
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-hero-text/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            A Full-Stack Developer passionate about building scalable, modern web applications. 
            From front-end interfaces to back-end systems, I build solutions that make an impact
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg hover:shadow-hover transition-all duration-300"
            >
              Get In Touch
            </Button>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-hero-text/50 text-hero-text hover:bg-hero-text/20 hover:text-hero-text hover:border-hero-text px-8 py-6 text-lg backdrop-blur-sm bg-hero-text/10"
            >
              Learn More
            </Button>
            
          </motion.div>
          
          <motion.div
  className="flex justify-center mt-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.1, duration: 0.8 }}
>
  <motion.a
    href="Shivam_Ugale_CV .pdf"
    download="Shivam_Ugale_CV.pdf"
    className="bg-accent/20 text-hero-text px-8 py-3 rounded-lg font-medium hover:bg-accent/30 transition-all duration-300 backdrop-blur-sm border border-accent/30 flex items-center justify-center gap-2"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
    Download CV
  </motion.a>
</motion.div>

<motion.div
  className="flex justify-center space-x-6 mt-10"  // <-- added margin top here
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2, duration: 0.8 }}
>
  {[
    { icon: Github, href: "https://github.com/Shivam21512" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shivam-ugale-684792244/" },
    { icon: Mail, href: " ugaleshivam73@gmail.com" },
  ].map(({ icon: Icon, href }, index) => (
    <motion.a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-hero-text/30 text-hero-text hover:text-primary hover:border-primary transition-all duration-300"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={24} />
    </motion.a>
  ))}
</motion.div>



        </motion.div>
        
        {/* Scroll Indicator */}
        {/* <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-hero-text/80 hover:text-primary transition-colors backdrop-blur-sm bg-hero-text/10 px-4 py-3 rounded-lg border border-hero-text/20 mt-16"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.button> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;