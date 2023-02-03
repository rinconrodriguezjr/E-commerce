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
              placeholder="Escribe el producto que necesitas o estas buscando"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={productsSearch}
              onChange={e => setProductsSearch(e.target.value)}
            />
            <Button onClick={() => dispatch(productsFilterHeadLineThunk(productsSearch))} style={{backgroundColor:"var(--primary)", color: "white"}} type="submit" variant="outline-secondary" id="button-addon2">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVFJREFUSEvVleExBEEQRt9FQAoiQATIgAgQASJABIgAESACZEAEyIAIqKd6qub2Zmen7N4P/eu2dqdf99dfz81YcsyWnJ8+wCpwBOwCG1HEC3APXAGfrYWVAAfABSCkFCY/AW5aIF2Aya/j4ANwCTzF8zZwBmzF8150VOXkACt+i8oPKxUKOQ2Z1obkygHpoJWrfS3syk7Oo6veb3OAQ1wHdjJZ+g4q1yPgmc1aJTngOz5stW7T92MBXxW3/db7V4mc0R3wDChX0wzSkF0mLdgyZPdBKzcBtOk7sBLO0CGlSIV8xJZXt7o70NS6ibWiyZTBUAr9nyQZtGh3Bqlat9m27aQUDtb3wrSpv2/7NKpddsexcO6G8RpXgwmVJe2N77yX3P6FaPV86Wx+b/VCxgBS0v2MvtDJWMAgZApAFzJ3E08FSBCtPfdHNCWg6NT/D/gBeOVFGZeTouUAAAAASUVORK5CYII="/>
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
                        {product.price} 
                        <img style={{border: "1px solid var(--primary)", borderRadius: 4}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAR5JREFUSEvN1cExBUEUheHvRYAMiAARIAIywJYFIkAEbNgiAmRABIgAESAC6qqeV2PevOmuGqOczSz6zv379JnbMzKwRgP396eAz+TmHZc4+A13dQcVoOq7hru+kLYj2scJbrExBGAWb6nxAl76QKaFHBls9mj8iOV4fxpgCQ89AK+Y7wLEWuxiEdvpqyrhVc6PcZQDbOEigb7tZhTZPSOe4+xygxYzMZPOMxx1qdrQPVarwhzgFHu4QjToUszMSvNIc4AIKmyH5hCO2lTVfaRwx3U5QDS7wXq6OsJRmyLQwzanJYCY5utcwml94nopAdQ/2S7OE2J+fqgUUGhgsqwUcIYdnGO30aZrrfiHU7/Km5vqWisGDO5g8Az+L+ALYZk0GaU3ojwAAAAASUVORK5CYII="/>
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