import React from 'react';

const FAQs = () => {
  const handleClose = () => {
    window.close();
  };

  return (
    <section className="bg-black text-white min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-2">Frequently Asked Questions (FAQs)</h1>
        <p className="text-center text-gray-300 mb-8">
          Explore categorized FAQs for each chatbot in the E~Commerce Automation Suite. These answers help clarify common questions for buyers, sellers, testers, and engineers.
        </p>

        <div className="bg-gray-900 rounded-lg p-6 shadow-lg space-y-8">

          {/* Buyer Bot FAQs */}
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-3">🛍️ Buyer Support Bot</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Q:</strong> What can the Buyer Bot help me with?  
                <br /><strong>A:</strong> Order status, return policies, refund guidance, and FAQs about buying experience.
              </li>
              <li><strong>Q:</strong> Can I get real-time tracking updates?  
                <br /><strong>A:</strong> Not yet—currently the bot simulates order status using mock API responses.
              </li>
              <li><strong>Q:</strong> What happens if I ask a non-order question?  
                <br /><strong>A:</strong> The bot uses OpenAI’s API to generate helpful responses using a trained prompt.
              </li>
              <li><strong>Q:</strong> How do I report a missing or delayed order?  
                <br /><strong>A:</strong> The bot will guide you through simulated steps to contact support or check tracking info.
              </li>
            </ul>
          </div>

          {/* Seller Bot FAQs */}
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-3">🏪 Seller Support Bot</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Q:</strong> What types of issues can the Seller Bot solve?  
                <br /><strong>A:</strong> Inventory updates, listing errors, policy explanations, and simulated fulfillment logic.
              </li>
              <li><strong>Q:</strong> Is the inventory sync based on a real API?  
                <br /><strong>A:</strong> No, it's a simulated interaction based on TikTok Shop’s logic. API integration coming soon.
              </li>
              <li><strong>Q:</strong> Can the bot explain why a product was removed?  
                <br /><strong>A:</strong> Yes, it can simulate policy checks and walk through typical listing violation cases.
              </li>
              <li><strong>Q:</strong> How accurate are the seller policy answers?  
                <br /><strong>A:</strong> The bot responds using a trained prompt that reflects real seller documentation structure.
              </li>
            </ul>
          </div>

          {/* Product Review Bot FAQs */}
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-3">⭐ Product Review Bot</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Q:</strong> Where does the review data come from?  
                <br /><strong>A:</strong> All review responses are AI-generated to simulate sentiment analysis and product summaries.
              </li>
              <li><strong>Q:</strong> Can I search reviews by product name?  
                <br /><strong>A:</strong> Yes! Ask “What do people say about [product]?” to get a natural response.
              </li>
              <li><strong>Q:</strong> Does it pull reviews from real platforms?  
                <br /><strong>A:</strong> Not yet. It mimics user feedback using language models and fine-tuned prompts.
              </li>
              <li><strong>Q:</strong> Will it tell me the pros and cons?  
                <br /><strong>A:</strong> Yes, the bot is structured to highlight top positive and negative sentiments for each product.
              </li>
            </ul>
          </div>

          {/* Prompt Playground FAQs */}
          <div>
            <h2 className="text-2xl font-bold text-blue-300 mb-3">🧠 Prompt Playground</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Q:</strong> What is the Prompt Playground used for?  
                <br /><strong>A:</strong> It’s a live testing tool for developers, engineers, and designers to refine prompts in real-time.
              </li>
              <li><strong>Q:</strong> Can I see OpenAI’s exact response?  
                <br /><strong>A:</strong> Yes. Once you submit a prompt, the API response is shown immediately below the input box.
              </li>
              <li><strong>Q:</strong> Does it store my prompts or data?  
                <br /><strong>A:</strong> No. The Playground is stateless and only keeps input/output in the session for testing.
              </li>
              <li><strong>Q:</strong> Can I use this with other LLM providers?  
                <br /><strong>A:</strong> Right now, it is optimized for OpenAI’s GPT models only.
              </li>
            </ul>
          </div>
        </div>

        {/* Close Button */}
        <div className="text-center mt-10">
          <button
            onClick={handleClose}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;