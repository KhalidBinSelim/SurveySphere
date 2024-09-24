import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik, validateYupSchema } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../Redux/Auth/auth.action";

const initialValues = { email: "", password: "" };
const validationSchema = {
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required"),
};

const Login = () => {
  const [formValue, setFormValue] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Handle Submit", values);
    dispatch(loginUserAction({data:values}))
  };



  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullwidth
              />
              <ErrorMessage
                name="email"
                component={"div"}
                className="text-red-500"
              />
            </div>

            <div>
              <Field
                as={TextField}
                name="password"
                placeholder="Password"
                type="password"
                variant="outlined"
                fullwidth
              />
              <ErrorMessage
                name="password"
                component={"div"}
                className="text-red-500"
              />
            </div>
          </div>

          <Button
            sx={{ padding: ".8rem 2.5rem", backgroundColor: "#FFBF00" }}
            type="submit"
            variant="contained"
            color="black"
            fullwidth
          >
            Log in
          </Button>
        </Form>
      </Formik>

      <div className="flex gap-0 items-center justify-center pt-5">
        <p>Do not have an account?</p>
        <Button color="secondary" onClick={() => navigate("/register")}>
          Register
        </Button>
      </div>
    </>
  );
};

export default Login;
