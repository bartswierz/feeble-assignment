import { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import SingleBird from "./assets/backgrounds/single-bird.svg";
import BirdOffScreen from "./assets/backgrounds/bird-off-screen.svg";
import BirdDiagonalLTR from "./components/Motion/BirdDiagonalLTR";
import BirdDiagonalRTL from "./components/Motion/BirdDiagonalRTL";
import BirdGroup from "./components/ui/BirdGroup";
import Clouds from "./components/ui/Clouds";

function App() {
  // const [show, setShow] = useState(false); // Bird animation control
  const [visible, setVisible] = useState(false); // Screen opacity control

  useEffect(() => {
    // trigger after first paint
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <div
      className={`mx-auto max-w-480 w-full overflow-hidden relative h-full min-h-screen
        transition-opacity
        duration-2500
        ease-out
        ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="z-20">
        <Navigation />
        <Hero />
      </div>

      {/* Bird #1 - top 329px / 495px left */}
      <img src={SingleBird} alt="Single Bird Flying" aria-hidden="true" className="absolute top-82.25 left-123.75" />

      {/* Bird #2 - top 465px / 1446px left */}
      <img src={SingleBird} alt="Single Bird Flying" aria-hidden="true" className="absolute top-116.25 left-361.5" />

      <BirdGroup />
      <Clouds />
      <BirdDiagonalLTR src={BirdOffScreen} width={133} height={74} delayMs={1200} />
      <BirdDiagonalRTL src={BirdOffScreen} width={133} height={74} delayMs={1200} />
    </div>
  );
}

export default App;
