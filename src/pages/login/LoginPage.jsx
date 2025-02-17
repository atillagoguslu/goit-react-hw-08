import css from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <div className={css.loginPage}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
