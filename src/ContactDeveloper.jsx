import React from "react";

const ContactDeveloper = () => {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-12 flex justify-center items-start">
      <div className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-4">Contact Developer</h1>
        <p className="text-gray-300 text-center mb-8">
          Have a question or want to work together? Fill out the form below.
        </p>

        <form
          action="https://formspree.io/f/mkgrbveo"  
          method="POST"
        >
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none resize-none"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactDeveloper;