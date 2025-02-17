import { Outlet } from "react-router";
import css from "./Layout.module.css";
import Navigation from "../components/Navigation/Navigation.jsx";
import UserMenu from "../components/UserMenu/UserMenu.jsx";
import AuthNav from "../components/AuthNav/AuthNav.jsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Toaster } from "react-hot-toast";
import AddContactButton from "../components/AddContactButton";

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <Toaster />
      <header className={css.header}>
        <Navigation />
        <AddContactButton />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
