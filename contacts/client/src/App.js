import React, { Component } from 'react';
import Router from "case-compare";
import List from "./List";
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
        const remaining = searchOthers(contacts);
        this.setState({ contacts: remaining("id", contact.id) })
      })
      .catch(console.log.bind(console));
  }

  render() {
    const { contacts } = this.state;
    const regexp = new RegExp(/\/(\w+)$/, "g");
    const pathname = window.location.pathname;
    
    return (
      router({ route: window.location.pathname })
        .toPath("/addContact", <h1>Hello World</h1>)
        .Ended((debug, route) =>
          route || (<List contacts={contacts} delContact={this.delContact} />)
        )
    )
  }
}

export default App;
