import React from "react";
import { HeroSection } from "./components/Templates/HeroSection/HeroSection";
import { AboutSection } from "./components/Templates/AboutSection/AboutSection";
import { ServicesSection } from "./components/Templates/ServicesSection/ServicesSection";
import { MastersSection } from "./components/Templates/Master/Master";
import { TrainingSection } from "./components/Templates/TrainingSection/TrainingSection";

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
