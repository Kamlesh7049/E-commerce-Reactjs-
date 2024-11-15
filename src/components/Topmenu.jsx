import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Topmenu=()=>{
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'white', fontWeight:"1000",  letterSpacing: '2px',fontStyle:"italic"}}>ElectronixZone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as= {Link} to="home" style={{ color: 'blue' }}>Home</Nav.Link>
            <Nav.Link  as={Link} to="shop"style={{ color: 'blue' }}>Shop</Nav.Link>
            <Nav.Link  as={Link} to="products"style={{ color: 'blue' }}>Products</Nav.Link>
            <Nav.Link  as={Link} to="top"style={{ color: 'blue' }}>Top-Deals</Nav.Link>
            <Nav.Link  as={Link} to="Blogs"style={{ color: 'blue' }}>Blogs</Nav.Link>
            <Nav.Link  as={Link} to="cart"style={{ color: 'blue' }}>Cart</Nav.Link>
            <Nav.Link  as={Link} to="contact"style={{ color: 'blue' }}>Contact us</Nav.Link>
          </Nav>
        </Container>
     </Navbar>

    
        </>
    )
}

export default Topmenu;