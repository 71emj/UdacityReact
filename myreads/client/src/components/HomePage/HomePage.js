import React from "react";
import BookShelf from "../BookShelf";
import { bindMethod } from '../../util/Helper';

const HomePage = props => {
  const { update, books } = props;
  const { reading, wantTo, read } = books;
  const updateReading = bindMethod(update, "reading");
  const updateWantTo = bindMethod(update, "wantTo");
  const updateRead = bindMethod(update, "read");
  return(
    <div className="list-books">
      <div className="list-books-title"
        children={<h1>MyReads</h1>}
      />
      <div className="list-books-content">
          <BookShelf key="reading"
            shelfName="Currently Reading"
            collection={reading}
            changeHandler={updateReading}
          />
          <BookShelf key="wantTo"
            shelfName="Want to Read"
            collection={wantTo}
            changeHandler={updateWantTo}
          />
          <BookShelf key="read"
            shelfName="Read"
            collection={read}
            changeHandler={updateRead}
          />
      </div>
      <div className="open-search">
        <a href="/search" children="Add a book" />
      </div>
    </div>
  );
}

export default HomePage;
