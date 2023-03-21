interface titleInterface {
  title: string;
  subtitle: string;
}

export const Title = ({ title, subtitle }: titleInterface) => {
  return (
    <div className="py-5 relative text-center text-main mb-14 pb-4 text-4xl">
      <div className="absolute bottom-0 left-1/2 w-44 h-1 bg-second -translate-x-1/2"></div>
      {title}
      <div className="absolute px-3 text-lg bg -bottom-3 left-1/2 text-main bg-white -translate-x-1/2">
        {subtitle}
      </div>
    </div>
  );
};
