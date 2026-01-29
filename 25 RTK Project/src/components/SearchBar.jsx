import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(search));
    setSearch("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex bg-gray-800 gap-5 p-10"
      >
        <input
          className=" w-full border-2 px-4 py-2 text-xl rounded outline-none"
          type="text"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search anything..."
        />
        <button className="border-2 px-4 py-2 text-xl rounded bg-blue-400 text-black outline-none cursor-pointer active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
