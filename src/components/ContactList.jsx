import styles from "./ContactList.module.css";
import Contact from "./Contact.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContactsLoadingStates } from "../redux/contacts/selectors";
import { getContacts, removeContact } from "../redux/contacts/operations";
import { selectFilteredContacts } from "../redux/filters/selectors";
import { selectToken } from "../redux/auth/selectors";
import axios from "axios";

function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const loadingStates = useSelector(selectContactsLoadingStates);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    dispatch(getContacts());
  }, []);

  const handleDelete = async (id) => {
    await dispatch(removeContact(id));
    dispatch(getContacts());
  };

  if (!Array.isArray(filteredContacts) || filteredContacts.length === 0) {
    return (
      <div className={styles.contactListNotFound}>
        {loadingStates.fetch ? <p>Loading...</p> : <p>No contacts found</p>}
      </div>
    );
  }

  return (
    <div className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          className={styles.contactItem}
          key={contact.id}
          name={contact.name}
          number={contact.number}
          image={contact.image}
          onDelete={() => handleDelete(contact.id)}
        />
      ))}
    </div>
  );
}

export default ContactList;
