import { mdiBriefcase, mdiFormatListBulletedType, mdiInformation } from "@mdi/js";
import Container from "./Container";
import NavLink from "./NavLink";

const Nav: React.FC = () => {
  return (
      <nav className={`fixed top-0 left-0 w-full z-20 flex justify-center bg-[rgba(21,27,41,0.5)] backdrop-blur-sm shadow-md`}>
        <Container>
          <NavLink href="#bio" path={mdiInformation} label="BIO" />
          <NavLink href="#resume" path={mdiBriefcase} label="RESUME" />
          <NavLink href="#projects" path={mdiFormatListBulletedType} label="PROJECTS" />
        </Container>
      </nav>
  )
}

export default Nav;