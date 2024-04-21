import { Route, Routes } from "react-router-dom";

import "./App.css";

import Login from "./pages/login";
import Register from "./pages/register";
import ContentAdmin from "./pages/pageAdmin/contentAdmin";
import ContentCustomer from "./components/Layout/layout";
import Ecommerce from "./components/Ecommerce";
import Layout from "./components/Layout/layout";
import ProductSingel from "./components/ProductSingel";
import CategoryList from "./components/CategoryList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Ecommerce />} />
        <Route path=":id" element={<ProductSingel />} />
        <Route path="category" > 
        <Route path=":categoryId" element={<CategoryList />}/> 
        
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
