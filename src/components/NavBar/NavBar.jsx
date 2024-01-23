import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../carwidget/carwidget';
import './NavBar.css'


const NavBar = () => {
  return (
    <>
      <Navbar className="blue" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
              <img src="./src/assets/img/logo.png" alt="Console Fun"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#nintendo">Nintendo</Nav.Link>
            <Nav.Link href="#ps5">PS5</Nav.Link>
            <Nav.Link href="#xbox">XBox</Nav.Link>
          </Nav>
        </Container>
        <div className="carwidget">
            <CarWidget />
        </div>
      </Navbar>
      
      </>
  )
}

export default NavBar
