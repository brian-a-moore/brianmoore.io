import { TSkill } from "../data";

type Props = {
  skill: TSkill;
};

const Skill: React.FC<Props> = ({ skill: { title, exp } }) => {
  return (
    <div className='flex flex-col gap-y-1'>
      <h1 title={title} className="text-sm text-ellipsis whitespace-nowrap overflow-hidden pr-2">{title}</h1>
      <progress className="w-full" value={exp} max="100" />
    </div>
  );
};

export default Skill;
