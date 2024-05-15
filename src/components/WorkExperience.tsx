import { TJob } from "../data";

type Props = {
  job: TJob
};

const WorkExperience: React.FC<Props> = ({
  job: { title, company, start, end, desc },
}) => {
  return (
    <div className='flex flex-col gap-1'>
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className='flex gap-x-2'>
        <h2>{company}</h2>
        <h2>
          {start} - {end}
        </h2>
      </div>
      <p className="text-sm">{desc}</p>
    </div>
  );
};

export default WorkExperience;
