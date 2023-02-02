import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Carousel, Col, ListGroup, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { filterProductsCategoryThunk } from '../store/slices/products.slice';
import { addPurchasesthunk } from '../store/slices/cart.slice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Products = () => {

    const { id } = useParams();
    const [products, setProducts] = useState({});

    const productsCategory = useSelector(state => state.products);

    // console.log(products);
    // console.log(id);

    // const productsFound = productsCategory.find((products) => products.id !== Number(id))
    // const relatedProduct = productsCategory.filter(product => 
    //     product.categoryId === productsFound.categoryId && 
    //     product.ido !== productsFound.id
    //     )


    const productsFiltered = productsCategory.filter((products) => products.id !== Number(id));


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}/`)
            .then(res => {
                setProducts(res.data)
                dispatch(filterProductsCategoryThunk(res.data.categoryId))
            })
    }, [id])

    // console.log(products);

    const [quantity, setQuantity] = useState(1);

    const addToCart = () => {
        const purchase = {
            productId: products.id,
            quantity: quantity,
        }
        dispatch(addPurchasesthunk(purchase));
    }


    const up = () => {
        // if (quantity  - 1) {
        setQuantity(quantity + 1);
        // }
    }

    const down = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div>
            <div>
                <Link to={`/`}>Home</Link> - <b>{products.title}</b>
            </div> <br />

            <Row>
                {/* PRODUCTO SELECCIONADO */}
                <Col lg={7}>
                    <Container className='my-5'>
                        {/* CARRUSEL */}
                        <Carousel>
                            <Carousel.Item>
                                <Link to={`/products/${products.id}`}>
                                    <img
                                        className="d-block w-100"
                                        src={products.images?.[0].url}
                                        alt="First slide"
                                        style={{ height: 350, minHeight: 300, objectFit: "contain" }}
                                    />
                                </Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to={`/products/${products.id}`}>
                                    <img
                                        className="d-block w-100"
                                        src={products.images?.[1].url}
                                        alt="First slide"
                                        style={{ height: 350, minHeight: 300, objectFit: "contain" }}
                                    />
                                </Link>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Link to={`/products/${products.id}`}>
                                    <img
                                        className="d-block w-100"
                                        src={products.images?.[2].url}
                                        alt="First slide"
                                        style={{ height: 350, minHeight: 300, objectFit: "contain" }}
                                    />
                                </Link>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
                </Col>
                {/* DETALLES PRODUCTO SELECCIONADO */}
                <Col lg={5}>
                    <ListGroup variant="flush">
                        <h5 style={{ color: "grey" }}>{products.brand}</h5> <br />
                        <h3> {"  "} <b> {" "} {products.title}</b> </h3> <br />
                        <div> {products.description}</div> <br />

                        {/* <article style={{ color: "grey" }}>Price</article> <br /> */}

                        <div className='inputAddCart'>
                            <div className="priceCart">
                                <b style={{ color: "ligthGray" }}>Price</b> <br /> ${products.price}
                            </div>
                            <div className='quantityCart'>
                                <button onClick={down}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT5JREFUSEvtlOExBEEQhb+LgAwQASJABMjgMkAEiAAhiAARIAInAmRABuq76tm6uhuzvar2hyr9Z2t3e97rfv16Jowck5Hx+SfoVXhRohmw3XsilyDWrqljEbwCO8sEfniJAg+Ap1yxXdY+8BhvVm8XKy66AM6B92jxM0myHsVtApeAOPOo2bTM4h44ThKYewg8A3bSRY3AKiRZCwIPt+IIuAO+Qne7bxL48xS4ApRoK541EqV5A3yeAdfLSa1Ndsh7MWyHXouS8wDYyUq0CKzKdpWqVl3pUmmUtWqIvruo6OthrVf0FVBLW4RG+HFOfQS2XBzSbWeYwK2/BaYtB2QIrFLwjfC4eO7KR7imuSsZAgEXt7QUnNr2LIGgWvAk0G/Cyr17OIRAqcr9NL/IMjGEIIM3aA9+BThkk/8GwTcJ2TYZqCLviwAAAABJRU5ErkJggg=="/></button>
                                <article>{quantity}</article>
                                <button onClick={up}> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAS9JREFUSEvtlMFRAkEQRR8RaAZqBGoESgRKJGgESgRqJGAEagRKBGgGmoH1rJ6tBWZ3hiooD9qXPcxM//6vu3fAjmOw4/z8LYF94CmQDoHPGrybILoHxpH0AbjapsB5q/qUVxfPJZEaB6J5BQ6BSSS8Ad6B0xKqGoEZcAHMgZMQeAOOAc9GfS5KApfAFPiK5FZt6EaRvRBQKBt9AqJZAH6vAZvcDpt8F4iOulD1CdjAM+AFsMm5SHf82vS16BJI1YlGHF0zrzuxiSrnMvurMKFT42Mb2Mk3yk19sginKvXp5zjnIE3II+DjmkiT5ltFmlgVuAWc8Y+YmqrfQbg1+UHsinnWHDjjojGqtnTFWnvbdaHgEqKEpgZJ6U6Dqo1omwLN1pc2uVRp8fxf4PcRfQPvdjcZYKj40wAAAABJRU5ErkJggg=="/> </button>
                            </div>


                            {/* <button onChange={e => setQuantity(e.target.value)}> + </button>
                            <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
                            <button onChange={e => setQuantity(e.target.value)}> - </button>
                            <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} /> */}
                        </div>

                        <br />

                        <Button onClick={addToCart} style={{ backgroundColor: "#f85555", color: "white", border: "none", height: 50, borderRadius: 10 }}> Add to cart</Button>

                        {/* {
                        productsFiltered.map(product => (
                        <ListGroup.Item>
                            <Link to={`/products/${product.id}`}>
                            <h6>{product.title}</h6> 
                            <img src={product.images?.[0].url} alt="" className='img-fluid'/>

                            </Link> 
                        </ListGroup.Item>
                        ))
                    } */}
                    </ListGroup>
                </Col>
            </Row>
            <h4 style={{ color: "#f85555" }}>Discover similar items</h4> <br />
            <CardGroup>
                {productsFiltered.map(product => (
                    <Card key={product.id} className='cardsGroup'>
                        <Link to={`/products/${product.id}`}>
                            <Container className="my-2">
                                <Card.Img variant="top" src={product.images?.[0].url} style={{ height: 150, minHeight: 150, objectFit: "contain" }} alt="" className='img-fluid' />
                                <hr />
                                <Card.Body >
                                    <Card.Title >{product.brand}</Card.Title>
                                    <Card.Text >
                                        {product.title}
                                    </Card.Text>
                                    <Card.Text style={{ color: "grey"}}>
                                        <b>Price:</b> {" "} ${product.price}
                                    </Card.Text>
                                </Card.Body>
                                {/* <Button variant="primary"> <AiOutlineShoppingCart /> </Button> */}
                            </Container>
                        </Link>
                    </Card>
                ))
                }
            </CardGroup>
            {/* <div>
                <h4 style={{ color: "#f85555" }}>Discover similar items</h4> <br />
                {productsFiltered.map(product => (
                    <Card style={{ width: '18rem' }} key={product.id} className='cardsGroup'>
                        <Link to={`/products/${product.id}`}>
                            <Container className="my-3">
                                <Card.Img variant="top" src={product.images?.[0].url} style={{ height: 150, minHeight: 150, objectFit: "contain" }} alt="" className='img-fluid' />
                                <Card.Body style={{ textDecoration: "none" }}>
                                    <Card.Title style={{ color: "grey", textDecoration: "none" }}>{product.brand}</Card.Title>
                                    <Card.Text style={{ textDecoration: "none" }}>
                                        {product.title}
                                    </Card.Text> <br />
                                    <Card.Text style={{ color: "grey", textDecoration: "none" }}>
                                        Price <br />
                                        ${product.price}
                                    </Card.Text>

                                    <Button variant="primary"> <AiOutlineShoppingCart /> </Button>
                                </Card.Body>
                            </Container>
                        </Link>
                    </Card>))}
            </div>
            <div>
                <Row xs={1} md={2} className="g-4">
                        {productsFiltered.map(product => (
                        <Col key={product.id}>
                            <Card>
                            <Link to={`/products/${product.id}`}>
                            <Container className="my-3">
                                <Card.Img variant="top" src={product.images?.[0].url} style={{ height: 150, minHeight: 150, objectFit: "contain" }} alt="" className='img-fluid' />
                                <Card.Body>
                                    <Card.Title>{product.brand}</Card.Title>
                                    <Card.Text>
                                    {product.title}
                                    </Card.Text>
                                    <Card.Text>
                                    Price <br />
                                        ${product.price}
                                    </Card.Text>
                                </Card.Body>
                                </Container>  
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div> */}
            {/* <Row>
                <Col lg={8}> */}
            {/* <ListGroup variant="flush"> */}
            {/* {
                productsFiltered.map(product => (
                    <ListGroup.Item>
                        <Link to={`/products/${product.id}`}>
                            <img src={product.images?.[0].url} alt="" className='img-fluid' />
                            <br />
                            <h6 style={{ color: "grey" }}>{products.brand}</h6>
                            <h6>{product.title}</h6>
                            <div style={{ color: "grey" }}>Price</div> <br />
                            
                                <div> ${products.price}</div>
                           
                        </Link>
                    </ListGroup.Item>
                ))
            } */}



            {/* </ListGroup> */}
            {/* </Col>
            </Row> */}
            {/* <img src={products.images?.[0].url} style={{widht: 300, height: 300, objectFit: "contain"}} alt="" /> */}


        </div>
    );
};

export default Products;