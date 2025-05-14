
import { User } from 'lucide-react';
import { Card } from './ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center gap-2 mb-8">
        <User className="h-6 w-6 text-brand-red" />
        <h2 className="section-heading text-brand-dark dark:text-white">About Me https://capeitinitiative-my.sharepoint.com/:i:/g/personal/thandeka_cacambile_capaciti_org_za/ERtOxFdvda1BjV2JNt_6AS4BNDYw-RSBRDQIdwjXoBrWnQ?e=ekFxyD</h2>
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
    </section>
  );
};

export default AboutSection;
