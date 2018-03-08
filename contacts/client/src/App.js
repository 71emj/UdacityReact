import React, { Component } from 'react';
import List from "./List";

const contacts = [
  {
    "id": "ryan",
    "name": "Ryan Florence",
    "email": "ryan@reacttraining.com",
    "avatarURL": "http://localhost:5001/ryan.jpg"
  },
  {
    "id": "michael",
    "name": "Michael Jackson",
    "email": "michael@reacttraining.com",
    "avatarURL": "http://localhost:5001/michael.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "email": "tyler@reacttraining.com",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
]

function search(array) {
  return (prop, value) => array.filter(elem => {
    return elem.id === value;
  })[0];
}
const fetchUser = search(contacts);

class App extends Component {
  render() {
    return (
      <ol className="contact-list">
        { List(contacts) }
      </ol>
    )
  }
}

export default App;
