import { mdiArrowUp, mdiEmail, mdiGithub, mdiLinkedin, mdiWeb } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect, useRef, useState } from "react";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import IconLink from "../components/IconLink";
import Nav from "../components/Nav";
import Project from "../components/Project";
import Screen from "../components/Screen";
import Skill from "../components/Skill";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import WorkExperience from "../components/WorkExperience";
import { jobs, projects, skills } from "../data";

const App: React.FC = () => {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHomeVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed top-0 bg-[#297878] left-0 w-screen h-screen pt-[80px] md:pt-[64px] overflow-y-auto"
      style={{
        scrollBehavior: "smooth",
        scrollPaddingTop: "40px",
      }}
    >
      <Nav />
      {!isHomeVisible && (
        <a
          className="fixed bottom-10 right-10 z-10 size-10 rounded-full flex items-center justify-center shadow-lg"
          href="#home"
          title="To Top"
          style={{
            background: "#0E2F72",
            backgroundImage: "linear-gradient(#297878, #0E2F72)",
          }}
        >
          <Icon path={mdiArrowUp} size={1} color="#fff" />
        </a>
      )}
      <div id="home" ref={homeRef}>
        <Screen style={{
          background: "#0E2F72",
          backgroundImage: "linear-gradient(#297878, #0E2F72)",
        }}>
          <Container>
            <div className="flex flex-col gap-y-1 sm:gap-y-4">
              <h1
                className="text-4xl text-white sm:text-5xl md:text-6xl lg:text-8xl font-semibold"
                style={{
                  textShadow: "0 4px 4px rgba(0,0,0,0.3)",
                }}
              >
                Brian Moore
              </h1>
              <h2
                className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl"
                style={{
                  textShadow: "0 4px 4px rgba(0,0,0,0.3)",
                }}
              >
                Software Engineer
              </h2>
              <div className="flex gap-x-2 sm:gap-x-4">
                <IconLink href="https://www.linkedin.com/in/brian020113/">
                  <Icon path={mdiLinkedin} size={1} />
                </IconLink>
                <IconLink href="https://github.com/brian-a-moore">
                  <Icon path={mdiGithub} size={1} />
                </IconLink>
                <IconLink href="https://sunami.io">
                  <Icon path={mdiWeb} size={1} />
                </IconLink>
                <IconLink href="mailto:brian@sunami.io">
                  <Icon path={mdiEmail} size={1} />
                </IconLink>
              </div>
            </div>
            <Avatar />
          </Container>
        </Screen>
      </div>
      <Screen id="bio">
        <Title>BIO</Title>
        <section className="flex flex-col gap-y-4">
          <Container>
            <div className="flex flex-col gap-y-4">
              <p>
                I am a self-taught developer with nearly 10 years of experience
                building production-ready applications, focusing on frontend,
                mobile, dev ops, and backend technologies. My journey into
                coding began in 2016 while working as a customer service
                representative at Blue Cross NC. I noticed my classmates
                struggling with the complexity of the job, so I decided to build
                a web application in jQuery to assist them. Despite not having
                coded since high school, I was motivated to keep improving and
                adding new features as my peers challenged me to do more.
              </p>
              <p>
                Within a month, the application had spread to hundreds of users
                and ultimately won runner-up at the 2017 COO Innovation
                Showcase, competing against over 20 other company projects and
                initiatives. This success led to my transition into a full-time
                developer role, where I continued to create solutions in the
                Innovation Garage for several years before seeking new
                opportunities.
              </p>
              <p>
                In 2020, I co-founded <a href="https://sunami.io">Sunami LLC</a>
                , a company dedicated to developing applications that make life
                more accessible for people. We are currently working on several
                notable projects aimed at helping people learn about politics,
                manage stress, handle parenting, and navigate the legal system
                in innovative ways.
              </p>
            </div>
          </Container>
        </section>
      </Screen>
      <Screen id="resume">
        <Title>RESUME</Title>
        <Container>
          <section className="flex flex-col gap-10">
            <Subtitle>EXPERIENCE</Subtitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {jobs.map((job, index) => (
                <WorkExperience key={index} job={job} />
              ))}
            </div>
            <Subtitle>SKILLS</Subtitle>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <Skill key={index} skill={skill} />
              ))}
            </div>
          </section>
        </Container>
      </Screen>
      <Screen id="projects" style={{ paddingBottom: '50vh' }}>
        <Title>PROJECTS</Title>
        <Container>
          <section className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            </div>
          </section>
        </Container>
      </Screen>
    </div>
  );
};

export default App;
