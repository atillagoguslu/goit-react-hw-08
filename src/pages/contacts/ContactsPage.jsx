import css from "./ContactsPage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList";
import SearchBox from "../../components/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
