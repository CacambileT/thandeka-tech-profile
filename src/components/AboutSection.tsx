
import { User, Mail, Linkedin } from 'lucide-react';
import { Card } from './ui/card';
import Image from 'next/image'; // or 'react' depending on your setup

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center gap-2 mb-8">
        <User className="h-6 w-6 text-brand-red" />
        <h2 className="section-heading text-brand-dark dark:text-white">About Me</h2>
      </div>

      {/* Image */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/00a74541-54da-4bea-85b2-dc9ef830a5a0.jpg" // make sure this matches your public folder or static path
          alt="Thandeka profile"
          width={200}
          height={250}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>

      <Card className="p-6 md:p-8 shadow-lg border-t-4 border-t-brand-red dark:bg-gray-800">
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
          I am a motivated and tech-savvy individual with a Diploma in Communication Networks and a Higher Certificate in ICT. 
          I have hands-on experience in setting up and managing data center environments, VLAN segmentation, and distributed storage systems. 
          My skills include troubleshooting network issues, providing IT support, and working with cloud computing and cybersecurity solutions. 
        </p>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-4">
          Currently, I'm gaining further experience through the CAPACITI program, where I contribute to cloud-based projects 
          and collaborate in agile environments.
        </p>
      </Card>

      {/* Footer Icons */}
      <div className="mt-6 flex justify-center gap-6">
        <a href="mailto:your-email@example.com" aria-label="Email">
          <Mail className="h-6 w-6 text-brand-red hover:text-brand-dark" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-6 w-6 text-brand-red hover:text-brand-dark" />
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
