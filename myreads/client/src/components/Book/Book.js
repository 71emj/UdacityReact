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
    <div className="book-top">
      <div className="book-cover"
        style={Object.assign(
          styling,
          { backgroundImage: `url(${props.cover})` }
        )}
      />
      <ShelfChanger name={props.refId}
        changeHandler={props.shelfChanger}
        onShelf={props.shelfName}
      />
    </div>
    <div className="book-title"
      children={props.title}
    />
    <div className="book-authors"
      children={props.authors}
    />
  </div>
);

Book.propTypes = {
  cover: PropTypes.string,
  shelfChanger: PropTypes.func.isRequired,
  refId: PropTypes.string.isRequired,
  shelfName: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.string
};

export default Book;
