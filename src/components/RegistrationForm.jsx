import css from "./RegistrationForm.module.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signup } from "../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(signup(values));
  };

  return (
    <div className={css.registrationForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            className={css.registrationInput}
            type="text"
            name="name"
            placeholder="Name"
          />
          <Field
            className={css.registrationInput}
            type="email"
            name="email"
            placeholder="Email"
          />
          <Field
            className={css.registrationInput}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className={css.registrationButton} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
