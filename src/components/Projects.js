import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Hybrid Approach to Software Testing",
      period: "May 2024 -- Present",
      tech: ["Java", "Maven", "Python", "GPT-3"],
      description: "Conducting master's research focused on integrating Large Language Models (LLMs) with traditional software testing methods.",
      type: "Research"
    },
    {
      title: "Zoom Phone Migration Training",
      period: "Jun 2024",
      tech: ["Zoom", "Training", "Communication"],
      description: "Led training sessions for faculty and staff at NDSU on Zoom Phone migration, ensuring a smooth transition.",
      type: "Training"
    },
    {
      title: "Blackboard Ultra Migration",
      period: "Ongoing",
      tech: ["Blackboard", "Training", "Course Update"],
      description: "Provide training to students on the new Ultra interface and update courses migrated from Blackboard Original.",
      type: "Training"
    },
    {
      title: "Theater Tours and Travels",
      period: "Feb 2024 -- Aug 2024",
      tech: ["Java", "React", "JavaScript", "SQL", "Tailwind CSS"],
      description: "Developed a dynamic tours and travel website for booking and managing tours and travel amenities.",
      type: "Web App"
    },
    {
      title: "Moringa Application Portal",
      period: "Oct 2022 -- Jun 2023",
      tech: ["JavaScript", "React", "Tailwind CSS", "Ruby on Rails", "PostgreSQL"],
      description: "Built a full-stack web app to manage student applications for Moringa Institute.",
      type: "Web App"
    }
  ];

  const getTypeColor = (type) => {
    const colors = {
      "Research": "bg-purple-100 text-purple-800",
      "Training": "bg-green-100 text-green-800",
      "Web App": "bg-blue-100 text-blue-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <section>
      <h2 className="section-title">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{project.period}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium
                      hover:bg-gray-200 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 