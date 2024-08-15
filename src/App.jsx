import Favmovie from "./Components/Favmovie";
import Movie from "./Components/Allmovie/Movie";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootpage from "./Rootpage";
import Detail from "./Components/DetailPage.jsx/Detail";
import Register from "./Components/Register/Register";
import Login from "./Components/Register/Login";
import { Private } from "./Privetroutes/Private";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Private>
          <Rootpage />
        </Private>
      ),
      children: [
        {
          path: "/",
          element: <Movie />,
        },
        {
          path: "/favmovie",
          element: <Favmovie />,
        },
        {
          path: "/MovieDetail/:movieDetailid",
          element: <Detail />,
        },
      ],
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
  return <RouterProvider router={router} />;
}

export default App;
