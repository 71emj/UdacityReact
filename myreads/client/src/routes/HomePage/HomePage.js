import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import BookShelf from "../../components/BookShelf";
import { Helper } from '../../util';

const HomePage = props => {
  const { bindEvent, searchBy } = Helper;
  const { update, books: lib } = props;
  const sortBooks = searchBy("shelf", lib);

  const reading = sortBooks("currentlyReading", lib.length);
  const wantTo = sortBooks("wantToRead", lib.length);
  const read = sortBooks("read", lib.length);
  const libraryUpdate = bindEvent(
    update,
    { fieldName: "library", searchField: lib }
  );
  return(
    <div className="list-books">
      <div className="list-books-title"
        children={<h1>MyReads</h1>}
      />
      <div className="list-books-content">
          <BookShelf key="reading"
            shelfName="Currently Reading"
            collection={reading}
            changeHandler={libraryUpdate}
          />
          <BookShelf key="wantTo"
            shelfName="Want to Read"
            collection={wantTo}
            changeHandler={libraryUpdate}
          />
          <BookShelf key="read"
            shelfName="Read"
            collection={read}
            changeHandler={libraryUpdate}
          />
      </div>
      <div className="open-search">
        <a href="/search" children="Add a book" />
        {/* <Link to="/search" children="Add a book"/> */}
      </div>
    </div>
  );
}

const propTypes = {
  update: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default HomePage;
