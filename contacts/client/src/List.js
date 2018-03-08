import React from "react";

const List = contacts => (
  contacts.map(
    profile =>
      <li
        keys={ profile.id }
        className="contact-list-item"
      >
        <div className="style.contact-list-avatar" style={{
          backgroundImage: `url(${ profile.avatarURL })`
        }}/>
        <div className="style.contact-details">
          <p>{ profile.name }</p>
          <p>{ profile.email }</p>
        </div>
        <button className="contact-remove">

        </button>
      </li>
  )
);

export default List;
