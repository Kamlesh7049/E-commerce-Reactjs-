import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Header=()=>{
  const mycart= useSelector(state=>state.mycart.cart);
  // console.log(mycart);
  const navigate=useNavigate();


   const cartPage=()=>{
    navigate("/cart");
   }


  const cartLen= mycart.length;
    return(
        <>
          <div id="header">

          <span id="carticon"> {cartLen} </span>
          
          <a href="#" onClick={cartPage}>
          <FaShoppingCart  className="space"  />
          </a>
           

          <GrUserAdmin  className="space"  />
          <FaSearch  className="space"/>
          </div>
        </>
    )
}
export default Header;