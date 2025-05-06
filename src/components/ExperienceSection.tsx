
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Table, TableBody, TableCell, TableRow } from './ui/table';

const ExperienceSection = () => {
  const workExperiences = [
    {
      title: "Cloud Associate",
      company: "CAPACITI",
      location: "Cape Town",
      period: "2025 - Present",
      responsibilities: [
        "Using tools like AWS, Azure, or GCP for cloud operations.",
        "Troubleshooting cloud issues to improve system performance.",
        "Managing virtual machines, storage, and cloud applications.",
        "Participating in Agile sprints and daily standups."
      ],
      color: "brand-red"
    },
    {
      title: "IT Support Intern",
      company: "Cape Peninsula University of Technology",
      location: "",
      period: "June 2024 - Dec 2024",
      responsibilities: [
        "Setup and configuration of new computers and software.",
        "Troubleshooting hardware and software issues.",
        "Providing day-to-day technical support (onsite and remotely).",
        "Overseeing ticket management by addressing and resolving support tickets, documenting issues, and detailing solutions."
      ],
      color: "brand-gold"
    },
    {
      title: "Customer Service Agent",
      company: "TELEPERFORMANCE",
      location: "",
      period: "Jan 2020 - Oct 2020",
      responsibilities: [
        "Consistently exceeded sales targets, contributing to a 15% increase in overall company sales.",
        "Built strong customer relationships through exceptional service and proactive follow-ups.",
        "Provided expert product knowledge and recommendations, leading to increased upsells and repeat business."
      ],
      color: "brand-red"
    }
  ];

  const projects = [
    {
      title: "Design and Implementation of a Functional Data Center for IT Department",
      period: "6 months",
      institution: "Cape Peninsula University of Technology",
      description: "This project involved setting up Lab 1.30 at CPUT as a fully functional data center to support Work Integrated Learning (WIL) activities. The setup included VLAN-based network segmentation for security and efficiency, a Kubernetes cluster for containerized application deployment, and distributed storage solutions to meet the needs of students in Multimedia Applications, Application Development, and Communication Networks."
    },
    {
      title: "TaskStream - Cloud Project",
      period: "Group project",
      institution: "CAPACITI",
      description: "TaskStream is a simple, efficient task management app created using Google's no-code AppSheet platform. Designed to streamline daily planning, TaskStream helps users prioritize important tasks, stay organized, and reduce stress. With a clean interface and customizable features, it clarifies your daily workflow—making productivity easier and more accessible for everyone."
    }
  ];

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-800">
      <div className="flex items-center gap-2 mb-8">
        <Briefcase className="h-6 w-6 text-brand-red" />
        <h2 className="section-heading dark:text-white">Work & Project Experience</h2>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-bold mb-6 text-brand-dark dark:text-white flex items-center gap-2">
            <Calendar className="h-5 w-5 text-brand-red" />
            Work Experience
          </h3>
          <div className="space-y-8">
            {workExperiences.map((exp, index) => (
              <Card key={index} className={`p-6 md:p-8 border-l-4 border-l-${exp.color} dark:bg-gray-800 dark:border-gray-700`}>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                  <h3 className="text-xl font-bold text-brand-dark dark:text-white">{exp.title}</h3>
                  <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium dark:bg-brand-red/20">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {exp.company}{exp.location && `, ${exp.location}`}
                </p>
                
                <div className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">•</span>
                      <p className="text-gray-700 dark:text-gray-200">{resp}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 text-brand-dark dark:text-white flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-brand-red" />
            Project Experience
          </h3>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className={`p-6 md:p-8 border-l-4 ${index % 2 === 0 ? 'border-l-brand-red' : 'border-l-brand-gold'} dark:bg-gray-800 dark:border-gray-700`}>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                  <h3 className="text-xl font-bold text-brand-dark dark:text-white">{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium dark:bg-brand-red/20">
                    {project.period}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.institution}</p>
                
                <p className="text-gray-700 dark:text-gray-200">{project.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
