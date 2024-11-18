
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";



const Mobile = () => {
    const { leptop } = useParams();
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  // Load data from API
  const loadData = () => {
    let api = "http://localhost:3000/shopping/?category=Mobile";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  // Function to add product to the cart
  const cartDataAdd = (id, name, price, categ, desc, myimg) => {
    dispatch(
      addToCart({
        id: id,
        name: name,
        price: price,
        category: categ,
        description: desc,
        image: myimg,
        qnty: 1,
      })
    );
  };

  // Mapping data to cards
  const ans = mydata.map((key) => {
    return (
      <Card
        key={key.id}
        style={{
          width: "350px",
          marginTop: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "#f8f8f8",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        className="product-card"
      >
        <img
          src={key.image}
          style={{
            height: "280px",
            objectFit: "cover",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        />
        <Card.Body style={{ padding: "20px", textAlign: "center" }}>
          <Card.Title
            style={{ fontSize: "1.2em", fontWeight: "bold", color: "#333" }}
          >
            {key.name}
          </Card.Title>
          <Card.Subtitle
            style={{ color: "#777", fontSize: "1em", marginBottom: "10px" }}
          >
            {key.category}
          </Card.Subtitle>
          <Card.Text
            style={{ fontSize: "1em", color: "#555", marginBottom: "15px" }}
          >
            {key.description}
            <br />
            <span style={{ color: "red", fontWeight: "bold" }}>
              Price: Rs. {key.price}/-
            </span>
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              cartDataAdd(
                key.id,
                key.name,
                key.price,
                key.category,
                key.description,
                key.image
              );
            }}
            style={{
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "1em",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            className="add-to-cart-btn"
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
         <h3 style={{textAlign:"center", marginTop:"20px", fontWeight:"600" ,fontFamily:"Arial,sans-serif"}}> Our Trending Leptop</h3>
      <div id="cardData" >
        {ans}
        
      </div>

      <div  className="Shopbnr">
      <h3 style={{fontSize:"24px",color:"#FFFFFF",fontFamily:"Arial,sans-serif",fontWeight:"400"}}>Big saving on Topselling smartphone</h3>
        <h2 style={{fontSize:"32px",color:"#FFFFFF",fontFamily:"Arial,sans-serif",fontWeight:"600"}}>Get 85% off on Big Billion Days 2024</h2>
       <button className="Shopbbtn">Shop now</button>
      </div>
        
    </>
  );
};

export default Mobile;

