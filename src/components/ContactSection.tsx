
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/prachi-kCoder",
      icon: "🐙",
      description: "View my code and contributions"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/prachi-kumari-498287291/",
      icon: "💼",
      description: "Connect professionally"
    },
    {
      name: "Email",
      url: "mailto:prachikumari.corp@gmail.com",
      icon: "📧",
      description: "Direct communication"
    },
    {
      name: "Twitter",
      url: "https://x.com/thexPrachi",
      icon: "🐦",
      description: "Follow my thoughts and updates"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-bold mb-4">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to collaborations, mentorship opportunities, and building amazing things together
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              className="glass-card p-6 hover:scale-105 transition-all duration-300 group block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {link.icon}
                </div>
                <h3 className="text-lg font-poppins font-semibold mb-2 group-hover:text-sky-400 transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="neo-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-poppins font-semibold mb-4 text-sky-400">
              🤝 Let's Build Something Amazing
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you're looking for collaboration on AI projects, need mentorship in your development journey, 
              or want to discuss innovative solutions for real-world problems, I'm always excited to connect with 
              like-minded individuals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-medium">
                Schedule a Call
              </Button>
              <Button size="lg" variant="outline" className="border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900">
                Send Message
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-muted-foreground">
            © 2024 Portfolio. Built with ❤️ using React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
