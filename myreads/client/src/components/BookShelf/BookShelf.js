import React from "react";
import BookDisplay from "../BookDisplay";

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfName}</h2>
    <div className="bookshelf-books">
      <BookDisplay collection={props.collection}
        changeHandler={props.changeHandler} />
    </div>
  </div>
);

export default BookShelf;
