import React from "react";
import { HeroSection } from "./components/Templates/HeroSection/HeroSection";
import { PDRSection } from "./components/Templates/PDRSection/PDRSection";
import { ServicesSection } from "./components/Templates/ServicesSection/ServicesSection";
import { ExpertsSection } from "./components/Templates/ExpertsSection/ExpertsSection";
import { TrainingSection } from "./components/Templates/TrainingSection/TrainingSection";
import { ScrollToTopButton } from "./components/Molecules/ScrollToTopButton/ScrollToTopButton";
import { AboutCarfixSection } from "./components/Templates/AboutCarfixSection/AboutCarfixSection";
import { BeforeAfterSection } from "./components/Templates/BeforeAfterSection/BeforeAfterSection";
import { ReviewsSection } from "./components/Templates/ReviewsSection/ReviewsSection";
import { ContactUsSection } from "./components/Templates/ContactUsSection/ContactUsSection";
import { Articles } from "./components/Templates/Articles/Articles";

const HomePage: React.FC = () => {
  return (
    <div className="max-w-6xl flex flex-col gap-30 sm:gap-50 mx-auto px-5">
      <HeroSection />
      <AboutCarfixSection />
      <ExpertsSection />
      <PDRSection />
      <ServicesSection />
      <TrainingSection />
      <BeforeAfterSection />
      <ReviewsSection />
      <ContactUsSection />
      <Articles />
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
