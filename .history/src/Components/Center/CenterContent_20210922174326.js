import React from 'react'
import { Flex } from '../Flex/Flex'
import * as Styled from './style'
export default function CenterContent(props) {
    let price = props?.info?.price;
    price = price % 100 === 0 ? price/100 + '.00' : price/100;
    return (
        <Styled.StyledWrapper>
            <Flex width="100%" height="70%" direction="column" align="center" justify="space-between">
                <Styled.CenterTitle>
                        {props?.info?.address}
                </Styled.CenterTitle>
                
                <Styled.CenterText>
                        {props?.info?.details}
                </Styled.CenterText>

                <Styled.PriceComponents direction="column">
                    <Styled.PriceComponent><Styled.PriceTitle>Count bike:</Styled.PriceTitle> {props?.info?.countBike}</Styled.PriceComponent>
                    <Styled.PriceComponent><Styled.PriceTitle>Price: </Styled.PriceTitle> {price} HRN for hour</Styled.PriceComponent>
                </Styled.PriceComponents>
            </Flex>

            <Flex width="100%" height="20%" align="center" justify="space-around" >
                    <Styled.CenterButton to={`/app/city/${props?.info?.cityId}`}>Back</Styled.CenterButton>
                    <Styled.CenterButton to={`/center/${props?.info?.id}/payment`}>Payment</Styled.CenterButton>
            </Flex>
        </Styled.StyledWrapper>
    )
}
