import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";

import "./App.css";
import ContentAdmin from "./pages/pageAdmin/contentAdmin";
import Login from "./pages/login";
import Register from "./pages/register";
function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContentAdmin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
