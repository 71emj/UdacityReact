import React from "react";
import Router from "case-compare";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import { getAll, search, update } from "./util/BooksAPI";
import { isType, searchBy } from "./util/Helper";
import "./App.css";

const router = new Router({ type: "router" });
class BooksApp extends React.Component {
  state = {
    all: [],
    reading: [],
    wantTo: [],
    read: [],
    searchedResult: []
  };

  componentDidMount() {
    this.getAllAndPutToShelf();
  }

  getAllAndPutToShelf() {
    getAll()
      .then(collection => {
        const shelves = { all: [], reading: [], wantTo: [], read: [] };
        const sort = (shelves, book) => {
          book.shelf.match(/read/) && shelves["read"].push(book);
          book.shelf.match(/reading/i) && shelves["reading"].push(book);
          book.shelf.match(/wantTo/i) && shelves["wantTo"].push(book);
          shelves["all"].push(book);
          return shelves;
        };
        this.setState(collection.reduce(sort, shelves));
      })
      .catch(console.error.bind(console));
  }

  searchByQuery = query => {
    search(query)
      .then(res => {
        const { searchResults } = this.state;
        if (!isType(res, "array")) {
          throw new Error("OOPS, it seems like we encounter some problem contructing query.");
        }
        return this.setState({ searchedResult: res });
      })
      .catch(console.error.bind(console));
  }

  changeShelf = updateInfo => {
    const { name: id, value: shelf, caller } = updateInfo;
    const findId = searchBy("id", this.state[caller]);
    update(findId(id)[0], shelf)
      .then(res => {
        console.log(res);
      })
      .catch(console.error.bind(console));
  }

  render() {
    const { changeShelf, searchByQuery, state } = this;
    const pathname = window.location.pathname;
    return (
      <div className="app">
        {
          router({ pathname })
            .toManyPath(
              ["/", "/index", "/home"],
              <HomePage update={changeShelf} books={state} />
            )
            .toManyPath(
              ["/search", "/find", "/books"],
              <SearchPage
                update={changeShelf}
                search={searchByQuery}
                searched={state.searchedResult}
              />
            )
            .toAllOther(<h1>OOPS, 404</h1>)
            .Ended((debug, route) => route)
        }
      </div>
    );
  }
}

export default BooksApp;
