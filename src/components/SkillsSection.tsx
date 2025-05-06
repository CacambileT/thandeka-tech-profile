
import { Settings } from 'lucide-react';
import { Card } from './ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      name: "Networking",
      skills: ["VLANs", "TCP/IP", "Routing & Switching"]
    },
    {
      name: "Technical Support",
      skills: ["Troubleshooting", "User Support", "Helpdesk Tools"]
    },
    {
      name: "Cloud & DevOps",
      skills: ["Kubernetes (basic)", "Cloud Computing fundamentals"]
    },
    {
      name: "Software Tools",
      skills: ["Wireshark", "Packet Tracer", "Microsoft Office", "Linux CLI"]
    },
    {
      name: "Other",
      skills: ["Teamwork", "Documentation", "Communication"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="flex items-center gap-2 mb-8">
        <Settings className="h-6 w-6 text-brand-red" />
        <h2 className="section-heading">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.name} className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300 card-hover">
            <h3 className="text-xl font-bold mb-4 text-brand-dark">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-pill">
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
