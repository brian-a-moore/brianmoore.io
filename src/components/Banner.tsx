import Container from "./Container";

type Props = {
    children: React.ReactNode;
}

const Banner: React.FC<Props> = ({ children }) => {
  return (
    <section className="z-10 flex justify-center w-full">
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Banner;