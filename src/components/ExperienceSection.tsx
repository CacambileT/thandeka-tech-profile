
import { Briefcase } from 'lucide-react';
import { Card } from './ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container bg-gray-50">
      <div className="flex items-center gap-2 mb-8">
        <Briefcase className="h-6 w-6 text-brand-red" />
        <h2 className="section-heading">Work & Project Experience</h2>
      </div>

      <div className="space-y-8">
        <Card className="p-6 md:p-8 border-l-4 border-l-brand-red">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
            <h3 className="text-xl font-bold text-brand-dark">Design and Implementation of a Functional Data Center for IT Department</h3>
            <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium">
              6 months
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">Cape Peninsula University of Technology</p>
          
          <p className="text-gray-700">
            This project involved setting up Lab 1.30 at CPUT as a fully functional data center to support 
            Work Integrated Learning (WIL) activities. The setup included VLAN-based network segmentation 
            for security and efficiency, a Kubernetes cluster for containerized application deployment, 
            and distributed storage solutions to meet the needs of students in Multimedia Applications, 
            Application Development, and Communication Networks.
          </p>
        </Card>

        <Card className="p-6 md:p-8 border-l-4 border-l-brand-gold">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
            <h3 className="text-xl font-bold text-brand-dark">TaskStream - Cloud Project</h3>
            <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold rounded-full text-sm font-medium">
              Group project
            </span>
          </div>
          
          <p className="text-gray-600 mb-4">Tools Used: AppSheet and Google Sheets</p>
          
          <p className="text-gray-700">
            TaskStream is a simple, efficient task management app created using Google's no-code AppSheet platform. 
            Designed to streamline daily planning, TaskStream helps users prioritize important tasks, stay organized, 
            and reduce stress. With a clean interface and customizable features, it clarifies your daily workflow—making 
            productivity easier and more accessible for everyone.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;
