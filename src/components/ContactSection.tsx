
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Card } from './ui/card';

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
    }
  ];

  return (
    <section id="contact" className="section-container bg-gray-50">
      <h2 className="section-heading">Get In Touch</h2>
      <p className="text-gray-700 mb-8 max-w-2xl">
        Feel free to reach out to me for networking opportunities, collaborations, or if you have any questions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactInfo.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target={item.label === "LinkedIn" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 card-hover">
              <div className="w-12 h-12 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center mb-4">
                <item.icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-1">{item.label}</h3>
              <p className="text-gray-600">{item.value}</p>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
