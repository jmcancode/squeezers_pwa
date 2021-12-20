import React from "react";
import ShopContext from "../context/ShopContext";
import MainNavigation from "../components/MainNavigation";
import "./Products.css";
import {Card} from "react-bootstrap";
import Footer from "../components/Footer/Footer";

function ProductsPage(props) {
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
                                    <li>
                                        <Card
                                            key={product.id}
                                            className="card"
                                            style={{
                                            padding: '15px'
                                        }}>
                                            <Card.Img src={product.imgPath} alt={product.imgPath} variant='top'/>
                                            <Card.Body>
                                                <h5>{product.title}</h5>
                                                <small>{product.bio}</small>
                                            </Card.Body>

                                            <Card.Footer>
                                                <div className="d-grid gap-2 p-2">
                                                    <button className="btn btn-dark">more info</button>
                                                </div>
                                                <div className="d-grid gap-2 p-2">
                                                    <button
                                                        className="btn btn-dark"
                                                        onClick={context
                                                        .addProductToCart
                                                        .bind(this, product)}>
                                                        Add to Cart ${product.price}
                                                    </button>
                                                </div>
                                            </Card.Footer>
                                        </Card>

                                    </li>
                                ))}
                        </div>

                    </main>
<Footer/>
                </React.Fragment>
            )}
        </ShopContext.Consumer>
    );
}

export default ProductsPage;
