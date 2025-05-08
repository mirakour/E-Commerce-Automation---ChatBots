import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const BuyerTestPrompts = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const prompts = [
    {
      category: "Order Status & Tracking",
      items: [
        "Where is my order?",
        "Can you check the status of my order #123456?",
        "My order hasn't arrived yet. What should I do?",
        "When will my package be delivered?"
      ]
    },
    {
      category: "Returns & Refunds",
      items: [
        "How do I return an item I bought last week?",
        "Can I return a product from the UK?",
        "What's the refund policy for electronics?",
        "I received a damaged item. Can I get a refund?"
      ]
    },
    {
      category: "Shipping & Delivery",
      items: [
        "Is my order eligible for free shipping?",
        "How much does expedited shipping cost?",
        "Do you ship to international addresses?",
        "Why was my shipping fee so high?"
      ]
    },
    {
      category: "General Inquiries",
      items: [
        "How do I contact customer support?",
        "What payment methods do you accept?",
        "Do you offer gift wrapping?",
        "Can I change my delivery address after placing an order?"
      ]
    }
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 sec
  };

  return (
    <section className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-right text-sm text-gray-400 mb-4">Revised: 5/2/2025</div>
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">🛍️ Buyer Test Prompts</h1>
        <p className="text-center text-gray-300 mb-8">
          Use the following sample prompts to test the Buyer Support Bot. Each prompt is grouped by theme. Click the copy icon to copy a question.
        </p>

        <div className="bg-gray-900 p-6 rounded-lg shadow space-y-6">
          {prompts.map((section, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-lg font-semibold text-blue-300 mb-2">{section.category}</h2>
              <ul className="space-y-2">
                {section.items.map((item, index) => {
                  const globalIndex = `${catIndex}-${index}`;
                  return (
                    <li
                      key={index}
                      className="bg-gray-800 p-3 rounded flex justify-between items-center"
                    >
                      <span>{item}</span>
                      <button
                        onClick={() => handleCopy(item, globalIndex)}
                        className="text-gray-300 hover:text-white text-sm ml-4"
                      >
                        {copiedIndex === globalIndex ? "Copied!" : <FaCopy />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => window.close()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuyerTestPrompts;