import css from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className={css.registrationPage}>
      <h1>Register Your Account</h1>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
