import Apple from "../../assets/icons/apple.svg";
import TextBubble from "../../assets/icons/text-bubble.svg";

const Hero = () => {
  return (
    <div className="max-w-[736px] w-full mx-auto flex flex-col items-center gap-8 mt-[44px] border-4">
      <div className="flex flex-col text-center items-center gap-6">
        <div className="flex items-center pt-1 px-2 pb-[5px] text-brand-blue font-medium text-[16px]">
          <img src={TextBubble} alt="Text Icon" className="inline-block mr-2" />
          #1 IMessage Automation Tool
        </div>

        <div className="font-bold text-[64px] leading-[120%]">
          <span className="text-brand-blue">iMessage</span> Automation for Teams and AI Workflows.
        </div>

        <div className="max-w-[586px] w-full text-[18px] font-normal leading-[130%]">
          Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac
          Mini.
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-2">
        <button className="flex max-w-[136px] w-full py-3 px-5 bg-brand-blue text-white cursor-pointer rounded-full items-center justify-center">
          Get Started
        </button>

        <button className="flex border-[#6C788F] border-[0.7px] rounded-full py-3 pl-5 pr-8 items-center gap-3 cursor-pointer">
          <img src={Apple} alt="Apple Icon" />
          <span className="h-[18px] border-[0.5px] bg-[#6C788F]"></span>
          <span className="text-[18px] font-medium whitespace-nowrap">Download the Mac app</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
