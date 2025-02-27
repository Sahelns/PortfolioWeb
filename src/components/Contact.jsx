import React from 'react';

const Contact = () => {
  return (
    // Main container with full height, centered content, and responsive padding
    <div name="contact" className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center px-4">
      {/* Form wrapper with max width & responsive layout */}
      <div className="flex flex-col max-w-lg w-full bg-[#112240] p-6 md:p-8 rounded-lg shadow-lg shadow-gray-900">
        {/* Header section */}
        <div className="pb-6 text-center">
          <h2 className="text-4xl font-bold text-gray-300 border-b-4 border-cyan-500 inline-block pb-2">
            Contact
          </h2>
          <p className="text-gray-400 mt-3">Send me a message</p>
        </div>

        {/* Form inputs with consistent styling */}
        <form className="flex flex-col">
          <input
            className="bg-[#ccd6f6] text-gray-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 bg-[#ccd6f6] text-gray-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] text-gray-900 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            name="message"
            rows="6"
            placeholder="Message"
          ></textarea>

          {/* Submit Button */}
          <button className="mt-6 text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-md shadow-md hover:scale-105 transform transition duration-300">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
