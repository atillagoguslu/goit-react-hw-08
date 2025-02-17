import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddContactModal from "./AddContactModal";
import { useDispatch } from "react-redux";
import { openAddContactModal } from "../redux/others/modalSlice";

// This button is used to add a new contact to the list.
// It opens a modal with a form to add a new contact.

const AddContactButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("Add Contact Button clicked");
    dispatch(openAddContactModal());
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        startIcon={<AddIcon />}
        sx={{
          borderRadius: 2,
          textTransform: "none",
          padding: "8px 16px",
          bgcolor: "success.main",
          "&:hover": {
            bgcolor: "success.dark",
          },
        }}
      >
        Add Contact
      </Button>
      <AddContactModal />
    </>
  );
};

export default AddContactButton;
