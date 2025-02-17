import { Outlet } from "react-router";
import Navigation from "../layout/Navigation.jsx";
import UserMenu from "../layout/UserMenu.jsx";
import AuthNav from "../layout/AuthNav.jsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Toaster } from "react-hot-toast";
import { AppBar, Container, Toolbar, Box } from "@mui/material";

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toaster />
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Navigation />

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
