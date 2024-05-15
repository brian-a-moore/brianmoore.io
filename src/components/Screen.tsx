
type Props = {
  id?: string;
  style?: React.CSSProperties;
  override?: boolean;
  children: React.ReactNode;
};

const Screen: React.FC<Props> = ({ id, style, override = false, children }) => {
  return (
    <section id={id} className={`bg-slate-900 relative flex flex-col items-center justify-center w-screen ${override ? 'h-screen px-10' : 'h-auto p-10 gap-10'} md:min-h-screen overflow-hidden`} style={style}>
      {children}
    </section>
  );
};

export default Screen;