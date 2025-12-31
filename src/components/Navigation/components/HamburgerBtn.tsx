interface HamburgerBtnProps {
  onClick?: () => void;
  isOpen?: boolean;
  className?: string;
}

const HamburgerBtn = ({ onClick, isOpen = false, className = "" }: HamburgerBtnProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className={`flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100 transition cursor-pointer ${className}`}
    >
      <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={
            isOpen
              ? "M6 18L18 6M6 6l12 12" // X icon
              : "M4 6h16M4 12h16M4 18h16" // Hamburger
          }
        />
      </svg>
    </button>
  );
};

export default HamburgerBtn;
