import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to="/" /> : <Component />;
};

export default RestrictedRoute;

