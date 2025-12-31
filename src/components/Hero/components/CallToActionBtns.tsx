import Apple from "../../../assets/icons/apple.svg";

const CallToActionBtns = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-[54px] items-center">
      <button className="flex md:max-w-[136px] w-full py-3 px-5 bg-brand-blue text-white cursor-pointer rounded-full items-center justify-center">
        Get Started
      </button>

      <button className="flex border-[#6C788F] border-[0.7px] rounded-full py-3 pl-5 pr-8 items-center gap-3 cursor-pointer">
        <img src={Apple} alt="Apple Icon" />
        <div className="h-[18px] p-[0.5px] bg-[#6C788F]" />
        <span className="whitespace-nowrap">Download the Mac app</span>
      </button>
    </div>
  );
};

export default CallToActionBtns;
