import React from "react";
import SearchBar from "../SearchBar";
import SearchResult from "../SearchResult";
import { bindMethod } from '../../util/Helper';

const SearchPage = props => {
  const { update, search, searched } = props;
  const updateHandler = bindMethod(update, "searchedResult");
  return(
    <div className="search-books">
      <SearchBar searchHandler={search} />
      <SearchResult collection={searched}
        changeHandler={updateHandler}
      />
    </div>
  );
}

export default SearchPage;
