export function ContactItem({ contact, onDeleteContact }) {
  return (
    <li>
      <span>
        {contact.name}: {contact.number}
      </span>

      <button
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}