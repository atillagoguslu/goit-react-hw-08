import css from "./ContactsPage.module.css";
import ContactList from "../../components/ContactList";
import SearchBox from "../../components/SearchBox";

const ContactsPage = () => {
 
  return (
    <div className={css.container}>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
