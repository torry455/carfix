import React from "react";
import { HeroSection } from "./components/Templates/HeroSection/HeroSection";
import { AboutSection } from "./components/Templates/AboutSection/AboutSection";
import { ServicesSection } from "./components/Templates/ServicesSection/ServicesSection";
import { ExpertsSection } from "./components/Templates/ExpertsSection/ExpertsSection";
import { TrainingSection } from "./components/Templates/TrainingSection/TrainingSection";
import { ScrollToTopButton } from "./components/Molecules/ScrollToTopButton/ScrollToTopButton";
import { AboutCarfix } from "./components/Templates/AboutCarfix/AboutCarfix";
import Gallery from "./components/Templates/Gallery/Gallery";
import { ReviewsSection } from "./components/Templates/ReviewsSection/ReviewsSection";
import { ContactUsSection } from "./components/Templates/ContactUsSection/ContactUsSection";
import { Articles } from "./components/Templates/Articles/Articles";

const HomePage: React.FC = () => {
  return (
    <div className="max-w-6xl flex flex-col gap-20 mx-auto">
      <HeroSection />
      <AboutCarfix />
      <ExpertsSection />
      <AboutSection />
      <ServicesSection />
      <TrainingSection />
      <Gallery />
      <ReviewsSection />
      <ContactUsSection />
      <Articles />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
