import TimelineItem from "./TimelineItem";
import "./Timeline.css";

const Timeline = () => {
  const events = [
    {
      icon: "bi-building",
      time: "10:00 AM",
      title: "Church Service",
      // description: "Music, gifts, prayers.",
    },
    {
      icon: "bi-bell",
      time: "3:00 PM",
      title: "Guest Arrives At Reception",
     // description: "Music, gifts, prayers.",
    },
    {
      icon: "bi-people",
      time: "3:30 PM",
      title: "Families Of The Couple Entrance",
     // description: "Blessings, Stories and wisdom.",
    },
    {
      icon: "bi-people",
      time: "4:00 PM",
      title: "Arrival Of The Couple",
     // description: "Entrance, Music, Dance.",
    },
    {
      icon: "bi-music-note-beamed",
      time: "5:00 PM",
      title: "Couple First Dance",
     // description: "Entrance, Music, Dance.",
    },
    {
      icon: "bi-cup-straw",
      time: "5:30 PM",
      title: "Fun Wedding Activities",
     // description: "Wine, search, unity.",
    },
    {
      icon: "bi-emoji-smile",
      time: "6:30 PM",
      title: "After Party Begins",
     // description: "Food, drinks, joy.",
    },
  ];

  return (
    <div className="container my-5 text-center timeline">
      <h2 className="fw-bold">OUR DAY</h2>
      <p className="p1">Timeline</p>
      <p className="text-muted p2">
        Here is what you can expect on our wedding day.
        <br />
        We can’t wait to make memories with you!
      </p>

      <div className="mx-auto" style={{ maxWidth: "500px" }}>
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            icon={event.icon}
            time={event.time}
            title={event.title}
           // description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
