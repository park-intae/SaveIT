import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../component/main/Main";
// import NotFound from "../pages/NotFound";

const routers = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/main", element: <Main /> },
//   { path: "*", element: <NotFound /> },
]);

export default routers;
