import { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import CallToAction from "./components/CallToAction/CallToAction";
import Birds from "./assets/backgrounds/birds.svg";
import SingleBird from "./assets/backgrounds/single-bird.svg";
import BirdOffScreen from "./assets/backgrounds/bird-off-screen.svg";
import Clouds from "./assets/backgrounds/clouds.svg";
import BirdDiagonalLTR from "./components/Animation/BirdDiagonalLTR";
import BirdDiagonalRTL from "./components/Animation/BirdDiagonalRTL";

function App() {
  const [show, setShow] = useState(false); // Bird animation control
  const [visible, setVisible] = useState(false); // Screen opacity control

  useEffect(() => {
    // const t = window.setTimeout(() => setShow(true), 800); // delay 800ms
    const t = window.setTimeout(() => setShow(true), 100); // delay 800ms
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    // trigger after first paint
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    // <div className="mx-auto max-w-[1920px] w-full overflow-hidden relative h-full">
    <div
      className={`mx-auto max-w-480 w-full overflow-hidden relative h-full min-h-screen
        transition-opacity
        duration-2500
        ease-out
        ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <Navigation />
      <Hero />

      {/* Bird #1 - top 329px / 495px left */}
      <img src={SingleBird} alt="Single Bird Flying" aria-hidden="true" className="absolute top-82.25 left-123.75" />

      {/* Bird #2 - top 465px / 1446px left */}
      <img src={SingleBird} alt="Single Bird Flying" aria-hidden="true" className="absolute top-116.25 left-361.5" />

      {/* Bird Group - Will move from out of view and into view vertically */}
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

      <BirdDiagonalLTR src={BirdOffScreen} width={133} height={74} delayMs={1200} />
      <BirdDiagonalRTL src={BirdOffScreen} width={133} height={74} delayMs={1200} />
      <div className="border-2 max-w-[1920px] h-full">
        <img src={Clouds} alt="Clouds" className="w-full max-w-[1920px]" />
      </div>
      <CallToAction />
    </div>
  );
}

export default App;
