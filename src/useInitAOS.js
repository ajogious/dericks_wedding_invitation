import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useInitAOS = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);
};

export default useInitAOS;
