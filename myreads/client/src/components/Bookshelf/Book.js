import React, { Component } from "react";
import shelfChanger from "./ShelfChanger";

const styling = {
  width: 128,
  height: 192,
  backgroundImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")' // default
}

class Book extends Component {
  state = {
    whatShelf: "none"
  }

  shelfChangeHandler = evt => {
    console.log(evt.target);
  }

  render() {
    return (
      <div className="book">
        <div key="cover" className="book-top">
           <div key="cover"
             className="book-cover"
             style={styling}
           />
           <shelfChanger key="category handler"
             onChange={this.shelfChangeHandler}
           />
        </div>
        <div key="title"
          className="book-title"
          children="To Kill a Mockingbird"
        />
        <div key="author"
          className="book-authors"
          children="Harper Lee"
        />
      </div>
    )
  }
}

export default Book;
