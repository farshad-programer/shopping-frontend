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
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };
  return (
    <div className="bg-transparent   w-full h-full">
      <div className=" w-full mb-10 flex justify-center items-center h-full">
        <div className="bg-[rgba(255,255,255,0.15)]   text-center items-center  backdrop-blur-sm shadow-sm rounded-xl w-full ">
          <div className=" flex flex-col items-center justify-center">
            <div className="font-Playfair mb-2 text-lg mt-7 font-semibold ">Registration</div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnBlur:false
              validateOnChange:true
            >
              {(formik) => (
                
                <Form className="w-full h-full flex flex-col justify-center items-start">
                  <FormikControl
                    control="chakraInput"
                    type="email"
                    label="Email"
                    name="email"
                  />
                  <FormikControl
                    control="chakraInput"
                    type="password"
                    label="Password"
                    name="password"
                  />
                  <FormikControl
                    control="chakraInput"
                    type="confirmPassword"
                    label="ConfirmPassword"
                    name="confirmPassword"
                  />

                  <div className="flex w-full items-center justify-end">
                    <FormikControl
                      control="chakraInput"
                      type="name"
                      label="Name"
                      name="name"
                    />
                    <FormikControl
                      control="chakraInput"
                      type="lName"
                      label="LastName"
                      name="lName"
                    />
                  </div>
                  <div className="flex w-full items-center justify-end">
                    <FormikControl
                      control="chakraInput"
                      type="country"
                      label="Country"
                      name="country"
                    />
                    <FormikControl
                      control="chakraInput"
                      type="zip"
                      label="Zip"
                      name="zip"
                    />
                  </div>
                 
                    <FormikControl
                      control="chakraInput"
                      type="city"
                      label="City"
                      name="city"
                    />
                    
                  
                  <FormikControl
                      control="chakraInput"
                      type="street"
                      label="Street and House Number"
                      name="street"
                    />
                  <FormikControl
                    control="chakraInput"
                    type="phon"
                    label="Phon"
                    name="phon"
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