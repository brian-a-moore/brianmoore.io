import { mdiBriefcase, mdiFormatListBulletedType, mdiInformation } from "@mdi/js";
import Icon from "@mdi/react";
import Container from "./Container";
import NavLink from "./NavLink";

type Props = {
  isHomeVisible: boolean;
}

const Nav: React.FC<Props> = ({ isHomeVisible }) => {
  return (
      <nav className={`fixed top-0 left-0 w-full z-20 flex justify-center ${isHomeVisible ? 'bg-[rgba(21,27,41,0.5)] backdrop-blur-sm' : 'bg-[#0E2F72] shadow-md'}`}>
        <Container>
          <NavLink href="#bio">
            <Icon path={mdiInformation} size={1} />
            <span>BIO</span>
          </NavLink>
          <NavLink href="#resume">
            <Icon path={mdiBriefcase} size={1} />
            <span>RESUME</span>
          </NavLink>
          <NavLink href="#projects">
            <Icon path={mdiFormatListBulletedType} size={1} />
            <span>PROJECTS</span>
          </NavLink>
        </Container>
      </nav>
  )
}

export default Nav;