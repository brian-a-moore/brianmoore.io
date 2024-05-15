import { AnchorHTMLAttributes } from "react";

const NavLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return (
    <a
      {...props}
      className="w-[33%] flex flex-col md:flex-row items-center justify-center h-20 md:h-16 gap-2 md:gap-4 text-white hover:bg-[rgba(255,255,255,0.1)] hover:text-[#c6fafa]"
    >
      {children}
    </a>
  );
};

export default NavLink;