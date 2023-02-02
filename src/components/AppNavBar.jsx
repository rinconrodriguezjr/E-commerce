import { useState } from 'react';
import { Card, CardGroup, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
// import { FaBeer } from 'react-icons/fa';
// import { AiOutlineShoppingCart } from 'react-icons/Ai';
// import { BiLogIn } from 'react-icons/Bi';
// import { BiLogOut } from 'react-icons/Bi';
// import { SlBag } from 'react-icons/Sl';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                            <Nav.Link as={Link} to="/login"> LogIn <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMdJREFUSEvdldENwjAMRF8nYARgE9gEJoNRGAE2gA1gAtCh+KOh0AtKpKr5zfnO9tlJR+PTNeZnMgIb4ACsjIqvwB44CetWoKClQR4Q4dclAs8U6STUwzoB4p6fwBHYffHkrxblXCI5A1vgnl1WExCvyCUisTijAgEomMr33KttHwMxNEXNBZzMI4kHoC0vapErcEnkVUzOF636mM5vk3/5NLoHQ8EycuG4nzC3+Dvc11SjKGOdP0HkeqeKPpyC5PtQt4LpCrwAp0AyGfsjkzgAAAAASUVORK5CYII="/> </Nav.Link>
                            {/* <Nav.Link onClick={logOut}>Log Out </Nav.Link> */}
                            <Nav.Link onClick={logOut}> LogOut <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL5JREFUSEvdldENwkAMQ18ngA0KE8AIjEIng03aUWADNgBZ6kkHKpUjNVLhvhM7cZxLQ/JrkvFZDcEJuAA7o+Mb0AGDYt0OlNQa4CVE8fsIwXPMdAp6i3UShP2bBFfgPEqzaAdboAeOARPU85+dgUAFLpKICSwCySGvR9+nUb52kE6gyiWRNnCTIVGRRvqL5JAx5Fr/NJtODXnRPfhPgkflLGdP7uV2uL+pDo6G7twEgWunQgfHqXoyxu1gvQQvt6woGUCNtO0AAAAASUVORK5CYII="/> </Nav.Link>
                            <Nav.Link as={Link} to="/purchases">Purchases <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAORJREFUSEvtld0RATEUhb+twKiATtCBDujAqAAdKEEHlEAlRgc6YI5JdshKbnZNxsvmZTP5Od/Nyd3cisKtKqxPLmAOrICpC+gM7AB9ky0HcAAWERVBtimCBVDkRyewBk6uvwQ2rj9LncQCyIIJIPF9EKkiF+TyZl3jMBbg4XYMgXuwewxc3VhUJxcQW+cDyAZ4S6zkSM1LQ/fyaiHZR/QL4EM3BvDjlgXhfGP93wFtrWp9gh4QTVPrB4xZ19+BmVSmRXoxB6ZMesEN0Ev79S1SSVQFG3WESFzFqC6lXbMlm18c8ATvMDIZGBnHqwAAAABJRU5ErkJggg=="/> </Nav.Link>
                            {/* <Nav.Link as={Link} to="/products/:id">Products</Nav.Link> */}
                            {/* <Nav.Link onClick={handleShow}> <i className='bx bx-cart'></i> </Nav.Link> */}
                            <Nav.Link onClick={handleShow}>  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAR5JREFUSEvN1cExBUEUheHvRYAMiAARIAIywJYFIkAEbNgiAmRABIgAESAC6qqeV2PevOmuGqOczSz6zv379JnbMzKwRgP396eAz+TmHZc4+A13dQcVoOq7hru+kLYj2scJbrExBGAWb6nxAl76QKaFHBls9mj8iOV4fxpgCQ89AK+Y7wLEWuxiEdvpqyrhVc6PcZQDbOEigb7tZhTZPSOe4+xygxYzMZPOMxx1qdrQPVarwhzgFHu4QjToUszMSvNIc4AIKmyH5hCO2lTVfaRwx3U5QDS7wXq6OsJRmyLQwzanJYCY5utcwml94nopAdQ/2S7OE2J+fqgUUGhgsqwUcIYdnGO30aZrrfiHU7/Km5vqWisGDO5g8Az+L+ALYZk0GaU3ojwAAAAASUVORK5CYII="/>  </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Cart show={show} handleClose={handleClose} />

        </div>
    );
}

export default AppNavbar;