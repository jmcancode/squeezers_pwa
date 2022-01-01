import React from "react";
import ShopContext from "../context/ShopContext";
import MainNavigation from "../components/MainNavigation";
import "./Products.scss";
import {Card} from "react-bootstrap";

import {useNavigate} from 'react-router-dom'

function ProductsPage(props) {

    let navigate = useNavigate();

    const onClick = (products) => {
    navigate(`:${products.id}`)
}
    return (
        <ShopContext.Consumer>
            {context => (
                <React.Fragment>
                    <MainNavigation
                        cartItemNumber={context
                        .cart
                        .reduce((count, curItem) => {
                            return count + curItem.quantity;
                        }, 0)}/>
                    <main>
                        <div className="products">
                            {context
                                .products
                                .map(product => (
                                    <li key={product.id}>
                                        <Card
                                            key={product.id}
                                            className="text-center border-0"
                                            style={{
                                            padding: '55px', backgroundColor: "transparent"
                                        }}>
                                            <Card.Img src={product.imgPath} alt={product.imgPath} variant='top' className="cardImg"/>
                                            <Card.Body className="cardBody">
                                                <p style={{fontSize: '20px', color: "#1c2450"}}>{product.title}</p>
                                                <small style={{textTransform: "lowercase", color: "#1c2450"}}>{product.bio}</small>
                                            </Card.Body>

                                            <Card.Footer className="cardFooter">
                                                <div className="d-grid gap-2 p-2">
                                                    <button
                                                    onClick={onClick}
                                                    className="btn  rounded-pill moreInfo">more info</button>
                                                </div>
                                                <div className="d-grid gap-2 p-2">
                                                    <button
                                                        className="btn btn-dark rounded-pill"
                                                        onClick={context
                                                        .addProductToCart
                                                        .bind(this, product)}>
                                                        add to cart
                                                    </button>
                                                </div>
                                            </Card.Footer>
                                        </Card>

                                    </li>
                                ))}
                        </div>
                    </main>
                </React.Fragment>
            )}
        </ShopContext.Consumer>
    );
}

export default ProductsPage;
