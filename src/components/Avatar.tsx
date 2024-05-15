const Avatar: React.FC = () => {
  return (
    <div
      id="avatar-circle"
      className="bg-slate-600 size-32 sm:size-60 lg:size-80 rounded-full overflow-hidden shadow-lg"
    >
      <img
        src="../../brian-moore.png"
        alt="Brian Moore"
        title="Brian Moore"
        className="w-full h-full object-cover"
        style={{
          filter: "drop-shadow(0 0 16px rgba(0, 0, 0, 0.3))",
        }}
      />
    </div>
  );
};

export default Avatar;