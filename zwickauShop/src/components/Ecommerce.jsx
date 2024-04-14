import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { earningData } from "../data/dummy";
import { useGetProductsQuery } from "../features/productApiSlice";

// const tableContent = ids?.length
//     ? ids.map(userId => <User key={userId} userId={userId} />)
//     : null
const Ecommerce = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery("productsList", {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  let content;
  if (isLoading) {
    content = <p className="font-eng3 text-3xl text-yellow-200 m-8 ">is isLoading</p>;
  }
  useEffect(() => {
    if (isSuccess) {
      const { ids } = products;

      console.log(ids);
    }
  }, []);
  const { currentColor } = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-col justify-center items-center">
        <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
          <div className="bg-white dark:bg-secondary-dark-bg min-w-[180px] md:w-56   w-full xs:max-w-[220px] rounded-2xl flex flex-col items-center justify-center">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
// {earningData.map((item) => (
//   <div className="bg-white dark:bg-secondary-dark-bg min-w-[180px] md:w-56 p-4 pt-9 w-full xs:max-w-[220px] rounded-2xl flex flex-col items-center">
//     <button
//       type="button"
//       className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
//       style={{ color: item.iconColor, backgroundColor: item.iconBg }}
//     >
//       {item.icon}
//     </button>
//     <p className="mt-3">
//       <span className="text-lg text-gray-700 font-semibold dark:text-gray-100 ">
//         {item.amount}
//       </span>
//       <span
//         className={`text-sm   ml-2`}
//         style={{ color: item.pcColor }}
//       >
//         {item.percentage}
//       </span>
//     </p>
//     <p className="text-sm text-gray-400 mt-1">{item.title}</p>
//   </div>
// ))}
