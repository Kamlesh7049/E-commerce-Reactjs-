import { useState,useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from "../cartSlice";

const Shop = () => {
 const [lowprice,setLowPrice]=useState("");
 const [highprice,setHighPrice]=useState("");
 const [showFilter,setShowFilter]=useState(true);
 const [mydata,setMydata]=useState([]);
 const dispatch=useDispatch();
 

 const loadData=()=>{
  let api="http://localhost:3000/shopping";
  axios.get(api).then((res)=>{
    setMydata(res.data);
  })
 }

 const showData=()=>{
  let api="http://localhost:3000/shopping";
  axios.get(api).then((res)=>{
    setShowFilter(false)
    setMydata(res.data);
  })
 }
useEffect(()=>{
  loadData();
},[]);

useEffect(()=>{
  if(lowprice=="" && highprice=="")
  {
    setShowFilter(true);
  }
})
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

const ans=mydata.map((key)=>{
  return(
    <>
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
    </>

  )
})
const ans1=mydata.map((key)=>{
  if(key.price>=lowprice && key.price<=highprice)
  {
  return(
    <>
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
    </>

  )
}
});


  return (
    <>
    <center>
        <h1>Welcome to Shop!!!</h1>
        <div id='shoppage'>
          <div id='shopmenu'>
           <h4>Filter data by Price</h4>
          Enter Low Price<input type='text'value={lowprice} onChange={(e)=>{setLowPrice(e.target.value)}}/>
          <br />
          to
          Enter High Price<input type='text'value={highprice} onChange={(e)=>{setHighPrice(e.target.value)}}/>
          <button onClick={showData}>Show Data</button>
         </div>
          <div id='shopdata'>
           <div id='cardData'>
            {showFilter?ans:ans1}

           </div>
          </div>

        </div>
    </center>
    </>
  )
}

export default Shop;