import { useState } from 'react';
import { Card, CardGroup, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import { FaBeer } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/Ai';
import { BiLogIn } from 'react-icons/Bi';
import { BiLogOut } from 'react-icons/Bi';
import { SlBag } from 'react-icons/Sl';


function AppNavbar() {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.setItem("token", "")
        navigate("/login")
    }

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navWords">
                            {/* <CardGroup>
                                <Card>
                                    <Card.Body>
                                        <Card.Title> <Nav.Link as={Link} to="/login"> LogIn <BiLogIn /> </Nav.Link></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title> <Nav.Link as={Link} to="/purchases">Purchases <SlBag /></Nav.Link></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title> <Nav.Link onClick={logOut}> LogOut <BiLogOut /> </Nav.Link></Card.Title>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title> <Nav.Link onClick={handleShow}>  <AiOutlineShoppingCart /> </Nav.Link></Card.Title>
                                    </Card.Body>
                                </Card>
                            
                            </CardGroup> */}
                            {/* <Nav.Link as={Link} to="/login">Login</Nav.Link> */}
                            <Nav.Link as={Link} to="/login"> LogIn <BiLogIn /> </Nav.Link>
                            {/* <Nav.Link onClick={logOut}>Log Out </Nav.Link> */}
                            <Nav.Link onClick={logOut}> LogOut <BiLogOut /> </Nav.Link>
                            <Nav.Link as={Link} to="/purchases">Purchases <SlBag /></Nav.Link>
                            {/* <Nav.Link as={Link} to="/products/:id">Products</Nav.Link> */}
                            {/* <Nav.Link onClick={handleShow}> <i className='bx bx-cart'></i> </Nav.Link> */}
                            <Nav.Link onClick={handleShow}>  <AiOutlineShoppingCart /> </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Cart show={show} handleClose={handleClose} />

        </div>
    );
}

export default AppNavbar;