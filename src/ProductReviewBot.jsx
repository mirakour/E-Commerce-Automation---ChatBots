import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductReviewBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "agent", text: "Hi! I can help you with product reviews. What would you like to know?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful E~Commerce Shop product review assistant. Your responses should be intelligent, engaging, and insightful. You understand product trends, customer sentiment, and can simulate real reviews based on product types. When users ask about an item, respond as if referencing authentic customer experiences and highlight key product pros/cons."
            },
            ...messages.map(m => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text
            })),
            { role: "user", content: input }
          ]
        })
      });

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn’t find any reviews for that item.";

      setMessages(prev => [...prev, { sender: "agent", text: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: "agent", text: "Oops, something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        {/* Left Info Panel */}
        <div className="w-full md:w-1/2 space-y-8">
          <Link
            to="/product-review-bot"
            className="block bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition text-center"
          >
            <h1 className="text-3xl font-bold text-blue-400">Product Review Bot</h1>
            <p className="text-gray-300 mt-2">
              Ask about any product and get AI-powered review insights based on real trends.
            </p>
          </Link>

          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <h2 className="text-xl font-semibold text-blue-400 mb-1">Smart Review Insights</h2>
              <p className="text-gray-300">Summarizes customer sentiment and mimics real reviews with AI.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <h2 className="text-xl font-semibold text-blue-400 mb-1">Built with Prompt Engineering</h2>
              <p className="text-gray-300">Trained prompt helps simulate intelligent product review responses.</p>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h2 className="text-xl font-bold text-blue-400 mb-2">Tech Stack Used</h2>
            <p className="text-gray-300">
              React, Tailwind CSS, OpenAI API, React Router, Prompt Engineering
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h2 className="text-xl font-bold text-blue-400 mb-2">Sample Prompts</h2>
            <ul className="text-gray-300 list-disc list-inside space-y-1 text-center">
              <li>“What do people say about the LED light strip?”</li>
              <li>“Any review on wireless chargers?”</li>
              <li>“Is the mini blender worth buying?”</li>
            </ul>
          </div>

          {!showChat && (
            <div className="text-center">
              <button
                onClick={() => setShowChat(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm transition"
              >
                Try the Review Bot
              </button>
            </div>
          )}

          <div className="text-center mt-2">
            <Link
              to="/"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-600 transition"
            >
              Return Home
            </Link>
            <p className="text-gray-400 text-sm mt-2">
              Disclaimer: This is a demo experience powered by AI simulation.
            </p>
          </div>
        </div>

        {/* Right Side - Chat UI */}
        {showChat && (
          <div className="w-full md:w-1/2 bg-gray-900 p-4 rounded-lg shadow-lg" style={{ height: '700px' }}>
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto text-white mb-4 bg-gray-800 p-4 rounded space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`text-sm ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-1 ${
                      msg.sender === "user" ? "bg-blue-600 text-white" : "bg-green-600 text-white"
                    }`}>
                      {msg.sender === "user" ? "You" : "Agent"}
                    </span>
                    <p className="bg-gray-700 p-2 rounded inline-block max-w-xs whitespace-pre-wrap">
                      {msg.text}
                    </p>
                  </div>
                ))}
                {loading && <p className="text-gray-500 italic">Fetching review summary...</p>}
              </div>

              <div className="flex">
                <input
                  type="text"
                  placeholder="Ask about a product..."
                  className="flex-1 p-2 rounded-l bg-gray-700 text-white"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductReviewBot;