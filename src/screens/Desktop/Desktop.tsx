import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { HeroSection } from "./sections/HeroSection";
import { OurApproachSection } from "./sections/OurApproachSection";
import { ServicesSection } from "./sections/ServicesSection";
import { SliderSection } from "./sections/SliderSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-black overflow-hidden">
      <HeroSection />
      <SliderSection />
      <AboutUsSection />
      <ServicesSection />
      <OurApproachSection />
      <ContactUsSection />

      <footer className="w-full flex flex-col items-center">
        <img
          className="w-full max-w-[1440px] h-auto object-cover"
          alt="Line"
          src="/line-1.svg"
        />
        <img
          className="w-full max-w-[1440px] h-auto"
          alt="Footer"
          src="/footer.svg"
        />
      </footer>
    </div>
  );
};
