// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Education", href: "#education" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   return (
//     <motion.nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/90 backdrop-blur-md shadow-card border-b border-border/50"
//           : "bg-background/10 backdrop-blur-sm "
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <motion.div
//             className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
//             whileHover={{ scale: 1.05 }}
//           >
//             Shivam Ugale
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.href)}
//                 className={`transition-colors relative group ${
//                   isScrolled 
//                     ? "text-foreground hover:text-primary" 
//                     : "text-hero-text/90 hover:text-primary"
//                 }`}
//               >
//                 {item.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
//               </button>
//             ))}
//             <Button
//               onClick={() => scrollToSection("#contact")}
//               className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
//             >
//               Hire Me
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X /> : <Menu />}
//           </Button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <motion.div
//             className="md:hidden mt-4 pb-4"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//           >
//             <div className="flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.href)}
//                   className="text-left text-foreground hover:text-primary transition-colors py-2"
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <Button
//                 onClick={() => scrollToSection("#contact")}
//                 className="bg-gradient-primary w-fit mt-2"
//               >
//                 Hire Me
//               </Button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-card border-b border-border/50"
          : "bg-background/10 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Shivam Ugale
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`transition-colors relative group ${
                  isScrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-hero-text/90 hover:text-primary"
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-primary hover:shadow-hover transition-all duration-300"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 bg-background/95 backdrop-blur-md rounded-lg border border-border/50 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 py-3 px-3 rounded-md font-medium"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-primary w-fit mt-2"
              >
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;