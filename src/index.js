import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// routing
import {BrowserRouter} from 'react-router-dom';
// stripe
import {Elements} from '@stripe/react-stripe-js';
import {stripePromise} from './utils/stripe.utils'
// custom context
import {UserProvider} from "./context/user.context";
import {ProductsProvider} from "./context/products.context";
import {CartProvider} from "./context/cart.context";

ReactDOM.render(

    <BrowserRouter>
    <Elements stripe={stripePromise}>
        <UserProvider>
            <ProductsProvider>
                <CartProvider>
                    <App/>
                </CartProvider>
            </ProductsProvider>
        </UserProvider>
    </Elements>
</BrowserRouter>, document.getElementById('root'));

serviceWorkerRegistration.register();
