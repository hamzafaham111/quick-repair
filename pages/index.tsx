import type { NextPage } from "next";
import * as React from "react";
import Server from "../pages/index/Services";
import HeroSection from "../pages/index/HeroSection";
import AboutSection from "../pages/index/AboutSection";
const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Server />
    </>
  );
};

export default Home;
