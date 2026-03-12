import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DiscountBanner from "../components/DiscountBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import LatestProducts from "../components/LatestProducts";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection />
      <DiscountBanner />
      <FeaturedProducts />
      <ContactForm />
      <LatestProducts />
      <Footer />
    </>
  );
}

export default Home;