import { useSelector } from "react-redux";
import { selectCategoryById } from "../features/categoryApiSlice ";

function CategoryMenu({categoryId='653e60c8213003e6e562ddfb',}) {
  const category = useSelector((state) => selectCategoryById(state, '653e60c8213003e6e562ddfb'));
console.log(category);

  return <></>;
}

export default CategoryMenu;
