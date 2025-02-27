import React from "react";

const About = () => {
  return (
    // Main container with full width/height and background
    <div name="about" id="about" className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center justify-center px-4">
      {/* Content container with a cyan background */}
      <div className="py-12 px-6 md:py-16 md:px-12 rounded-lg bg-cyan-800 text-center max-w-2xl shadow-lg shadow-gray-900">
        {/* Title */}
        <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block mb-6">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg leading-relaxed">
          Hi, I'm <span className="font-bold">Sama</span>! I'm a{" "}
          <span className="font-bold">Computer Science major at Kean University</span> with a passion for{" "}
          <span className="font-bold">AI, automation, and software development</span>.  
          I currently work as a <span className="font-bold">Technical Specialist at Kean</span> and conduct{" "}
          <span className="font-bold">AI-driven research</span>.  
          My expertise includes{" "}
          <span className="font-bold">Python, JavaScript, React, Web Scraping, and Machine Learning</span>.  
          I enjoy building <span className="font-bold">efficient web applications</span>, automating workflows, and leveraging AI to solve complex problems.
        </p>

        {/* Resume Download Button */}
        <div className="mt-6">
          <a 
            href="/Sama_Resume.pdf" // Replace with the actual path to your resume file
            download="Sama_Resume.pdf"
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-md shadow-md hover:scale-105 transform transition duration-300"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
