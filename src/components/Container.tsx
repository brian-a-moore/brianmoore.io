type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-[960px]">
      {children}
    </div>
  );
};

export default Container;
