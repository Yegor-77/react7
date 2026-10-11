import { createContext, useState } from "react";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContact = (name, number) => {
    const newContact = {
      id: Date.now(),
      name,
      number,
    };

    setContacts((prevContacts) => [
      ...prevContacts,
      newContact,
    ]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <ContactsContext.Provider
      value={{ contacts, addContact, deleteContact }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
