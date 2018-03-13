import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./routes/HomePage";
import SearchPage from "./routes/SearchPage";
import { Helper, BooksAPI } from "./util";
import "./App.css";

const { searchBy, eq } = Helper;
class BooksApp extends React.Component {
  /** TODO could implement query history and autocomplete funciton
  * filter out failed queries and only store successful ones in state
  */
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
        return this.setState({ searchedResult: [], queryError: query ? true : false });
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
        /* confirm server update successful */
        const result = Object.entries(res).reduce((result, entry) => {
          const [name, val] = entry;
          if (result[0]) {
            return result;
          }
          return val.filter(refId => eq(refId, id) && eq(name, shelf));
        }, []);
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
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() =>
            <HomePage update={changeShelf} books={library} />
          }/>
          <Route path="/search" render={({ history }) =>
            <SearchPage
              update={changeShelf}
              search={searchByQuery}
              searched={searchedResult}
              library={library}
              queryError={queryError}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
