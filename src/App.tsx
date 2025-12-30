import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import HeroBg from "./assets/heroBg.svg";
import CloudBg from "./assets/cloudsBg.svg";

function App() {
  return (
    <div className="border max-w-[1920px] max-h-[1080px] h-full mx-auto">
      <Navigation />
      <Hero />
      {/* <div className="fixed max-w-[1407px] w-full border top-[291px] left-[298px] right-0 mx-auto z-[-1]">
        <img src={HeroBg} alt="Hero Background" className="flex w-full mt-10" />
      </div> */}
      {/* <div className="pointer-events-none fixed inset-0 -z-10">
        <img
          src={HeroBg}
          alt=""
          aria-hidden="true"
          className="
            absolute
            top-[291px]
            left-1/2
            w-[1407px]
            max-w-none
            -translate-x-1/2
            md:translate-x-[-calc(50%-298px)]
            object-contain
          "
        />
      </div> */}
      {/* Birds Backgrounds */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none fixed inset-0 -z-10
          bg-no-repeat
          bg-[length:1407px_auto]
          bg-[position:left_298px_top_291px]
          md:bg-[position:left_298px_top_291px]
          bg-[image:url('/src/assets/heroBg.svg')]
        "
      />

      {/* Clouds Backgrounds */}
      <div
        aria-hidden="true"
        className="
          border-2 pointer-events-none fixed inset-0 -z-1
          bg-no-repeat
          bg-[length:1920px_auto]
          bg-[position:left_298px_top_291px]
          bg-[image:url('/src/assets/cloudsBg.svg')]
        "
      />
    </div>
  );
}

export default App;
