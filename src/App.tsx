import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Birds from "./assets/backgrounds/birds.svg";
import Clouds from "./assets/backgrounds/clouds.svg";
import CallToAction from "./components/CallToAction/CallToAction";

function App() {
  return (
    <div className="mx-auto max-w-[1920px] w-full overflow-hidden relative h-full">
      <Navigation />

      {/* Hero region needs to be relative */}
      {/* <div> */}
      <Hero />

      {/* Background layers anchored to 1920 container */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Birds (HeroBg) */}
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

        {/* Clouds (bottom) */}
        <img
          src={Clouds}
          alt="Clouds"
          className="
              absolute bottom-0 left-1/2
              w-full max-w-[1920px] z-1
            "
        />
      </div>
      <CallToAction />
    </div>
  );
}

export default App;
