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
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae.",
  },
  {
    title: "Software Engineer",
    company: "Mark43",
    start: "2020",
    end: "2022",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae.",
  },
  {
    title: "Full-Stack Developer",
    company: "Entrinsik",
    start: "2019",
    end: "2020",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae.",
  },
  {
    title: "Associate Developer",
    company: "Blue Cross NC",
    start: "2016",
    end: "2019",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae.",
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
