import { Briefcase, Calendar, Hospital } from 'lucide-react';
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
      title: "TaskStream - Cloud Project",
      period: "April 2025",
      institution: "CAPACITI",
      description: "TaskStream is a simple, efficient task management app created using Google's no-code AppSheet platform. Designed to streamline daily planning, TaskStream helps users prioritize important tasks, stay organized, and reduce stress. With a clean interface and customizable features, it clarifies your daily workflow—making productivity easier and more accessible for everyone.",
      url: "https://www.appsheet.com/start/41090437-fc54-4566-b88c-6666d863411e"
    },
    {
      title: "Personal Portfolio Website",
      period: "2025",
      institution: "Self-developed",
      description: "A responsive personal portfolio website showcasing my skills, education, experience, and projects. Built with React, Tailwind CSS, and shadcn/ui components. The portfolio is continuously updated to reflect my latest achievements and experiences in the tech industry.",
      url: "https://thandeka-tech-profile.lovable.app"
    },
    {
      title: "Packet Tracer - Cloud Computing on Healthcare Systems",
      period: "2024",
      institution: "Cape Peninsula University of Technology",
      description: "This project focused on how cloud technologies can improve the efficiency, scalability, and security of healthcare IT infrastructure. It explored the benefits of migrating healthcare data and applications to cloud platforms, such as enhanced patient data management, remote access to medical records, and cost-effective storage solutions. The project also addressed critical considerations like data privacy, regulatory compliance (e.g., HIPAA), and the role of cloud-based tools in supporting telemedicine and real-time collaboration among healthcare providers.",
      url: "https://drive.google.com/file/d/1ptrAE9hmIOYqt-vHPNszwKPCOsAzQAap/view?usp=drive_link"
    },
    {
      title: "Design and Implementation of a Functional Data Center for IT Department",
      period: "Feb - June 2024",
      institution: "Cape Peninsula University of Technology",
      description: "This project involved setting up Lab 1.30 at CPUT as a fully functional data center to support Work Integrated Learning (WIL) activities. The setup included VLAN-based network segmentation for security and efficiency, a Kubernetes cluster for containerized application deployment, and distributed storage solutions to meet the needs of students in Multimedia Applications, Application Development, and Communication Networks."
    }
  ];

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-800">
      {/* Work Experience Section */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-8">
          <Calendar className="h-6 w-6 text-brand-red" />
          <h2 className="section-heading dark:text-white">Work Experience</h2>
        </div>

        <div className="space-y-8">
          {workExperiences.map((exp, index) => (
            <Card key={index} className={`p-6 md:p-8 border-l-4 ${exp.color === 'brand-red' ? 'border-l-brand-red' : 'border-l-brand-gold'} dark:bg-gray-800 dark:border-gray-700`}>
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
                    <p className="text-gray-700 dark:text-gray-300">{resp}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div>
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="h-6 w-6 text-brand-red" />
          <h2 className="section-heading dark:text-white">Projects</h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className={`p-6 md:p-8 border-l-4 ${index % 2 === 0 ? 'border-l-brand-red' : 'border-l-brand-gold'} dark:bg-gray-800 dark:border-gray-700`}>
              <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                <h3 className="text-xl font-bold text-brand-dark dark:text-white">
                  {project.url ? (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-brand-red transition-colors flex items-center gap-2"
                    >
                      {project.title === "Packet Tracer - Cloud Computing on Healthcare Systems" && 
                        <Hospital className="h-5 w-5 text-brand-red" />
                      }
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium dark:bg-brand-red/20">
                  {project.period}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.institution}</p>
              
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
