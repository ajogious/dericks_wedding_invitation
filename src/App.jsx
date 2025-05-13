import CountdownTimer from "./CountdownTimer";
import WeddingInvite from "./WeddingInvite";
import "./App.css";
import Timeline from "./Timeline";
import ColorOfTheDay from "./ColorOfTheDay";
import RSVPSection from "./RSVPSection";

function App() {
  const rsvpData = [
    { icon: "bi-person-circle", name: "Mr. Prosper", phone: "0703 788 7513" },
    { icon: "bi-person-circle", name: "Mr. Ralph", phone: "0813 564 9811" },
    { icon: "bi-person-circle", name: "Mr. Elo", phone: "0813 104 3143" },
    { icon: "bi-person-fill", name: "Mrs. Adeshina", phone: "0805 350 1929" },
  ];
  return (
    <div className="wrapper">
      <div className="hero container-fluid">
        <div className="content_box">
          <p>Please join us to celebrate</p>
          <h1 className="mt-2">Blessing & Daniel</h1>
          <h5>28th June 2025 - Abuja, Nigeria</h5>
        </div>
      </div>
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
      <RSVPSection rsvps={rsvpData} />;<div className="footer"></div>
    </div>
  );
}

export default App;
