import React from "react";

const UseCases = () => {
  return (
    <section id="usecases" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-400 text-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-center">Buyer ChatBot</h3>
            <p className="text-center">
              Helps customers with order tracking, product inquiries, and common FAQs 24/7 using NLP.
            </p>
          </div>
          <div className="bg-gray-400 text-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-center">Seller ChatBot</h3>
            <p className="text-center">
              Guides merchants through onboarding, policy info, and store support to enhance selling experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;