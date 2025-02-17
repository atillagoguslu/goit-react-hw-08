import css from "./AddContactButton.module.css";
import { FaPlus } from "react-icons/fa";

// This button is used to add a new contact to the list.
// It opens a modal with a form to add a new contact.

import { useDispatch } from "react-redux";
import { openAddContactModal } from "../redux/others/modalSlice";

const AddContactButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      className={css.button}
      onClick={() => dispatch(openAddContactModal())}
    >
      Add Contact <FaPlus />
    </button>
  );
};

export default AddContactButton;
