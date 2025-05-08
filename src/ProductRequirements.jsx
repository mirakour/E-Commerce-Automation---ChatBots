import React from "react";

const ProductRequirements = () => {
  const handleClose = () => {
    window.close();
  };

  return (
    <section className="bg-black text-white min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Revision Date */}
        <div className="text-right text-gray-400 text-sm mb-4">Revision Date: 5/2/2025</div>

        {/* Document Container */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg space-y-6">
          <h1 className="text-3xl font-bold text-blue-400 text-center mb-2">
            E~Commerce Automation: AI Chatbot Suite
          </h1>
          <h2 className="text-xl font-semibold text-white text-center mb-4">
            Product Requirements Document (PRD)
          </h2>

          <div>
            <h3 className="text-blue-300 font-semibold">1. Overview</h3>
            <p className="text-gray-300">
              <strong>Document Owner:</strong> Kourtney Miranda<br />
              <strong>Product:</strong> E~Commerce Automation – AI Chatbot Suite<br />
              <strong>Purpose:</strong> Define the functional and technical requirements for building and launching the 4-product chatbot suite<br />
              <strong>Version:</strong> 1.0
            </p>
          </div>

          <div>
            <h3 className="text-blue-300 font-semibold">2. Problem Statement</h3>
            <p className="text-gray-300">
              Online retailers face increasing customer service demands that are expensive, time-consuming, and difficult to scale across regions and functions. Buyers seek instant answers about their orders, while sellers need guidance on fulfillment and listings. Product feedback loops are slow. Prompt engineers lack a safe environment to test.
            </p>
          </div>

          <div>
            <h3 className="text-blue-300 font-semibold">3. Goals & Objectives</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Automate buyer and seller interactions using conversational AI</li>
              <li>Provide simulated product review analysis using LLM</li>
              <li>Create a prompt experimentation environment for engineers</li>
              <li>Enhance CX speed and reduce support workload by 50%</li>
              <li>Provide a showcase portfolio for hiring and demo purposes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-300 font-semibold">4. Product Scope</h3>
            <p className="text-white font-semibold mt-2">In Scope:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Buyer Support Bot</li>
              <li>Seller Support Bot</li>
              <li>Product Review Bot</li>
              <li>Prompt Playground</li>
              <li>UI with dark theme, Tailwind styling, and chat simulation</li>
              <li>Integration with OpenAI API and simulated mock APIs</li>
              <li>Navigation, documentation, and showcase pages</li>
            </ul>
            <p className="text-white font-semibold mt-2">Out of Scope:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Real-time E-Commerce API integrations (until token available)</li>
              <li>Admin backend or analytics dashboard</li>
              <li>Mobile optimization (v1 only supports desktop)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-300 font-semibold">5. User Stories</h3>
            <p className="text-gray-300">
              <strong>Buyer Persona:</strong> Ask “Where’s my order?” and get instant help.<br />
              <strong>Seller Persona:</strong> Troubleshoot product listings and get policy help.<br />
              <strong>Engineer Persona:</strong> Test and tune prompts in real-time with LLM feedback.
            </p>
          </div>

          <div>
            <h3 className="text-blue-300 font-semibold">6. Key Features</h3>
            <table className="w-full text-gray-300 text-sm mt-2 border border-gray-600">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-2 border border-gray-600">Feature</th>
                  <th className="p-2 border border-gray-600">Priority</th>
                  <th className="p-2 border border-gray-600">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-600">BuyerBot</td>
                  <td className="p-2 border border-gray-600">High</td>
                  <td className="p-2 border border-gray-600">Order lookup simulation, FAQ answers</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">SellerBot</td>
                  <td className="p-2 border border-gray-600">High</td>
                  <td className="p-2 border border-gray-600">Fulfillment help, policy responses</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">ProductReviewBot</td>
                  <td className="p-2 border border-gray-600">Medium</td>
                  <td className="p-2 border border-gray-600">Review summaries, LLM-generated feedback</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">PromptPlayground</td>
                  <td className="p-2 border border-gray-600">Medium</td>
                  <td className="p-2 border border-gray-600">Custom prompt test UI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-blue-300 font-semibold">7. Functional Requirements</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Input/output logic for sending prompts to OpenAI</li>
              <li>Scroll-to-bottom logic for chat experience</li>
              <li>Route structure via React Router</li>
              <li>Clean responsive UI using Tailwind</li>
              <li>Persistent history state within each session</li>
              <li>Mock fallback API responses for orders/inventory</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-300 font-semibold">8. Non-Functional Requirements</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Responsive UI for desktop</li>
              <li>Modular file structure for reusability</li>
              <li>Configurable .env file for API keys</li>
              <li>No hardcoded values (except mock simulation)</li>
              <li>Code optimized for readability and maintainability</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-300 font-semibold">9. Success Metrics</h3>
            <table className="w-full text-gray-300 text-sm mt-2 border border-gray-600">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-2 border border-gray-600">Metric</th>
                  <th className="p-2 border border-gray-600">Target</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-600">Functionality demo completeness</td>
                  <td className="p-2 border border-gray-600">100%</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">Prompt response accuracy</td>
                  <td className="p-2 border border-gray-600">≥ 90%</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">Chatbot latency (simulated API)</td>
                  <td className="p-2 border border-gray-600">&lt; 1.5s</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-blue-300 font-semibold">10. Assumptions & Dependencies</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>OpenAI API remains stable and responsive</li>
              <li>Real E-Commerce OAuth tokens will be provided in future phase</li>
              <li>Deployment environment is stable</li>
              <li>No external backend or CMS required in this phase</li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-300 font-semibold">11. Timeline</h3>
            <table className="w-full text-gray-300 text-sm mt-2 border border-gray-600">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-2 border border-gray-600">Phase</th>
                  <th className="p-2 border border-gray-600">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-600">Requirements Complete</td>
                  <td className="p-2 border border-gray-600">4/25/2025</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">MVP Features Built</td>
                  <td className="p-2 border border-gray-600">4/29/2025</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">Testing & Docs Published</td>
                  <td className="p-2 border border-gray-600">5/1/2025</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-600">Demo Ready</td>
                  <td className="p-2 border border-gray-600">5/2/2025</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-blue-300 font-semibold">12. Approval</h3>
            <p className="text-gray-300">
              This document has been reviewed and approved by the product owner, Kourtney Miranda, and will serve as the source of truth for the MVP scope and features.
            </p>
          </div>
        </div>

        {/* Close Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleClose}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductRequirements;