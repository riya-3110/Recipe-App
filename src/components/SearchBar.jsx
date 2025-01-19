import React, { useState } from "react";

export const SearchBar = ({ setSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
  };
  return (
    <div style={{ margin: "20px 0" }}>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};
