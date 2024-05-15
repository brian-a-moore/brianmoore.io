export type TJob = {
  title: string;
  company: string;
  start: string;
  end: string;
  desc: string;
};

export const jobs: TJob[] = [
  {
    title: "API Developer",
    company: "Ally Financial Services",
    start: "2022",
    end: "Present",
    desc: "Build and design features for our company’s main customer information API that is built using Node.JS, Express, Serverless and Typescript. Focusing heavily on AWS serverless infrastructure, such as; Lambdas, SQS, DynamoDB, EventBridge, API Gateway and more.",
  },
  {
    title: "Software Engineer",
    company: "Mark43",
    start: "2020",
    end: "2022",
    desc: "Worked primarily on the front-end using React.JS and Electron to build a multi-platform real-time Computed-aided Dispatch application for first responders. Responsible for multiple mission-critical features using technologies such as; Redux, RxJS, WebSockets, Docker and IndexDB.",
  },
  {
    title: "Full-Stack Developer",
    company: "Entrinsik",
    start: "2019",
    end: "2020",
    desc: "Designed and developed features for an industry-leading data analytics tool using Node/Hapi.JS, Angular, PostgreSQL and the popular visualization library Highcharts. Also did some design and prototyping using Adobe XD.",
  },
  {
    title: "Associate Developer",
    company: "Blue Cross NC",
    start: "2016",
    end: "2019",
    desc: "Worked in the Innovation Garage where I was tasked to develop and deliver full-stack applications independently that were built in Node.JS and React using AWS, Jenkins and Docker. Successfully deployed five projects to production including several award-winning applications.",
  },
];

export type TSkill = {
  title: string;
  exp: number;
};

export const skills: TSkill[] = [
  {
    title: "HTML",
    exp: 95,
  },
  {
    title: "CSS",
    exp: 95,
  },
  {
    title: "JavaScript",
    exp: 90,
  },
  {
    title: "TypeScript",
    exp: 90,
  },
  {
    title: "React",
    exp: 85,
  },
  {
    title: "React Native",
    exp: 80,
  },
  {
    title: "Node / Express",
    exp: 85,
  },
  {
    title: "TailwindCSS / Styled Components",
    exp: 65,
  },
  {
    title: "Git",
    exp: 90,
  },
  {
    title: "GitHub / GitLab",
    exp: 85,
  },
  {
    title: "Docker",
    exp: 65,
  },
  {
    title: "Terraform / SST",
    exp: 65,
  },
  {
    title: "Prisma / Sequelize",
    exp: 70,
  },
  {
    title: "PostgeSQL / MySQL",
    exp: 70,
  },
  {
    title: "AWS Services",
    exp: 70,
  },
  {
    title: "Jest / Mocha",
    exp: 70,
  },
  {
    title: "Python",
    exp: 25,
  },
  {
    title: "RESTful APIs",
    exp: 75,
  },
  {
    title: "CI/CD",
    exp: 70,
  },
  {
    title: "Serverless",
    exp: 65,
  },
  {
    title: "NextJS / Vercel",
    exp: 65,
  },
  {
    title: "Redis",
    exp: 45,
  },
  {
    title: "API Development",
    exp: 75,
  },
  {
    title: "Jira / Confluence",
    exp: 55,
  },
];
