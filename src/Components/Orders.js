import React, { useEffect, useState } from "react";
import axios from "axios";

function Orders() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://pizaorders.herokuapp.com/orders").then(res => {
      setProduct(res.data);
      console.log(res.data);
    });
  }, []);
  console.log(product[0])
  return (
     <div>
      <div>
        {product.map(x => (
          <div className="order" key={x}>
          <p>{x.phone}</p>
            <span>Details</span>
            <br />
            <span> Address:{x.adress}</span>
            <br />
            <span> Name:{x.name}</span>
            <br />
            
            <span> Phone Number:{x.phone}</span>
            <br />
            <p/>
            <span>Custom Pizza</span>
            <br />
            <span>Base:{x.base}</span>
            <br />
            <span>Cheese:{x.cheese}</span>
            <br />
            <span>Meat:{x.meat}</span>
            <br />
            <span>Sauce:{x.sauce}</span>
            <br />
            <span>veggie:{x.veggie}</span>
            <br />
            <p>Price Details</p>
            <span>Number of Pizza:{x.qty}</span>
            <br />
            <span> Total Price:{(x.qty)*300}</span>
            <br />
           
        
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
