
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Card } from './ui/card';

interface ContactInfoProps {
  contactInfo: {
    icon: React.ElementType;
    label: string;
    value: string;
    link: string;
  }[];
}

const ContactInfo = ({ contactInfo }: ContactInfoProps) => {
  return (
    <div>
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
  );
};

export default ContactInfo;
