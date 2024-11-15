import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart"
import Shop from "./pages/Shop";

const App=()=>{
  return(
    <>
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="cart" element={<Cart/>}/>
              <Route path="shop" element={<Shop/>}/>
               
             
             </Route>
           </Routes>
         </BrowserRouter>
        
    </>
  )
}

export default App;