import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { useRef } from "react";

const NavBar = ({ logo, items, btn }) => {
  const nav = useRef(null);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.current.style.background = "white";
    } else {
      nav.current.style.background = "none";
    }
  });
  return (
    <Navbar
      expand="lg"
      ref={nav}
      className="bg-body-white position-fixed top-0 w-100 z-3"
    >
      <Container fluid className="justify-content-evenly">
        <Navbar.Brand href="#" className="logo ">
          <img src={logo?.img} alt={logo?.text} />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
     
        <Navbar.Collapse id="navbarScroll" className="flex-grow-0">
          <Nav
            className="me-auto my-2 my-lg-0   "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {items?.map((element, index) => {
              return (
                <Nav.Link
                  key={index}
                  href={`#${element?.id}`}
                  className="text-headind "
                >
                  {element?.name}
                </Nav.Link>
              );
            })}
          </Nav>
     
        </Navbar.Collapse>
        <Button
            variant="primary"
            className="bg-my-primary border border-0 rounded-2   "
          >
            {btn}
          </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
