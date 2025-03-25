import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Academic Technologies",
      skills: ["Blackboard Ultra", "Blackboard Original", "Zoom", "Canvas"],
      color: "blue"
    },
    {
      title: "Editing & Teaching Software",
      skills: ["Camtasia", "Adobe Suite", "Yuja", "PointSolutions"],
      color: "indigo"
    },
    {
      title: "Assistive Technologies",
      skills: ["JAWS", "NVDA", "VoiceOver", "ZoomText", "Read & Writes"],
      color: "purple"
    },
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "SQL", "JavaScript", "HTML/CSS", "Ruby"],
      color: "green"
    },
    {
      title: "Frameworks",
      skills: ["React", "Tailwind CSS", "Bootstrap", "Node.js", "Ruby on Rails", "JUnit", "WordPress", "FastAPI"],
      color: "red"
    },
    {
      title: "Developer Tools",
      skills: ["Git", "Docker", "VS Code", "Visual Studio", "IntelliJ", "Eclipse"],
      color: "yellow"
    }
  ];

  const getGradient = (color) => {
    const gradients = {
      blue: "from-blue-500 to-blue-600",
      indigo: "from-indigo-500 to-indigo-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      red: "from-red-500 to-red-600",
      yellow: "from-yellow-500 to-yellow-600"
    };
    return gradients[color] || "from-gray-500 to-gray-600";
  };

  return (
    <section>
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className={`w-12 h-12 rounded-lg mb-4 bg-gradient-to-br ${getGradient(category.color)} flex items-center justify-center`}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getGradient(category.color)} text-white
                    transform hover:scale-105 transition-transform cursor-default`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 