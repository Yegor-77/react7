
import { useContext, useRef, useState } from "react";
import { ContactsContext } from "./ContactsContext";

function ContactForm() {
  const { addContact } = useContext(ContactsContext);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const nameInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedNumber = number.trim();

    if (!trimmedName || !trimmedNumber) {
      return;
    }

    addContact(trimmedName, trimmedNumber);

    setName("");
    setNumber("");

    nameInputRef.current?.focus();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          ref={nameInputRef}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter name"
          required
        />
      </label>

      <label>
        Phone number
        <input
          type="tel"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          placeholder="Enter phone number"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
