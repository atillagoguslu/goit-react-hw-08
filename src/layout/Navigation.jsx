import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Box, Button } from "@mui/material";
import AddContactButton from "../components/AddContactButton";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box component="nav" sx={{ display: "flex", gap: 2 }}>
      <Button
        component={NavLink}
        to="/"
        color="inherit"
        sx={{
          "&.active": {
            textDecoration: "underline",
          },
        }}
      >
        Home
      </Button>
      {isLoggedIn && (
        <>
          <Button
            component={NavLink}
            to="/contacts"
            color="inherit"
            sx={{
              "&.active": {
              textDecoration: "underline",
            },
          }}
        >
          Contacts
        </Button>
        <AddContactButton />
        </>
      )}
    </Box>
  );
};

export default Navigation;
