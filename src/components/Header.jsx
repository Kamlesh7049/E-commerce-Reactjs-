import { useSelector } from "react-redux";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
// import './Header.css'; // We'll add some styles in a separate CSS file for better organization

const Header = () => {
  const mycart = useSelector(state => state.mycart.cart);
  const navigate = useNavigate();

  const cartPage = () => {
    navigate("/cart");
  }

  const cartLen = mycart.length;

  return (
    <header className="header-container">
      <div className="logo">
        {/* <h1>MyShop</h1> Optional logo or shop name */}
      </div>

      <div className="header-icons">
        <div className="cart-icon" onClick={cartPage}>
          <FaShoppingCart className="icon" />
          {cartLen > 0 && <span className="cart-count">{cartLen}</span>}
        </div>
        <GrUserAdmin className="icon" />
        <FaSearch className="icon" />
      </div>
    </header>
  );
}

export default Header;

  