import React from "react";

function AddContact(props) {
  function handleSubmit(event) {
    event.preventDefault();
    if (event.target.username.value === "" || event.target.email.value === "") {
      alert("Invalid input!");
      return;
    }
    var data = {
      name: event.target.username.value,
      email: event.target.email.value,
    };
    props.addHandler(data);
  }

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-input">
          <label>Name</label>
          <input type="text" name="username" placeholder="Enter your name" />
        </div>
        <div className="form-input">
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <button type="submit" className="btn-primary">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddContact;
