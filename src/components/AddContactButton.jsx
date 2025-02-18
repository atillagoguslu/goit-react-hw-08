import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddContactPopover from "./AddContactPopover";
import { useDispatch } from "react-redux";
import { openAddContactModal } from "../redux/others/modalSlice";
import { useState } from "react";

// This button is used to add a new contact to the list.
// It opens a modal with a form to add a new contact.

const AddContactButton = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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

      <AddContactPopover anchorEl={anchorEl} />
    </>
  );
};

export default AddContactButton;
