import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const PromptPlaygroundTestPrompts = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const promptCategories = [
    {
      title: "🎨 Creative Prompts",
      prompts: [
        "Generate a product description for a smart garden system.",
        "Write a catchy slogan for an eco-friendly phone case.",
        "Invent a fictional customer review for a flying car prototype.",
        "Describe a futuristic vending machine in a sci-fi tone.",
      ],
    },
    {
      title: "🛠️ Functional Testing",
      prompts: [
        "Summarize the benefits of integrating LLMs into a helpdesk.",
        "List 3 pros and cons of using AI in customer service.",
        "What’s the difference between GPT-3.5 and GPT-4?",
        "Explain prompt injection with a simple analogy.",
      ],
    },
    {
      title: "💬 Tone & Personality Experiments",
      prompts: [
        "Respond as a cheerful travel advisor recommending Rome.",
        "Answer like a sarcastic chef reviewing instant noodles.",
        "Explain AI like you're talking to a 5-year-old.",
        "Rewrite this in a Shakespearean tone: 'Where is my refund?'",
      ],
    },
    {
      title: "🧠 Meta Prompt Engineering",
      prompts: [
        "Design a system prompt that prevents the AI from lying.",
        "Create a prompt to simulate order tracking without APIs.",
        "Write a zero-shot prompt for summarizing support chats.",
        "What’s a good instruction to simulate empathy in responses?",
      ],
    },
  ];

  return (
    <section className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-right text-sm text-gray-400 mb-4">Revision: 5/2/2025</div>
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">🧪 Prompt Playground Test Prompts</h1>
        <p className="text-center text-gray-300 mb-8">
          These prompts are curated to help you experiment with tone, behavior, logic, and creative LLM capabilities inside the Prompt Playground.
          Click the copy icon to try them out easily.
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

export default PromptPlaygroundTestPrompts;