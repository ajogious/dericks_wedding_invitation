import "./WeddingInvite.css";

const WeddingInvite = () => {
  return (
    <div
      className="wedding-container"
      style={{
        backgroundImage: `url(/hero2.png)`,
      }}
    >
      <div className="overlay">
        <div className="content">
          <p className="intro">TOGETHER WITH THEIR FAMILIES</p>
          <p className="invite">REQUEST THE PLEASURE OF YOUR COMPANY</p>
          <p className="invite">TO CELEBRATE THEIR WEDDING</p>
          <div className="date-row">
            <span>28</span>
            <span className="dot">•</span>
            <span>06</span>
            <span className="dot">•</span>
            <span>25</span>
          </div>
          <div>
            <p className="date">THURSDAY 28TH JUNE, 2025</p>
            <p className="location">Abuja, FCT</p>
            <p className="location">Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvite;
