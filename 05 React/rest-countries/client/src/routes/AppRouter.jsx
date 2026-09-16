import { createBrowserRouter } from "react-router";
import NotFoundPage from "../components/ErrorPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/about",
    element: <div>About Works</div>,
  },
])

export default router