import { Link } from "react-router";
import BrandLogo from "../../assets/icons/brand-logo.svg";
import HamburgerBtn from "./HamburgerBtn";
import { useState } from "react";
import NavigationLinks from "./NavigationLinks";
import MobileNavMenu from "./MobileNavMenu";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkList = ["How It Works", "Pricing", "Use Case", "FAQ"];

  return (
    <nav className="flex h-[81px] justify-between items-center max-w-[1200px] w-full mx-auto mt-10 py-5 pl-6 pr-5 bg-white rounded-full shadow-[0_4px_12px_rgba(12,12,13,0.05)]">
      <img src={BrandLogo} alt="Logo" />

      <NavigationLinks links={linkList} />

      <button className="hidden md:flex items-center justify-center w-full max-w-[138px] h-[41px] bg-brand-blue text-white font-medium text-[16px] px-[18px] py-[11px] rounded-full cursor-pointer">
        <Link to="contact" className="whitespace-nowrap">
          Contact Sales
        </Link>
      </button>

      <div className="md:hidden">
        <HamburgerBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen && <MobileNavMenu links={[...linkList, "Contact Sales"]} />}
    </nav>
  );
};

export default Menu;
