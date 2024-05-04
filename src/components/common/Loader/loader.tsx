const Loader = ({ h, w }: { h: number; w: number }) => {
  const heightClass = `h-${h}`;
  const widthClass = `w-${w}`;

  return (
    <div
      className={`${heightClass} ${widthClass} animate-spin rounded-full border-4 border-solid border-primary border-t-transparent`}
    ></div>
  );
};

export default Loader;
