const Search = ({ state, setState }) => {
  return (
    <div className="w-1/2 flex flex-col gap-12 items-center">
      <h1 className="text-xl font-light sm:text-3xl">😎 Emoji Search 😎</h1>
      <input
        type="text"
        value={state}
        placeholder="Search for an emoji..."
        onChange={(e) => {
          setState(e.target.value);
        }}
        className="w-full p-2 border-2 border-gray-300 rounded-lg bg-slate-100"
      />
    </div>
  );
};

export default Search;
