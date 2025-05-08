import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import UseCases from "./UseCases";
import FeaturedProducts from "./FeaturedProducts";
import Footer from "./Footer";
import BuyerBot from "./BuyerBot";
import SellerBot from "./SellerBot";
import ProductReviewBot from "./ProductReviewBot";
import PromptPlayground from "./PromptPlayground";
import ExploreProducts from "./ExploreProducts";
import ProductCharter from './ProductCharter';
import ProductRequirements from './ProductRequirements';
import BuyerTestPrompts from './BuyerTestPrompts';
import SellerTestPrompts from './SellerTestPrompts';
import ProductReviewTestPrompts from './ProductReviewTestPrompts';
import PromptPlaygroundTestPrompts from './PromptPlaygroundTestPrompts';
import FAQs from './FAQs';
import ContactDeveloper from './ContactDeveloper';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <UseCases />
              <FeaturedProducts />
            </>
          }
        />
        <Route path="/buyer-bot" element={<BuyerBot />} />
        <Route path="/seller-bot" element={<SellerBot />} />
        <Route path="/product-review-bot" element={<ProductReviewBot />} />
        <Route path="/prompt-playground" element={<PromptPlayground />} />
        <Route path="/explore-products" element={<ExploreProducts />} />
        <Route path="/product-charter" element={<ProductCharter />} />
        <Route path="/product-requirements" element={<ProductRequirements />} />
        <Route path="/buyer-test-prompts" element={<BuyerTestPrompts />} />
        <Route path="/seller-test-prompts" element={<SellerTestPrompts />} />
        <Route path="/product-review-test-prompts" element={<ProductReviewTestPrompts />} />
        <Route path="/prompt-playground-test-prompts" element={<PromptPlaygroundTestPrompts />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact-developer" element={<ContactDeveloper />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;