import { AnchorHTMLAttributes } from "react";

const IconLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="size-8 md:size-10 rounded-full flex items-center justify-center text-white hover:bg-[rgba(255,255,255,0.2)] hover:text-[#c6fafa]"
    >
      {children}
    </a>
  );
};

export default IconLink;
