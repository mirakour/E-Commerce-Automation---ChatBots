import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SellerBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "agent", text: "Hello! I’m your Seller Support Assistant. How can I help with your store today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulated static response
    if (input.toLowerCase().includes("how do i update inventory")) {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            sender: "agent",
            text:
              "To update your inventory:\n1. Log into Seller Center\n2. Go to 'Product Management'\n3. Edit stock levels\n4. Click Save.",
          },
        ]);
        setLoading(false);
      }, 1000);
      return;
    }

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
                "You are a helpful E~Commerce Shop seller support assistant that answers questions about listing products, managing inventory, tracking fulfillment, and understanding policies. You are passionate but very intelligent responding to inquiries. You will look up and research Seller's inquiry from E~Coomerce's Seller policy and documentation and provide the most accurate and helpful information to client.",
            },
            ...messages.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
            { role: "user", content: input },
          ],
        }),
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
            to="/seller-bot"
            className="block bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition text-center"
          >
            <h1 className="text-3xl font-bold text-blue-400">Seller Support Bot</h1>
            <p className="text-gray-300 mt-2">
              Your AI-powered assistant for E~Commerce Shop sellers. Automate answers for product listing, fulfillment, policies, and more.
            </p>
          </Link>

          <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <h2 className="text-xl font-semibold text-blue-400 mb-1">Automated Seller Help</h2>
              <p className="text-gray-300">Instant support for listing issues, inventory sync, and fulfillment workflows.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <h2 className="text-xl font-semibold text-blue-400 mb-1">GPT-Powered Replies</h2>
              <p className="text-gray-300">Smart responses trained on E~Commerce Seller policies and API logic.</p>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h2 className="text-xl font-bold text-blue-400 mb-2">Tech Stack Used</h2>
            <p className="text-gray-300">
              React, Tailwind CSS, OpenAI API, React Router, Prompt Engineering
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-blue-400 mb-2 text-center">Prompt Engineering Showcase</h2>
            <ul className="text-gray-300 list-disc list-inside space-y-1 text-center">
              <li>"How do I update inventory?" → [Simulated API Steps]</li>
              <li>"My product got removed?" → [Explains policy reasons]</li>
              <li>"How to track fulfillment?" → [API + LLM hybrid response]</li>
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
              Disclaimer: This is a prototype. Chatbot logic is under development.
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

export default SellerBot;