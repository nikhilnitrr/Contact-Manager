import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  function addHandler(contact) {
    setContacts([...contacts, contact]);
  }

  function remove(email) {
    let newContacts = contacts.filter((item) => {
      return item.email != email;
    });
    setContacts(newContacts);
  }

  return (
    <div>
      <Header />
      <AddContact addHandler={addHandler} />
      <ContactList contacts={contacts} addHandler={addHandler} getId={remove} />
    </div>
  );
}

export default App;
