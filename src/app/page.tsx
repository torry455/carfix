import React from "react";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { ServicesSection } from "./components/ServicesSection/ServicesSection";
import { MastersSection } from "./components/Master/Master";
import { TrainingSection } from "./components/TrainingSection/TrainingSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MastersSection />
      <TrainingSection />
    </>
  );
};

export default HomePage;
