import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "CSMSS Chhatrapati Shahu College Of Engineering",
      period: "2022 - 2026",
      grade: "CGPA: 7/10",
      description: "Currently pursuing degree with focus on Software Engineering, Web Development, and Database Systems. Active member of the Programming Club and participated in multiple hackathons.",
      subjects: ["Data Structures", "Algorithms", "Database Design", "Software Engineering", "Web Development", "Operating Systems"],
    },
    {
      degree: "Higher Secondary Certificate (12th)",
      institution: "Deogiri College",
      period: "2022",
      grade: "79.67%",
      description: "Science stream with Mathematics, Physics, Chemistry, and Geology.",
      subjects: ["Mathematics", "Physics", "Chemistry", "Geology", "English"],
    },
    {
      degree: "Secondary School Certificate (10th)",
      institution: "Rising Star School", 
      period: "2020",
      grade: "90.20%",
      description: "All subjects with distinction. Active participation in science exhibitions and coding competitions at school level.",
      subjects: ["Mathematics", "Science", "Social Studies", "English", "Sanskrit"],
    },
  ];

  const certifications = [
    {
      name: "Programming in C++",
      issuer: "Coding Ninjas",
      date: "2023",
      credentialId: "xyz-2023",
      link: "#",
    },
    {
      name: "Data Structures and Algorithms",
      issuer: "Code Help",
      date: "2025",
      credentialId: "2QL1HRYS-2025",
      link: "#",
    },
    {
      name: "Back End Development and APIs",
      issuer: "freeCodeCamp",
      date: "2025",
      credentialId: "shivam25451-bedaa-2025",
      link: "#",
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

  const itemVariants = {
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
    <section id="education" className="py-20 bg-secondary/30">
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
              <span className="text-primary font-semibold">Academic Background</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Education & Certifications
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My educational journey and professional certifications that have shaped my expertise in technology.
              </p>
            </motion.div>
          </div>

          {/* Education */}
          <motion.div
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <GraduationCap className="mr-3 text-primary" size={24} />
              Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-hover transition-all duration-300 hover:border-primary/20"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-card-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-semibold">{edu.institution}</p>
                      <p className="text-accent font-medium text-sm">{edu.grade}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Award className="mr-3 text-accent" size={24} />
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-hover transition-all duration-300 hover:border-accent/20 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-accent font-semibold text-sm">{cert.issuer}</p>
                    </div>
                    <motion.a
                      href={cert.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">
                      Credential ID: {cert.credentialId}
                    </span>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* {[
              { number: "3", label: "Qualifications", suffix: "" },
              { number: "4", label: "Certifications", suffix: "+" },
              { number: "8.5", label: "CGPA", suffix: "/10" },
              { number: "92", label: "Best Score", suffix: "%" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))} */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;