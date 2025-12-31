import TextBubble from "../../assets/icons/text-bubble.svg";
import CallToActionBtns from "./CallToActionBtns";

const Hero = () => {
  return (
    <div className="max-w-[736px] w-full mx-auto flex flex-col items-center gap-8 mt-[44px]">
      <div className="flex flex-col text-center items-center gap-6 max-w-[90vw] mb-12">
        <div className="flex items-center pt-1 px-2 pb-[5px] font-medium text-[16px] text-brand-blue bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
          <img src={TextBubble} alt="Text Icon" className="inline-block mr-2" />
          #1 iMessage Automation Tool
        </div>

        <div className="font-bold text-[64px] leading-[120%]">
          <span className="text-brand-blue">iMessage</span> Automation for Teams and AI Workflows.
        </div>

        <div className="max-w-[586px] w-full text-[18px] font-normal leading-[130%]">
          Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac
          Mini.
        </div>
      </div>

      <CallToActionBtns />
    </div>
  );
};

export default Hero;
