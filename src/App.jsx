import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Layout from "./layout/Layout.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const RegistrationPage = lazy(() =>
  import("./pages/register/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("./pages/login/LoginPage.jsx"));
const ContactsPage = lazy(() => import("./pages/contacts/ContactsPage.jsx"));

import { useDispatch } from "react-redux";
import { currentUser } from "./redux/auth/operations";
import { useEffect } from "react";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={RegistrationPage} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={LoginPage} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
