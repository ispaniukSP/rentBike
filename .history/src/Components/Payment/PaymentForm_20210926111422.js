import React from 'react'
import * as Styled from './style'
import { CardElement, useStripe,useElements } from '@stripe/react-stripe-js'
import axios from 'axios'

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

export const PaymentForm = (({success = () => {}}) => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = 4;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card: elements.getElement(CardElement),
        })
        
        if(!error){
            const { id } = paymentMethod;
            try{
                const { data } = await axios.post('http://localhost:3002/history', {
                    id,
                    amount,
                }) 
                console.log(data)
                success()
            }catch({message, response}){
                console.log(response.data)
            }
        }
    }

    return(
        <Styled.PaymentForm onSubmit={handleSubmit}>
            <CardElement options={PaymentConfig} />
            <button>Pay</button>
        </Styled.PaymentForm>
    )

})

export default PaymentForm