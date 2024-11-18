import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';

const Topmenu = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            color: "white",
            fontWeight: "1000",
            letterSpacing: "2px",
            fontStyle: "italic",
          }}
        >
          ElectronixZone
        </Navbar.Brand>
        <Nav className="me-auto" style={{ fontSize: "20px" }}>
          <Nav.Link as={Link} to="/home"> Home </Nav.Link>
          <Nav.Link as={Link} to="/shop"> Shop </Nav.Link>

          {/* Products Dropdown Menu */}
          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/products/leptop">Leptop</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/mobile">Mobile</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/computer">Computer</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/headphone">Headphone</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/watch">Watch</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/airbuds">Airbuds</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/tv">TV</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/cctv">CCTV</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/ac">AC</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/all">All</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/cart"> Cart </Nav.Link>
          <Nav.Link as={Link} to="/contact"> Contact us </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Topmenu;
