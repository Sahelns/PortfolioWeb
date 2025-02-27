import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    image: project1,
    title: 'Demo Project 1',
    description: 'This is a short description of the project. It showcases various features and functionalities.',
    demoLink: '#',
    codeLink: '#',
  },
  {
    image: project2,
    title: 'Demo Project 2',
    description: 'A brief explanation of this project goes here. It highlights key aspects and technologies used.',
    demoLink: '#',
    codeLink: '#',
  },
  {
    image: project3,
    title: 'Demo Project 3',
    description: 'This project demonstrates a cool feature. Click below to see the demo or check the code.',
    demoLink: '#',
    codeLink: '#',
  },
];

const Works = () => {
  return (
    <section className="w-full md:h-screen text-gray-300 bg-[#0a192f] pt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col justify-center w-full h-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block pb-2">Projects</h2>
          <p className="mt-4 text-lg text-gray-400">Check out some of my most recent projects</p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{project.description}</p>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-4">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 rounded-md bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition">
                      Demo
                    </button>
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <button className="px-4 py-2 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-700 transition">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
