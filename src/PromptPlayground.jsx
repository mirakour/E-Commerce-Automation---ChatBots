import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PromptPlayground = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRunPrompt = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are an expert assistant for prompt testing. Be clear, direct, and concise." },
            { role: "user", content: prompt }
          ]
        })
      });

      const data = await res.json();
      const output = data.choices?.[0]?.message?.content || "No response.";
      setResponse(output);
    } catch (error) {
      setResponse("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-400 mb-6 text-center">🎯 Prompt Playground</h1>
        <p className="text-gray-300 mb-8 text-center">
          Try your own prompt and see how the LLM responds. This is a live test area to showcase prompt engineering.
        </p>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your custom prompt here..."
          className="w-full h-40 p-4 rounded-lg bg-gray-800 text-white mb-4 resize-none"
        />

        <div className="text-center space-y-4">
          <button
            onClick={handleRunPrompt}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Running..." : "Run Prompt"}
          </button>

          <div>
            <Link
              to="/"
              className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-600 transition"
            >
              Return Home
            </Link>
          </div>
        </div>

        {response && (
          <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow text-white">
            <h2 className="text-xl font-semibold text-blue-300 mb-2">🧠 Response</h2>
            <p className="text-gray-200 whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PromptPlayground;