import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom'; // ✅ Add this

const Hero = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Develop for
        </h1>
        <div className="text-xl md:text-3xl font-semibold text-blue-400 mb-6">
          <TypeAnimation
            sequence={[
              '>Students', 2000,
              '>Researchers', 2000,
              '>Collaborators', 2000,
              '>CX Experts', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
          Build AI-powered customer support experiences with automation, self-service tools, and LLM-driven intelligence for the future of commerce.
        </p>
        <Link to="/explore-products">
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Explore Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;