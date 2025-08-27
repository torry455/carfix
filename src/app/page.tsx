import React from "react";
import { HeroSection } from "./components/Templates/HeroSection/HeroSection";
import { AboutSection } from "./components/Templates/AboutSection/AboutSection";
import { ServicesSection } from "./components/Templates/ServicesSection/ServicesSection";
import { MastersSection } from "./components/Templates/Master/Master";
import { TrainingSection } from "./components/Templates/TrainingSection/TrainingSection";
import { ScrollToTopButton } from "./components/Molecules/ScrollToTopButton/ScrollToTopButton";
import { AboutCarfix } from "./components/Templates/AboutCarfix/AboutCarfix";
import Gallery from "./components/Templates/Gallery/Gallery";
import { ReviewsSection } from "./components/Templates/ReviewsSection/ReviewsSection";
import { ContactUsSection } from "./components/Templates/ContactUsSection/ContactUsSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutCarfix />
      <AboutSection />
      <ServicesSection />
      <MastersSection />
      <TrainingSection />
      <Gallery />
      <ReviewsSection />
      <ContactUsSection />
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;
