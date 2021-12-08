import React from 'react'
import * as Styled from './style'
import { CardElement, useStripe,useElements } from '@stripe/react-stripe-js'

const PaymentConfig =  {
    style: {
        base: {
        color: '#111222',
        fontSize: '20px',
        '::placeholder': {
                color: '#111222d1',
            },
        },
        invalid: {
            color: '#9e2146',
        },
    },
    hidePostalCode: true,
}

const stripePaymentMethodHandler = (result) => {
    if (result.error) {
      console.log(result.error)
    } else {
      fetch('http://localhost:3002/history', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount
        })
      }).then(function(result) {
        result.json().then(function(json) {
        })
      });
    }
}

const amount = 300;
  

export const PaymentForm = (({success = () => {}}) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        
        const result = await stripe.createPaymentMethod({
            type:'card',
            card: elements.getElement(CardElement),
            billing_details: {
                name:'John',
            },
        });
        stripePaymentMethodHandler(result);
    }

    return(
        <Styled.PaymentForm onSubmit={handleSubmit}>
            <CardElement options={PaymentConfig} />
            <Styled.ButtonPayment>Pay</Styled.ButtonPayment>
        </Styled.PaymentForm>
    )

})

export default PaymentForm