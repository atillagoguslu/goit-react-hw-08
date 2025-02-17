import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={css.registrationPage}>
      <h1>Register Your Account</h1>
      <RegisterForm />
    </div>
  );
};

export default RegistrationPage;
