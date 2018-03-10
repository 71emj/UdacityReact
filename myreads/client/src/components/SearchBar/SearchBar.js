import React from "react";
import { throttle } from "../../util/Helper"

const SearchBar = props => {
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
