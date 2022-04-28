import {useState} from "react"
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {Fragment} from 'react';

import {Button} from 'react-bootstrap'

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)


    const paymentHandler = async(e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessingPayment(true)
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: 10000})
        }).then(res => res.json());
       
        const {paymentIntent: {client_secret}} = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Jon-Michael Narvaez'
                }
            }
        })

        setIsProcessingPayment(false)

        if(paymentResult.error) {
            alert(paymentResult.error)
        } else {
            if(paymentResult.paymentIntent.status === 'success') {
                alert('Payment Successful');
            }
        }
    }

    return (
        <Fragment>
            <form onSubmit={paymentHandler}>
                <div className="p-3">
                    <CardElement/>
                </div>
                <div className="d-grid gap-2 p-2">
                    <Button disabled={isProcessingPayment} type="submit" size="sm" variant="success">Pay Now</Button>
                </div>
            </form>
        </Fragment>
    )
};

export default PaymentForm;