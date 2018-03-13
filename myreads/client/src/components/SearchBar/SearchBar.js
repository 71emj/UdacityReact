import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Helper } from "../../util"

const SearchBar = props => {
  const { throttle } = Helper;
  const throttledSearch = throttle(props.searchHandler, 500);
  return (
    <div className="search-books-bar">
      <Link to="/" className="close-search" children="Close"/>
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
SearchBar.propTypes = {
  searchHandler: PropTypes.func.isRequired
};

export default SearchBar;
