import React from "react";
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
)

export default Book;
