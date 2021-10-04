import React, { useContext } from 'react'
import * as Styled from './style'
import { CardElement, useStripe,useElements } from '@stripe/react-stripe-js'
import axios from 'axios'

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
            <CardElement />
        </Styled.PaymentForm>
    )

})

export default PaymentForm