const Line = ({ title, symbol }) => {
  return (
    <div className="bg-gray-100 rounded w-full flex px-2 py-2 border gap-2">
      <span>{symbol}</span>
      <span>{title}</span>
    </div>
  );
};

export default Line;
