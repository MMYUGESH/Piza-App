
import React from "react";
import home from "./Components/home"
import pizza from "./Components/pizza"
import {Navbar,Nav,Container,Row,Col} from 'react-bootstrap'
function NavBar(){
  const usestyle={
  
  display:"flex",
  justifycontent:"spacearound",
  alignitems: "center",
  liststyle:"none",
  padding: "14px 20px",
  margin:"8px 0",
  border: "none",
  
  cursor: "pointer"

  };

return(
<>
<Container fluid>
<Row>
 <Col xs={4} sm={12} md={8} lg={12} style={usestyle}>
  <Navbar bg="danger" variant="dark" className="mx-auto my-2">
    <Navbar.Brand href="#home">  <img
          src="https://i.postimg.cc/tJymSkN5/Pngtree-pizza-illustration-in-icon-drawn-5385559.png"
          width="80"
          height="80"
        />Mario Pizza</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Menu">Menu</Nav.Link>
      <Nav.Link href="/Custom">Custom</Nav.Link>
      <Nav.Link href="/Orders">Orders</Nav.Link>
      <Nav.Link href="/Cart">Price</Nav.Link>
    </Nav>
  </Navbar>
    </Col>
  </Row>
  </Container>
   
   
     
  
    
  
  
    
  

</>



)};
export default NavBar;