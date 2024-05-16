import Icon from "@mdi/react";
import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  path: string;
  label: string;
}

const NavLink: React.FC<Props> = ({
  path,
  label,
  ...props
}) => {
  return (
    <a
      {...props}
      className="w-[33%] flex flex-col md:flex-row items-center justify-center h-20 md:h-16 gap-2 md:gap-4 text-white hover:bg-[rgba(255,255,255,0.1)] hover:text-[#c6fafa]"
    >
      <Icon path={path} size={1} />
      <span className="text-sm md:text-base">{label}</span>
    </a>
  );
};

export default NavLink;