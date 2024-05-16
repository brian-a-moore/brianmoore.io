import Container from "./Container";

type Props = {
    children: React.ReactNode;
}

const Banner: React.FC<Props> = ({ children }) => {
  return (
    <section className="flex justify-center w-full">
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Banner;