import React from 'react'
import { Elements } from '@stripe/react-stripe-js'

export default function PaymentContent() {
    return (
        <>
            <Elements>
                <PaymentForm />
            </Elements>

        </>
    )
}
