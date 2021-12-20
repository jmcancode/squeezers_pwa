import React, {Fragment, useContext, useEffect} from "react";
import ShopContext from "../context/ShopContext";

import MainNavigation from "../components/MainNavigation";
import "./Cart.css";
import Footer from "../components/Footer/Footer";
import {NavLink} from "react-router-dom";
import {BiTrash} from 'react-icons/bi'

function CartPage(props) {
    const context = useContext(ShopContext);

    useEffect(() => {
        console.log(context);
    }, [context]);

    return (
        <React.Fragment>
            <MainNavigation
                cartItemNumber={context
                .cart
                .reduce((count, curItem) => {
                    return count + curItem.quantity;
                }, 0)}/>
            <main className="cart">

                {context.cart.length <= 0 && <Fragment>
                    <div
                        style={{
                        height: "100%",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>
                        <p>Your cart is empty 🙁</p>
                        <button className="btn btn-dark">
                            <NavLink
                                style={{
                                textDecoration: "none",
                                color: "#fff"
                            }}
                                to="/welcome">
                                Explore our menu
                            </NavLink>
                        </button>
                    </div>
                </Fragment>
}
                <div style={{padding: '20px',}}>
                    <div>
                        {context
                            .cart
                            .map((cartItem) => (
                                <li key={cartItem.id}>
                                    <div>
                                        <strong>{cartItem.title}</strong>
                                         - ${cartItem.price}
                                        ( {cartItem.quantity})
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-danger"
                                            onClick={context
                                            .removeProductFromCart
                                            .bind(this, cartItem.id)}>
                                            <BiTrash size={25} color="#fff"/>
                                        </button>
                                    </div>

                                </li>
                            ))}
                    </div>
                </div>

            </main>
            <Footer/>
        </React.Fragment>
    );
}

export default CartPage;
