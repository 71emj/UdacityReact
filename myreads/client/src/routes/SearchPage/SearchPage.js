import React from "react";
import PropTypes from "prop-types";
import SearchBar from "../../components/SearchBar";
import SearchResult from "../../components/SearchResult";
import { Helper } from "../../util";

const SearchPage = props => {
  const { bindEvent, searchBy } = Helper;
  const { update, search, searched, library, queryError } = props;
  const searchUpdate = bindEvent(update, {
    fieldName: "searchedResult",
    searchField: searched
  });

  /* assigning shelf prop to books already in library */
  const libraryBooks = library.map(book => ({
    id: book.id,
    shelf: book.shelf
  }));
  const findId = searchBy("id", libraryBooks);
  const searchedWithShelf = searched.map(book => {
    const id = book.id;
    const matchResult = findId(id)[0];
    book.shelf = matchResult ? matchResult.shelf : null;
    return book;
  });
  return (
    <div className="search-books">
      <SearchBar searchHandler={search} />
      <SearchResult
        error={queryError}
        collection={searchedWithShelf}
        changeHandler={searchUpdate}
      />
    </div>
  );
};

const propTypes = {
  update: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  searched: PropTypes.array.isRequired
};

export default SearchPage;
