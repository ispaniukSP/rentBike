import React from 'react'
import * as Styled from './style'


export default function InfoBike(props) {
    const {price, bikes} = props
    let userprice = price % 100 === 0 ? price/100 + '.00' : price/100;
    return (
        <Styled.InfoBike>
            <Styled.InfoTitle>Price: {userprice} HRN for hour</Styled.InfoTitle>
            <Styled.InfoTitle>Count of bikes: {bikes} </Styled.InfoTitle>
        </Styled.InfoBike>
    )
}
