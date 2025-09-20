import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout(){

  return(
    <div className="flex flex-col min-h-screen bg-[#FFF7E6]">
      <Header></Header>
      <main className="flex-grow mt-
">
        <Outlet />
      </main>
      <Footer></Footer>

    </div>
  )
}
export default Layout;