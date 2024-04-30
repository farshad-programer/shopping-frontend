import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "../../Formik/FormikControl";

const Register = () => {
  const initialValues = {
    email: "",
    password: "",
    name: "",
    lName: "",
    confirmPassword: "",
    street: "",
    city: "",
    zip: "",
    country: "",
    phon: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .required(
        "Enter a combination of alt least eight numbers, letters and punctuation marks (such as ! and &,@)"
      )
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "password must contain uppercase, lowercase, number and  special character"
      ),

    confirmPassword: Yup.string()

      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };
  console.log("object,", Formik);

  return (
    <div className="bg-transparent   w-[20rem] h-full ">
      <div className=" w-full mb-10 flex justify-center items-center h-full">
        <div className="bg-[rgba(255,255,255,0.15)]   text-center items-center  backdrop-blur-sm shadow-sm rounded-xl w-full ">
          <div className=" flex flex-col items-center justify-center ">
            <div className="font-Playfair mb-2 text-lg mt-7 font-semibold  ">
              Registration
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnChange={true}
              validateOnMount
            >
              {(formik) => (
                <Form className="w-full h-full flex flex-col  items-start">
                  <FormikControl
                    control="chakraInput"
                    type="email"
                    label="Email"
                    name="email"
                    position="up"
                  />
                  <FormikControl
                    control="chakraInput"
                    type="password"
                    label="Password"
                    name="password"
                    position="right"
                  />
                  <FormikControl
                    control="chakraInput"
                    type="password"
                    label="ConfirmPassword"
                    name="confirmPassword"
                    position="left"
                  />

                  <div className="flex w-full items-center justify-end">
                    <FormikControl
                      control="chakraInput"
                      type="name"
                      label="Name"
                      name="name"
                      position="right"
                    />
                    <FormikControl
                      control="chakraInput"
                      type="lName"
                      label="LastName"
                      name="lName"
                      position="right"
                    />
                  </div>
                  <div className="flex w-full items-center justify-end">
                    <FormikControl
                      control="chakraInput"
                      type="country"
                      label="Country"
                      name="country"
                      position="right"
                    />
                    <FormikControl
                      control="chakraInput"
                      type="zip"
                      label="Zip"
                      name="zip"
                      position="right"
                    />
                  </div>

                  <FormikControl
                    control="chakraInput"
                    type="city"
                    label="City"
                    name="city"
                    position="right"
                  />

                  <FormikControl
                    control="chakraInput"
                    type="street"
                    label="Street and House Number"
                    name="street"
                    position="right"
                  />
                  <FormikControl
                    control="chakraInput"
                    type="phon"
                    label="Phon"
                    name="phon"
                    position="right"
                  />
                  <div className="mb-5"></div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
