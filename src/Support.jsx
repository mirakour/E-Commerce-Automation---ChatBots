import React from "react";

const Support = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Support</h1>
        <p className="text-lg text-gray-300">
          Need help using our products? This page will contain user guides, FAQs, and contact forms
          for support.
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

export default Support;