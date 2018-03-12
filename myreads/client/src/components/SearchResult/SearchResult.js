import React from "react";
import PropTypes from "prop-types";
import BookDisplay from "../BookDisplay";

const SearchResults = props => (
  <div className="search-books-results">
    <div className="books-grid" children={
      <h2>{props.error && "oops, nothing found..."}</h2>
    }/>
    <BookDisplay collection={props.collection}
      changeHandler={props.changeHandler}
    />
  </div>
);

const propTypes = {
  error: PropTypes.boolean,
  collection: PropTypes.array.isRequired,
  changeHandler: PropTypes.func.isRequired
};

export default SearchResults;
