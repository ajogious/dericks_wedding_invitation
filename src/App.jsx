import StickyTopMessage from "./StickyTopMessage";
import HeroSection from "./HeroSection";
import CountdownTimer from "./CountdownTimer";
import WeddingInvite from "./WeddingInvite";
import Timeline from "./Timeline";
import ColorOfTheDay from "./ColorOfTheDay";
import RSVPSection from "./RSVPSection";
import LazyBackground from "./LazyBackground";
import StorySection from "./StorySection";
import FooterHeroSection from "./FooterHeroSection";
import useInitAOS from "./useInitAOS";
import "./App.css";

function App() {
  const rsvpData = [
    { icon: "bi-person-circle", name: "Nwachukwu", phone: "0706 764 0885" },
    { icon: "bi-person-circle", name: "Emilia", phone: "0810 901 2874" },
  ];

  useInitAOS();

  return (
    <>
      <StickyTopMessage
        message="To love that grows, laughter that lasts, and a lifetime of happiness. Cheers!"
        slogan="#DBLESS2025"
      />
      <div data-aos="fade-in">
        <div className="wrapper">
          <LazyBackground className="hero" bgImage="/hero.png">
            <HeroSection
              sectionClass="hero"
              content_box="content_box"
              message="Please join us to celebrate"
              coupleName="Blessing & Derick"
              dateLocation="28th June 2025 - Abuja, Nigeria"
            />
          </LazyBackground>
          <StorySection />
          <br />
          <CountdownTimer />
          <WeddingInvite />
          <Timeline />
          <ColorOfTheDay />
          <RSVPSection rsvps={rsvpData} />
          <FooterHeroSection />
        </div>
      </div>
    </>
  );
}

export default App;
