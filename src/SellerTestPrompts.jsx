import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const SellerTestPrompts = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const promptCategories = [
    {
      title: "🛍️ Listing & Product Info",
      prompts: [
        "How do I add a new product to my shop?",
        "Why was my listing removed from the platform?",
        "Can I edit a product’s title and description after publishing?",
        "How to improve product visibility in search results?",
      ],
    },
    {
      title: "📦 Inventory & Fulfillment",
      prompts: [
        "How do I update inventory quantity for my items?",
        "Can I fulfill orders manually?",
        "What happens when an item is out of stock?",
        "Do I need to enter tracking info after shipping?",
      ],
    },
    {
      title: "💰 Pricing & Discounts",
      prompts: [
        "How do I apply a discount to a product?",
        "What are pricing rules for bundles?",
        "How can I run a promotional campaign?",
      ],
    },
    {
      title: "📊 Reports & Metrics",
      prompts: [
        "Where can I view sales performance?",
        "How do I track conversion rate on product pages?",
        "Can I export my transaction history?",
      ],
    },
    {
      title: "📃 Policies & Compliance",
      prompts: [
        "What are the prohibited product guidelines?",
        "How do I appeal a policy violation?",
        "What’s the return window for buyers?",
      ],
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-right text-sm text-gray-400 mb-4">Revised: 5/2/2025</div>
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">🧪 Seller Test Prompts</h1>
        <p className="text-center text-gray-300 mb-8">
          Use the following prompts to test the Seller Support Bot. Each section is grouped by function. Click the icon to copy a prompt.
        </p>

        <div className="bg-gray-900 p-6 rounded-lg shadow space-y-6">
          {promptCategories.map((category, i) => (
            <div key={i}>
              <h2 className="text-lg font-semibold text-blue-300 mb-2">{category.title}</h2>
              <ul className="space-y-2">
                {category.prompts.map((prompt, j) => {
                  const globalIndex = `${i}-${j}`;
                  return (
                    <li
                      key={j}
                      className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded-md"
                    >
                      <span>{prompt}</span>
                      <button
                        onClick={() => handleCopy(prompt, globalIndex)}
                        className="text-sm text-blue-400 hover:text-blue-200 transition"
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

export default SellerTestPrompts;