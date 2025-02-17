import { useDispatch, useSelector } from "react-redux";
import { closeAddContactModal } from "../redux/others/modalSlice";
import { addContact } from "../redux/contacts/operations";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { selectAddContactModal } from "../redux/others/modalSlice";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const initialValues = {
  name: "",
  number: "",
};

const style = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    mt: 6,
  },
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  number: Yup.string().required("Number is required"),
});

const AddContactModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAddContactModal);

  const handleSubmit = (values, actions) => {
    console.log("Add Contact Modal values", values);
    dispatch(addContact(values));
    actions.resetForm();
    dispatch(closeAddContactModal());
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => dispatch(closeAddContactModal())}
      aria-labelledby="add-contact-modal"
    >
      <Box sx={style.modal}>
        <IconButton
          aria-label="close"
          onClick={() => dispatch(closeAddContactModal())}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2">
          Add New Contact
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form style={style.form}>
              <TextField
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                fullWidth
              />
              <TextField
                name="number"
                label="Number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.number && Boolean(errors.number)}
                helperText={touched.number && errors.number}
                fullWidth
              />
              <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                Add Contact
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default AddContactModal;
