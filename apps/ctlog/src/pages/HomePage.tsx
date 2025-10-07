import "../App.css";
import { ResponsiveSection } from "../components/ResponsiveSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { TeamSection } from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection";
import { HeaderSection } from "../components/HeaderSection";
import IntroSection from "../components/IntroSection";
import { SubscribeSection } from "../components/SubscribeSection";
import { SwagSection } from "../components/SwagSection";
import { IngitaSections } from "../components/IngitaSections";

export const HomePage = () => {
  return (
    <>
      <HeaderSection />
      <div
        id="intro"
        className="bg-[#f3f5f8] min-h-[1px] pt-[90px] pb-[100px] text-center"
      >
        <IntroSection />
      </div>
      <div
        id="features"
        className="bg-[#fff] min-h-[1px] pt-[90px] pb-[100px] text-center"
      >
        <FeaturesSection />
      </div>
      <div
        id="responsive"
        className="pl-[15px] pr-[15px] pt-[70px] pb-[70px] bg-[#f0f0f0] lg:bg-white lg:p-0 flex flex-col w-full"
      >
        <ResponsiveSection />
      </div>
      <div>
        <SwagSection />
      </div>
      <div id="portfolio" className="pt-[90px] pb-[100px]">
        <PortfolioSection />
      </div>
      <div className="bg-[#242830] pt-[70px] pb-[70px] pl-[15px] pr-[15px]">
        <IngitaSections />
      </div>
      <div id="team" className="pt-[90px] pb-[100px]">
        <TeamSection />
      </div>

      <div className="text-center">
        <SubscribeSection />
      </div>

      <div id="contact" className="bg-[#f3f5f8] pt-[90px] pb-[100px] relative">
        <ContactSection />
      </div>
      <FooterSection />
    </>
  );
};
