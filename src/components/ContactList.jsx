
import { useContext } from "react";
import { ContactsContext } from "./ContactsContext";
import ContactItem from "./ContactItem";

function ContactList() {
  const { contacts } = useContext(ContactsContext);

  return (
    <section className="contacts-section">
      <h2>My contacts ({contacts.length})</h2>

      {contacts.length === 0 ? (
        <p className="empty-message">
          No contacts yet. Add your first contact!
        </p>
      ) : (
        <ul className="contact-list">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default ContactList;
