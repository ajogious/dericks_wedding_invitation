import CountdownTimer from "./CountdownTimer";
import WeddingInvite from "./WeddingInvite";
import "./App.css";
import Timeline from "./Timeline";
import ColorOfTheDay from "./ColorOfTheDay";
import RSVPSection from "./RSVPSection";
import HeroSection from "./HeroSection";
import TimeOnly from "./TimeOnly";
import StickyTopMessage from "./StickyTopMessage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  const rsvpData = [
    { icon: "bi-person-circle", name: "Mr. Prosper", phone: "0703 788 7513" },
    { icon: "bi-person-circle", name: "Mr. Ralph", phone: "0813 564 9811" },
    { icon: "bi-person-circle", name: "Mr. Elo", phone: "0813 104 3143" },
    { icon: "bi-person-fill", name: "Mrs. Adeshina", phone: "0805 350 1929" },
  ];
  useEffect(() => {
    AOS.init({
      once: true, // Only animate once
      duration: 800, // Duration of animation
    });
  }, []);
  return (
    <div data-aos="fade-in">
      <div className="wrapper">
        <>
          <HeroSection
            sectionClass="hero"
            content_box="content_box"
            message="Please join us to celebrate"
            coupleName="Blessing & Daniel"
            dateLocation="28th June 2025 - Abuja, Nigeria"
          />
          <StickyTopMessage message="To love that grows, laughter that lasts, and a lifetime of happiness. Cheers!" />
        </>
        <div className="container-fluid story_wrapper">
          <div className="story">
            <h2>Our Story</h2>
            <p>
              It all started with a simple hello.. and now, we are here ready to
              say “I do”. We can’t wait to share this special moment with you!
            </p>
            <div className="img_box">
              <div className="img_box__outer">
                <div className="img_box__inner">
                  <img
                    src="/pre_wedding_pix.jpg"
                    alt="pre wedding picture"
                    className="img_box__1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CountdownTimer />
        <WeddingInvite />
        <Timeline />
        <ColorOfTheDay />
        <br />
        <br />
        <RSVPSection rsvps={rsvpData} />;
        <div className="footer_hero">
          <HeroSection
            content_box="footer_box"
            message="Save The Date"
            coupleName="Blessing & Daniel"
            dateLocation="28th June 2025 - Abuja, Nigeria"
          />
          <TimeOnly targetDate="2025-06-28T00:00:00" />
        </div>
      </div>
    </div>
  );
}

export default App;
