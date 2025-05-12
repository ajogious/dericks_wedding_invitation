import CountdownTimer from "./CountdownTimer";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="hero container-fluid">
        <div className="content_box">
          <p>Please join us to celebrate</p>
          <h1 className="mt-2">Chioma & Benjamin</h1>
          <h5>May 29th, 2025 - Awgu, Enugu</h5>
        </div>
      </div>
      <div className="container-fluid story_wrapper">
        <div className="story">
          <h2>Our Story</h2>
          <p>
            It all started with a simple hello… and now, we’re here, ready to
            say “I do.” We can’t wait to share this special moment with you!
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
        <div className="timer_component">
          <CountdownTimer />
        </div>
      </div>
      {/* toast start */}
      {/* <div className="toast">
        <p>
          To love that grows, laughter that lasts, and a lifetime of happiness.
          Cheers!
        </p>
      </div> */}
      {/* toast end */}
    </div>
  );
}

export default App;
