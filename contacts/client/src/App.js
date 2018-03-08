import React, { Component } from 'react';
import Compare from "case-compare";
import List from "./List";
import { getAll, remove, create } from "./utils/ContactsAPI";
import { searchOthers, search } from "./utils/Utils";
import "./index.css";

const compare = new Compare();

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
    const route = window.location.pathname.match(/\/(\w+)$/g).toString().substring(1);
    return (
      compare({ route })
        .toCase("addContact", <h1>Hello World</h1>)
        .toAllOther(<List contacts={contacts} delContact={this.delContact} />)
        .Ended((debug, route) => route)
    )
  }
}

export default App;
