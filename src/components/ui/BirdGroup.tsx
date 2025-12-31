import { useState, useEffect } from "react";
import Birds from "../../assets/backgrounds/birds.svg";

const BirdGroup = () => {
  const [show, setShow] = useState(false); // Bird animation control

  useEffect(() => {
    // const t = window.setTimeout(() => setShow(true), 800); // delay 800ms
    const t = window.setTimeout(() => setShow(true), 100); // delay 800ms
    return () => window.clearTimeout(t);
  }, []);

  return (
    <img
      src={Birds}
      alt="Birds Flying"
      aria-hidden="true"
      className="
              absolute
              w-[1407.935px] h-[719.378px]
              top-72.75 left-[298.18px]
              max-w-none
              transition-transform duration-900 ease-out
              pointer-events-none z-0
            "
      style={{
        transform: show
          ? "translateY(0px)" // in view
          : "translateY(120vh)", // start off-screen (below)
        transitionProperty: "transform",
        transitionDuration: "3500ms",
        transitionTimingFunction: "cubic-bezier(0.73, 0, 0.8, 0.83)",
      }}
    />
  );
};

export default BirdGroup;
