import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookShelf from "../../components/BookShelf";
import { Helper } from "../../util";
import shelves from "./shelves.json";

const HomePage = props => {
  const { bindEvent, searchBy } = Helper;
  const { update, books: lib } = props;
  const sortBooks = searchBy("shelf", lib);

  const libraryUpdate = bindEvent(update, {
    fieldName: "library",
    searchField: lib
  });
  return (
    <div className="list-books">
      <div className="list-books-title" children={<h1>MyReads</h1>} />
      <div
        className="list-books-content"
        children={shelves.map(({ title, name, alias }) => (
          <BookShelf
            key={alias}
            shelfName={title}
            collection={sortBooks(name, lib.length)}
            changeHandler={libraryUpdate}
          />
        ))}
      />
      <div className="open-search">
        <a href="/search" children="Add a book" />
        {/* <Link to="/search" children="Add a book"/> */}
      </div>
    </div>
  );
};

const propTypes = {
  update: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default HomePage;
