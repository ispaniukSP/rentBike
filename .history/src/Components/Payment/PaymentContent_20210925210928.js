import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripeKey = loadStripe('pk_test_51Jcol7DphoWPHqYkK2gqxuZADcnjVy3ElzfHuupRhyWMzGjPVotz3uRYnJpSS9e0vUiXjhVT5Iz9WwnhUpNrU4Kh00UZZYeDZi')
export default function PaymentContent() {
    return (
        <>
            <Elements stripe={loadStripe}>
                <PaymentForm />
            </Elements>
        </>
    )
}
