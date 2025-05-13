import RSVPCard from "./RSVPCard";
import "./RSVP.css";
// import flower from "./flower.svg"; // Still using flower SVG

const RSVPSection = ({ rsvps }) => {
  return (
    <div className="text-center my-5">
      <div className="d-flex justify-content-center align-items-center mb-4 rsvp-title">
        <img src="/flower.jpg" alt="decor" className="mx-2 rsvp-decor" />
        <h2 className="mx-2 fw-bold">RSVP</h2>
        <img src="/flower.jpg" alt="decor" className="mx-2 rsvp-decor" />
      </div>

      <div className="container">
        <div className="row justify-content-center col-8 m-auto">
          {rsvps.map((person, idx) => (
            <div key={idx} className="col-md-6 mb-4">
              <RSVPCard
                icon={person.icon}
                name={person.name}
                phone={person.phone}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RSVPSection;
