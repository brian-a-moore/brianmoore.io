import { HTMLAttributes } from "react";

const Title: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ children }) => {
  return <h1 className="text-3xl font-semibold text-[#c6fafa]">{children}</h1>;
};

export default Title;