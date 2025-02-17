import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const RegisterPage = lazy(() => import("./pages/register/RegistrationPage.jsx"));
const LoginPage = lazy(() => import("./pages/login/LoginPage.jsx"));
const ContactsPage = lazy(() => import("./pages/contacts/ContactsPage.jsx"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
