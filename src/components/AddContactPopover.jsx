import { useDispatch, useSelector } from "react-redux";
import { closeAddContactModal } from "../redux/others/modalSlice";
import { addContact } from "../redux/contacts/operations";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { selectAddContactModal } from "../redux/others/modalSlice";
import {
  Popover,
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
  popover: {
    p: 4,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    width: 280,
  },
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  number: Yup.string().required("Number is required"),
});

const AddContactPopover = ({ anchorEl }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectAddContactModal);

  const handleSubmit = (values, actions) => {
    console.log("Add Contact Modal values", values);
    dispatch(addContact(values));
    actions.resetForm();
    dispatch(closeAddContactModal());
  };

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={() => dispatch(closeAddContactModal())}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      sx={{
        mt: 1,
      }}
    >
      <Box sx={style.popover}>
        <IconButton
          aria-label="close"
          onClick={() => dispatch(closeAddContactModal())}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
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
                size="small"
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
                size="small"
              />
              <Button variant="contained" type="submit" sx={{ mt: 1 }}>
                Add Contact
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Popover>
  );
};

export default AddContactPopover;
