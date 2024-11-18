import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Leptop from "./products/Leptop"; // Ensure Leptop is correctly imported
import Mobile from "./products/Mobile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop" element={<Shop />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Correct dynamic route */}
          <Route path="products/leptop" element={<Leptop />} />
          <Route path="products/mobile" element={<Mobile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
