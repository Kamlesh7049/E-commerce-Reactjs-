import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'
import { addToCart } from "../cartSlice";

const ProductDetail = () => {
    const {id } = useParams();
    const [mydata,setMydata]=useState({});
    const dispatch = useDispatch();

    const loadData=()=>{
        let api=`http://localhost:3000/shopping/${id}`;
        axios.get(api).then((res)=>{
          setMydata(res.data);
          console.log(res.data)
        })
       }

       useEffect(()=>{
        loadData();
    }, []);


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

  return (
   <>
   <center>

   <h4>Wecome to Product Detail Page</h4>
   
   <div id="pro_deatil">

            <div id="pro_img">
               <img src={mydata.image}  style={{height:'300px' , width:'300px'}}/>
            </div>
            <div id="pro_desc">
            <h3> Product Name: {mydata.name} </h3>
            <h6> About Product : {mydata.description} </h6> 
            <h4> Price : {mydata.price}</h4>
            <h6> Product: {mydata.category} </h6>
            <h6> This is {mydata.type} Stock</h6>
            <Button
             onClick={()=>{cartDataAdd(mydata.id, mydata.name, mydata.price, mydata.category, mydata.description, mydata.image)}}
             >AddToCart</Button>
            </div>



          </div>
             </center>
   </>
  )
}

export default ProductDetail