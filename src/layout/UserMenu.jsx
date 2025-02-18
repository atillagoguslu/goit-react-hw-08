import { Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/operations";
import { selectUser, selectID } from "../redux/auth/selectors";
import { useNavigate } from "react-router";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const id = useSelector(selectID);

  const handleLogout = () => {
    dispatch(logout({ id }))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <Typography variant="body1" color="inherit">
        Welcome, {user.name}
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        size="small"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
