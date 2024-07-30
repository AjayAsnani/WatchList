import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-6 mt-4"
    >
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for Movies..."
        className="flex-grow p-2 text-lg border-none focus:outline-none"
      />
      <button
        type="submit"
        className="bg-red-500 text-white px-4 py-2 font-bold"
      >
        Search
      </button>
    </form>
  );
};
export default SearchBar;
