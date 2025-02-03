import Header from "@/components/header";
import Footer from "@/components/home/footer";
import GetInvolvedSection from "@/components/home/get-involved";
import HeroSection from "@/components/home/hero";
import NewsLetter from "@/components/home/newsletter";
import Testimonials from "@/components/home/testimonials";
import React from "react";

const Home = () => {
  return (
    <div className="bg-neutral-100">
      <Header />
      <HeroSection />
      <GetInvolvedSection />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
