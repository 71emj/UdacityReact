import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search, escapeRegExp } from "./utils/Utils";
import PropTypes from "prop-types";

class List extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    delContact: PropTypes.func.isRequired
  }

  state = {
    query: ""
  }

  searchHandler = evt => {
    const { value } = evt.target;
    this.setState({ query: value });
  }

  render() {
    const { query } = this.state;
    const { contacts, delContact } = this.props;
    const searchFor = search(contacts);
    const users = searchFor("name", new RegExp(escapeRegExp(query) || /.*/, "i"));

    return (
      <div key="contact list" className="list-contacts" >
        <div key="search" className="list-contacts-top">
          <input
            className="search-contacts"
            name="search"
            type="text"
            onChange={this.searchHandler}
            value={query}
          />
          {/* <a href="/create" className="add-contact">Add Contact</a> */}
          <Link to="/create"
            className="add-contact"
          >Add Contact</Link>
        </div>
        { query &&
          <div className="showing-contacts">
            {`Search showing ${users.length} out of ${contacts.length} contacts,`}
            <button value="" onClick={this.searchHandler}>reset?</button>
          </div>
        }
        <ol className="contact-list">
          {
            users.map(profile =>
              <li key={profile.id} className="contact-list-item" >
                <div className="contact-avatar"
                  style={{
                    backgroundImage: `url(${profile.avatarURL})`
                  }}
                />
                <div className="contact-details">
                  <p>{profile.name}</p>
                  <p>{profile.email}</p>
                </div>
                <button id={profile.id} className="contact-remove"
                  onClick={delContact}
                />
              </li>
            )}
        </ol>
      </div>
    );
  }
}

export default List;
