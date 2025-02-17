import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Box, Button } from "@mui/material";

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {!isLoggedIn && (
        <>
          <Button
            component={NavLink}
            to="/login"
            color="inherit"
            sx={{
              "&.active": {
                textDecoration: "underline",
              },
            }}
          >
            Login
          </Button>
          <Button
            component={NavLink}
            to="/register"
            color="inherit"
            sx={{
              "&.active": {
                textDecoration: "underline",
              },
            }}
          >
            Register
          </Button>
        </>
      )}
    </Box>
  );
};

export default AuthNav;
