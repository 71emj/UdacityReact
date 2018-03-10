import React from "react";
import BookDisplay from "../BookDisplay";

const SearchResults = props => (
  <div className="search-books-results">
    <BookDisplay collection={props.collection}
      changeHandler={props.changeHandler}
    />
  </div>
);

export default SearchResults;
