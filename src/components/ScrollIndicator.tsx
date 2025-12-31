import ArrowDown from "../assets/icons/arrow-down.svg";

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center mt-[12vh] h-[63px] justify-between">
      <span className="text-[18px] font-medium">Scroll to learn more</span>
      <img src={ArrowDown} alt="Arrow Down Icon" />
    </div>
  );
};

export default ScrollIndicator;
