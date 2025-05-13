const StickyTopMessage = ({ message, slogan }) => {
  return (
    <div className="sticky-message text-white fw-semibold text-center">
      <div>{message}</div>
      <div>{slogan}</div>
    </div>
  );
};

export default StickyTopMessage;
