import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search animate-fade-in">
      <div>
        <img src="search.svg" alt="" />
        <input
          type="text"
          placeholder="Search Through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
