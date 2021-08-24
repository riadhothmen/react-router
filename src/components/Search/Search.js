import React from "react";
import StarRating from "../StarRating/StarRating";
import "./Search.css";

const Search = ({
  handleSearch,
  searchValue,
  handleSearchRate,
  searchRate,
}) => {
  return (
    <div className="header-container">
      <h1 className="title">BEST MOVIES</h1>
      <p style={{textAlign:"center"}}>Filter the movies with title/ rate.</p>
      <div className="search-container">
        <input type="text" value={searchValue} onChange={handleSearch} />
        <StarRating rate={searchRate} handleRate={handleSearchRate} />
      </div>
    </div>
  );
};

export default Search;