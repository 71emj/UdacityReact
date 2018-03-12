import React from "react";
import PropTypes from "prop-types";
import ShelfChanger from "../ShelfChanger";

const styling = {
  width: 128,
  height: 192,
  backgroundImage: 'url("./image/image_not_avail.png")' // default
};

const Book = props => (
  <div className="book">
    <div key="cover" className="book-top">
      <div key="cover"
        className="book-cover"
        style={Object.assign(
          styling,
          { backgroundImage: `url(${props.cover})` }
        )}
      />
      <ShelfChanger key="category handler"
        changeHandler={props.shelfChanger}
        name={props.refId}
        onShelf={props.shelfName}
      />
    </div>
    <div key="title"
      className="book-title"
      children={props.title}
    />
    <div key="author"
      className="book-authors"
      children={props.authors}
    />
  </div>
);

const propTypes = {
  cover: PropTypes.string,
  shelfChanger: PropTypes.func.isRequired,
  refId: PropTypes.string.isRequired,
  shelfName: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.string
};

export default Book;
