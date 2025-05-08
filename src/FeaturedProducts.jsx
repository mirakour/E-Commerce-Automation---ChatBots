import React from "react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <section id="products" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/buyer-bot">
            <div className="bg-gray-400 text-black p-6 rounded-lg shadow-md hover:bg-gray-300 transition duration-200">
              <h3 className="text-xl font-semibold mb-2 text-center">Buyer Support Bot</h3>
              <p className="text-center">
                Supports real-time buyer inquiries with order tracking, product info, and issue resolution.
              </p>
            </div>
          </Link>
          <Link to="/seller-bot">
            <div className="bg-gray-400 text-black p-6 rounded-lg shadow-md hover:bg-gray-300 transition duration-200">
              <h3 className="text-xl font-semibold mb-2 text-center">Seller Support Bot</h3>
              <p className="text-center">
                Assists merchants with onboarding, content guidelines, policy questions, and automation tools.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;