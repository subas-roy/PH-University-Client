import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/", // Absolute path
    element: <App />,
    // element: <AdminLaout />, // Laout layer
  },
  {
    path: "/admin",
    element: <App />, // Layout
    children: routesGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
