
import { Network, Settings, Cloud, Code, Shield, Users, Clock, Brain, TestTube, Computer } from 'lucide-react';
import { Card } from './ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Networking",
      icon: <Network className="h-6 w-6 text-brand-red" />,
      skills: ["VLANs", "TCP/IP", "Routing & Switching", "Network Configuration & Troubleshooting", "Packet Tracer"]
    },
    {
      name: "Technical Support",
      icon: <Settings className="h-6 w-6 text-brand-red" />,
      skills: ["Troubleshooting", "User Support", "Helpdesk Tools"]
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6 text-brand-red" />,
      skills: ["Kubernetes (basic)", "Cloud Computing fundamentals"]
    },
    {
      name: "Software Tools",
      icon: <Code className="h-6 w-6 text-brand-red" />,
      skills: ["Wireshark", "Microsoft Office", "Linux CLI", "Linux & Mac", "Java & Python"]
    },
    {
      name: "Security",
      icon: <Shield className="h-6 w-6 text-brand-red" />,
      skills: ["Information Security", "UI & Performance Testing"]
    },
    {
      name: "Soft Skills",
      icon: <Users className="h-6 w-6 text-brand-red" />,
      skills: ["Teamwork & Agile", "Communication", "Documentation", "Time Management", "Critical Thinking"]
    }
  ];

  return (
    <section id="skills" className="section-container dark:bg-gray-900">
      <div className="flex items-center gap-2 mb-8">
        <Settings className="h-6 w-6 text-brand-red" />
        <h2 className="section-heading dark:text-white text-brand-gold">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.name} className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 card-hover dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              {category.icon}
              <h3 className="text-xl font-bold text-brand-dark dark:text-white text-brand-gold">{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-pill dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 text-brand-gold">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
