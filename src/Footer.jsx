import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-8 text-sm">
      <p className="mb-2">
        E~Commerce Automation for Developers. Built by Kourtney Miranda.
      </p>

      <p className="max-w-3xl mx-auto text-xs text-gray-400 px-4 leading-relaxed mb-4">
        <strong>Disclaimer:</strong> This website is an independent educational project created for learning, research, and AI/LLM simulation purposes only. 
        It is not affiliated with, endorsed by, or connected to any E-commerce company. 
        All trademarks, logos, and brand names used are for simulation purposes only. 
        No proprietary data is collected or used. This site is intended solely for demonstration and portfolio purposes.
      </p>

      <div className="space-x-4">
        <a
          href="https://kourtneymiranda.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Portfolio
        </a>
        <a
          href="https://github.com/mirakour"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kourtneymiranda"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;