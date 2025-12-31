import { Link } from "react-router";
import { slugify } from "../../utils/slugify";

interface MobileNavMenuProps {
  links: string[];
}

const MobileNavMenu = ({ links = [] }: MobileNavMenuProps) => {
  return (
    <div className="absolute top-[102px] left-0 w-full bg-white shadow-md z-10 flex flex-col items-center py-4 md:hidden shadow-[rgba(12,12,13,0.5)]">
      <ul className="w-full flex flex-col items-center text-[#8c97a8] gap-y-4">
        {links.map((item, index) => (
          <li key={index} className="w-full text-center text-[16px] font-medium border-b border-gray-200">
            <Link to={`${slugify(item)}`} className="px-3 py-2 hover:text-black cursor-pointer">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavMenu;
