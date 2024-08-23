import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Menu from "./components/Menu";
import Prospects from "./pages/Prospects";
import Donors from "./pages/Donors";

function App() {
  const Layout = () => {
    return (
      <div className="flex">
        <div>
          <Menu />
        </div>
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/admin/donors",
          element: <Donors />,
        },
        {
          path: "/admin/prospects",
          element: <Prospects />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
