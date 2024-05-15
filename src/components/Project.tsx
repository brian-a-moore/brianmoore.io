import { TProject } from "../data";
import Subtitle from "./Subtitle";

type Props = {
  project: TProject;
};

const Project: React.FC<Props> = ({ project: { title, desc, img, link } }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-2 hover:bg-[rgba(255,255,255,0.1)] p-10 rounded-lg"
    >
      <Subtitle>{title.toUpperCase()}</Subtitle>
      <div className="bg-[rgba(0,0,0,0.2)] w-full h-40 flex items-center justify-center p-10 rounded-lg">
        <img className=" h-full" src={img} alt={title} />
      </div>
      <p className="text-sm">{desc}</p>
    </a>
  );
};

export default Project;
