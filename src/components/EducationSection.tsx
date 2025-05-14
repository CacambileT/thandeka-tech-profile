
import { BookOpen, GraduationCap, School } from 'lucide-react';
import { Card } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';
import { Avatar } from './ui/avatar';
import { Badge } from './ui/badge';

const EducationSection = () => {
  const educations = [
    {
      degree: "Advanced Diploma in ICT in Communication Networks",
      institution: "Cape Peninsula University of Technology",
      duration: "Currently Enrolled",
      color: "border-brand-red",
      image: "/lovable-uploads/17d7c7c1-43b2-44fe-ab68-ba7c36e3cc32.png",
      inProgress: true,
      url: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/thandeka_cacambile_capaciti_org_za/EUqsPSyoMrtNpkSsoCWGk6EBJytGv0s2e6Vt54h-FSR8EA?e=ajBmqI"
    },
    {
      degree: "Diploma in Communication Networks",
      institution: "Cape Peninsula University of Technology",
      duration: "3 years",
      color: "border-brand-red",
      image: "/lovable-uploads/17d7c7c1-43b2-44fe-ab68-ba7c36e3cc32.png",
      url: "https://drive.google.com/file/d/1C1f3A92kDczP9k8kmKGGxZMb6tDmw7Dg/view?usp=drive_link"
    },
    {
      degree: "Higher Certificate in Information and Communication Technology",
      institution: "Cape Peninsula University of Technology",
      duration: "1 year",
      color: "border-brand-gold",
      image: "/lovable-uploads/17d7c7c1-43b2-44fe-ab68-ba7c36e3cc32.png",
      url: "https://drive.google.com/file/d/1PBBIxZK-Xo_4V46sonGI1NYxbpiumRXD/view?usp=drive_link"
    },
    {
      degree: "National Senior Certificate",
      institution: "Phandulwazi Agricultural High School",
      duration: "Completed 2019",
      color: "border-green-500",
      image: "/lovable-uploads/bc27678d-d782-456b-9652-3e9da96281e0.png"
    }
  ];
  
  // Sorting the certifications from newest to oldest
  const certifications = [
    {
      title: "Generative AI: Prompt Engineering Basics",
      organization: "Coursera",
      date: "May 2025",
      url: "https://coursera.org/share/f40dde152fbee8d3c71a02f34602c7cd"
    },
    {
      title: "Generative AI: Introduction and Applications",
      organization: "Coursera",
      date: "May 2025",
      url: "https://www.coursera.org/account/accomplishments/verify/TXU1FNCYPFAJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
    },
    {
      title: "Developing Applications with Google Cloud: Foundations",
      organization: "Google Cloud/Coursera",
      date: "April 2025",
      url: "https://coursera.org/share/a26c217c9532e7f0348b3190992ee73f"
    },
    {
      title: "Google Cloud Fundamentals: Core Infrastructure",
      organization: "Google Cloud/Coursera",
      date: "April 2025",
      url: "https://drive.google.com/file/d/1s0xS3UdKII2OQL1JtibcGfGUhGkIgf4h/view?usp=drive_link"
    },
    {
      title: "Introduction to Cloud Computing",
      organization: "Coursera",
      date: "March 2025",
      url: "https://coursera.org/share/81f0d707b7be33abeb230d2d97943861"
    },
    {
      title: "Verbal Communications and Presentation Skills",
      organization: "Coursera",
      date: "March 2025",
      url: "https://coursera.org/share/ee14cfef69784df7d2ef260e9c21de47"
    },
    {
      title: "Cloud Computing Foundations",
      organization: "Coursera",
      date: "Feb 2025",
      url: "https://coursera.org/share/eab4720363c92ecbb6436d2fec13285d"
    },
    {
      title: "Write Professional Emails in English",
      organization: "Coursera",
      date: "Feb 2025",
      url: "https://coursera.org/share/65e664d2cb4f68383468ad4df693c5c4"
    },
    {
      title: "Introduction to Networking and Cloud Computing",
      organization: "Microsoft/Coursera",
      date: "Feb 2025",
      url: "https://coursera.org/share/b66f80dbfe633b576d9f819a01e78c80"
    },
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
                    <h4 className="text-lg font-bold text-brand-dark dark:text-white text-brand-gold">
                      {edu.url ? (
                        <a 
                          href={edu.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-brand-red transition-colors"
                        >
                          {edu.degree}
                        </a>
                      ) : (
                        edu.degree
                      )}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">{edu.institution}</p>
                    <div className="flex items-center mt-2">
                      {edu.duration && <p className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>}
                      {edu.inProgress && <Badge className="ml-2 bg-brand-red">In Progress</Badge>}
                    </div>
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
