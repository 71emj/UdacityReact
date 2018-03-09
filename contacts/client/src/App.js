import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Router from "case-compare";
import List from "./List";
import CreateContact from "./CreateContact";
import { getAll, remove, create } from "./utils/ContactsAPI";
import { searchOthers, search } from "./utils/Utils";
import "./index.css";

const router = new Router({ type: "router" });

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    getAll().then(contacts => this.setState({ contacts }));
  }

  delContact = evt => {
    const { id } = evt.target;
    const { contacts } = this.state;
    const findUser = search(contacts);
    const user = findUser("id", id)[0];
    remove(user)
      .then(contact => {
        const remove = searchOthers(contacts);
        this.setState({ contacts: remove("id", contact.id) })
      })
      .catch(console.error.bind(console));
  }

  createContact = contact => {
    create(contact).then(res =>{
      if (res.error) {
        return alert("Oops it seems like you are missing some info...");
      }
      this.setState(({ contacts }) => {
        const updated = [...contacts, res];
        // seems to me that, even with react-router I can simply
        // use location.assign instead of history object
        // to navigate through my browsing history
        window.location.assign("/");
        return { contacts: updated };
      });
    })
    .catch(console.error.bind(console));
  }

  render() {
    const { contacts } = this.state;
    const pathname = window.location.pathname;

    return (
      router({ pathname })
        .toManyPath(
          ["/", "/home", "/index"],
          <List contacts={contacts} delContact={this.delContact} />
        )
        .toPath(
          "/create",
          <CreateContact createContact={this.createContact}/>
        )
        .toAllOther(<h1>Oops, 404</h1>)
        .Ended((debug, route) => route)

      // /// Using react-router /////
      // <div className="app">
      //   <Switch>
      //     <Route exact path="/" render={() =>
      //       <List contacts={contacts} delContact={this.delContact} />
      //     }>
      //     </Route>
      //     <Route path="/create" render={({ history }) =>
      //       <CreateContact createContact={contact => {
      //         this.createContact(contact);
      //         history.push("/");
      //       }}/>
      //     }></Route>
      //   </Switch>
      // </div>
    )
  }
}

export default App;
