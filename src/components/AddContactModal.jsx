import { useDispatch, useSelector } from "react-redux";
import { closeAddContactModal } from "../redux/others/modalSlice";
import { addContact } from "../redux/contacts/operations";
import css from "./AddContactModal.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  phone: "",
};



const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  phone: Yup.number()
    .min(7, "Phone must be at least 7 characters")
    .max(12, "Phone must be less than 12 characters")
    .required("Phone is required"),
});

const AddContactModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.addContactModal);

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
    dispatch(closeAddContactModal());
  };

  if (!isOpen) return null;

  return (
    <div
      className={css.backdrop}
      onClick={() => dispatch(closeAddContactModal())}
    >
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        {/* onClick={(e) => e.stopPropagation()} is used to prevent the modal from closing when the user clicks on it */}
        <button
          className={css.closeButton}
          onClick={() => dispatch(closeAddContactModal())}
        >
          ×
        </button>
        <h2>Add New Contact</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field type="text" name="name" placeholder="Name" />
            <Field type="text" name="phone" placeholder="Phone" />
            <button type="submit">Add Contact</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddContactModal;
