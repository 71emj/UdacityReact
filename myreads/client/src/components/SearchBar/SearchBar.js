import React from "react";
import { Helper } from "../../util"

const SearchBar = props => {
  const { throttle } = Helper;
  const throttledSearch = throttle(props.searchHandler, 800);
  return (
    <div className="search-books-bar">
      <a href="/" className="close-search" children="Close"/>
      <div className="search-books-input-wrapper">
        <input type="text"
          placeholder="Search by title or author"
          onChange={evt => {
            const { value } = evt.target;
            throttledSearch(value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
