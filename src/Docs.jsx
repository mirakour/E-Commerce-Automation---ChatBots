import React from "react";

const Docs = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Documentation</h1>
        <p className="text-lg text-gray-300">
          Welcome to the Docs section. Here you’ll find technical documentation, API guides, PRDs, and setup instructions
          for our AI-powered customer support tools.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          🚧 Page under construction. Updates coming soon.
        </p>
      </div>

      <div className="mt-20 text-center">
        <a
          href="/"
          className="inline-block mt-10 text-blue-400 hover:underline text-lg font-semibold"
        >
          ← Back to Homepage
        </a>
      </div>
    </section>
  );
};

export default Docs;