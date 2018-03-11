import React from "react";
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

export default SearchResults;
