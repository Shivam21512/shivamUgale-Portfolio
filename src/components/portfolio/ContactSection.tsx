import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ugaleshivam73@gmail.com",
      href: "ugaleshivam73@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8855020976",
      href: "tel:+91 8855020976",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chhatrapati Sambhajinagar, Maharashtra, India",
      href: "https://www.google.com/maps?q=Chhatrapati+Sambhajinagar,+Maharashtra,+India",

    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Shivam21512",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shivam-ugale-684792244/",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
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
              <span className="text-primary font-semibold">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to discuss opportunities? 
                I'd love to hear from you. Send me a message and let's start a conversation.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-card hover:bg-card-hover transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">
                          {info.label}
                        </p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-card hover:bg-primary text-card-foreground hover:text-primary-foreground transition-colors border border-border hover:border-primary"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                className="p-6 rounded-xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-card-foreground">
                    Available for new projects
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  I'm currently accepting new freelance projects and full-time opportunities.
                  Response time is typically within 24 hours.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="bg-card rounded-xl p-8 shadow-card border border-border">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        required
                        className="w-full"
                        placeholder="Shivam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        required
                        className="w-full"
                        placeholder="Ugale"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      required
                      className="w-full"
                      placeholder="shivam@gmail.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      required
                      className="w-full"
                      placeholder="Project Discussion"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-card-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-hover transition-all duration-300"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send size={16} />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;