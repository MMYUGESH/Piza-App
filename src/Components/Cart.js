import React, { useEffect, useState } from "react";
import axios from "axios";


function Cart(){

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://pizzaappbackend.herokuapp.com/allmenu").then(res => {
      setProduct(res.data);
      console.log(res.data);
    });
  }, []);
return(
<div>
<h1>Price</h1>
      <div>
        {product.map(x => (
          <div className="order">
            <span  key={x._id}>Details</span>
            <br />
            <span  key={x._id}> Name:{x.name}</span>
            <br />
            <span  key={x._id}> size:{x.size}</span>
            <br />
            <p>Price Details</p>
            <span  key={x._id}>price:{x.price}</span>
            <br />
            <span  key={x._id}> Total Price:{(x.price)}</span>
            <br />
           
        
          </div>
        ))}
      </div>



</div>

)
}

export default Cart;