import { useState, useEffect } from "react";
import ScrollIndicator from "../ScrollIndicator";
import CloudsSVG from "../../assets/backgrounds/clouds.svg";

const Clouds = () => {
  const [show, setShow] = useState(false); // Bird animation control

  useEffect(() => {
    // const t = window.setTimeout(() => setShow(true), 800); // delay 800ms
    const t = window.setTimeout(() => setShow(true), 100); // delay 800ms
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="max-w-480 h-full relative">
      {/* <img src={CloudsSVG} alt="Clouds" className="w-full max-w-480 z-0" /> */}
      <img
        src={CloudsSVG}
        alt="Clouds"
        className="w-full max-w-480 z-0"
        style={{
          transform: show
            ? "translateY(0px)" // in view
            : "translateY(120vh)", // start off-screen (below)
          transitionProperty: "transform",
          transitionDuration: "3500ms",
          transitionTimingFunction: "cubic-bezier(0.73, 0, 0.8, 0.83)",
        }}
      />
      <div className="absolute w-full bottom-15 z-1">
        <ScrollIndicator />
      </div>
    </div>
  );
};

export default Clouds;
