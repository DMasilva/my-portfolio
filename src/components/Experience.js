import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "IDC Student Supervisor",
      company: "Instruction Design Center, IT Division",
      location: "NDSU, ND",
      period: "Nov. 2024 -- Present",
      responsibilities: [
        "Supervise a team of student employees, ensuring tasks are completed efficiently",
        "Provide technical support and troubleshooting for multimedia technologies",
        "Train faculty, staff, and students on various learning technologies",
        "Manage FreshService ticketing system, resolving technical issues efficiently"
      ]
    },
    {
      title: "Grad Student Technology Assistant",
      company: "Instruction Design Center, IT Division",
      location: "NDSU, ND",
      period: "Aug. 2023 -- Oct. 2024",
      responsibilities: [
        "Assisted faculty and staff in integrating technology into teaching",
        "Provided LMS (Blackboard) support and troubleshooting",
        "Created tutorial videos and training resources for academic software",
        "Monitored IT system functionality and escalated complex issues"
      ]
    },
    {
      title: "IT Assistant",
      company: "Solar Rays Energy Sacco",
      location: "Nairobi, KE",
      period: "Dec. 2020 -- July 2022",
      responsibilities: [
        "Provided technical support to end-users, resolving hardware and software issues",
        "Managed and monitored IT infrastructure, including servers and network devices",
        "Assisted in deploying software and managing updates across systems"
      ]
    }
  ];

  return (
    <section>
      <h2 className="section-title">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="relative pl-6 pb-6 last:pb-0"
          >
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-transparent"></div>
            <div className="absolute -left-1 top-2 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-white"></div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                  <p className="text-blue-600">{exp.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="text-gray-500">{exp.location}</span>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 