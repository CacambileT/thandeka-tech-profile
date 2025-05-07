
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, User, SendHorizontal } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual formspree form ID
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormState({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cacambilethandeka4@gmail.com",
      link: "mailto:cacambilethandeka4@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "076 504 4270",
      link: "tel:+27765044270"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Thandeka Cacambile",
      link: "https://www.linkedin.com/in/thandeka-cacambile-11b791220"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "thandekacacambile",
      link: "https://github.com/thandekacacambile"
    }
  ];

  return (
    <section id="contact" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-heading text-brand-gold">Reach Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl text-brand-gold">
        Feel free to reach out to me for networking opportunities, collaborations, or if you have any questions.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold mb-6 text-brand-dark dark:text-white text-brand-gold">Contact Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactInfo.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                target={item.label === "LinkedIn" || item.label === "GitHub" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-4 flex flex-col md:flex-row items-center md:items-start text-center md:text-left hover:shadow-lg transition-shadow duration-300 card-hover">
                  <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mb-3 md:mb-0 md:mr-4">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1 text-brand-gold">{item.label}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <Card className="p-6 shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-bold mb-6 text-brand-dark dark:text-white text-brand-gold">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="pl-10"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="pl-10"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-brand-red hover:bg-red-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <SendHorizontal className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
