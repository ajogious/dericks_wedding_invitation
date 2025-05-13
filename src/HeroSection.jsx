const HeroSection = ({
  coupleName,
  dateLocation,
  message,
  sectionClass,
  content_box,
}) => {
  return (
    <div className={`${sectionClass} container-fluid`}>
      <div className={content_box}>
        <p>{message}</p>
        <h1 className="mt-2">{coupleName}</h1>
        <h5>{dateLocation}</h5>
      </div>
    </div>
  );
};

export default HeroSection;
