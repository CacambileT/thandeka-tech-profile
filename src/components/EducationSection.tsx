
import { BookOpen } from 'lucide-react';
import { Card } from './ui/card';

const EducationSection = () => {
  const educations = [
    {
      degree: "Diploma in Communication Networks",
      institution: "Cape Peninsula University of Technology",
      duration: "3 years",
      color: "brand-red"
    },
    {
      degree: "HC in ICT",
      institution: "Cape Peninsula University of Technology",
      duration: "",
      color: "brand-gold"
    }
  ];
  
  const certifications = [
    {
      title: "Google IT Support Certificate",
      organization: "Coursera",
      date: "Nov 2021",
      url: "https://www.credly.com/users/thandeka-cacambile"
    },
    {
      title: "Introduction to Networking and Cloud Computing",
      organization: "Microsoft/Coursera",
      date: "Feb 2025"
    },
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      organization: "Google Cloud/Coursera",
      date: "April 2025"
    }
  ];

  return (
    <section id="education" className="section-container">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="h-6 w-6 text-brand-red" />
        <h2 className="section-heading">Education & Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-6 text-brand-dark">Education</h3>
          <div className="space-y-6">
            {educations.map((edu, index) => (
              <Card key={index} className={`p-6 card-hover border-l-4 border-l-${edu.color}`}>
                <h4 className="text-lg font-bold text-brand-dark">{edu.degree}</h4>
                <p className="text-gray-600 mt-1">{edu.institution}</p>
                {edu.duration && <p className="text-sm text-gray-500 mt-2">{edu.duration}</p>}
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6 text-brand-dark">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-4 card-hover">
                <h4 className="font-medium text-brand-dark">
                  {cert.url ? (
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-brand-red transition-colors"
                    >
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </h4>
                <div className="flex justify-between mt-1 text-sm text-gray-600">
                  <span>{cert.organization}</span>
                  <span>{cert.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
