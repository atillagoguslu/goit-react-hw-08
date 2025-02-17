import styles from "./Contact.module.css";
import { useSelector } from "react-redux";
import { selectContactsLoadingStates } from "../redux/contacts/selectors";

function Contact({ name, number, onDelete, image }) {
  const loadingStates = useSelector(selectContactsLoadingStates);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      onDelete();
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contactCard}>
        <div className={styles.contactCardHeader}>
          <div className={styles.userInfo}>
            <div className={styles.name}>
              <span>{name}</span>
            </div>
            <div className={styles.phone}>
              <span>{number}</span>
            </div>
          </div>
        </div>
        {loadingStates.delete ? (
          <button className={styles.deleteBtn} onClick={handleDelete}>
            Deleting...
          </button>
        ) : (
          <button className={styles.deleteBtn} onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Contact;
