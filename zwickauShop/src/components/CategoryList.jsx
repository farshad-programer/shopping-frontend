import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import {
  selectAllProducts,
  selectProductById,
  useGetProductsByCategoryIdQuery,
} from "../features/productApiSlice";
import { selectCategoryById } from "../features/categoryApiSlice ";
import { useSelector } from "react-redux";

function CategoryList() {
  const { categoryId } = useParams();
  const category = useSelector((state) =>
    selectCategoryById(state, categoryId)
  );

  const {
    data: productsForCategory,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsByCategoryIdQuery(categoryId);
  let content;
  if (isSuccess) {
    const { ids, entities } = productsForCategory;

    content = ids.map((id) => (
      <div key={id}>
        <p>{entities[id]?.name}</p>
      </div>
    ));
  }
  return (
    <div className="mt-12">
      <div className="flex flex-col justify-center items-center">
        <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
          <div className="bg-white dark:bg-secondary-dark-bg min-w-[180px] md:w-56   w-full xs:max-w-[220px] rounded-2xl flex flex-col items-center justify-center">
            <h2>{content}</h2>
            <h4>{category.name}</h4>

            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
