import { useSelector, useDispatch } from "react-redux";
import { selectContactsLoadingStates } from "../redux/contacts/selectors";
import { updateContact, getContacts } from "../redux/contacts/operations";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Popover,
  Button,
  TextField,
} from "@mui/material";

import { Delete as DeleteIcon } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  number: Yup.string().required("Number is required"),
});

function Contact({ id, name, number, onDelete, image }) {
  const dispatch = useDispatch();
  const loadingStates = useSelector(selectContactsLoadingStates);
  const [editAnchorEl, setEditAnchorEl] = useState(null);
  const [deleteAnchorEl, setDeleteAnchorEl] = useState(null);

  const handleEditClick = (event) => {
    setEditAnchorEl(event.currentTarget);
  };

  const handleEditClose = () => {
    setEditAnchorEl(null);
  };

  const handleDeleteClick = (event) => {
    setDeleteAnchorEl(event.currentTarget);
  };

  const handleDeleteClose = () => {
    setDeleteAnchorEl(null);
  };

  const handleDelete = () => {
    onDelete();
    handleDeleteClose();
  };

  const handleEditSubmit = async (values) => {
    try {
      await dispatch(updateContact({ id, ...values })).unwrap();
      await dispatch(getContacts());
      handleEditClose();
    } catch (error) {
      if (error.response?.status === 404) {
        toast.error("Contact not found. It may have been deleted.", {
          duration: 5000,
          position: "top-center",
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        await dispatch(getContacts());
      }
      handleEditClose();
    }
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1, position: "relative" }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar src={image} sx={{ width: 56, height: 56, mr: 2 }}>
            {name.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {number}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <LoadingButton
            variant="contained"
            color="primary"
            sx={{ mr: 1 }}
            startIcon={<EditIcon />}
            onClick={handleEditClick}
            loading={loadingStates.update}
          >
            Edit
          </LoadingButton>
          <LoadingButton
            loading={loadingStates.delete}
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleDeleteClick}
          >
            Delete
          </LoadingButton>
        </Box>
        {/* Add contact ID to bottom right corner, with nearlly invisible text */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            position: "absolute",
            bottom: 2,
            right: 2,
            fontSize: "0.75rem",
            color: "rgba(0, 0, 0, 0.25)",
          }}
        >
          ID: {id}
        </Typography>
      </CardContent>

      <Popover
        open={Boolean(editAnchorEl)}
        anchorEl={editAnchorEl}
        onClose={handleEditClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ mt: 1 }}
      >
        <Box sx={{ p: 4, width: 280 }}>
          <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
            Edit Contact
          </Typography>
          <Formik
            initialValues={{ name, number }}
            validationSchema={validationSchema}
            onSubmit={handleEditSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
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
                <Button variant="contained" type="submit">
                  Save Changes
                </Button>
              </Form>
            )}
          </Formik>
          {/* A warnning message that server is not allowed to update the contact */}
          <Typography mt={2} variant="body2" color="text.secondary">
            Üzgünüm, sunucu kişiyi güncellemeye izin vermiyor.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            &quot;404&quot; hatası aldım. Network sekmesine bakınız.
          </Typography>
        </Box>
      </Popover>

      <Popover
        open={Boolean(deleteAnchorEl)}
        anchorEl={deleteAnchorEl}
        onClose={handleDeleteClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ mt: 1 }}
      >
        <Box sx={{ p: 3 }}>
          <Typography sx={{ mb: 2 }}>
            Are you sure you want to delete?
          </Typography>
          <Typography sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
            {name}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button onClick={handleDeleteClose}>Cancel</Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        </Box>
      </Popover>
    </Card>
  );
}

export default Contact;
