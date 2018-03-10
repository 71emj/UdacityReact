import React from "react";
import ShelfChanger from "../ShelfChanger";

const styling = {
  width: 128,
  height: 192,
  backgroundImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")' // default
}

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
