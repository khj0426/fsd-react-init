import { createBrowserRouter } from "react-router-dom";

import { routes } from "../shared/routes";
export const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <div>Home</div>,
  },
]);
