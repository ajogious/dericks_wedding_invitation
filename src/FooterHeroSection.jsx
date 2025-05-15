import TimeOnly from "./TimeOnly";
import LazyBackground from "./LazyBackground";
import HeroSection from "./HeroSection";
import "./FooterHeroSection.css";

export const FooterHeroSection = () => {
  return (
    <div className="footer_hero">
      <LazyBackground className="footer_hero" bgImage="/pre_wedding_footer.JPG">
        <div className="footer_box">
          <HeroSection
            content_box="footer_box"
            message="Save The Date"
            coupleName="Blessing & Derick"
            dateLocation="28th June 2025 - Abuja, Nigeria"
          />
          <TimeOnly targetDate="2025-06-28T00:00:00" />
        </div>
      </LazyBackground>
    </div>
  );
};

export default FooterHeroSection;
