import styles from "./ContactList.module.css";
import Contact from "./Contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNameFilter,
  selectFilteredContacts,
  setFilteredContacts,
} from "../redux/filteredSlice";
import { removeContact, fetchContacts } from "../redux/constactsOps";
import { useEffect } from "react";
import { selectContacts, selectLoadingStates } from "../redux/contactsSlice";

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);
  const filteredContacts = useSelector(selectFilteredContacts);
  const loadingStates = useSelector(selectLoadingStates);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    dispatch(setFilteredContacts(filtered));
  }, [contacts, filterValue, dispatch]);

  const handleDelete = async (id) => {
    await dispatch(removeContact(id));
    dispatch(fetchContacts());
  };

  if (filteredContacts.length === 0) {
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
