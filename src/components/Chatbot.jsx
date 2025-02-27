import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import axios from "axios";

const ChatbotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! Ask me anything." }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = {
        sender: "bot",
        text: response.data.choices?.[0]?.message?.content || "I couldn't process that.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: "Sorry, something went wrong. Please try again later." }]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {/* Chatbot Icon */}
      <motion.div
        onClick={toggleChat}
        className="w-14 h-14 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition duration-300"
        title="Chat with AI"
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaRobot size={28} />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-80 h-96 bg-white text-gray-800 shadow-xl rounded-lg p-4 mt-3 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="text-lg font-semibold border-b pb-2 flex justify-between">
              AI Chatbot
              <motion.button
                className="text-red-500 hover:text-red-600"
                onClick={toggleChat}
                whileHover={{ scale: 1.2 }}
              >
                X
              </motion.button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {loading && <p className="text-gray-500 text-sm">Thinking...</p>}
            </div>

            {/* Input Field */}
            <div className="flex items-center border-t pt-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 p-2 border rounded-l-lg outline-none"
              />
              <motion.button
                onClick={handleSend}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={loading}
              >
                Send
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatbotComponent;
