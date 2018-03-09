import React, { Component } from "react";
import { Link } from "react-router-dom";
import formSerialize from "form-serialize";
import ImageInput from "./ImageInput";

class CreateContact extends Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
    const values = formSerialize(evt.target, { hash: true });
    const { createContact } = this.props;
    createContact && createContact(values);
  }

  render() {
    return (
      <div>
        {/* <a href="/" className="close-create-contact">Close</a> */}
        <Link to="/" className="close-create-contact">
          Close
        </Link>
        <form className="create-contact-form" onSubmit={this.handleSubmit}>
          <ImageInput key="imageUpload"
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div key="formDetail" className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContact;
