import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import BigCard from "./components/BigCard";
import { Hero } from "./components/Hero";
import Misson from "./components/Misson";
import Servies from "./components/Servies";
import Navbar from "./components/Navbar";
import NavOrder from "./components/NavOrder";
import CardIct from "./components/CardIct";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import FirstSection from "./components/about/FirstSection";
import SecondSection from "./components/about/SecondSection";
import ThirdSection from "./components/about/ThirdSection";
import ProductHero from "./components/product/ProductHero";
import ProductsRow from "./components/product/ProductsRow";

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Navbar />
                <CardIct />
                <BigCard />
                <Servies />
                <Misson />
                <WhyUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <FirstSection />
                <Navbar />
                <SecondSection />
                <ThirdSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/order"
            element={
              <>
                <ProductHero />
                <NavOrder />
                <ProductsRow />
                <Footer />
              </>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

//Steps for route
//1. Landing Page has all the above components. Navbar has two components, Navbar and ModelHam, add link for route in both.
// On clicking on Contact button on navbar, it should take the user to footer section with smooth scroll like in ProductHero component.
//2. Second is About page which has First, Second and ThirdSection in about folder, it should have footer and should re-direct to footer on onclick Contact button.
//Footer must be in all pages and navbar in all pages.
//3. Third is Product page which has ProductHero and ProductRow with footer. Add this to Order button on navbar and Modalham
