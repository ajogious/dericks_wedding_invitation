import "./RSVP.css";

const RSVPCard = ({ icon, name, phone }) => {
  return (
    <div className="rsvp-card text-center rounded-4 shadow-sm p-3">
      <i className={`bi ${icon} avatar-icon mb-2`}></i>
      <div className="text-dark fw-semibold">{phone}</div>
      <div className="text-muted small">{name}</div>
    </div>
  );
};

export default RSVPCard;
