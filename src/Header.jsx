import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [productsHovered, setProductsHovered] = useState(false);
  const [docsHovered, setDocsHovered] = useState(false);
  const [supportHovered, setSupportHovered] = useState(false); // Added for Support

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md relative z-50">
      <Link to="/" className="flex items-center space-x-2">
        <h1 className="text-xl font-bold text-black">E~Commerce Automation</h1>
        <span className="text-sm bg-black text-white px-2 py-0.5 rounded align-middle leading-tight relative top-[1px]">
          for Developers
        </span>
      </Link>

      <nav className="flex items-center space-x-6 text-black font-medium text-large relative overflow-visible z-50">
        {/* PRODUCTS DROPDOWN */}
        <div
          className="relative"
          onMouseEnter={() => setProductsHovered(true)}
          onMouseLeave={() => setProductsHovered(false)}
        >
          <button className="text-lg font-semibold hover:underline">Products</button>

          <div
            className={`absolute top-full left-0 w-56 bg-white border border-gray-400 rounded shadow-lg z-50 ${
              productsHovered ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
            } transition-opacity duration-150`}
          >
            <Link to="/buyer-bot" className="block px-4 py-3 text-blue-600 font-semibold hover:bg-gray-400 border-b border-gray-500">Buyer Chatbot</Link>
            <Link to="/seller-bot" className="block px-4 py-3 text-blue-600 font-semibold hover:bg-gray-400 border-b border-gray-500">Seller Chatbot</Link>
            <Link to="/product-review-bot" className="block px-4 py-3 text-blue-600 font-semibold hover:bg-gray-400 border-b border-gray-500">Product Review Bot</Link>
            <Link to="/prompt-playground" className="block px-4 py-3 text-blue-600 font-semibold hover:bg-gray-400">Prompt Playground</Link>
          </div>
        </div>

        {/* DOCS DROPDOWN */}
        <div
          className="relative"
          onMouseEnter={() => setDocsHovered(true)}
          onMouseLeave={() => setDocsHovered(false)}
        >
          <button className="text-lg font-semibold hover:underline">Docs</button>

          <div
            className={`absolute top-full right-0 min-w-[18rem] w-auto bg-white border border-gray-400 rounded shadow-lg z-50 ${
              docsHovered ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
            } transition-opacity duration-150`}
          >
            {/* Section 1: Planning */}
            <div className="px-4 py-2 font-bold text-gray-600">Product Planning</div>
            <a href="/product-charter" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-400 border-b border-gray-300">Product Charter</a>
            <a href="/product-requirements" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-400 border-b border-gray-400">Product Requirements</a>

            {/* Section 2: Prompt Test Files */}
            <div className="px-4 py-2 font-bold text-gray-600 border-t border-gray-300">Test Prompts</div>
            <a href="/buyer-test-prompts" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-400 border-b border-gray-300">Buyer Test Prompts</a>
            <a href="/seller-test-prompts" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-400 border-b border-gray-300">Seller Test Prompts</a>
            <a href="/product-review-test-prompts" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-400 border-b border-gray-300">Product Review Test Prompts</a>
            <a href="/prompt-playground-test-prompts" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-400">Prompt Playground Test Prompts</a>
          </div>
        </div>

        {/* SUPPORT DROPDOWN */}
        <div
          className="relative"
          onMouseEnter={() => setSupportHovered(true)}
          onMouseLeave={() => setSupportHovered(false)}
        >
          <button className="text-lg font-semibold hover:underline">Support</button>

          <div
            className={`absolute top-full right-0 w-48 bg-white border border-gray-400 rounded shadow-lg z-50 ${
              supportHovered ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
            } transition-opacity duration-150`}
          >
            <a
              href="/faqs"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-400 border-b border-gray-300"
            >
              FAQs
            </a>
            <a
              href="/contact-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-blue-600 font-semibold hover:bg-gray-400"
            >
              Contact Developer
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;