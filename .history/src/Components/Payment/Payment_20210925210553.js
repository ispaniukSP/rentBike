import React from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import PaymentContent from './PaymentContent'
import * as Styled from './style'

export default function Payment() {
    return (
        <Styled.StyledPayment>
            <MainLayout />
            <PaymentContent />
        </Styled.StyledPayment>
    )
}
