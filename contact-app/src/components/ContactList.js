import React from "react";

function ContactList(props) {
  function removeHandler(email) {
    props.getId(email);
  }

  return (
    <div>
      {props.contacts.map((item) => {
        return (
          <div className="contact-list">
            <p key={item.name}>{item.name}</p>
            <p key={item.email}>{item.email}</p>
            <button
              onClick={() => removeHandler(item.email)}
              className="btn-secondary"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ContactList;
