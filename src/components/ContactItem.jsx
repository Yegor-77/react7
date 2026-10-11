
import { useContext } from "react";
import { ContactsContext } from "./ContactsContext";

function ContactItem({ contact }) {
  const { deleteContact } = useContext(ContactsContext);

  return (
    <li className="contact-item">
      <div className="contact-info">
        <strong>{contact.name}</strong>
        <span>{contact.number}</span>
      </div>

      <button
        type="button"
        className="delete-button"
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactItem;
