import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BuyerBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "agent", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const extractOrderNumber = (text) => {
    const match = text.match(/order\s*(?:number\s*)?#?(\d{5,})/i);
    return match ? match[1] : null;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const orderNumber = extractOrderNumber(input);
    if (orderNumber) {
      const mockResponse = {
        order_id: orderNumber,
        status: "Shipped",
        tracking_number: "TRK987654321",
        courier: "J&T Express",
        estimated_delivery: "2025-05-09",
      };

      const reply = `📦 Order #${mockResponse.order_id} is currently *${mockResponse.status}* via ${mockResponse.courier}. 
Tracking Number: ${mockResponse.tracking_number}  
Estimated Delivery: ${mockResponse.estimated_delivery}`;

      setTimeout(() => {
        setMessages(prev => [...prev, { sender: "agent", text: reply }]);
        setLoading(false);
      }, 800);
      return;
    }

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful E~Commerce Shop buyer support assistant and your response should be passionate but very intelligent. When inquiry is receive, you will research the most valuable and appropriate answer. You will look up all E~Commerce resources and data to provide the most accurate answer. You answer buyer questions clearly, simulating order tracking, return policies, and refund guidance as if you have access to real data." },
            ...messages.map(m => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text
            })),
            { role: "user", content: input }
          ]
        })
      });

      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "Sorry, I couldn’t understand that.";
      setMessages(prev => [...prev, { sender: "agent", text: botReply }]);
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
            to="/buyer-bot"
            className="block bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition text-center"
          >
            <h1 className="text-3xl font-bold text-blue-400">Buyer Support Bot</h1>
            <p className="text-gray-300 mt-2">
              Your AI-powered shopping assistant. Get real-time answers on orders, product info, and common issues — instantly.
            </p>
          </Link>

          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <h2 className="text-xl font-semibold text-blue-400 mb-1">24/7 Real-Time Support</h2>
              <p className="text-gray-300">Instant answers for tracking orders, product details, return policies, and more.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <h2 className="text-xl font-semibold text-blue-400 mb-1">Built with LLM Intelligence</h2>
              <p className="text-gray-300">Uses GPT-based AI for natural language understanding and helpful replies.</p>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h2 className="text-xl font-bold text-blue-400 mb-2">Tech Stack Used</h2>
            <p className="text-gray-300">
              React, Tailwind CSS, OpenAI API (ChatGPT-4), React Router, Prompt Engineering
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-blue-400 mb-2 text-center">Prompt Engineering Showcase</h2>
            <ul className="text-gray-300 list-disc list-inside space-y-1 text-center">
              <li>"Where’s my order?" → [Returns delivery status & ETA]</li>
              <li>"Do you have size M?" → [Parses product data to respond]</li>
              <li>"I want to return this" → [Returns return policy + steps]</li>
            </ul>
          </div>

          {!showChat && (
            <div className="text-center">
              <button
                onClick={() => setShowChat(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm transition"
              >
                Try the Chatbot
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
              Disclaimer: This is a prototype. Chatbot functionality is limited in demo.
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
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-green-600 text-white"
                    }`}>
                      {msg.sender === "user" ? "You" : "Agent"}
                    </span>
                    <p className="bg-gray-700 p-2 rounded inline-block max-w-xs whitespace-pre-wrap">
                      {msg.text}
                    </p>
                  </div>
                ))}
                {loading && <p className="text-gray-500 italic">Agent is typing...</p>}
              </div>

              <div className="flex">
                <input
                  type="text"
                  placeholder="Type your message..."
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

export default BuyerBot;




