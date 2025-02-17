import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <div className={css.loginForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            className={css.loginInput}
            type="text"
            name="name"
            placeholder="Name"
          />
          <Field
            className={css.loginInput}
            type="email"
            name="email"
            placeholder="Email"
          />
          <Field
            className={css.loginInput}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className={css.loginButton} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
