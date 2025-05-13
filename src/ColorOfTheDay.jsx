import "./ColorOfTheDay.css";

const ColorOfTheDay = () => {
  return (
    <div className="text-center my-5 color_day">
      <h1
        className="text-uppercase"
        style={{
          color: "#f5a623",
          fontSize: "6rem",
          fontWeight: "500",
          fontFamily: "'Alegreya', serif",
          letterSpacing: "0.5rem",
          paddingTop: "3rem",
        }}
      >
        Colours
      </h1>
      <h4
        style={{
          fontFamily: "'Bilbo', cursive",
          marginTop: "-2.5rem",
          fontSize: "4rem",
          fontWeight: "400",
        }}
      >
        Of The Day
      </h4>

      <div className="color-card mx-auto my-4 p-3 rounded-4 shadow">
        <div className="position-relative d-flex flex-column align-items-center">
          <div
            className="color-circle mb-3"
            style={{ backgroundColor: "#FFD700" }}
          />{" "}
          {/* Gold */}
          <div
            className="color-circle mb-3"
            style={{ backgroundColor: "#50C878" }}
          />{" "}
          {/* Emerald Green */}
          <div
            className="color-circle"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #ccc" }}
          />{" "}
          {/* White */}
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="legend-item">
          <div
            className="legend-color"
            style={{
              backgroundColor: "#FFD700",
            }}
          ></div>
          <small
            style={{ fontFamily: "'Alegreya', serif", fontSize: "1.5rem" }}
          >
            Gold
          </small>
        </div>
        <div className="legend-item">
          <div
            className="legend-color"
            style={{
              backgroundColor: "#50C878",
            }}
          ></div>
          <small
            style={{ fontFamily: "'Alegreya', serif", fontSize: "1.5rem" }}
          >
            Emerald
          </small>
        </div>
        <div className="legend-item">
          <div
            className="legend-color border"
            style={{
              backgroundColor: "#FFFFFF",
            }}
          ></div>
          <small
            style={{ fontFamily: "'Alegreya', serif", fontSize: "1.5rem" }}
          >
            White
          </small>
        </div>
      </div>
    </div>
  );
};

export default ColorOfTheDay;
