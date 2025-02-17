import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Layout from "./layout/Layout.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const RegisterPage = lazy(() =>
  import("./pages/register/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("./pages/login/LoginPage.jsx"));
const ContactsPage = lazy(() => import("./pages/contacts/ContactsPage.jsx"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
