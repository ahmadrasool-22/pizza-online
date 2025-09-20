import Layout from "./components/Layout";
import Hero from "./pages/Home";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Products from "./pages/Menu";

const router=createBrowserRouter([

  
    {
      path:"/",
      element:(
      <>
      <Layout />
      </>
      ),
      children:[
        { path: "/", element:<Hero /> },
        { path: "/menu", element:<Products /> },
      ],

    },

  ]);
function App(){

  return <RouterProvider router={router} />


}
export default App;