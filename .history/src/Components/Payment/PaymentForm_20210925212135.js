import React, { useContext } from 'react'
import * as Styled from './style'
import { CardElement, useStripe,useElements } from '@stripe/react-stripe-js'
import axios from 'axios'

const PaymentConfig =  elements.create('card', {
    style: {
        base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: '500',
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
            color: '#fce883',
        },
        '::placeholder': {
            color: '#87BBFD',
        },
        },
        invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE',
        },
    },
});

export const PaymentForm = (({success = () => {}}) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card: elements.getElement(CardElement),
        })
        
        if(!error){
            const { id } = paymentMethod;
            try{
                const { data } = await axios.post('', {
                    id
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
        </Styled.PaymentForm>
    )

})

export default PaymentForm