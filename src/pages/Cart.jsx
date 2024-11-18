import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { qntyInc, qntyDec, itemRemove } from "../cartSlice";

const Cart = () => {
  const MyCart = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();

  const qtyIncrement = (id) => {
    dispatch(qntyInc({ id: id }));
  };

  const qtyDecrement = (id) => {
    dispatch(qntyDec({ id: id }));
  };

  const removeItem = (id) => {
    dispatch(itemRemove({ id: id }));
  };

  let totalAmount = 0;

  const Data = MyCart.map((key) => {
    totalAmount += key.price * key.qnty;
    return (
      <tr key={key.id}>
        <td>
          <img src={key.image} width="100" height="100" alt={key.name} />
        </td>
        <td>{key.name}</td>
        <td>{key.description}</td>
        <td>{key.category}</td>
        <td>₹{key.price}</td>
        <td>
          <a href="#" onClick={() => qtyDecrement(key.id)}>
            <CiSquareMinus />
          </a>
          <span
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {key.qnty}
          </span>
          <a href="#" onClick={() => qtyIncrement(key.id)}>
            <CiSquarePlus />
          </a>
        </td>
        <td>₹{key.price * key.qnty}</td>
        <td>
          <button onClick={() => removeItem(key.id)}>Remove</button>
        </td>
      </tr>
    );
  });

  return (
    <center>
      {/* <h4>My Shopping Cart</h4> */}
      <h3
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "600",
          fontFamily: "Arial, sans-serif",
        }}
      >
        My Shopping Carts
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data}
          <tr>
            <td>#</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
           
            <td>  
            {/* <td colSpan="6" style={{ textAlign: "right", fontWeight: "bold" }}> */}
              <h5>Total Amount:</h5>
            </td>
            <td style={{ fontWeight: "bold" }}>₹{totalAmount}/-</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </center>
  );
};

export default Cart;
