import { Outlet } from "react-router";
import css from "./Layout.module.css";
import Navigation from "../components/Navigation/Navigation.jsx";
import UserMenu from "../components/UserMenu/UserMenu.jsx";
import AuthNav from "../components/AuthNav/AuthNav.jsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
