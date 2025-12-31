import { Link } from "react-router";
import { slugify } from "../../utils/slugify";

interface NavigationLinksProps {
  links: string[];
}

const NavigationLinks = ({ links }: NavigationLinksProps) => {
  return (
    <ul className="hidden md:flex text-[#8c97a8] gap-x-4">
      {links.map((item, index) => (
        <li key={index}>
          <Link to={`${slugify(item)}`} className="px-3 py-2 text-[16px] font-medium hover:text-black cursor-pointer">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;
