import {useContext, Fragment} from 'react';

import {CartContext} from '../../context/cart.context';

import CheckoutItem from '../../components/checkout/checkout-item.component';

import './checkout.styles.scss';
import PaymentForm from '../payment-form/payment-form';

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);

    return (
        <Fragment>
            <div className='checkout-container'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                {cartItems.map((cartItem) => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))}
                <div className='total'>TOTAL: ${cartTotal}</div>
                <div style={{width: '100%', padding: '10px 15px'}}>
                <PaymentForm/>
            </div>
            </div>
           
        </Fragment>
    );
};

export default Checkout;