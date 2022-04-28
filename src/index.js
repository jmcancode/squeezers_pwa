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
// redux
import {store, persistor} from "./Store/store";
import {Provider} from "react-redux"
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <Elements stripe={stripePromise}>
                <App/>
            </Elements>
        </BrowserRouter>
    </PersistGate>
</Provider>, document.getElementById('root'));

serviceWorkerRegistration.register();
