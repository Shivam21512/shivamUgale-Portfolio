import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Quick.ai– AI SaaS Platform.",
      description: "Developed a fully functional AI-powered SaaS application with authentication,subscription billing, and a suite of AI tools",
      image: project1,
      technologies: ["React.js", "TailwindCSS","Node.js", "Express.js","PostgreSQL (Neon)","Clerk", "OpenAI API"],
      liveUrl: "https://quick-ai-sf35.vercel.app/",
      githubUrl: "https://github.com/Shivam21512/Quick.ai",
      featured: true,
    },
    {
      title: "Car Rental Web Application (MERN Stack)",
      description: "Developed a full-featured car rental platform enabling users to book cars and admins to manage fleet & bookings.",
      image: project2,
      technologies: ["MongoDB", "Express.js", "React.js,", " Node.js", "Tailwind CSS", "JWT Authentication","ImageKit"],
      liveUrl: "https://car-rental-booking-system-nine.vercel.app/",
      githubUrl: "https://github.com/Shivam21512/CarRental",
      featured: true,
    },
    {
      title: "AlphaTalk– Fullstack Chat & Video Calling App (MERN Stack). ",
      description: " Built a real-time messaging and video chat platform with 1-on-1 & group interactions..",
      image: project3,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS","Zustand","Stream API"],
      liveUrl: "https://alphatalk.onrender.com/",
      githubUrl: "https://github.com/Shivam21512/AlphaTalk",
      featured: false,
    },
    {
      title: "E-Commerce Platform (MERN Stack).",
      description: " Created a full-featured online shopping application with secure payments and an admin management system.",
      image: project4,
      technologies: ["React.js", "Express.js,", "Node.js", "MongoDB", "Tailwind CSS","Redis (caching)","Razorpay"],
      liveUrl: "https://github.com/Shivam21512/E-Commerce",
      githubUrl: "https://github.com/Shivam21512/E-Commerce",
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-section-bg">
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
              <span className="text-primary font-semibold">My Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A collection of projects that showcase my skills in full-stack development, 
                UI/UX design, and problem-solving abilities.
              </p>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Project Image */}
                <motion.div
                  className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    
                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        className="bg-background/90 text-foreground hover:bg-background"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-background/90 border-foreground/20 text-foreground hover:bg-background"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {project.featured && (
                    <div className="absolute -top-2 -right-2">
                      <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Project Info */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Live
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;