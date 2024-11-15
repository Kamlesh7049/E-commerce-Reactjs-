import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Topmenu from "./components/Topmenu";
import Home from "./pages/Home";
const Layout=()=>{
    return(
        <>
          <Header/>
         <Topmenu/>
           <Outlet/>
         <Footer/>
        </>
    )
}

export default Layout;