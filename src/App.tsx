import { CssBaseline } from "@mui/material"
import { createBrowserRouter, RouterProvider } from "react-router";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./HomePage";

const Layout = () => {
    return (
        <>
          <CssBaseline/>
          <Navbar/>
          <Outlet/>
        </>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        Component: HomePage,
        // loader: ({ request, params }) =>
        //   fetch(`/api/show/${params.showId}.json`, {
        //     signal: request.signal,
        //   }),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;