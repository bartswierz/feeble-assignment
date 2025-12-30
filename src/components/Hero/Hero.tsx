import AppleIcon from "../../assets/appleIcon.svg";

const Hero = () => {
  return (
    <div className="border max-w-[736px] flex flex-col justify-center items-center w-full mx-auto">
      <div>#1 IMessage Automation Tool</div>
      <div className="flex text-center font-bold text-[64px] line-height-[120%]">
        <div>
          <span className="text-brand-blue">iMessage</span> Automation for Teams and AI Workflows.
        </div>
      </div>
      <div className="flex align-center items-center max-w-[586px] w-full text-[18px] font-normal">
        Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac
        Mini.
      </div>
      {/* CTA Buttons */}
      <div className="flex gap-2 h-[46px]">
        <button className="flex max-w-[136px] w-full py-3 px-5 bg-brand-blue text-white cursor-pointer rounded-full items-center justify-center">
          Get Started
        </button>
        <button className="flex max-w-[266px] w-full border-[#6C788F] border-[0.7px] rounded-full py-3 px-5 justify-between cursor-pointer">
          <img src={AppleIcon} alt="Apple Icon" className="inline-block mr-2" />
          <div className="h-5 w-px bg-gray-300"></div>
          <span className="text-[18px] font-medium">Download the Mac app</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
