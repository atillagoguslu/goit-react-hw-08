import Contact from "./Contact.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContactsLoadingStates } from "../redux/contacts/selectors";
import { getContacts, removeContact } from "../redux/contacts/operations";
import { selectFilteredContacts } from "../redux/filters/selectors";
import { selectToken } from "../redux/auth/selectors";
import axios from "axios";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";

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

    // eslint-disable-next-line
  }, []);

  const handleDelete = async (id) => {
    await dispatch(removeContact(id));
    dispatch(getContacts());
  };

  if (!Array.isArray(filteredContacts) || filteredContacts.length === 0) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="200px"
      >
        {loadingStates.fetch ? (
          <CircularProgress />
        ) : (
          <Typography variant="h6" color="text.secondary">
            No contacts found
          </Typography>
        )}
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {filteredContacts.map((contact) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              image={contact.image}
              onDelete={() => handleDelete(contact.id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ContactList;
