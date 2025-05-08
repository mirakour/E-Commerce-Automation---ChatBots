import React from 'react';
import { Link } from 'react-router-dom';

const ExploreProducts = () => {
  const products = [
    {
      title: 'Buyer Support Bot',
      description: 'Handles order tracking, returns, and buyer FAQs using LLM and E~Commerce Shop logic.',
      path: '/buyer-bot',
      subtitle: 'Perfect for Customer Experience Teams',
      details: [
        'Simulates order tracking responses',
        'Understands return/refund questions',
        'Uses prompt engineering to clarify buyer concerns',
        'Fast and friendly GPT-powered replies',
        'Ideal for ecommerce storefronts',
      ],
    },
    {
      title: 'Seller Support Bot',
      description: 'Helps merchants manage listings, fulfillment, policies, and API automations.',
      path: '/seller-bot',
      subtitle: 'Your Seller-Side Assistant',
      details: [
        'Guides sellers through listing workflows',
        'Answers onboarding and policy questions',
        'Simulates E~Commerce API-based support logic',
        'Automates seller education',
        'Reduces manual ticket volume',
      ],
    },
    {
      title: 'Product Review Bot',
      description: 'Summarizes customer reviews, highlights pros/cons, and simulates real user feedback.',
      path: '/product-review-bot',
      subtitle: 'Review Analyzer Powered by LLM',
      details: [
        'Mimics authentic customer reviews',
        'Summarizes key product sentiment',
        'Helpful for buyer confidence',
        'Built with prompt tuning for realism',
        'Works great in product pages or chats',
      ],
    },
    {
      title: 'Prompt Playground',
      description: 'Live prompt testing tool for engineers and designers to prototype with OpenAI.',
      path: '/prompt-playground',
      subtitle: 'Playground for Prompt Engineers',
      details: [
        'Enter any prompt and test the response',
        'Great for prompt iteration or demos',
        'Immediate feedback for fine-tuning',
        'Supports role instructions + chat history',
        'Perfect for LLM devs & CX designers',
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-12">Explore All Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Box 1: Title + Description */}
              <div className="bg-gray-800 w-full p-4 rounded-t-lg text-center h-[200px]">
                <h2 className="text-xl font-bold text-blue-300 mb-2">{product.title}</h2>
                <br></br>
                <p className="text-gray-300 text-sm mb-2">{product.description}</p>
              </div>

              {/* Box 2: Details List */}
              <div className="bg-gray-700 w-full p-4 rounded-b-lg text-center h-[280px]">
                <h3 className="text-sm font-semibold text-white mb-1">{product.subtitle}</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  {product.details.map((line, i) => (
                    <li key={i}>• {line}</li>
                  ))}
                </ul>
              </div>

              {/* Try Chatbot Button */}
              <Link
                to={product.path}
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
              >
                Try the Chatbot
              </Link>
            </div>
          ))}
        </div>

        {/* Return Home */}
        <div className="text-center">
          <Link
            to="/"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreProducts;