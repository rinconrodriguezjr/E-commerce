import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, Container, Form, InputGroup, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { filterProductsCategoryThunk, getProductsThunk, productsFilterHeadLineThunk, productsSlice } from "../store/slices/products.slice";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home = () => {

  const [dropdown, setdropdown] = useState(false);

  const openCloseDrop = () => {
    setdropdown(!dropdown)
  }

  const [categories, setCategories] = useState([]);

  const [productsSearch, setProductsSearch] = useState("");

  const dispatch = useDispatch();

  const productsList = useSelector(state => state.products);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductsThunk());

    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/categories`)
      .then(res => setCategories(res.data))
  }, [])

  // console.log(categories);

  const submit = () => {
    alert("")
  }


  return (
    <div>
      <Row>
        {/* DROPDOWN */}
        <Col lg={3}>
          <Dropdown isOpen={dropdown} toggle={openCloseDrop}>
            <DropdownToggle className="toggleCategories" >
              {/* <DropdownToggle className="toggleCategories" > caret  */}
              <h4> <b>Categories</b> </h4>
            </DropdownToggle>

            <DropdownMenu>
              {
                categories.map(category => (
                  <ListGroup.Item key={category.id}
                    onClick={() => dispatch(filterProductsCategoryThunk(category.id))}
                    style={{ cursor: "pointer" }}
                    className="navbutton"
                  >
                    <DropdownItem className="categories">
                      {category.name}
                    </DropdownItem>
                  </ListGroup.Item>
                ))
              }
            </DropdownMenu>
          </Dropdown>
        </Col>


        {/* CATEGORIAS */}
        {/* <Col lg={3}>
          <h4 style={{color: " #f85555"}}>Category</h4>
          <ListGroup> 

            {
              categories.map(category => (
                <ListGroup.Item key={category.id}
                  onClick={() => dispatch(filterProductsCategoryThunk(category.id))}
                  style={{ cursor: "pointer" }}
                  className="navbutton"
                >
                  {category.name}
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </Col> */}
        <Col lg={9}>
          {/* COLUMNAS */}
          <h1 className="hometitle">Home</h1>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={productsSearch}
              onChange={e => setProductsSearch(e.target.value)}
            />
            <Button onClick={() => dispatch(productsFilterHeadLineThunk(productsSearch))} type="submit" variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
          <Row xs={1} md={2} lg={3} className="g-4">
            {productsList.map((product) => (
              <Col key={product.id}>
                <Card className="card">
                  <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                    <Container className="my-5">
                      <Card.Img variant="top" src={product.images?.[0].url} style={{ height: 50, objectFit: "contain" }} />
                    </Container>
                    {/* <Container className='my-5'>
                      <Carousel>
                        <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={product.images?.[0].url}
                              alt="First slide"
                              style={{ height: 100, objectFit: "contain" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={product.images?.[1].url}
                              alt="First slide"
                              style={{ height: 100, objectFit: "contain" }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={product.images?.[2].url}
                              alt="First slide"
                              style={{ height: 100, objectFit: "contain" }}
                            />
                        </Carousel.Item>
                      </Carousel>
                    </Container> */}
                    <Card.Body>
                      {product.brand}
                      <Card.Title className="cardTitle" style={{ color: "black" }}>{product.title}</Card.Title>
                      Price:
                      <Card.Text>
                        {/* <b>Description:</b> {product.description} <br /> <br /> */}
                        {product.price} <Button variant="primary" className="buttonhomecart"> <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> </Button>
                        
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;