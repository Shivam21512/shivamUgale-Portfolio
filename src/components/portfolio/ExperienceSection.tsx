// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import { Briefcase, GraduationCap, Calendar } from "lucide-react";

// const ExperienceSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const experiences = [
//     {
//       type: "work",
//       title: "Senior Full-Stack Developer",
//       company: "TechFlow Solutions",
//       period: "2022 - Present",
//       description: "Lead developer for enterprise web applications serving 100k+ users. Architected microservices infrastructure, mentored junior developers, and improved system performance by 40%.",
//       technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
//     },
//     {
//       type: "work",
//       title: "Full-Stack Developer",
//       company: "Digital Innovations Inc",
//       period: "2020 - 2022",
//       description: "Developed and maintained multiple client projects, implemented CI/CD pipelines, and collaborated with design teams to deliver pixel-perfect user interfaces.",
//       technologies: ["Vue.js", "Express", "MongoDB", "Redis", "TypeScript"],
//     },
//     {
//       type: "work",
//       title: "Frontend Developer",
//       company: "StartupLabs",
//       period: "2019 - 2020",
//       description: "Built responsive web applications for early-stage startups, optimized application performance, and integrated third-party APIs and payment systems.",
//       technologies: ["React", "Redux", "Sass", "Webpack", "Jest"],
//     },
//     {
//       type: "education",
//       title: "Bachelor of Computer Science",
//       company: "University of Technology",
//       period: "2015 - 2019",
//       description: "Graduated Magna Cum Laude with focus on Software Engineering and Database Systems. Active member of the Programming Club and hackathon organizer.",
//       technologies: ["Data Structures", "Algorithms", "Database Design", "Software Engineering"],
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//       },
//     },
//   };

//   return (
//     <section id="experience" className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <motion.div
//           ref={ref}
//           className="max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Section Header */}
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//               transition={{ delay: 0.2, duration: 0.6 }}
//             >
//               <span className="text-primary font-semibold">My Journey</span>
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
//                 Experience & Education
//               </h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 A timeline of my professional growth and educational background in software development.
//               </p>
//             </motion.div>
//           </div>

//           {/* Timeline */}
//           <motion.div
//             className="relative"
//             variants={containerVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//           >
//             {/* Timeline Line */}
//             <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

//             <div className="space-y-12">
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={`${exp.company}-${exp.period}`}
//                   variants={itemVariants}
//                   className="relative flex items-start"
//                 >
//                   {/* Timeline Icon */}
//                   <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-card border-4 border-background rounded-full shadow-card">
//                     {exp.type === "work" ? (
//                       <Briefcase size={20} className="text-primary" />
//                     ) : (
//                       <GraduationCap size={20} className="text-accent" />
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="ml-8 flex-1">
//                     <motion.div
//                       className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border hover:border-primary/20"
//                       whileHover={{ x: 5 }}
//                     >
//                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
//                         <div>
//                           <h3 className="text-xl font-bold text-card-foreground">
//                             {exp.title}
//                           </h3>
//                           <p className="text-primary font-semibold">
//                             {exp.company}
//                           </p>
//                         </div>
//                         <div className="flex items-center text-muted-foreground mt-2 sm:mt-0">
//                           <Calendar size={16} className="mr-2" />
//                           <span className="text-sm">{exp.period}</span>
//                         </div>
//                       </div>

//                       <p className="text-muted-foreground mb-4 leading-relaxed">
//                         {exp.description}
//                       </p>

//                       <div className="flex flex-wrap gap-2">
//                         {exp.technologies.map((tech) => (
//                           <span
//                             key={tech}
//                             className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Additional Achievements */}
//           <motion.div
//             className="mt-16 grid md:grid-cols-3 gap-6"
//             initial={{ opacity: 0, y: 30 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//           >
//             {[
//               { title: "AWS Certified", subtitle: "Solutions Architect", icon: "🏆" },
//               { title: "Open Source", subtitle: "Contributor", icon: "🚀" },
//               { title: "Team Lead", subtitle: "5+ Developers", icon: "👥" },
//             ].map((achievement) => (
//               <motion.div
//                 key={achievement.title}
//                 className="text-center p-6 bg-card rounded-xl shadow-card border border-border"
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="text-3xl mb-3">{achievement.icon}</div>
//                 <h4 className="font-semibold text-card-foreground">
//                   {achievement.title}
//                 </h4>
//                 <p className="text-muted-foreground text-sm">
//                   {achievement.subtitle}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;

import React from 'react'

const ExperienceSection = () => {
  return (
    <div>ExperienceSection</div>
  )
}

export default ExperienceSection