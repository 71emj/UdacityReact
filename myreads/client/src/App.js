import React from "react";
import { Router, Switch } from "react-router-dom";
import Compare from "case-compare";
import HomePage from "./routes/HomePage";
import SearchPage from "./routes/SearchPage";
import { Helper, BooksAPI } from "./util";
import "./App.css";

const router = Compare({ type: "router" });
const { searchBy, eq } = Helper;
class BooksApp extends React.Component {
  state = {
    library: [],
    searchedResult: [],
    queryError: false
  };

  componentDidMount() {
    return this.getAllAndPutToShelves();
  }

  getAllAndPutToShelves() {
    BooksAPI.getAll()
      .then(collection => {
        return this.setState({ library: collection });
      })
      .catch(console.error.bind(console));
  }

  searchByQuery = query => {
    BooksAPI.search(query)
      .then(res => {
        if (!Array.isArray(res)) {
          throw new Error(
            "OOPS, it seems like we encounter some problem formatting our query."
          );
        }
        return this.setState({ searchedResult: res, queryError: false });
      })
      .catch(err => {
        console.error(err);
        return this.setState({ searchedResult: [], queryError: true });
      });
  };

  changeShelf = evt => {
    const { name: id, value: shelf, emitter } = evt;
    const { fieldName, searchField } = emitter;
    const findId = searchBy("id", searchField);
    BooksAPI.update(findId(id)[0], shelf)
      .then(res => {
        if (res.error) {
          throw new Error("err");
        }
        // confirm change is actually carried
        let result;
        Object.entries(res).forEach(entry => {
          const [name, val] = entry;
          if (result && result[0]) {
            return;
          }
          result = val.filter(refId => eq(refId, id) && eq(name, shelf));
        });
        const updateLib = searchField.map(book => {
          if (
            eq(book.id, result[0]) ||
            (eq(shelf, "none") && eq(book.id, id))
          ) {
            book.shelf = shelf;
          }
          return book;
        });
        return this.setState({ [fieldName]: updateLib });
      })
      .catch(console.error.bind(console));
  };

  render() {
    const { changeShelf, searchByQuery, state } = this;
    const { searchedResult, library, queryError } = state;
    const pathname = window.location.pathname;

    return (
      <div className="app">
        {router({ pathname })
          .toManyPath(
            ["/", "/index", "/home"],
            <HomePage update={changeShelf} books={library} />
          )
          .toManyPath(
            ["/search", "/find", "/books"],
            <SearchPage
              update={changeShelf}
              search={searchByQuery}
              searched={searchedResult}
              library={library}
              queryError={queryError}
            />
          )
          .toAllOther(<h1>OOPS, 404</h1>)
          .Ended((debug, route) => route)}
      </div>
    );
  }
}

export default BooksApp;
