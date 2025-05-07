
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection = () => {
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
          <ContactInfo contactInfo={contactInfo} />
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
