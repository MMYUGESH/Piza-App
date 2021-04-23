import React, { useState } from "react";
import axios from "axios";

function Custom() {
  const url = "https://order-detailsll.herokuapp.com/create_order";
  const [framework, setFramework] = useState("");
  const [top, setTop] = useState("");
  const [cheese, setCheese] = useState("");
  const [veggie, setVeggie] = useState("");
  const [meat, setMeat] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [qty, setQty] = useState("");
  function handleqty(e) {
    setQty(e.target.value);
  }
  function handleadress(e) {
    setAdress(e.target.value);
  }
  function handlephone(e) {
    setPhone(e.target.value);
  }

  function handlebase(e) {
    setFramework(e.target.value);
  }
  function handletop(e) {
    setTop(e.target.value);
  }
  function handlecheese(e) {
    setCheese(e.target.value);
  }
  function handleveggie(e) {
    setVeggie(e.target.value);
  }
  function handleMeat(e) {
    setMeat(e.target.value);
  }
  function handlename(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(framework);
    console.log(top);
    console.log(cheese);
    axios
      .post(url, {
        base: framework,
        sauce: top,
        cheese: cheese,
        veggie: veggie,
        meat: meat,
        name: name,
        adress: adress,
        phone: phone,
        qty: qty
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Enter name:</label>
          <input className="output" onChange={handlename} value={name} />
          <label>Enter adress</label>
          <input
            className="output"
            type="text"
            onChange={handleadress}
            value={adress}
          />
          <label>Enter phone number</label>
          <input className="output" onChange={handlephone} value={phone} />

          <h2>Choose your base</h2>
          <select onChange={handlebase} value={framework}>
            <option value="base">select base</option>
            <option value="Thin Crust">Thin Crust</option>
            <option value="Thick Crust ">Thick Crust </option>
            <option value="Authentic Wood-Fired Crusts">
              Authentic Wood-Fired Crusts
            </option>
            <option value="Focaccia">Custom Crusts</option>
            <option value="Custom Crusts">Custom Crusts</option>
          </select>
          <h2>Choose your Sauce</h2>
          <select onChange={handletop} value={top}>
            <option value="">Select Sauce</option>
            <option value="Spicy Red Sauces">Spicy Red Sauces</option>
            <option value="Peppery Red Sauce">Peppery Red Sauce</option>
            <option value="Sweet Pizza Sauces">Sweet Pizza Sauces</option>
            <option value="Sweet Pizza Sauces">Sweet Pizza Sauces</option>
            <option value="Pesto Sauce on Pizza">Pesto Sauce on Pizza</option>
          </select>
          <h2>Choose your Cheese</h2>
          <select onChange={handlecheese} value={cheese}>
            <option value="Mozzarella Cheeseeact">Select Cheese</option>
            <option value="Mozzarella Cheeseeact">Mozzarella Cheese</option>
            <option value="Provolone Cheese">Provolone Cheese</option>
            <option value="Parmesan Cheese">Parmesan Cheese</option>
            <option value="Gouda">Gouda</option>
            <option value="Goat Cheese">Goat Cheese</option>
          </select>

          <h2>Choose your Veggies</h2>
          <select onChange={handleveggie} value={veggie}>
            <option value="Tomato-Onion">Select veggies</option>
            <option value="Tomato-Onion">Tomato-Onion</option>
            <option value="Mushrooms, Garlic and Mint Pizza">
              Mushrooms, Garlic and Mint Pizza
            </option>
            <option value="Pesto">Pesto</option>
            <option value="Grilled egg plant">Grilles egg plant</option>
            <option value="figs">figs</option>
          </select>
          <h2>Choose your Meat</h2>
          <select onChange={handleMeat} value={meat}>
            <option value="Pepperoni ">Select Meat </option>
            <option value="Pepperoni ">Pepperoni </option>
            <option value="Salami">Salami</option>
            <option value="Proscuitto">Proscuitto</option>
            <option value="Sausage">Sausage</option>
            <option value="Beef">Beef</option>
          </select>
          <label className="output">Number of Pizza</label>
          <input  type="number"className="output"onChange={handleqty} value={qty} />
          <p />

          <br />
          <button type="submit">Place Order</button>
        </form>
      </div>
      <div className="orderborder">
        <h1 className="orderdetail">Customized Pizza</h1>
        <ul>
          <li className="orderdetail">{name}</li>
          <li className="orderdetail">{adress}</li>
          <li className="orderdetail">{phone}</li>
          <li className="orderdetail">{qty}</li>

          <li className="orderdetail">{framework}</li>
          <li className="orderdetail">{top}</li>
          <li className="orderdetail">{cheese}</li>
          <li className="orderdetail">{veggie}</li>
          <li className="orderdetail">{meat}</li>
        </ul>
        <div>
          <h1 className="center">Go to my orders</h1>
        </div>
      </div>
    </div>
  );
}

export default Custom;