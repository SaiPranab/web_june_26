import { createBrowserRouter } from "react-router";
import NotFoundPage from "../components/ErrorPage";
import App from "../App";
import CountryDetail from "../components/CountryDetail";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Home /> },
      { path: ":country", element: <CountryDetail /> }
    ]
    
  },
  {
    path: "/about",
    element: <div>About Works</div>,
  },
  // {
  //   path: "/:country",
  //   element: <CountryDetail />
  // }
])

export default router