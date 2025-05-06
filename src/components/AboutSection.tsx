
import { User } from 'lucide-react';
import { Card } from './ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-gray-50">
      <div className="flex items-center gap-2 mb-8">
        <User className="h-6 w-6 text-brand-red" />
        <h2 className="section-heading">About Me</h2>
      </div>
      
      <Card className="p-6 md:p-8 shadow-lg border-t-4 border-t-brand-red">
        <p className="text-gray-700 leading-relaxed">
          I am a motivated and tech-savvy individual with a Diploma in Communication Networks and a Higher Certificate in ICT. 
          I have hands-on experience in setting up and managing data center environments, VLAN segmentation, and distributed storage systems. 
          My skills include troubleshooting network issues, providing IT support, and working with cloud computing and cybersecurity solutions. 
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Currently, I'm gaining further experience through the CAPACITI program, where I contribute to cloud-based projects 
          and collaborate in agile environments.
        </p>
      </Card>
    </section>
  );
};

export default AboutSection;
