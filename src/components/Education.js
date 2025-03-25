import React from 'react';

const Education = () => {
  const educationData = [
    {
      school: "North Dakota State University",
      location: "Fargo, ND",
      degree: "Masters of Computer Science",
      period: "Aug. 2023 -- Present",
      highlights: ["Focus on Software Engineering", "Research in AI/ML Testing"]
    },
    {
      school: "Technical University of Kenya",
      location: "Nairobi, KE",
      degree: "Bachelors of Science, Information Science",
      period: "Sep. 2016 -- Nov. 2020",
      highlights: ["Information Systems", "Database Management"]
    },
    {
      school: "Moringa School and Flatiron",
      location: "Nairobi, KE",
      degree: "Certificate in Software Development",
      period: "Nov. 2022 -- Jun. 2023",
      highlights: ["Full Stack Development", "Modern Web Technologies"]
    }
  ];

  return (
    <section>
      <h2 className="section-title">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className="relative pl-4 border-l-2 border-blue-500 hover:border-blue-600 transition-colors"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="mb-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-gray-800">{edu.school}</h3>
                <span className="text-sm text-gray-500">{edu.location}</span>
              </div>
              <div className="flex justify-between items-start mt-1">
                <p className="text-blue-600 font-medium">{edu.degree}</p>
                <span className="text-sm text-gray-500">{edu.period}</span>
              </div>
            </div>
            <ul className="mt-2 space-y-1">
              {edu.highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 