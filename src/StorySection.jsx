import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./StorySection.css";

const StorySection = () => {
  return (
    <div className="container-fluid story_wrapper">
      <div className="story">
        <h2>Our Story</h2>
        <p>
          It all started with a simple hello.. and now, we are here ready to say
          “I do”. We can’t wait to share this special moment with you!
        </p>
        <div className="img_box">
          <div className="img_box__outer">
            <div className="img_box__inner">
              <LazyLoadImage
                alt="pre wedding picture"
                src="/story.jpg"
                className="img_box__1 img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
