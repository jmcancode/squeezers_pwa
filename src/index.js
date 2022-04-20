import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import {BrowserRouter} from 'react-router-dom';
// stripe
import {Elements} from '@stripe/react-stripe-js';
import {stripePromise} from './utils/stripe.utils'

ReactDOM.render(

    <BrowserRouter>
    <Elements stripe={stripePromise}>
        <App/>
    </Elements>
</BrowserRouter>, document.getElementById('root'));

serviceWorkerRegistration.register();
