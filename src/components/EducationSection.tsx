
import { BookOpen, GraduationCap, School } from 'lucide-react';
import { Card } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';
import { Avatar } from './ui/avatar';
import { Badge } from './ui/badge';

const EducationSection = () => {
  const educations = [
    {
      degree: "Diploma in Communication Networks",
      institution: "Cape Peninsula University of Technology",
      duration: "3 years",
      color: "border-brand-red",
      image: "/lovable-uploads/17d7c7c1-43b2-44fe-ab68-ba7c36e3cc32.png"
    },
    {
      degree: "Higher Certificate in Information and Communication Technology",
      institution: "Cape Peninsula University of Technology",
      duration: "1 year",
      color: "border-brand-gold",
      image: "/lovable-uploads/17d7c7c1-43b2-44fe-ab68-ba7c36e3cc32.png"
    },
    {
      degree: "National Senior Certificate",
      institution: "Phandulwazi Agricultural High School",
      duration: "Completed 2019",
      color: "border-green-500",
      image: "/lovable-uploads/bc27678d-d782-456b-9652-3e9da96281e0.png"
    }
  ];
  
  const certifications = [
    {
      title: "Google IT Support Certificate",
      organization: "Coursera",
      date: "Nov 2021",
      url: "https://www.credly.com/users/thandeka-cacambile",
      badge: "/lovable-uploads/f1ede04a-99d6-44f3-85cf-036108c23891.png"
    },
    {
      title: "Introduction to Networking and Cloud Computing",
      organization: "Microsoft/Coursera",
      date: "Feb 2025",
      url: "https://coursera.org/share/b66f80dbfe633b576d9f819a01e78c80"
    },
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      organization: "Google Cloud/Coursera",
      date: "April 2025"
    },
    {
      title: "Developing Applications with Google Cloud: Foundations",
      organization: "Google Cloud/Coursera",
      date: "April 2025",
      url: "https://coursera.org/share/a26c217c9532e7f0348b3190992ee73f"
    }
  ];

  return (
    <section id="education" className="section-container">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="h-6 w-6 text-brand-red" />
        <h2 className="section-heading text-brand-gold">Education & Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-6 text-brand-dark dark:text-white text-brand-gold">Education</h3>
          <div className="space-y-6">
            {educations.map((edu, index) => (
              <Card key={index} className={`p-6 card-hover border-l-4 ${edu.color}`}>
                <div className="flex flex-col md:flex-row gap-4">
                  {edu.image && (
                    <div className="md:w-1/3">
                      <img 
                        src={edu.image} 
                        alt={edu.institution} 
                        className="w-full h-32 object-cover rounded-md"
                      />
                    </div>
                  )}
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-brand-dark dark:text-white text-brand-gold">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">{edu.institution}</p>
                    {edu.duration && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{edu.duration}</p>}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-6 text-brand-dark dark:text-white text-brand-gold">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-4 card-hover dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  {cert.badge && (
                    <div className="flex-shrink-0 w-16 h-16">
                      <AspectRatio ratio={1}>
                        <img 
                          src={cert.badge} 
                          alt={`${cert.title} badge`} 
                          className="w-full h-full object-contain"
                        />
                      </AspectRatio>
                    </div>
                  )}
                  <div className="flex-1">
                    <h4 className="font-medium text-brand-dark dark:text-white text-brand-gold">
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
                    <div className="flex justify-between mt-1 text-sm text-gray-600 dark:text-gray-300">
                      <span>{cert.organization}</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
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
