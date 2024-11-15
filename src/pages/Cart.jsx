import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { qntyInc } from "../cartSlice";
import { qntyDec } from "../cartSlice";

const Cart = () => {
  const MyCart = useSelector((state) => state.mycart.cart);
  const dispatch = useDispatch();

  const qtyIncrement = (id) => {
    dispatch(qntyInc({ id: id }));
  };
  const qtyDecrement = (id) => {
    dispatch(qntyDec({ id: id }));
  };

  const Data = MyCart.map((key) => {
    return (
      <>
        <tr>
          <td>
            <img src={key.image} width="100" height="100" />
          </td>
          <td>{key.name}</td>
          <td>{key.description}</td>
          <td>{key.category}</td>
          <td>{key.price}</td>
          <td>
            {/* <CiSquareMinus />
      <span style={{marginLeft:'10px',marginRight:'10px',fontWeight:'bold'}}>{key.qnty}</span>
      <a href="#" onClick={()=>{qtyIncrement(key.id)}}>
      </a>
      <CiSquarePlus />
      <a href="#" onClick={()=>{qtyDecrement(Key.id)}}></a> */}

            <CiSquareMinus
              onClick={() => qtyDecrement(key.id)}
              style={{ cursor: "pointer" }}
            />
            <span
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                fontWeight: "bold",
              }}
            >
              {key.qnty}
            </span>
            <CiSquarePlus
              onClick={() => qtyIncrement(key.id)}
              style={{ cursor: "pointer" }}
            />
          </td>
          <td>{key.price * key.qnty}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <center>
        <h4>My Shoping Cart</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Description</th>
              <th>Category</th>
              <th> Price</th>
              <th> Quantity</th>
              <th> Total</th>
            </tr>
          </thead>
          <tbody>{Data}</tbody>
        </Table>
      </center>
    </>
  );
};

export default Cart;
