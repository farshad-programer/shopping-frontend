import React from "react";
import { Field } from "formik";
import ErrorMessages from "./Errors/ErrorMessage";
import { BsExclamationCircleFill } from "react-icons/bs";
import useScreenSize from "../components/Hooks/screenSize";

function ChakraInput(props) {
  const { isLG } = useScreenSize();
  const { label, name, type, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <div className="flex ml-2  mt-16 mb-2 items-center justify-center h-auto w-auto bg-transparent  ">
          <div
            className={`${
              isLG && form.touched[name] && form.errors[name]
                ? "ml-auto mb- w-full"
                : " w-full "
            }  relative px-2 `}
          >
            {form.touched[name] && form.errors[name] ? (
              <ErrorMessages
                message={form.errors[name]}
                position={isLG ? "right" : ""}
                arrowDir="down"
              />
            ) : null}

            <div
              htmlFor=""
              className={`${isLG ? "w-full" : "  w-full "}  relative  `}
            >
              <input
                {...rest}
                {...field}
                name={name}
                id={name}
                type={type}
                required
                autoComplete="true"
                className={`${
                  form.touched[name] && form.errors[name]
                    ? " border-red-700  focus:border-red-700  hover:border-red-700  "
                    : "border-gray-500 focus:border-gray-500 "
                }   px-4 py-1 text-sm outline-none border-b-2  peer  border-gray-500  
    duration-700 focus:border-indigo-600 bg-transparent w-full`}
              />{" "}
              {form.touched[name] && form.errors[name] ? (
                <BsExclamationCircleFill className="errorInfo " />
              ) : null}
              <span
                className={`${
                  form.touched[name] && form.errors[name]
                    ? "text-red-700 peer-focus:text-red-700:"
                    : " text-gray-800 peer-focus:text-gray-900"
                } ${
                  form.values[name] ? "-translate-y-4" : ""
                } absolute left-0 top-0 px-1 text-sm  
tracking-wide   pointer-events-none 
duration-700 peer-focus:text-sm peer-focus:-translate-y-4  bg-transparent peer-focus:transition-colors  ml-2 peer-valid:text-sm peer-valid:-translate-y-4`}
              >
                {label}
              </span>
            </div>
          </div>
        </div>
      )}
    </Field>
  );
}

export default ChakraInput;
