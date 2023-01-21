import type { NextPage } from "next";
import * as React from "react";
import Server from "../pages/index/Services";
import HeroSection from "../pages/index/HeroSection";
import AboutSection from "../pages/index/AboutSection";
import WhyUs from "../pages/index/WhyUs";
import Brands from "../pages/index/Brands";
import Schedule from "../pages/index/Schedule";
import Testemonial from "../pages/index/Testemonial";
import Counter from "../pages/index/Counters";
const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Server />
      <WhyUs />
      <Brands />
      <Schedule />
      <Testemonial />
      <Counter />
    </>
  );
};

export default Home;
