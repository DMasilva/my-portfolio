import React from 'react';

const Internships = () => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold border-b-2 border-slate-800 mb-3">Internships</h2>
      
      <div className="mb-4">
        <div className="flex justify-between">
          <h3 className="font-bold">Full Stack Developer Intern</h3>
          <span>Mar. 2025 -- Present</span>
        </div>
        <div className="text-sm italic mb-1">Pavewise Pro, Fargo, ND</div>
        <ul className="list-disc pl-5 text-sm">
          <li>Write and implement efficient code in TypeScript using React for frontend development</li>
          <li>Support back-end development using Ruby on Rails</li>
          <li>Write tests using various frameworks to ensure high-quality software</li>
          <li>Proactively debug and fix issues that arise in the software</li>
        </ul>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between">
          <h3 className="font-bold">Front-end Web Developer Intern</h3>
          <span>Feb. 2023 -- Aug. 2023</span>
        </div>
        <div className="text-sm italic mb-1">TIENDA Logistics, Nairobi, KE</div>
        <ul className="list-disc pl-5 text-sm">
          <li>Developed and optimized user interfaces using HTML, CSS, JavaScript, and React</li>
          <li>Implemented responsive design techniques for various devices</li>
          <li>Conducted testing and debugging for cross-browser compatibility</li>
        </ul>
      </div>
      
      <div>
        <div className="flex justify-between">
          <h3 className="font-bold">IT Intern</h3>
          <span>May 2019 -- Oct 2019</span>
        </div>
        <div className="text-sm italic mb-1">KUSCCO Ltd., Nairobi, KE</div>
        <ul className="list-disc pl-5 text-sm">
          <li>Worked on network configuration and troubleshooting</li>
          <li>Assisted in troubleshooting software systems and resolving technical issues</li>
          <li>Documented IT procedures and implemented software updates</li>
        </ul>
      </div>
    </section>
  );
};

export default Internships; 