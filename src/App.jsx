import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Shooter from "./components/Shooter/Shooter";
import Mmorpg from "./components/Mmorpg/Mmorpg";
import Sailing from "./components/Sailing/Sailing";
import Permadeath from "./components/Permadeath/Permadeath";
import Superhero from "./components/Superhero/Superhero";
import Pixel from "./components/Pixel/Pixel";
import "./App.css";

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Mmorpg /> },
      { path: "mmorpg", element: <Mmorpg /> },
      { path: "shooter", element: <Shooter /> },
      { path: "permadeath", element: <Permadeath /> },
      { path: "superhero", element: <Superhero /> },
      { path: "pixel", element: <Pixel /> },
      { path: "sailing", element: <Sailing /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
