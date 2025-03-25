import React from 'react';

const Certifications = () => {
  const additionalSkills = [
    {
      icon: "💼",
      skill: "Customer Service and Technical Training",
      description: "Extensive experience in providing high-quality customer service and technical support"
    },
    {
      icon: "👥",
      skill: "Academic Environment Support",
      description: "Proven track record of supporting faculty and staff in educational settings"
    },
    {
      icon: "🗣️",
      skill: "Communication Skills",
      description: "Strong ability to communicate effectively with both technical and non-technical users"
    }
  ];

  return (
    <section>
      <h2 className="section-title">Additional Skills</h2>
      <div className="space-y-6">
        {additionalSkills.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300
              transform hover:-translate-y-1"
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.skill}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
            <div className="mt-4 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications; 