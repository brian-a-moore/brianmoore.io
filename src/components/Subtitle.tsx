import { HTMLAttributes } from "react";

const Subtitle: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({ children }) => {
  return <h2 className="w-full text-center text-2xl">{children}</h2>;
};

export default Subtitle;