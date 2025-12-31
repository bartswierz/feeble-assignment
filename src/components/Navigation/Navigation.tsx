import { Link } from "react-router";
import { slugify } from "../../utils/slugify";
import BrandLogo from "../../assets/icons/brand-logo.svg";
import HamburgerBtn from "./HamburgerBtn";
import { useState } from "react";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = ["How It Works", "Pricing", "Use Case", "FAQ"];
  return (
    <nav className="flex h-[81px] justify-between items-center max-w-[1200px] w-full mx-auto mt-10 py-5 pl-6 pr-5 bg-white rounded-full shadow-[0_4px_12px_rgba(12,12,13,0.05)]">
      <img src={BrandLogo} alt="Logo" />

      <ul className="hidden md:flex text-[#8c97a8] gap-x-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`${slugify(item)}`} className="px-3 py-2 text-[16px] font-medium hover:text-black cursor-pointer">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <button className="hidden md:flex items-center justify-center w-full max-w-[138px] h-[41px] bg-brand-blue text-white font-medium text-[16px] px-[18px] py-[11px] rounded-full cursor-pointer">
        <Link to="contact">Contact Sales</Link>
      </button>

      <div className="md:hidden">
        <HamburgerBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-[102px] left-0 w-full bg-white shadow-md z-10 flex flex-col items-center py-4 md:hidden shadow-[rgba(12,12,13,0.5)]">
          <ul className="w-full flex flex-col items-center text-[#8c97a8] gap-y-4">
            {items.map((item, index) => (
              <li key={index} className="w-full text-center text-[16px] font-medium border-b border-gray-200">
                <Link to={`${slugify(item)}`} className="px-3 py-2 hover:text-black cursor-pointer">
                  {item}
                </Link>
              </li>
            ))}
            <li className="w-full text-center text-[16px] font-medium border-b border-gray-200">
              <Link to="contact" className="px-3 py-2 hover:text-black ">
                Contact Sales
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Menu;
