const TimelineItem = ({ icon, time, title, description }) => {
  return (
    <div className="card border border-2 border-light mb-3">
      <div className="card-body d-flex align-items-center">
        <div className="card_body me-3 ms-3 fs-4 text-primary">
          <i className={`bi ${icon}`}></i>
        </div>
        <div className="card__body2">
          <h6 className="fw-bold">{time}</h6>
          <div>
            <p className="mb-0 small text-muted">{description}</p>
          </div>
        </div>
        <div className="card__body3">
          <span className="ms-2 fw-semibold">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
