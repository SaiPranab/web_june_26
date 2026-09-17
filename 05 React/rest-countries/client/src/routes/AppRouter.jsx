import { createBrowserRouter } from "react-router";
import NotFoundPage from "../components/ErrorPage";
import App from "../App";
import CountryDetail from "../components/CountryDetail";

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
  {
    path: "/:country",
    element: <CountryDetail />
  }
])

export default router