import "./WeddingInvite.css";

const WeddingInvite = () => {
  return (
    <div className="wedding-container">
      <div className="overlay">
        <div className="content">
          <br />
          <p className="intro">WITH THE PERMISSION OF BOTH FAMILIES,</p>
          <p className="invite">
            WE HUMBLY REQUEST THE HONOR OF YOUR PRESENCE TO CELEBRATE
          </p>
          <p className="invite">OUR WEDDING WITH US</p>
          <div className="date-row">
            <span>28</span>
            <span className="dot">•</span>
            <span>06</span>
            <span className="dot">•</span>
            <span>25</span>
          </div>
          <div>
            <p className="date">SATURDAY 28TH JUNE, 2025</p>
            <p className="location">Abuja, FCT</p>
            <p className="location">Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvite;
