import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const ProductReviewTestPrompts = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const promptCategories = [
    {
      title: "⭐ General Product Inquiries",
      prompts: [
        "What do customers say about the LED light strip?",
        "Any reviews on the mini portable blender?",
        "How does the wireless charger perform?",
        "Is the foldable treadmill worth it?",
      ],
    },
    {
      title: "🔍 Feature-Specific Questions",
      prompts: [
        "Do users find the noise level of this vacuum acceptable?",
        "How long does the battery last according to reviews?",
        "Are the camera features praised by buyers?",
        "What are common complaints about this headset?",
      ],
    },
    {
      title: "🎯 Purchase Decision Support",
      prompts: [
        "Should I buy this smartwatch or wait for a newer version?",
        "What are the pros and cons of the air fryer?",
        "Do reviews suggest the product matches the photos?",
        "How durable is this yoga mat based on user feedback?",
      ],
    },
    {
      title: "💬 Realistic Feedback Simulation",
      prompts: [
        "Generate a positive review for a USB-C hub.",
        "Simulate a 3-star review for a mini projector.",
        "Give me a customer-style complaint about shipping delays.",
        "Write a product review summary from 20 buyers.",
      ],
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-right text-sm text-gray-400 mb-4">Revised: 5/2/2025</div>
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">🧪 Product Review Test Prompts</h1>
        <p className="text-center text-gray-300 mb-8">
          Use these prompts to test the Product Review Bot. Each prompt is designed to simulate real review scenarios or user questions. Click the copy icon to copy any prompt.
        </p>

        <div className="bg-gray-900 p-6 rounded-lg shadow space-y-6">
          {promptCategories.map((category, i) => (
            <div key={i}>
              <h2 className="text-lg font-semibold text-blue-300 mb-2">{category.title}</h2>
              <ul className="space-y-2">
                {category.prompts.map((prompt, j) => (
                  <li
                    key={j}
                    className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded-md"
                  >
                    <span>{prompt}</span>
                    <button
                      onClick={() => handleCopy(prompt, `${i}-${j}`)}
                      className="text-sm text-blue-400 hover:text-blue-200 transition"
                    >
                      {copiedIndex === `${i}-${j}` ? "Copied!" : <FaCopy />}
                    </button>
                  </li>
                ))}
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

export default ProductReviewTestPrompts;