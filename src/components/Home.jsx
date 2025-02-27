// Import required components and assets
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon for button
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // LinkedIn & GitHub icons
import me from '../assets/me.png'; // Your profile photo
import { Link } from "react-router-dom"; // ✅ Correct import placement

const Home = () => {
  return (
    // Main container - full screen with dark background
    <div name="home" className="h-screen w-full bg-[#0a192f] flex items-center relative">
      {/* Content wrapper - centers content and handles responsive layout */}
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-6 gap-8 md:gap-16">
        
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          {/* Main headline */}
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Hi, I'm Sama.
          </h2>
          {/* Brief introduction */}
          <p className="text-gray-400 py-4 max-w-md">
            I'm a Computer Science major at Kean University, passionate about AI, technology, and problem-solving.  
            As a McNair Scholar and IT Specialist, I thrive on learning, innovation, and helping others through technology.
          </p>
          {/* About Me button with hover effect */}
          <div className="flex justify-center md:justify-start">
            <Link
              to="/about"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right side - Profile image with spacing */}
        <div className="flex justify-center">
          <img
            src={me}
            alt="Sama's profile"
            className="rounded-full w-40 md:w-60 shadow-lg shadow-gray-800"
          />
        </div>
      </div>

      {/* Social Icons - LinkedIn & GitHub */}
      <div className="absolute bottom-6 left-6 flex space-x-4">
        <a
          href="https://www.linkedin.com/in/noorul-sama-sahel-975586246/" // Replace with your LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition duration-300"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Sahelns" // Replace with your GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition duration-300"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default Home;