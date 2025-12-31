import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import CallToAction from "./components/CallToAction/CallToAction";
import Birds from "./assets/backgrounds/birds.svg";
import SingleBird from "./assets/backgrounds/single-bird.svg";
import Clouds from "./assets/backgrounds/clouds.svg";

function App() {
  return (
    <div className="mx-auto max-w-[1920px] w-full overflow-hidden relative h-full">
      <Navigation />
      <Hero />

      {/* Bird #1 - top 329px / 495px left */}
      <img src={SingleBird} alt="Single Bird Flying" aria-hidden="true" className="absolute top-[329px] left-[495px]" />
      {/* Bird #2 - top 465px / 1446px left */}
      <img src={SingleBird} alt="Single Bird Flying" aria-hidden="true" className="absolute top-[465px] left-[1446px]" />

      {/* Bird Group */}
      <img
        src={Birds}
        alt="Birds Flying"
        aria-hidden="true"
        className="
              absolute
              w-[1407.935px] h-[719.378px]
              top-[291px] left-[298.18px]
              max-w-none
              transition-transform duration-900 ease-out
            "
      />

      <div className="border-2 max-w-[1920px] h-full">
        <img src={Clouds} alt="Clouds" className="w-full max-w-[1920px]" />
      </div>
      <CallToAction />
    </div>
  );
}

export default App;
