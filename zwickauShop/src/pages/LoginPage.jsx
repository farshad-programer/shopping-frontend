import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const LoginPage = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="mt-12 ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex m-10 flex-wrap justify-center  items-center">
          <div
            className={`bg-white dark:bg-secondary-dark-bg  pt-10 px-4   w-full   rounded-2xl grid md:gap-10  gap-2 grid-cols-2 ${
              activeMenu ? " lg:grid-cols-2 xl:grid-cols-3" : "lg:grid-cols-3"
            }`}
          >
            LoginPage
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
